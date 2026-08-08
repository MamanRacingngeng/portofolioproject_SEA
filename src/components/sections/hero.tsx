"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { useParallax } from "@/hooks/use-parallax";
import { ParallaxScene } from "@/components/hero/parallax-scene";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.45 + i * 0.14,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  const { t } = useLanguage();
  const { heroOpacity, scrollY, getTransform } = useParallax();

  return (
    <section className="relative h-[100dvh] min-h-[640px] overflow-hidden">
      <ParallaxScene getTransform={getTransform} scrollY={scrollY} />

      <div
        className="pointer-events-none relative z-20 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity: heroOpacity }}
      >
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-origin-title pointer-events-auto text-white"
        >
          {siteConfig.brand.wordmark}
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-origin-subtitle pointer-events-auto mt-4 max-w-md text-white/92 sm:max-w-lg"
        >
          {t.home.hero.subtitle}
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="pointer-events-auto mt-8"
        >
          <Link href="#about" className="hero-origin-explore group">
            <span>{t.home.hero.explore}</span>
            <span className="hero-origin-explore-shine" aria-hidden />
          </Link>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#061428] to-transparent"
        style={{ opacity: Math.min(1, scrollY / 120) }}
        aria-hidden
      />
    </section>
  );
}
