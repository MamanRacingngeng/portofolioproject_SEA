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
        "overflow-hidden border-t-2 border-ink bg-ink py-3",
        className
      )}
    >
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap px-4">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="label-font flex items-center gap-10 text-xs font-bold tracking-[0.2em] text-v26yellow"
          >
            {item}
            <span className="text-white">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
