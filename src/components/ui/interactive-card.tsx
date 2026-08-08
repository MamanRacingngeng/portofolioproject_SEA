"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  accent?: "green" | "citrus" | "berry" | "wheat";
}

const accentGlow = {
  green: "hover:shadow-glow",
  citrus: "hover:shadow-glow-citrus",
  berry: "hover:shadow-[0_0_40px_-8px_rgba(236,72,153,0.35)]",
  wheat: "hover:shadow-[0_0_40px_-8px_rgba(250,204,21,0.4)]",
};

export function InteractiveCard({
  children,
  className,
  accent = "green",
}: InteractiveCardProps) {
  return (
    <motion.div
      className={cn("glass-card", accentGlow[accent], className)}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
