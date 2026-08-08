"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="mb-4 flex items-end justify-between gap-4">
        <span
          className={cn(
            "label-font text-xs font-bold tracking-[0.2em]",
            dark ? "text-v26yellow" : "text-ink/60"
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "display-font text-4xl leading-none sm:text-5xl",
            dark ? "text-white/20" : "text-ink/10"
          )}
        >
          {index}
        </span>
      </div>
      <h2
        className={cn(
          "display-font mb-4 max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            dark ? "text-white/75" : "text-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
