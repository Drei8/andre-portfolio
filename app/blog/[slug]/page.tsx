import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";
import { portfolioData } from "@/lib/data";
import { BlogPostControls } from "@/components/blog-post-controls";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="animate-fade-in min-h-screen">

      {/* Sticky controls — back link, theme toggle, LinkedIn share */}
      <BlogPostControls />

      <div className="container max-w-2xl py-8 sm:py-10 px-4">

        {/* Title + meta */}
        <div className="animate-fade-in opacity-0 [animation-delay:0ms]">
          <h1 className="text-xl sm:text-2xl font-bold leading-snug">{post.title}</h1>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1.5 sm:gap-2 mt-3">
            <span className="text-xs text-muted-foreground tabular-nums">
              {post.date} &middot; {post.readTime} min read
            </span>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-border/50" />
        </div>

        {/* Body */}
        <div className="mt-8 animate-fade-in opacity-0 [animation-delay:150ms] space-y-5">
          {post.body.map((block, i) =>
            block.type === "h2" ? (
              <h2 key={i} className="text-base font-bold mt-8 mb-1">
                {block.text}
              </h2>
            ) : (
              <p key={i} className="text-sm leading-[1.85] text-foreground/85">
                {block.text}
              </p>
            )
          )}
        </div>

      </div>

      <footer>
        <div className="max-w-4xl mx-auto px-4 py-5 sm:py-8 border-t border-border mt-12 text-center text-xs text-black dark:text-white animate-fade-in opacity-0 [animation-delay:300ms]">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
