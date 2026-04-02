import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in">
      <div className="container max-w-2xl py-10 px-4">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-foreground/70 transition-colors mb-8 animate-fade-in opacity-0 [animation-delay:0ms]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        <h1 className="text-2xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:100ms]">All Projects</h1>

        <div className="border rounded-none animate-fade-in opacity-0 [animation-delay:200ms]">
          {portfolioData.projects.all.map((project, i) => {
            const inner = (
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-snug">{project.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                {project.url ? (
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground mt-0.5" />
                ) : null}
              </div>
            );

            return project.url ? (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 border-b border-border/40 last:border-0 hover:bg-muted/50 transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div
                key={i}
                className="px-4 py-3 border-b border-border/40 last:border-0"
              >
                {inner}
              </div>
            );
          })}
        </div>

      </div>
      <footer>
        <div className="max-w-4xl mx-auto px-4 py-5 sm:py-8 border-t border-border text-center text-xs text-muted-foreground animate-fade-in opacity-0 [animation-delay:350ms]">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
