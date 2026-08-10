"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { useParallaxLayer, useTilt3D } from "@/components/motion/use-tilt-3d";

interface Hero3DNameProps {
  className?: string;
}

export function Hero3DName({ className }: Hero3DNameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY, pointerX, pointerY, reduceMotion } = useTilt3D(ref, {
    intensity: 10,
  });

  const blockShift = useParallaxLayer(pointerX, pointerY, 18);
  const plainDepth = useTransform(pointerY, [-0.5, 0.5], [8, -8]);

  const { nameLines } = siteConfig.brand;
  const plainLines = nameLines.filter((line) => line.variant === "plain");
  const blockLines = nameLines.filter((line) => line.variant === "block");

  return (
    <div ref={ref} className={cn("hero-perspective py-2", className)}>
      <motion.h1
        className="preserve-3d font-display text-[2.6rem] font-extrabold uppercase leading-[0.88] xs:text-[3.1rem] sm:text-7xl lg:text-[4.75rem]"
        style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {plainLines.map((line, i) => (
          <motion.span
            key={line.text}
            initial={{ opacity: 0, rotateX: 40, z: -40 }}
            animate={{ opacity: 1, rotateX: 0, z: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-text-3d block text-[#fdf0d5]"
            style={reduceMotion ? undefined : { z: plainDepth, transformStyle: "preserve-3d" }}
          >
            {line.text}
          </motion.span>
        ))}

        {blockLines.length > 0 && (
          <motion.span
            initial={{ opacity: 0, rotateX: 50, z: -60 }}
            animate={{ opacity: 1, rotateX: 0, z: 24 }}
            transition={{ delay: 0.35, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="name-block-label hero-block-3d mt-2 inline-block max-w-full"
            style={
              reduceMotion
                ? undefined
                : {
                    x: blockShift.x,
                    y: blockShift.y,
                    z: 28,
                    transformStyle: "preserve-3d",
                  }
            }
          >
            {blockLines.map((line) => (
              <span key={line.text} className="block text-[#fdf0d5]">
                {line.text}
              </span>
            ))}
          </motion.span>
        )}
      </motion.h1>
    </div>
  );
}
