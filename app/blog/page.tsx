import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { portfolioData } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      <div className="container max-w-2xl py-8 sm:py-10 px-4">

        {/* Back link */}
        <div className="animate-fade-in opacity-0 [animation-delay:0ms]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-foreground/70 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mt-6 mb-10">
            <h1 className="text-2xl font-bold">Andre&apos;s Blog</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Thoughts on AI, engineering, and building things.
            </p>
          </div>
        </div>

        {/* Post list */}
        <div className="animate-fade-in opacity-0 [animation-delay:150ms]">
          {blogPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div
                className={`py-6 ${i < blogPosts.length - 1 ? "border-b border-border/50" : ""}`}
              >
                {/* Date + read time */}
                <p className="text-xs text-muted-foreground tabular-nums">
                  {post.date} &middot; {post.readTime} min read
                </p>

                {/* Title */}
                <h2 className="text-base font-bold mt-1.5 leading-snug">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <p className="text-xs font-medium mt-3 text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  Read More →
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <footer>
        <div className="max-w-4xl mx-auto px-4 py-5 sm:py-8 border-t border-border mt-6 sm:mt-12 text-center text-xs text-black dark:text-white animate-fade-in opacity-0 [animation-delay:300ms]">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
