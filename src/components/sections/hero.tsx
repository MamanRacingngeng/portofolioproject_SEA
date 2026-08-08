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
import { FloatingElement, FloatingField } from "@/components/motion/floating";

const chipStyles = ["chip-mint", "chip-honey", "chip-coral", "chip-violet"] as const;
const statColors = [
  "bg-gradient-to-br from-blue-600 to-blue-700 text-white",
  "bg-gradient-to-br from-cyan-500 to-cyan-600 text-white",
  "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white",
] as const;

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-[var(--header-height)]">
      <div className="grid min-h-[calc(100dvh-var(--header-height))] grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="band-mint relative flex flex-col justify-center overflow-hidden px-6 py-12 text-white sm:px-10 lg:px-12 lg:py-16"
        >
          <FloatingField variant="hero-mint" />
          <div className="relative z-10 max-w-xl">
            <HeroLabel>{t.brand.tagline}</HeroLabel>
            <HeroNameDisplay />
            <p className="mt-5 text-lg font-medium text-blue-100 sm:text-xl">{t.home.hero.subtitle}</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:text-base">
              {t.site.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.site.roles.slice(0, 3).map((role, i) => (
                <motion.span
                  key={role}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`${chipStyles[i]} !text-xs`}
                >
                  {role}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.cvUrl}
                download={siteConfig.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="honey" size="lg">
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
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="hero-panel-light relative flex flex-col justify-center overflow-hidden p-6 sm:p-10 lg:p-12"
        >
          <FloatingField variant="hero-honey" />
          <FloatingElement y={14} duration={6} className="relative z-[1] mx-auto w-full max-w-sm">
            <div className="relative">
              <div
                className="absolute -right-2 -top-2 h-full w-full rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-400 animate-float-slow shadow-glow"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-3xl border-4 border-white bg-white shadow-lift">
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
              <div className="absolute -bottom-3 -left-2 rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-4">
                <p className="font-display text-xl font-bold text-blue-700">{t.home.hero.patentStamp}</p>
                <p className="text-xs font-medium text-muted-foreground">Sacha Inchi Natto</p>
              </div>
            </div>
          </FloatingElement>
          <p className="relative z-[1] mt-8 text-center text-sm font-medium text-blue-800/70">
            {siteConfig.name} · {t.site.university}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-blue-200/50">
        {t.site.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`px-4 py-6 text-center sm:px-6 sm:py-8 ${statColors[i]}`}
          >
            <p className="font-display text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-90">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <MarqueeStrip items={t.site.roles} />
    </section>
  );
}
