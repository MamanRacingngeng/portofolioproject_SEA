"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import { HeroLabel } from "@/components/ui/hero-label";
import { HeroNameDisplay } from "@/components/ui/hero-name-display";
import { MarqueeStrip } from "@/components/ui/marquee-strip";

const statColors = [
  "bg-[#003049] text-[#fdf0d5]",
  "bg-[#669bbc] text-[#fdf0d5]",
  "bg-[#780000] text-[#fdf0d5]",
] as const;

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-[var(--header-height)]">
      <div className="grid min-h-[calc(100dvh-var(--header-height))] grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="band-mint flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-12 lg:py-16"
        >
          <div className="max-w-xl">
            <HeroLabel>{t.brand.tagline}</HeroLabel>
            <HeroNameDisplay />
            <p className="mt-5 text-lg font-medium text-[#669bbc] sm:text-xl">{t.home.hero.subtitle}</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#fdf0d5]/85 sm:text-base">
              {t.site.summary}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {t.site.roles.slice(0, 3).map((role) => (
                <li
                  key={role}
                  className="rounded-md border border-[#669bbc]/50 px-3 py-1.5 text-xs font-medium text-[#fdf0d5]"
                >
                  {role}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.cvUrl}
                download={siteConfig.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="coral" size="lg">
                  <Download className="h-4 w-4" />
                  {t.common.downloadCv}
                </Button>
              </a>
              <Link href="/projects">
                <Button variant="white" size="lg">
                  {t.common.viewWork}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="hero-panel-light flex flex-col justify-center border-t border-[#003049]/10 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
        >
          <div className="mx-auto w-full max-w-sm">
            <div className="relative animate-float-slow">
              <div
                className="absolute -right-2 -top-2 h-full w-full rounded-lg bg-[#c1121f]"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-lg border-2 border-[#003049] bg-white">
                <div className="aspect-[4/5]">
                  <PortraitImage
                    src="/images/portrait.png"
                    alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                    hint={t.common.tapForColor}
                    ariaSuffix={t.common.portraitAriaSuffix}
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -left-2 border border-[#003049]/15 bg-white px-4 py-3 shadow-sm sm:-left-4">
                <p className="font-display text-xl font-bold text-[#003049]">{t.home.hero.patentStamp}</p>
                <p className="text-xs text-muted-foreground">Sacha Inchi Natto</p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-medium text-[#003049]/70">
            {siteConfig.name} · {t.site.university}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 border-y border-[#003049]/15">
        {t.site.stats.map((stat, i) => (
          <div key={stat.label} className={`px-4 py-6 text-center sm:px-6 sm:py-8 ${statColors[i]}`}>
            <p className="font-display text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>

      <MarqueeStrip items={t.site.roles} />
    </section>
  );
}
