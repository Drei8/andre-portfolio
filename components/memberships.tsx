import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

export function Memberships() {
  return (
    <Card className="animate-fade-in [animation-delay:350ms] opacity-0">
      <CardHeader>
        <CardTitle>A member of</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {portfolioData.memberships.map((org, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="shrink-0 h-8 w-8 rounded-full overflow-hidden">
              <Image
                src="/icpep-logo.jpg"
                alt="ICpEP logo"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug">{org.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {org.short} &middot; {org.role} &middot; {org.period}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
