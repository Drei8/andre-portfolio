"use client";

import Link from "next/link";
import { ArrowLeft, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function BlogPostControls() {
  const handleShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container max-w-2xl px-4 py-2.5 flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-foreground/70 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All Posts
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1.5 border border-border bg-background hover:bg-accent transition-colors"
            title="Share on LinkedIn"
          >
            <Linkedin className="h-3 w-3" />
            Share on LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
