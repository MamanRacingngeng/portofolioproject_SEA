"use client";

import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ParallaxLayer({ children, className, style }: ParallaxLayerProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 will-change-transform", className)}
      style={style}
      aria-hidden
    >
      {children}
    </div>
  );
}
