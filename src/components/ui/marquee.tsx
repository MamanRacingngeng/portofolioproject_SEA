"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-earth-200/80 bg-earth-800 py-3",
        className
      )}
    >
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap px-4">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-cream-200/90"
          >
            {item}
            <span className="text-wheat-400">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
