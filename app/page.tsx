import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { IdCard } from "@/components/id-card";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Recommendations } from "@/components/recommendations";
import { Connect } from "@/components/connect";
import { Gallery } from "@/components/gallery";
import { portfolioData } from "@/lib/data";

export default function Home() {
  return (
    <main className="animate-fade-in">
      <div className="container max-w-[900px] mx-auto space-y-4 py-12">
        {/* Hero */}
        <Hero />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About — 2 cols */}
          <div className="md:col-span-2">
            <About />
          </div>

          {/* ID Card — 1 col */}
          <div className="pt-4">
            <IdCard />
          </div>

          {/* Tech Stack — 2 cols */}
          <div className="md:col-span-2">
            <TechStack />
          </div>

          {/* Experience — 1 col */}
          <div>
            <Experience />
          </div>

          {/* Projects — 2 cols */}
          <div className="md:col-span-2">
            <Projects />
          </div>

          {/* Education — 1 col */}
          <div>
            <Education />
          </div>

          {/* Certifications + Recommendations — side by side */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <Certifications />
            <Recommendations />
          </div>

          {/* Connect — full width */}
          <div className="md:col-span-3">
            <Connect />
          </div>

          {/* Gallery — full width */}
          <div className="md:col-span-3">
            <Gallery />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="max-w-4xl mx-auto px-4 py-5 sm:py-8 border-t border-border mt-6 sm:mt-12 text-center text-xs text-black dark:text-white">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
