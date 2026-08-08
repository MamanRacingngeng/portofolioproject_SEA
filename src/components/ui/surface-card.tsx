"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
  tint?: "white" | "mint" | "honey" | "coral" | "violet";
  interactive?: boolean;
}

const tints = {
  white: "bg-white",
  mint: "bg-mint-light/60",
  honey: "bg-honey-light/70",
  coral: "bg-coral-light/60",
  violet: "bg-violet-50",
};

export function SurfaceCard({
  children,
  className,
  tint = "white",
  interactive = true,
}: SurfaceCardProps) {
  const Component = interactive ? motion.div : "div";
  const motionProps = interactive
    ? {
        whileHover: { y: -6, scale: 1.01 },
        whileTap: { scale: 0.99 },
        transition: { type: "spring" as const, stiffness: 400, damping: 25 },
      }
    : {};

  return (
    <Component
      className={cn(
        "rounded-2xl p-5 shadow-md sm:p-6",
        tints[tint],
        interactive && "cursor-default",
        className
      )}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
