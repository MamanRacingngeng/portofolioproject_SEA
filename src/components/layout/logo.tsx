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
        <p className="mt-2 text-5xl font-bold tracking-tight text-primary sm:text-7xl">
          {siteConfig.brand.wordmark}
        </p>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn("group inline-flex flex-col gap-0.5", className)}
      aria-label={`${siteConfig.brand.wordmark} — ${t.brand.tagline}`}
    >
      <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {siteConfig.brand.wordmark}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {t.brand.tagline}
      </span>
    </Link>
  );
}
