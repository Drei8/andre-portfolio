import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

export function Certifications() {
  return (
    <Card className="animate-fade-in [animation-delay:300ms] opacity-0 h-full">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">Recent Certifications</h3>
        <Link
          href="/certifications"
          className="text-sm text-foreground hover:text-foreground/70 transition-colors"
        >
          View All &rsaquo;
        </Link>
      </div>
      <CardContent className="px-3 pb-3 pt-1 space-y-1.5">
        {portfolioData.certifications.featured.map((cert, i) => {
          const inner = (
            <>
              <h3 className="text-xs font-semibold">{cert.name}</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5">{cert.issuer}</p>
            </>
          );
          return cert.url ? (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-2 py-2.5 bg-muted/50 hover:bg-muted transition-colors rounded"
            >
              {inner}
            </a>
          ) : (
            <div
              key={i}
              className="px-3 py-2.5 bg-muted/50 hover:bg-muted transition-colors rounded cursor-default"
            >
              {inner}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
