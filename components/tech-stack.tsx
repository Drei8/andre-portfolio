import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

const sections = [
  { label: "Frontend", key: "frontend" as const },
  { label: "Backend", key: "backend" as const },
  { label: "DevOps & Cloud", key: "devops" as const },
  { label: "AI / ML", key: "aiml" as const },
];

export function TechStack() {
  return (
    <Card className="animate-fade-in [animation-delay:200ms] opacity-0">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Tech Stack</h3>
        <Link
          href="/tech-stack"
          className="text-sm text-foreground hover:text-foreground/70 transition-colors"
        >
          View All &rsaquo;
        </Link>
      </div>
      <CardContent className="p-4 pt-5 space-y-4">
        {sections.map(({ label, key }) => (
          <div key={key}>
            <p className="text-sm font-bold text-foreground mb-1.5">{label}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {portfolioData.techStack[key].map((skill) => (
                <span key={skill} className="px-2 py-0.5 text-xs rounded-md bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)] text-foreground">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
