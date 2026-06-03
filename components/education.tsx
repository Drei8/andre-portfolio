import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <div className="transition-transform duration-200 hover:-translate-y-0.5 h-full">
      <Card className="animate-fade-in [animation-delay:200ms] opacity-0 h-full">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="relative ml-2 border-l border-border space-y-5">
            {portfolioData.education.map((item, i) => (
              <li key={i} className="pl-5 relative group cursor-default">
                {/* Timeline square */}
                <span className="absolute -left-[6px] top-[2px] h-[13px] w-[13px] border-[1.5px] border-black/30 dark:border-white/30 bg-card">
                  <span className={cn(
                    "absolute bg-black dark:bg-white transition-opacity duration-200",
                    item.current
                      ? "inset-0"
                      : "inset-[0.89px] opacity-0 group-hover:opacity-100"
                  )} />
                </span>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug">{item.level}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.school}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground tabular-nums">{item.year}</span>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
