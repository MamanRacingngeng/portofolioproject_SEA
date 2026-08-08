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
  mint: "bg-[#e8eef3]",
  honey: "bg-[#fdf0d5]",
  coral: "bg-[#fde8ea]",
  violet: "bg-[#e8eef3]",
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
        whileHover: { y: -2 },
        transition: { type: "spring" as const, stiffness: 400, damping: 30 },
      }
    : {};

  return (
    <Component
      className={cn(
        "rounded-lg border border-[#003049]/10 p-5 shadow-sm sm:p-6",
        tints[tint],
        className
      )}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
