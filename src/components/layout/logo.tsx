"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";

interface LogoProps {
  variant?: "nav" | "footer" | "hero";
  light?: boolean;
  className?: string;
}

export function Logo({ variant = "nav", light = false, className }: LogoProps) {
  const { t } = useLanguage();

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${siteConfig.brand.wordmark} — ${t.brand.tagline}`}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-md font-display text-sm font-extrabold transition-colors",
          light ? "bg-[#fdf0d5] text-[#003049]" : "bg-[#003049] text-[#fdf0d5] group-hover:bg-[#780000]"
        )}
      >
        G
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display font-bold leading-none",
            variant === "nav" ? "text-base sm:text-lg" : "text-base sm:text-lg",
            light ? "text-[#fdf0d5]" : "text-[#003049]"
          )}
        >
          {variant === "nav" ? siteConfig.brand.wordmarkShort : siteConfig.brand.wordmark}
        </span>
        {variant !== "nav" && (
          <span className={cn("text-[10px] font-medium", light ? "text-[#669bbc]" : "text-muted-foreground")}>
            {t.brand.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
