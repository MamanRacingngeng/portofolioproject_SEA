"use client";

import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import { RevealOnScroll } from "@/components/motion/animations";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border pt-[var(--header-height)]">
      <div className="container-app mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
          <RevealOnScroll>
            <p className="section-eyebrow">{t.brand.tagline}</p>
            <h1 className="font-serif mt-4 text-[2.75rem] leading-[1.05] text-foreground xs:text-5xl sm:text-6xl lg:text-7xl">
              {siteConfig.brand.wordmark}
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-foreground/80 sm:text-3xl">
              {t.home.hero.subtitle}
            </p>
            <p className="mt-6 max-w-prose text-base leading-[1.7] text-muted-foreground sm:text-lg">
              {t.site.summary}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
              {t.site.roles.slice(0, 4).map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
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
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="lg:pt-8">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <PortraitImage
                  src="/images/portrait.png"
                  alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                  hint={t.common.tapForColor}
                  ariaSuffix={t.common.portraitAriaSuffix}
                  priority
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4 border-t border-border pt-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">{siteConfig.name}</p>
                  <p className="text-muted-foreground">{t.site.university}</p>
                </div>
                <p className="text-right text-muted-foreground">
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-3 border-t border-border">
          {t.site.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-border px-4 py-6 last:border-r-0 sm:px-6 sm:py-8"
            >
              <p className="font-serif text-3xl text-foreground sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
