"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import { Marquee } from "@/components/ui/marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  const { t } = useLanguage();
  const [firstName, ...rest] = siteConfig.name.split(" ");
  const lastName = rest.join(" ");
  const year = t.site.patent.published.split(" ").pop();

  return (
    <section className="relative flex min-h-[100dvh] flex-col pt-[var(--header-height)]">
      <div className="container-app mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
        <div className="order-2 lg:order-1">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-fresh-700"
          >
            {siteConfig.location} · {t.home.hero.classOf} {siteConfig.cohort}
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 font-display text-[2.75rem] font-semibold leading-[0.95] text-earth-700 xs:text-5xl sm:text-6xl lg:text-7xl"
          >
            {firstName}
            <br />
            <span className="text-fresh-700">{lastName}</span>
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 flex flex-wrap items-center gap-4"
          >
            <div className="accent-line" />
            <p className="max-w-md text-sm leading-relaxed text-earth-600 sm:text-base">
              {t.site.heroIntro.beforeEmphasis}{" "}
              <span className="font-semibold text-earth-700">
                {t.site.heroIntro.emphasis}
              </span>{" "}
              {t.site.heroIntro.afterEmphasis}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 flex flex-wrap gap-3"
          >
            <a
              href={siteConfig.cvUrl}
              download={siteConfig.cvFileName}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="heroPrimary"
                size="lg"
                className="rounded-md shadow-[3px_3px_0_rgba(48,102,64,0.35)]"
              >
                <Download className="h-4 w-4" />
                {t.common.downloadCv}
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="heroOutline"
                size="lg"
                className="rounded-md border-earth-300"
              >
                <Mail className="h-4 w-4" />
                {t.common.contact}
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" size="lg" className="rounded-md">
                {t.common.viewWork}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-6 border-t border-earth-200/80 pt-6"
          >
            {t.site.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-fresh-700 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-earth-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
            <div className="absolute -right-3 -top-3 z-10 stamp-badge bg-cream-50">
              {t.home.hero.patentStamp} · {year}
            </div>
            <div className="polaroid-frame rotate-1 transition-transform duration-300 hover:rotate-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-earth-100">
                <PortraitImage
                  src="/images/portrait.png"
                  alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                  hint={t.common.tapForColor}
                  ariaSuffix={t.common.portraitAriaSuffix}
                  priority
                />
              </div>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-earth-500">
                {t.site.university}
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-l-2 border-b-2 border-fresh-400/40 lg:block" />
          </div>
        </motion.div>
      </div>

      <Marquee items={t.site.roles} />
    </section>
  );
}
