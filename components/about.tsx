import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

export function About() {
  return (
    <Card className="animate-fade-in [animation-delay:100ms] opacity-0">
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {portfolioData.about.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-foreground">
              {para}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
