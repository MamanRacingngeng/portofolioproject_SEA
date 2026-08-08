"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { FloatingFoodHero } from "@/components/ui/hero-section-7";
import { Button } from "@/components/ui/button";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=640&q=80",
    alt: "Fresh healthy food bowl",
    className:
      "w-40 sm:w-56 md:w-64 lg:w-72 top-10 left-4 sm:left-10 md:top-20 md:left-20",
  },
  {
    src: "https://images.unsplash.com/photo-1604329760661-e71f186e2b8b?w=640&q=80",
    alt: "Nuts and seeds for food innovation",
    className:
      "w-28 sm:w-36 md:w-48 top-10 right-4 sm:right-10 md:top-16 md:right-16",
  },
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=640&q=80",
    alt: "Colorful fresh ingredients",
    className:
      "w-32 sm:w-40 md:w-56 bottom-8 right-5 sm:right-10 md:bottom-16 md:right-20",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b85?w=256&q=80",
    alt: "Fresh basil leaves",
    className: "w-8 sm:w-12 top-1/4 left-1/3",
  },
  {
    src: "https://images.unsplash.com/photo-1546099662-7a34e1483649?w=256&q=80",
    alt: "Fresh tomatoes",
    className: "w-8 sm:w-10 top-1/2 right-1/4",
  },
  {
    src: "https://images.unsplash.com/photo-1532187863486-abf9db581978?w=256&q=80",
    alt: "Laboratory glassware",
    className: "w-10 sm:w-14 top-3/4 left-1/4",
  },
] as const;

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <FloatingFoodHero
      title={t.home.hero.floatingTitle}
      description={t.home.hero.floatingDescription}
      images={[...HERO_IMAGES]}
      className="pt-[var(--header-height)]"
    >
      <a
        href={siteConfig.cvUrl}
        download={siteConfig.cvFileName}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg">
          <Download className="h-4 w-4" />
          {t.common.downloadCv}
        </Button>
      </a>
      <Link href="/projects">
        <Button variant="outline" size="lg">
          {t.common.viewWork}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </Link>
    </FloatingFoodHero>
  );
}
