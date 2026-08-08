"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";

interface LogoProps {
  variant?: "nav" | "footer" | "hero";
  className?: string;
}

export function Logo({ variant = "nav", className }: LogoProps) {
  const { t } = useLanguage();

  if (variant === "hero") {
    return (
      <Link href="/" className={cn("group inline-block", className)}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t.home.hero.portfolioLabel} {new Date().getFullYear()}
        </p>
        <p className="font-display mt-2 text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span className="gradient-text">{siteConfig.brand.wordmark}</span>
        </p>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2", className)}
      aria-label={`${siteConfig.brand.wordmark} — ${t.brand.tagline}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fresh-500 to-fresh-600 text-sm font-bold text-white shadow-glow transition-transform group-hover:scale-105">
        G
      </span>
      <span className="hidden flex-col sm:flex">
        <span className="font-display text-lg font-bold leading-none text-foreground">
          {siteConfig.brand.wordmark}
        </span>
        <span className="text-[10px] font-medium text-muted-foreground">
          {t.brand.tagline}
        </span>
      </span>
    </Link>
  );
}
