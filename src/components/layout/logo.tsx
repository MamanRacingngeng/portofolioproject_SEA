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
  const year = new Date().getFullYear();

  if (variant === "hero") {
    return (
      <Link href="/" className={cn("group inline-block", className)}>
        <p className="label-font text-xs font-bold tracking-[0.35em] text-ink/60">
          {t.home.hero.portfolioLabel} {year}
        </p>
        <p className="display-font mt-2 text-5xl leading-none text-ink sm:text-7xl lg:text-8xl">
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
      <span className="display-font text-xl leading-none text-ink sm:text-2xl">
        {siteConfig.brand.wordmark}
      </span>
      <span className="label-font text-[9px] font-semibold tracking-[0.18em] text-ink/50">
        {t.brand.tagline}
      </span>
    </Link>
  );
}
