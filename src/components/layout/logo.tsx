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

  return (
    <Link
      href="/"
      className={cn("group inline-block", className)}
      aria-label={`${siteConfig.brand.wordmark} — ${t.brand.tagline}`}
    >
      <span className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
        {siteConfig.brand.wordmark}
      </span>
      {variant !== "nav" && (
        <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-muted-foreground">
          {t.brand.tagline}
        </span>
      )}
    </Link>
  );
}
