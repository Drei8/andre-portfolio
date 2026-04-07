import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { chatSystemPrompt } from "@/lib/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Fallback sequence: highest RPD first, best quality last
const MODEL_FALLBACK = [
  "gemini-3.1-flash-lite-preview", // 500 RPD, 15 RPM — primary
  "gemini-3-flash-preview",         // 20 RPD,  5 RPM — fallback 1
  "gemini-2.5-flash-lite",          // 20 RPD, 10 RPM — fallback 2
  "gemini-2.5-flash",               // 20 RPD,  5 RPM — fallback 3 (best quality)
];

// In-memory response cache (resets on cold start, fine for a portfolio chatbot)
const cache = new Map<string, { text: string; ts: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function getCacheKey(messages: { role: string; content: string }[]): string {
  // Key on the last user message only — portfolio FAQs repeat often
  return messages[messages.length - 1].content.trim().toLowerCase();
}

function isQuotaError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  return msg.includes("429") || msg.includes("RESOURCE_EXHAUSTED") || msg.includes("quota");
}

async function generateWithFallback(
  messages: { role: string; content: string }[]
): Promise<string> {
  const history = messages.slice(0, -1).map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));
  const firstUserIndex = history.findIndex((m) => m.role === "user");
  const safeHistory = firstUserIndex >= 0 ? history.slice(firstUserIndex) : [];
  const lastMessage = messages[messages.length - 1].content;

  for (const modelName of MODEL_FALLBACK) {
    // Exponential backoff: 3 attempts per model (1s, 2s, 4s)
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: chatSystemPrompt,
        });
        const chat = model.startChat({ history: safeHistory });
        const result = await chat.sendMessage(lastMessage);
        return result.response.text();
      } catch (error) {
        const isQuota = isQuotaError(error);

        if (isQuota && attempt < 2) {
          // Transient rate limit — wait and retry same model
          await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 1000));
          continue;
        }

        if (isQuota) {
          // Model quota exhausted — move to next model
          console.warn(`[chat] ${modelName} quota exhausted, trying next model`);
          break;
        }

        // Non-quota error — don't retry
        throw error;
      }
    }
  }

  throw new Error("All models exhausted");
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const { messages } = await req.json();
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    // Check cache
    const cacheKey = getCacheKey(messages);
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
      return NextResponse.json({ message: cached.text, cached: true });
    }

    const text = await generateWithFallback(messages);

    // Store in cache
    cache.set(cacheKey, { text, ts: Date.now() });

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("[chat] All models failed:", error);
    return NextResponse.json(
      { error: "Andre's AI is resting right now — try again in a moment!" },
      { status: 503 }
    );
  }
}
