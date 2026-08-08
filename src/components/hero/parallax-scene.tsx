"use client";

import Image from "next/image";
import { ParallaxLayer } from "@/components/hero/parallax-layer";

const SCENE = "/images/hero/origin-scene.png";

interface ParallaxSceneProps {
  getTransform: (
    depth: number,
    options?: { scrollFactor?: number; mouseX?: number; mouseY?: number }
  ) => { transform: string };
  scrollY: number;
}

export function ParallaxScene({ getTransform, scrollY }: ParallaxSceneProps) {
  const sceneShift = Math.min(scrollY * 0.42, 220);

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#0b1f4f]"
      style={{ transform: `translate3d(0, ${sceneShift}px, 0)` }}
    >
      {/* Layer 1 — sky & sun (slowest) */}
      <ParallaxLayer style={getTransform(0.06, { scrollFactor: 0.03 })}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={SCENE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="origin-scene-img scale-[1.08] object-cover object-[center_18%]"
          />
        </div>
        <div className="hero-origin-rays" />
      </ParallaxLayer>

      {/* Layer 2 — cliffs & lighthouse */}
      <ParallaxLayer style={getTransform(0.22, { scrollFactor: 0.08 })}>
        <div className="absolute inset-0 overflow-hidden opacity-95">
          <Image
            src={SCENE}
            alt=""
            fill
            sizes="100vw"
            className="origin-scene-img scale-[1.12] object-cover object-[center_55%]"
          />
        </div>
      </ParallaxLayer>

      {/* Layer 3 — sailboat & mid ocean */}
      <ParallaxLayer style={getTransform(0.48, { scrollFactor: 0.12, mouseX: 1.4 })}>
        <div className="absolute inset-x-[-4%] bottom-0 top-[32%] overflow-hidden">
          <Image
            src={SCENE}
            alt=""
            fill
            sizes="100vw"
            className="origin-scene-img scale-[1.18] object-cover object-[42%_88%]"
          />
        </div>
      </ParallaxLayer>

      {/* Layer 4 — foreground waves (fastest) */}
      <ParallaxLayer style={getTransform(0.82, { scrollFactor: 0.18, mouseX: 1.6 })}>
        <div className="absolute inset-x-[-6%] bottom-0 h-[42%] overflow-hidden">
          <Image
            src={SCENE}
            alt=""
            fill
            sizes="100vw"
            className="origin-scene-img scale-[1.22] object-cover object-[50%_100%]"
          />
        </div>
        <div className="hero-origin-foam" />
      </ParallaxLayer>

      {/* Atmospheric overlays */}
      <div className="hero-origin-vignette" aria-hidden />
      <div className="hero-origin-color-grade" aria-hidden />
    </div>
  );
}
