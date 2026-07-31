"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";

interface LogoProps {
  variant?: "nav" | "footer" | "hero";
  theme?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

const wordmarkSizes = {
  nav: "text-[1.35rem] sm:text-[1.5rem]",
  footer: "text-[1.65rem] sm:text-[1.85rem]",
  hero: "text-4xl sm:text-5xl lg:text-6xl",
};

const taglineSizes = {
  nav: "text-[0.58rem] sm:text-[0.62rem] mt-0.5",
  footer: "text-[0.62rem] sm:text-[0.68rem] mt-1",
  hero: "text-[0.7rem] sm:text-xs mt-1.5",
};

export function Logo({
  variant = "nav",
  theme = "light",
  className,
  showTagline = variant !== "hero",
}: LogoProps) {
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex min-w-0 shrink-0 flex-col transition-all duration-300",
        "hover:opacity-95 active:scale-[0.98]",
        className
      )}
      aria-label={`${siteConfig.brand.wordmark} — ${siteConfig.name} Portfolio`}
    >
      <span className="relative inline-flex items-center gap-2">
        <span
          className={cn(
            "brand-wordmark uppercase transition-transform duration-300 group-hover:-translate-y-px group-hover:rotate-[-1deg]",
            wordmarkSizes[variant],
            isDark
              ? "text-white"
              : "bg-gradient-to-br from-earth-800 via-fresh-700 to-fresh-600 bg-clip-text text-transparent"
          )}
        >
          {siteConfig.brand.wordmark}
        </span>
        <span
          aria-hidden
          className={cn(
            "rounded-full transition-all duration-300 group-hover:scale-125",
            variant === "hero" ? "h-2 w-2" : "h-1.5 w-1.5",
            isDark ? "bg-wheat-400" : "bg-wheat-500"
          )}
        />
      </span>

      {showTagline && (
        <span
          className={cn(
            "brand-tagline",
            taglineSizes[variant],
            isDark ? "text-cream-300/90" : "text-fresh-600/75"
          )}
        >
          {t.brand.tagline}
        </span>
      )}

      <span
        aria-hidden
        className={cn(
          "mt-1 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
          variant === "nav" ? "w-10" : "w-12",
          isDark ? "bg-fresh-300/50" : "bg-fresh-400/60"
        )}
      />
    </Link>
  );
}

export function LogoMark({
  className,
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "brand-wordmark text-lg uppercase sm:text-xl",
        theme === "light" ? "text-fresh-700" : "text-white",
        className
      )}
    >
      {siteConfig.brand.wordmark}
    </span>
  );
}
