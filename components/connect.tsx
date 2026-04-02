import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, Calendar, BookOpen, ChevronRight, Linkedin, Github, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

function LiftCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="transition-transform duration-200 hover:-translate-y-0.5">
      <Card className={`px-2 py-1.5 ${className}`}>{children}</Card>
    </div>
  );
}

export function Connect() {
  return (
    <Card className="animate-fade-in [animation-delay:400ms] opacity-0">
      <CardContent className="pt-3 pb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Col 1 — A member of */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] font-bold text-foreground mb-0.5">A member of</p>
            {portfolioData.memberships.map((org, i) => (
              <a key={i} href="https://www.facebook.com/icpep.se.national" target="_blank" rel="noopener noreferrer" className="block">
                <LiftCard>
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-start gap-1.5">
                      <div className="shrink-0 h-4 w-4 rounded-sm overflow-hidden mt-0.5">
                        <Image src="/icpep-logo.jpg" alt="ICpEP" width={16} height={16} className="object-cover w-full h-full" />
                      </div>
                      <p className="text-[10px] font-medium leading-tight font-bold text-foreground leading-snug group-hover:text-accent transition-colors">{org.name}</p>
                    </div>
                    <ExternalLink className="h-2.5 w-2.5 shrink-0 text-foreground/40 mt-0.5" />
                  </div>
                </LiftCard>
              </a>
            ))}
          </div>

          {/* Col 2 — Social Links */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] font-bold text-foreground mb-0.5">Social Links</p>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
              <LiftCard>
                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded bg-foreground/10 flex items-center justify-center shrink-0">
                    <Linkedin className="h-2.5 w-2.5 text-foreground" />
                  </div>
                  <span className="text-[10px] font-medium text-foreground">LinkedIn</span>
                </div>
              </LiftCard>
            </a>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
              <LiftCard>
                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded bg-foreground/10 flex items-center justify-center shrink-0">
                    <Github className="h-2.5 w-2.5 text-foreground" />
                  </div>
                  <span className="text-[10px] font-medium text-foreground">GitHub</span>
                </div>
              </LiftCard>
            </a>
            <a href="https://www.instagram.com/droidsss/" target="_blank" rel="noopener noreferrer">
              <LiftCard>
                <div className="flex items-center gap-1.5">
                  <div className="h-4 w-4 rounded bg-foreground/10 flex items-center justify-center shrink-0">
                    <Instagram className="h-2.5 w-2.5 text-foreground" />
                  </div>
                  <span className="text-[10px] font-medium text-foreground">Instagram</span>
                </div>
              </LiftCard>
            </a>
          </div>

          {/* Col 3 — Developing (no hover lift) */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[11px] font-bold text-foreground mb-0.5">Developing</p>
            <Card className="px-2 py-1.5 flex flex-col justify-between flex-1">
              <p className="text-[10px]  text-foreground/160 leading-relaxed mb-2">
                Available for developing solutions and applications with modern technology and engineering best practices.
              </p>
              <a
                href={`mailto:${portfolioData.email}`}
                className="inline-flex items-center gap-0.5 text-[10px] font-medium text-foreground hover:opacity-70 transition-opacity"
              >
                Get in touch <ChevronRight className="h-3 w-3" />
              </a>
            </Card>
          </div>

          {/* Col 4 — Email / Let's Talk / Blog */}
          <div className="flex flex-col gap-1.5">
            <a href={`mailto:${portfolioData.email}`}>
              <LiftCard>
                <div className="flex items-center gap-1 mb-0.5">
                  <Mail className="h-3 w-3 text-foreground/60" />
                  <p className="text-[9px] text-foreground/60 font-medium">Email</p>
                </div>
                <p className="text-[10px] font-medium text-foreground">{portfolioData.email}</p>
              </LiftCard>
            </a>
            <a href="https://calendly.com/dr8anot/new-meeting" target="_blank" rel="noopener noreferrer">
              <LiftCard>
                <div className="flex items-center gap-1 mb-0.5">
                  <Calendar className="h-3 w-3 text-foreground/60" />
                  <p className="text-[9px] text-foreground/60 font-medium">Let&apos;s Talk</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-foreground">Schedule a Call</span>
                  <ChevronRight className="h-3 w-3 text-foreground/50" />
                </div>
              </LiftCard>
            </a>
            <Link href="/blog">
              <LiftCard>
                <div className="flex items-center gap-1 mb-0.5">
                  <BookOpen className="h-3 w-3 text-foreground/60" />
                  <p className="text-[9px] text-foreground/60 font-medium">Blog</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium text-foreground">Read my blog</span>
                  <ChevronRight className="h-3 w-3 text-foreground/50" />
                </div>
              </LiftCard>
            </Link>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
