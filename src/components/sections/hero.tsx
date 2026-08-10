"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { HeroLabel } from "@/components/ui/hero-label";
import { Hero3DName } from "@/components/ui/hero-3d-name";
import { Hero3DPortrait } from "@/components/ui/hero-3d-portrait";
import { Hero3DBackground } from "@/components/ui/hero-3d-background";
import { MarqueeStrip } from "@/components/ui/marquee-strip";

const statColors = [
  "bg-[#003049] text-[#fdf0d5]",
  "bg-[#669bbc] text-[#fdf0d5]",
  "bg-[#780000] text-[#fdf0d5]",
] as const;

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.45 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero-scene relative overflow-hidden pt-[var(--header-height)]">
      <div className="grid min-h-[calc(100dvh-var(--header-height))] grid-cols-1 lg:grid-cols-2">
        <div className="band-mint relative flex flex-col justify-center overflow-hidden px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
          <Hero3DBackground variant="navy" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-xl"
          >
            <motion.div custom={0} variants={contentVariants} initial="hidden" animate="visible">
              <HeroLabel>{t.brand.tagline}</HeroLabel>
            </motion.div>

            <Hero3DName />

            <motion.p
              custom={1}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="mt-5 text-lg font-medium text-[#669bbc] sm:text-xl"
            >
              {t.home.hero.subtitle}
            </motion.p>
            <motion.p
              custom={2}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-lg text-sm leading-relaxed text-[#fdf0d5]/85 sm:text-base"
            >
              {t.site.summary}
            </motion.p>

            <motion.ul
              custom={3}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-2"
            >
              {t.site.roles.slice(0, 3).map((role) => (
                <motion.li
                  key={role}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="rounded-md border border-[#669bbc]/50 bg-[#003049]/30 px-3 py-1.5 text-xs font-medium text-[#fdf0d5] backdrop-blur-sm"
                >
                  {role}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              custom={4}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={siteConfig.cvUrl}
                download={siteConfig.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="coral" size="lg" className="shadow-accent">
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
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-panel-light relative flex flex-col justify-center overflow-hidden border-t border-[#003049]/10 p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          <Hero3DBackground variant="sand" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <Hero3DPortrait
              portraitAlt={t.common.portraitAlt}
              hint={t.common.tapForColor}
              ariaSuffix={t.common.portraitAriaSuffix}
              patentStamp={t.home.hero.patentStamp}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="relative z-10 mt-10 text-center text-sm font-medium text-[#003049]/70"
          >
            {siteConfig.name} · {t.site.university}
          </motion.p>
        </div>
      </div>

      <div className="relative grid grid-cols-3 border-y border-[#003049]/15">
        {t.site.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className={`px-4 py-6 text-center sm:px-6 sm:py-8 ${statColors[i]}`}
          >
            <motion.p
              className="font-display text-3xl font-extrabold sm:text-4xl"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, type: "spring", stiffness: 200 }}
            >
              {stat.value}
            </motion.p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-90">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <MarqueeStrip items={t.site.roles} />
    </section>
  );
}
