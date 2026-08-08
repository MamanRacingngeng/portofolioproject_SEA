"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PortraitImageProps {
  src: string;
  alt: string;
  hint?: string;
  ariaSuffix?: string;
  priority?: boolean;
  containerClassName?: string;
  imageClassName?: string;
  sizes?: string;
}

export function PortraitImage({
  src,
  alt,
  hint = "Tap for color",
  ariaSuffix = "tap to reveal full color",
  priority = false,
  containerClassName,
  imageClassName,
  sizes = "(max-width: 640px) 85vw, (max-width: 1024px) 320px, 384px",
}: PortraitImageProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      aria-label={`${alt} — ${ariaSuffix}`}
      aria-pressed={revealed}
      onClick={() => setRevealed((prev) => !prev)}
      className={cn(
        "relative block h-full w-full min-h-[240px] overflow-hidden",
        "cursor-pointer touch-manipulation select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "group portrait-touch rounded-inherit",
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        draggable={false}
        className={cn(
          "object-cover object-top",
          "grayscale contrast-[1.05] brightness-[1.02]",
          "transition-[filter,transform] duration-700 ease-out",
          "motion-reduce:transition-none motion-reduce:transform-none",
          "group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.03]",
          "group-active:grayscale-0 group-active:contrast-100 group-active:brightness-100 group-active:scale-[1.02]",
          revealed &&
            "grayscale-0 contrast-100 brightness-100 scale-[1.03]",
          imageClassName
        )}
      />
      <span
        className={cn(
          "pointer-events-none absolute bottom-2 left-1/2 z-10 -translate-x-1/2 sm:bottom-3",
          "max-w-[90%] truncate rounded-full bg-earth-700/80 px-2.5 py-1",
          "text-[9px] font-medium text-white backdrop-blur-sm sm:px-3 sm:text-[10px]",
          "opacity-100 transition-opacity duration-500",
          "md:group-hover:opacity-0 group-active:opacity-0",
          revealed && "opacity-0"
        )}
      >
        {hint}
      </span>
    </button>
  );
}
