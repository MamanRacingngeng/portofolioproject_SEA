"use client";

import Image from "next/image";
import { ParallaxLayer } from "@/components/hero/parallax-layer";

interface ParallaxSceneProps {
  getTransform: (
    depth: number,
    options?: { scrollFactor?: number; mouseX?: number; mouseY?: number }
  ) => { transform: string };
  scrollY: number;
}

export function ParallaxScene({ getTransform, scrollY }: ParallaxSceneProps) {
  const sceneShift = Math.min(scrollY * 0.35, 180);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ transform: `translate3d(0, ${sceneShift}px, 0)` }}
    >
      <ParallaxLayer className="hero-sky" style={getTransform(0.08, { scrollFactor: 0.04 })} />

      <ParallaxLayer style={getTransform(0.15, { scrollFactor: 0.06 })}>
        <div className="hero-sun-rays" />
      </ParallaxLayer>

      <ParallaxLayer style={getTransform(0.22, { scrollFactor: 0.08 })}>
        <div className="hero-stars" />
      </ParallaxLayer>

      <ParallaxLayer style={getTransform(0.35, { scrollFactor: 0.1 })}>
        <svg
          viewBox="0 0 1440 420"
          className="absolute bottom-[18%] left-0 w-[120%] min-w-[900px] text-earth-900/55"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0 320 L180 260 360 300 520 220 720 280 920 200 1120 260 1440 180 L1440 420 L0 420 Z"
          />
        </svg>
      </ParallaxLayer>

      <ParallaxLayer style={getTransform(0.48, { scrollFactor: 0.12 })}>
        <svg
          viewBox="0 0 1440 380"
          className="absolute bottom-[8%] left-[-8%] w-[116%] min-w-[900px] text-fresh-900/75"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0 260 L220 190 420 240 640 160 860 230 1080 150 1320 210 1440 170 L1440 380 L0 380 Z"
          />
        </svg>
      </ParallaxLayer>

      <ParallaxLayer style={getTransform(0.62, { scrollFactor: 0.14, mouseX: 1.2 })}>
        <div className="hero-molecule hero-molecule-a" />
        <div className="hero-molecule hero-molecule-b" />
        <div className="hero-molecule hero-molecule-c" />
      </ParallaxLayer>

      <ParallaxLayer style={getTransform(0.78, { scrollFactor: 0.16, mouseX: 1.35 })}>
        <div className="absolute bottom-[22%] right-[6%] hidden h-44 w-44 rounded-full bg-wheat-500/15 blur-3xl sm:block" />
        <div className="absolute bottom-[30%] right-[10%] h-56 w-56 rounded-full border border-fresh-300/20 sm:h-72 sm:w-72" />
        <div className="absolute bottom-[28%] right-[8%] h-64 w-48 overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:h-80 sm:w-56">
          <Image
            src="/images/portrait.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 40vw, 224px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fresh-950/70 via-transparent to-fresh-700/10" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer style={getTransform(0.95, { scrollFactor: 0.2 })}>
        <div className="hero-waves">
          <div className="hero-wave hero-wave-1" />
          <div className="hero-wave hero-wave-2" />
          <div className="hero-wave hero-wave-3" />
        </div>
      </ParallaxLayer>

      <div className="hero-vignette" aria-hidden />
    </div>
  );
}
