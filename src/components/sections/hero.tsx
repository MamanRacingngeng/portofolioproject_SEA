"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { useParallax } from "@/hooks/use-parallax";
import { ParallaxScene } from "@/components/hero/parallax-scene";
import { Marquee } from "@/components/ui/marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.35 + i * 0.12,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  const { t } = useLanguage();
  const { heroOpacity, scrollY, getTransform } = useParallax();
  const year = t.site.patent.published.split(" ").pop();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <ParallaxScene getTransform={getTransform} scrollY={scrollY} />

      <div
        className="relative z-20 flex min-h-[100dvh] flex-col items-center justify-center px-6 pb-28 pt-24 text-center sm:px-10 sm:pb-32"
        style={{ opacity: heroOpacity }}
      >
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-fresh-200/90 sm:text-[11px]"
        >
          {siteConfig.location} · {t.home.hero.classOf} {siteConfig.cohort}
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-title mb-4 font-display font-semibold uppercase tracking-[0.08em] text-white"
        >
          {siteConfig.brand.wordmark}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-3 max-w-xl text-sm font-medium tracking-[0.04em] text-cream-100/90 sm:text-base"
        >
          {t.home.hero.subtitle}
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 max-w-lg text-xs leading-relaxed text-cream-200/75 sm:text-sm"
        >
          {t.home.hero.tagline}
        </motion.p>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}>
          <Link href="#about" className="hero-explore-btn group">
            <span>{t.home.hero.explore}</span>
            <span className="hero-explore-btn-shine" aria-hidden />
          </Link>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 sm:gap-12"
        >
          {t.site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-fresh-200/70 sm:text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="hidden text-center sm:block">
            <p className="font-display text-2xl font-semibold text-wheat-400 sm:text-3xl">
              {year}
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-fresh-200/70 sm:text-[10px]">
              {t.home.hero.patentStamp}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-1 text-white/70 transition-colors hover:text-white sm:bottom-28"
        style={{ opacity: Math.max(0, 1 - scrollY / 280) }}
        aria-label={t.home.hero.scrollHint}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
          {t.home.hero.scrollHint}
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.a>

      <div className="relative z-20 border-t border-white/10 bg-earth-900/40 backdrop-blur-sm">
        <Marquee items={t.site.roles} />
      </div>
    </section>
  );
}
