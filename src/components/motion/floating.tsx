"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  rotate?: number;
}

export function FloatingElement({
  children,
  className,
  delay = 0,
  duration = 5,
  y = 14,
  x = 0,
  rotate = 0,
}: FloatingElementProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition: Transition = {
    duration,
    delay,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  };

  return (
    <motion.div
      className={className}
      animate={{
        y: [-y / 2, y / 2],
        ...(x ? { x: [-x / 2, x / 2] } : {}),
        ...(rotate ? { rotate: [-rotate / 2, rotate / 2] } : {}),
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  rotate?: number;
}

export function FloatingShape({
  className,
  delay = 0,
  duration = 6,
  y = 18,
  x = 8,
  rotate = 6,
}: FloatingShapeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn("pointer-events-none absolute", className)} aria-hidden="true" />;
  }

  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      animate={{
        y: [-y / 2, y / 2],
        x: [-x / 2, x / 2],
        rotate: [-rotate, rotate],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
}

interface FloatingFieldProps {
  variant?: "hero-mint" | "hero-honey" | "section" | "page" | "fiery-ocean";
  className?: string;
}

const shapeSets = {
  "hero-mint": [
    "top-[12%] right-[8%] h-14 w-14 rounded-full bg-[#669bbc]/25 sm:h-20 sm:w-20 blur-[1px]",
    "bottom-[18%] left-[6%] h-20 w-20 rounded-2xl bg-[#fdf0d5]/10 sm:h-28 sm:w-28",
    "top-[55%] right-[18%] h-10 w-10 rounded-full bg-[#c1121f]/15",
    "bottom-[8%] right-[30%] h-16 w-8 rounded-full bg-[#669bbc]/20",
  ],
  "hero-honey": [
    "top-[10%] left-[10%] h-12 w-12 rounded-full bg-[#669bbc]/20 sm:h-16 sm:w-16",
    "top-[40%] right-[8%] h-24 w-24 rounded-3xl bg-[#c1121f]/10 sm:h-32 sm:w-32",
    "bottom-[15%] left-[20%] h-8 w-8 rounded-full bg-[#780000]/15",
  ],
  section: [
    "top-8 right-6 h-12 w-12 rounded-full bg-[#669bbc]/15",
    "bottom-10 left-8 h-16 w-16 rounded-2xl bg-[#c1121f]/10",
    "top-1/2 right-[12%] h-6 w-6 rounded-full bg-[#780000]/15",
  ],
  page: [
    "top-6 right-10 h-10 w-10 rounded-full bg-[#669bbc]/15",
    "bottom-8 left-12 h-14 w-14 rounded-2xl bg-[#c1121f]/10",
  ],
  "fiery-ocean": [
    "top-[6%] right-[4%] h-20 w-20 rounded-full bg-[#669bbc]/18 blur-[1px] sm:h-28 sm:w-28",
    "bottom-[10%] left-[3%] h-24 w-24 rounded-3xl bg-[#c1121f]/12 sm:h-32 sm:w-32",
    "top-[42%] right-[14%] h-10 w-10 rounded-full bg-[#780000]/18",
    "bottom-[22%] right-[28%] h-14 w-7 rounded-full bg-[#669bbc]/15",
  ],
};

export function FloatingField({ variant = "section", className }: FloatingFieldProps) {
  const shapes = shapeSets[variant];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {shapes.map((shapeClass, i) => (
        <FloatingShape
          key={shapeClass}
          className={shapeClass}
          delay={i * 0.45}
          duration={5 + i * 0.8}
          y={12 + i * 4}
          x={6 + i * 2}
          rotate={4 + i * 2}
        />
      ))}
    </div>
  );
}
