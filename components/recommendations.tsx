"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

export function Recommendations() {
  const recs = portfolioData.recommendations;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % recs.length);
    }, 11000);
    return () => clearInterval(timer);
  }, [recs.length]);

  return (
    <Card className="animate-fade-in [animation-delay:350ms] opacity-0 h-full flex flex-col">
      <div className="px-4 pt-4 pb-4">
        <h3 className="text-lg font-bold text-foreground">Recommendations</h3>
      </div>
      <CardContent className="flex-1 flex flex-col pt-0">

        {/* Rotating slide area: quote + name + title */}
        <div className="relative h-[200px]">
          {recs.map((rec, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                opacity: 0,
                animation: `fade-slide-show ${recs.length * 11}s linear infinite`,
                animationDelay: `${i * 11}s`,
                animationFillMode: "both",
              }}
            >
              <p className="text-[13px] leading-relaxed text-foreground/80 font-serif line-clamp-5">
                &ldquo;{rec.quote}&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs font-semibold font-sans">{rec.name}</p>
                <p className="text-xs text-black dark:text-white font-sans mt-0.5">{rec.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-1.5 mt-4">
          {recs.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 transition-all duration-500 bg-black dark:bg-white ${
                i === active ? "opacity-100" : "opacity-20"
              }`}
            />
          ))}
        </div>

      </CardContent>
    </Card>
  );
}
