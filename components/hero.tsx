"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Calendar, BookOpen, ChevronRight, ScanFace, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolioData } from "@/lib/data";

function Avatar() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative shrink-0 w-32 h-32 sm:w-40 sm:h-40 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* CSS-based theme switching — avoids hydration flash */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light mode image */}
        <div className="block dark:hidden absolute inset-0">
          <Image
            src={hovered ? "/profile-light-hover.png" : "/profile-light.jpg"}
            alt={portfolioData.name}
            fill
            priority
            className="object-cover object-top"
          />
        </div>
        {/* Dark mode image */}
        <div className="hidden dark:block absolute inset-0">
          <Image
            src={hovered ? "/profile-dark-hover.png" : "/profile-dark.jpg"}
            alt={portfolioData.name}
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Edge blend — fades image borders into page background */}
      {/* Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      {/* Left */}
      <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      {/* Right */}
      <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      {/* Top */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      {/* Scan icon on hover — top right (above gradients) */}
      <div
        className={`absolute inset-0 flex items-start justify-end p-2 pointer-events-none transition-opacity duration-200 z-20 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-white/90 dark:bg-black/60 rounded-full p-1.5 shadow">
          <ScanFace className="h-4 w-4 text-sky-500" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex items-start gap-3 sm:gap-5 px-1 py-2 animate-fade-in">
      <Avatar />

      <div className="flex-1 min-w-0">
        {/* Name + Toggle */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight truncate">{portfolioData.name}</h1>
            <BadgeCheck className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 fill-sky-500 stroke-white" />
          </div>
          <ThemeToggle />
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mt-1 text-xs text-foreground">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="truncate">{portfolioData.location}</span>
        </div>

        {/* Titles */}
        <p className="text-xs sm:text-sm text-foreground mt-3">
          {portfolioData.titles.join(" \\ ")}
        </p>
        
        {/* Buttons */}
        <div className="flex gap-2 mt-3 sm:mt-7">
          {/* Schedule a Call — primary */}
          <div className="transition-transform duration-200 hover:-translate-y-0.5 shrink-0">
            <a href="https://calendly.com/dr8anot/new-meeting" target="_blank" rel="noopener noreferrer">
              <Card className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-[10px] sm:text-xs font-medium cursor-pointer whitespace-nowrap">
                <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                Schedule a Call
                <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              </Card>
            </a>
          </div>
          {/* Send Email — hidden on mobile */}
          <div className="hidden sm:block transition-transform duration-200 hover:-translate-y-0.5 shrink-0">
            <a href={`mailto:${portfolioData.email}`}>
              <Card className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium cursor-pointer whitespace-nowrap">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                Send Email
              </Card>
            </a>
          </div>
          {/* Read my blog — stretches to fill */}
          <div className="transition-transform duration-200 hover:-translate-y-0.5 flex-1 min-w-0">
            <a href="/blog" className="block">
              <Card className="flex items-center justify-between gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-medium cursor-pointer w-full">
                <span className="flex items-center gap-1 sm:gap-1.5">
                  <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span className="sm:hidden">Blog</span>
                  <span className="hidden sm:inline">Read my blog</span>
                </span>
                <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
