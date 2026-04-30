"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, MessageSquare } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function ProfileAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-6 w-6" : "h-10 w-10";
  return (
    <div className={cn("relative rounded-full overflow-hidden shrink-0", dim)}>
      <div className="block dark:hidden absolute inset-0">
        <Image src="/profile-light.jpg" alt="Andre" fill className="object-cover object-top scale-110" />
      </div>
      <div className="hidden dark:block absolute inset-0">
        <Image src="/profile-dark.jpg" alt="Andre" fill className="object-cover object-top scale-110" />
      </div>
    </div>
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! 👋 Thanks for visiting my portfolio. Feel free to ask me anything about my experience, skills, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState<"online" | "offline">("online");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (data.error) {
        setAiStatus("offline");
        setMessages([...next, { role: "assistant", content: data.error }]);
      } else {
        setAiStatus("online");
        setMessages([...next, { role: "assistant", content: data.message || "Sorry, I'm having trouble connecting right now. Please try again later." }]);
      }
    } catch {
      setAiStatus("offline");
      setMessages([...next, { role: "assistant", content: "Sorry, I couldn't connect. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[380px] h-[540px] flex flex-col rounded-lg border border-border bg-background shadow-[0_8px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.6)] animate-fade-in">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-3">
              <ProfileAvatar size="md" />
              <div>
                <p className="text-sm font-semibold">Chat with Andre</p>
                <p className="text-xs text-foreground/70 flex items-center gap-1.5">
                  <span className={cn(
                    "w-1.5 h-1.5 rounded-full inline-block transition-colors duration-500",
                    aiStatus === "online" ? "bg-green-500" : "bg-gray-400"
                  )} />
                  {aiStatus === "online" ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) =>
              msg.role === "assistant" ? (
                <div key={i} className="flex justify-start">
                  <div className="flex flex-col items-start gap-1 max-w-[82%]">
                    <div className="flex items-center gap-2">
                      <ProfileAvatar size="sm" />
                      <span className="text-xs text-foreground/50">Andre Jhon Anot</span>
                    </div>
                    <div className="bg-secondary text-foreground px-3 py-2.5 rounded-lg text-sm leading-relaxed">
                      {msg.content}
                    </div>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[82%] bg-black dark:bg-white text-white dark:text-black px-3 py-2.5 rounded-lg text-sm leading-relaxed">
                    {msg.content}
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="flex flex-col items-start gap-1 max-w-[82%]">
                  <div className="flex items-center gap-2">
                    <ProfileAvatar size="sm" />
                    <span className="text-xs text-foreground/50">Andre Jhon Anot</span>
                  </div>
                  <div className="bg-secondary px-3 py-2.5 rounded-lg">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 border-t border-border">
            <div className="space-y-2">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, 1000))}
                  placeholder="Type a message..."
                  maxLength={1000}
                  disabled={loading}
                  className="flex-1 p-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-md hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="flex justify-between text-xs text-foreground/50">
                <span>Ask me anything about tech, love or career! </span>
                <span>{input.length}/1000</span>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-black dark:bg-white text-white dark:text-black px-4 py-3 shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Open chat"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <>
            <MessageSquare className="h-5 w-5 animate-wiggle" />
            <span className="text-sm font-medium">Chat with Andre</span>
          </>
        )}
      </button>
    </>
  );
}
