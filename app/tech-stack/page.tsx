import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/data";

const sections = [
  { label: "Frontend", key: "frontend" as const },
  { label: "Backend", key: "backend" as const },
  { label: "DevOps & Cloud", key: "devops" as const },
  { label: "AI & Machine Learning", key: "aiml" as const },
  { label: "Security & Identity", key: "security" as const },
  { label: "CMS & No-Code", key: "cms" as const },
  { label: "Developer Tools", key: "tools" as const },
];

export default function TechStackPage() {
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

        <h1 className="text-2xl font-bold mb-8 animate-fade-in opacity-0 [animation-delay:100ms]">Tech Stack</h1>

        <div className="space-y-6 animate-fade-in opacity-0 [animation-delay:200ms]">
          {sections.map(({ label, key }) => (
            <div key={key}>
              <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.techStackAll[key].map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
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
