"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/data";

const GAP = 8; // px — matches gap-2

function getVisible(width: number) {
  if (width < 420) return 2;
  if (width < 620) return 3;
  return 5;
}

export function Gallery() {
  const images = portfolioData.gallery;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure container width responsively
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const visible = containerWidth > 0 ? getVisible(containerWidth) : 5;
  const itemWidth =
    containerWidth > 0 ? (containerWidth - (visible - 1) * GAP) / visible : 0;
  const slideAmount = itemWidth + GAP;
  const maxIndex = Math.max(0, images.length - visible);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < maxIndex;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);
  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null && i < images.length - 1 ? i + 1 : i
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, lightboxPrev, lightboxNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section className="mt-1 animate-fade-in [animation-delay:400ms] opacity-0">
      <Card>
        <div className="px-4 pt-4 pb-2">
          <h2 className="text-lg font-bold text-foreground">Gallery</h2>
        </div>
        <CardContent className="px-3 sm:px-4 pb-3 sm:pb-4">

      {/* Slider */}
      <div className="relative" ref={containerRef}>
        {/* Prev button — floats partially outside */}
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border shadow-md transition-all duration-200 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Clipping window */}
        <div className="overflow-hidden">
          {/* Sliding track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${currentIndex * slideAmount}px)`,
            }}
          >
            {images.map((img, i) => (
              // Outer: lifts on hover (no overflow-hidden so lift is visible)
              <div
                key={i}
                className="group relative flex-shrink-0 aspect-square cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
                style={{ width: itemWidth > 0 ? `${itemWidth}px` : `${100 / visible}%` }}
                onClick={() => openLightbox(i)}
              >
                {/* Inner: clips the scaled image */}
                <div className="relative h-full w-full overflow-hidden bg-muted">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover opacity-0 transition-all duration-300 group-hover:scale-105"
                    onLoad={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = "1";
                    }}
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next button — floats partially outside */}
        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-background border border-border shadow-md transition-all duration-200 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

        </CardContent>
      </Card>

      {/* Lightbox — rendered via portal to escape parent stacking context */}
      {lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Counter */}
            <span className="absolute top-5 left-5 text-white text-sm font-medium select-none">
              {lightboxIndex + 1} / {images.length}
            </span>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image container */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full px-10 sm:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={900}
                priority
                className="object-contain max-h-[85vh] w-full mx-auto"
              />
            </div>

            {/* Left nav arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              disabled={lightboxIndex === 0}
              aria-label="Previous photo"
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-12 sm:w-10 sm:h-16 flex items-center justify-center rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Right nav arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              disabled={lightboxIndex === images.length - 1}
              aria-label="Next photo"
              className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-12 sm:w-10 sm:h-16 flex items-center justify-center rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Keyboard hint */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs select-none whitespace-nowrap bg-white/10 px-3 py-1 rounded-full">
              Use arrow keys to navigate • ESC to close
            </p>
          </div>,
          document.body
        )}
    </section>
  );
}
