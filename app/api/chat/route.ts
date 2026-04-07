import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";
import { chatSystemPrompt } from "@/lib/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });

type ModelEntry =
  | { provider: "gemini"; model: string }
  | { provider: "groq"; model: string };

// Fallback sequence: best quality first, safety net last
const MODEL_FALLBACK: ModelEntry[] = [
  { provider: "gemini", model: "gemini-2.5-flash" },               // best quality,   20 RPD
  { provider: "groq",   model: "llama-3.3-70b-versatile" },        // excellent,  ~1440 RPD
  { provider: "gemini", model: "gemini-3-flash-preview" },          // good,           20 RPD
  { provider: "gemini", model: "gemini-2.5-flash-lite" },           // decent,         20 RPD
  { provider: "gemini", model: "gemini-3.1-flash-lite-preview" },   // safety net,    500 RPD
];

// In-memory response cache (resets on cold start, fine for a portfolio chatbot)
const cache = new Map<string, { text: string; ts: number }>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function getCacheKey(messages: { role: string; content: string }[]): string {
  return messages[messages.length - 1].content.trim().toLowerCase();
}

function isFallbackError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  return (
    msg.includes("429") ||
    msg.includes("503") ||
    msg.includes("rate_limit") ||
    msg.includes("RESOURCE_EXHAUSTED") ||
    msg.includes("quota") ||
    msg.includes("high demand") ||
    msg.includes("Service Unavailable") ||
    msg.includes("overloaded")
  );
}

async function callGemini(
  modelName: string,
  messages: { role: string; content: string }[]
): Promise<string> {
  const history = messages.slice(0, -1).map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.content }],
  }));
  const firstUserIndex = history.findIndex((m) => m.role === "user");
  const safeHistory = firstUserIndex >= 0 ? history.slice(firstUserIndex) : [];

  const model = genAI.getGenerativeModel({
    model: modelName,
    systemInstruction: chatSystemPrompt,
  });
  const chat = model.startChat({ history: safeHistory });
  const result = await chat.sendMessage(messages[messages.length - 1].content);
  return result.response.text();
}

async function callGroq(
  modelName: string,
  messages: { role: string; content: string }[]
): Promise<string> {
  const groqMessages = [
    { role: "system" as const, content: chatSystemPrompt },
    ...messages.map((m) => ({
      role: m.role === "user" ? ("user" as const) : ("assistant" as const),
      content: m.content,
    })),
  ];
  const completion = await groqClient.chat.completions.create({
    model: modelName,
    messages: groqMessages,
    max_tokens: 1024,
  });
  return completion.choices[0]?.message?.content ?? "";
}

async function generateWithFallback(
  messages: { role: string; content: string }[]
): Promise<string> {
  for (const entry of MODEL_FALLBACK) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const text =
          entry.provider === "gemini"
            ? await callGemini(entry.model, messages)
            : await callGroq(entry.model, messages);
        return text;
      } catch (error) {
        const shouldFallback = isFallbackError(error);

        if (shouldFallback && attempt < 2) {
          await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 1000));
          continue;
        }

        if (shouldFallback) {
          console.warn(`[chat] ${entry.provider}/${entry.model} unavailable, trying next`);
          break;
        }

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

    const cacheKey = getCacheKey(messages);
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
      return NextResponse.json({ message: cached.text, cached: true });
    }

    const text = await generateWithFallback(messages);
    cache.set(cacheKey, { text, ts: Date.now() });

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error("[chat] All models failed:", error);
    return NextResponse.json(
      { error: "Sorry, I need a rest right now — please try again in a moment!" },
      { status: 503 }
    );
  }
}
