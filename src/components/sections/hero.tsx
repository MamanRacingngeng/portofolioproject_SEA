"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { useParallax } from "@/hooks/use-parallax";
import { ParallaxScene } from "@/components/hero/parallax-scene";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.12,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  const { t } = useLanguage();
  const { heroOpacity, getTransform } = useParallax();

  return (
    <section className="relative isolate h-[100svh] min-h-[600px] w-full overflow-hidden">
      <ParallaxScene getTransform={getTransform} />

      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 pb-8 pt-20 text-center sm:px-10"
        style={{ opacity: heroOpacity }}
      >
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-origin-title text-white"
        >
          {siteConfig.brand.wordmark}
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hero-origin-subtitle mt-4 max-w-md text-white/90 sm:max-w-xl"
        >
          {t.home.hero.subtitle}
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8"
        >
          <Link href="#about" className="hero-origin-explore group">
            <span>{t.home.hero.explore}</span>
            <span className="hero-origin-explore-shine" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
