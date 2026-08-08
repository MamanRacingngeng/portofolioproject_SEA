"use client";

import Image from "next/image";

const SCENE = "/images/hero/origin-scene.png";

interface ParallaxSceneProps {
  getTransform: (
    depth: number,
    options?: { scrollFactor?: number; mouseX?: number; mouseY?: number }
  ) => { transform: string };
}

export function ParallaxScene({ getTransform }: ParallaxSceneProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1b3d6b]">
      {/* Full-scene background with mouse + scroll parallax */}
      <div
        className="absolute inset-[-10%] will-change-transform"
        style={getTransform(0.2, { scrollFactor: 0.06, mouseX: 0.8, mouseY: 0.6 })}
      >
        <Image
          src={SCENE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="hero-origin-rays" aria-hidden />
      <div className="hero-origin-vignette" aria-hidden />
    </div>
  );
}
