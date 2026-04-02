"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Beer } from "lucide-react";

export function IdCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoAngleRef = useRef(0);

  const isDark = () => document.documentElement.classList.contains("dark");

  const startAutoAnimation = () => {
    if (!isDark()) return;
    const animate = () => {
      const border = borderRef.current;
      if (!border) return;
      autoAngleRef.current = (autoAngleRef.current + 1.2) % 360;
      border.style.background = `conic-gradient(from ${autoAngleRef.current}deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.55) 8deg, rgba(255,255,255,0.18) 35deg, transparent 60deg, transparent 360deg)`;
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
  };

  const stopAutoAnimation = () => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (resumeTimerRef.current !== null) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoAnimation();
    return () => stopAutoAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    stopAutoAnimation();

    const card = cardRef.current;
    const shimmer = shimmerRef.current;
    const border = borderRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 3D tilt
    const rx = -((y - rect.height / 2) / rect.height) * 12;
    const ry = ((x - rect.width / 2) / rect.width) * 12;
    card.style.transition = "none";
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;

    // Shimmer
    if (shimmer) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      shimmer.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.10) 0%, transparent 65%)`;
      shimmer.style.opacity = "1";
    }

    // Border reflection — dark mode only
    if (border && isDark()) {
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
      border.style.transition = "none";
      border.style.background = `conic-gradient(from ${angle}deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.65) 20deg, rgba(255,255,255,0.15) 40deg, transparent 60deg, transparent 360deg)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const shimmer = shimmerRef.current;
    const border = borderRef.current;

    if (card) {
      card.style.transition = "transform 0.4s ease-out";
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
    if (shimmer) shimmer.style.opacity = "0";
    if (border && isDark()) {
      border.style.transition = "none";
      border.style.background = "rgba(255,255,255,0.08)";
    }

    // Restart auto animation after 7 seconds
    resumeTimerRef.current = setTimeout(() => {
      startAutoAnimation();
    }, 7000);
  };

  return (
    <div className="flex justify-center animate-fade-in [animation-delay:100ms] opacity-0">
      {/* Border reflection wrapper */}
      <div
        ref={borderRef}
        className="rounded-[13px] p-[1px] w-full max-w-[261px]"
        style={{ background: "rgba(255,255,255,0.08)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          className="relative w-full overflow-hidden rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.35)] cursor-pointer"
          style={{
            aspectRatio: "3/4",
            transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)",
            willChange: "transform",
          }}
        >
          {/* Dark gradient background */}
          <div
            className="absolute inset-0 rounded-[12px]"
            style={{
              background:
                "linear-gradient(203.33deg, rgb(17,17,17) 1.16%, rgb(51,51,51) 14.27%, rgb(85,85,85) 34.09%, rgb(68,68,68) 53.64%, rgb(34,34,34) 80.17%, rgb(17,17,17) 100%)",
            }}
          />

          {/* Mouse shimmer overlay */}
          <div
            ref={shimmerRef}
            className="pointer-events-none absolute inset-0 rounded-[12px] transition-opacity duration-300"
            style={{ opacity: 0 }}
          />

          {/* Card content */}
          <div className="absolute left-5 top-7 z-10 flex flex-col text-left">
            <div className="font-mono font-bold text-white text-2xl leading-none select-none">
              &gt;_
            </div>
            <p className="mt-3 text-base font-semibold tracking-[-0.01em] text-white leading-tight">
              ONE OF ONE
            </p>
            <p className="mt-1 text-[9px] font-mono font-medium uppercase tracking-[0.08em] text-white/40">
              Access Card
            </p>
            <p className="mt-12 text-[9px] font-mono font-medium uppercase tracking-[0.08em] text-white/40">
              Owner
            </p>
            <p className="mt-1 text-base font-mono font-semibold uppercase tracking-[0.05em] text-white">
              DREI
            </p>
          </div>

          {/* Developer — bottom left */}
          <p className="absolute bottom-5 left-5 z-10 text-[9px] font-mono font-medium uppercase tracking-[0.08em] text-white/40">
            Developer
          </p>

          {/* QR code + Buy me a drink — bottom right */}
          <div className="absolute bottom-0.5 right-0.5 z-10 flex flex-col items-center gap-1">
            <div className="flex items-center gap-0.5 text-[9.5px] font-mono uppercase tracking-[0.05em] text-white/40">
              <Beer className="h-2.5 w-2.5 shrink-0" />
              Buy me a drink ^.^
            </div>
            <div className="h-[150px] w-[150px]">
              <Image
                src="/qr-coffee.png"
                alt="QR Code"
                width={150}
                height={150}
                className="object-contain"
                style={{ filter: "invert(1)", opacity: 0.60 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
