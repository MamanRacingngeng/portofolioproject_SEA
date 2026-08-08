"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import { MarqueeStrip } from "@/components/ui/marquee-strip";

const chipStyles = ["chip-mint", "chip-honey", "chip-coral", "chip-violet"] as const;
const statColors = ["bg-mint text-white", "bg-honey text-amber-950", "bg-coral text-white"] as const;

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-[var(--header-height)]">
      <div className="grid min-h-[calc(100dvh-var(--header-height))] grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="band-mint flex flex-col justify-center px-6 py-12 text-white sm:px-10 lg:px-12 lg:py-16"
        >
          <span className="mb-4 inline-block w-fit rounded-lg bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            {t.brand.tagline}
          </span>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] xs:text-6xl sm:text-7xl lg:text-8xl">
            {siteConfig.brand.wordmark}
          </h1>
          <p className="mt-4 text-xl font-medium text-emerald-100 sm:text-2xl">{t.home.hero.subtitle}</p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-emerald-50/90">{t.site.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.site.roles.slice(0, 4).map((role, i) => (
              <motion.span
                key={role}
                whileHover={{ scale: 1.05 }}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative flex flex-col justify-end bg-honey-light p-6 sm:p-10 lg:p-12"
        >
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-coral" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <div className="aspect-[4/5] bg-white">
                <PortraitImage
                  src="/images/portrait.png"
                  alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                  hint={t.common.tapForColor}
                  ariaSuffix={t.common.portraitAriaSuffix}
                  priority
                />
              </div>
            </div>
            <div className="absolute -left-2 bottom-8 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-4">
              <p className="font-display text-2xl font-bold text-mint">{t.home.hero.patentStamp}</p>
              <p className="text-xs font-medium text-muted-foreground">Sacha Inchi Natto</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm font-medium text-amber-900/80">
            {siteConfig.name} · {t.site.university}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-border">
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
