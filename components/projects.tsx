import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

export function Projects() {
  return (
    <Card className="animate-fade-in [animation-delay:250ms] opacity-0 h-full">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Recent Projects</h3>
        <Link
          href="/projects"
          className="text-sm text-foreground hover:text-foreground/70 transition-colors"
        >
          View All &rsaquo;
        </Link>
      </div>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {portfolioData.projects.featured.map((project, i) => (
            <a
              key={i}
              href={project.url!}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="transition-transform duration-200 hover:-translate-y-1">
                <Card className="p-3 space-y-1.5 h-full">
                  <p className="text-sm font-bold leading-snug">{project.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                  <span className="inline-block text-[11px] border border-foreground/20 px-2 py-0.5 text-foreground/60">
                    {project.url!.replace(/^https?:\/\//, "").split("/")[0]}
                  </span>
                </Card>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
