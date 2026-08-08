"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Download, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import { FoodTechBg } from "@/components/decorations/food-tech-bg";
import { GradientText } from "@/components/motion/animations";

const pillColors = [
  "bg-fresh-100 text-fresh-700 hover:bg-fresh-200",
  "bg-citrus-100 text-citrus-600 hover:bg-citrus-200",
  "bg-pink-100 text-pink-600 hover:bg-pink-200",
  "bg-wheat-100 text-amber-700 hover:bg-wheat-200",
];

export function HeroSection() {
  const { t } = useLanguage();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 80, damping: 20 });
  const springY = useSpring(my, { stiffness: 80, damping: 20 });
  const portraitX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const portraitY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      className="mesh-section relative min-h-[90dvh] overflow-hidden pt-[var(--header-height)]"
      onMouseMove={handleMove}
    >
      <FoodTechBg variant="hero" />

      <div className="container-app relative z-10 mx-auto max-w-7xl px-4 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-fresh-200/80 bg-white/70 px-3 py-1.5 text-xs font-semibold text-fresh-700 shadow-sm backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-citrus-500" />
              {t.brand.tagline}
            </motion.div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight xs:text-5xl sm:text-6xl lg:text-7xl">
              <span className="block text-foreground">{siteConfig.brand.wordmark}</span>
              <GradientText className="mt-1 block text-3xl xs:text-4xl sm:text-5xl lg:text-6xl">
                {t.home.hero.subtitle}
              </GradientText>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.site.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.site.roles.slice(0, 4).map((role, i) => (
                <motion.span
                  key={role}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className={`food-pill ${pillColors[i % pillColors.length]}`}
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
          </motion.div>

          <motion.div
            style={{ x: portraitX, y: portraitY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="absolute -inset-4 animate-blob rounded-[2.5rem] bg-gradient-to-br from-fresh-300/40 via-citrus-200/30 to-berry-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/80 bg-gradient-to-br from-fresh-100 to-cream-100 p-3 shadow-soft sm:rounded-[2.5rem] sm:p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                <PortraitImage
                  src="/images/portrait.png"
                  alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                  hint={t.common.tapForColor}
                  ariaSuffix={t.common.portraitAriaSuffix}
                  priority
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-6 rounded-2xl bg-white/90 px-3 py-2 shadow-card backdrop-blur-md sm:-right-4"
              >
                <p className="text-lg font-bold text-fresh-600">1</p>
                <p className="text-[10px] font-medium text-muted-foreground">
                  {t.site.stats[0].label}
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-2 bottom-16 rounded-2xl bg-gradient-to-br from-citrus-400 to-citrus-500 px-3 py-2 text-white shadow-glow-citrus sm:-left-4"
              >
                <p className="text-lg font-bold">{t.home.hero.patentStamp}</p>
                <p className="text-[10px] opacity-90">Sacha Inchi Natto</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:mt-16"
        >
          {t.site.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-4 text-center sm:p-5"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(255,255,255,0.8))"
                    : i === 1
                      ? "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(255,255,255,0.8))"
                      : "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(255,255,255,0.8))",
              }}
            >
              <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-muted-foreground"
        aria-label={t.home.hero.scrollHint}
      >
        <span>{t.home.hero.scrollHint}</span>
        <ChevronDown className="h-4 w-4 text-fresh-500" />
      </motion.a>
    </section>
  );
}
