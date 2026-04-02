import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { ArrowLeft } from "lucide-react";

export default function CertificationsPage() {
  const certs = portfolioData.certifications.all;

  return (
    <div className="animate-fade-in">
      <div className="container max-w-2xl py-8 sm:py-10 px-4">

        {/* Back link */}
        <div className="animate-fade-in opacity-0 [animation-delay:0ms]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-foreground/70 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold mt-4 mb-10">All Certifications</h1>
        </div>

        {/* 2-column mini card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in opacity-0 [animation-delay:200ms]">
          {certs.map((cert, i) => {
            const inner = (
              <>
                <p className="text-sm font-bold leading-snug">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              </>
            );
            return cert.url ? (
              <a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-t-0 border-r border-b border-l border-r-black/[0.06] border-b-black/[0.06] border-l-black/[0.03] dark:border-r-white/[0.07] dark:border-b-white/[0.07] dark:border-l-white/[0.035] bg-card p-4 transition-all duration-300 hover:border-r-black/[0.14] hover:border-b-black/[0.14] hover:border-l-black/[0.08] dark:hover:border-r-white/[0.14] dark:hover:border-b-white/[0.14] dark:hover:border-l-white/[0.08] hover:shadow-[0_2px_10px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="border-t-0 border-r border-b border-l border-r-black/[0.06] border-b-black/[0.06] border-l-black/[0.03] dark:border-r-white/[0.07] dark:border-b-white/[0.07] dark:border-l-white/[0.035] bg-card p-4">
                {inner}
              </div>
            );
          })}
        </div>

      </div>
      <footer>
        <div className="max-w-4xl mx-auto px-4 py-5 sm:py-8 border-t border-border mt-6 sm:mt-12 text-center text-xs text-black dark:text-white animate-fade-in opacity-0 [animation-delay:350ms]">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
