"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import { Marquee } from "@/components/ui/marquee";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative border-b-2 border-ink pt-[var(--header-height)]">
      <div className="container-app mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 py-12 lg:grid-cols-2 lg:gap-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Logo variant="hero" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg">
              {t.home.hero.subtitle}
            </p>
            <p className="mt-3 text-sm text-ink/60">{siteConfig.location}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.site.roles.slice(0, 4).map((role, i) => (
                <span
                  key={role}
                  className="v26-sticker"
                  style={{
                    background:
                      i % 4 === 0
                        ? "#ffd400"
                        : i % 4 === 1
                          ? "#5b9eff"
                          : i % 4 === 2
                            ? "#ff6b4a"
                            : "#7dffb2",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.cvUrl} download={siteConfig.cvFileName} target="_blank" rel="noopener noreferrer">
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
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -right-3 -top-3 z-10 v26-sticker bg-v26coral text-white">
              {t.home.hero.patentStamp}
            </div>
            <div className="v26-card rotate-1 overflow-hidden bg-v26sky p-3 sm:p-4">
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink bg-white">
                <PortraitImage
                  src="/images/portrait.png"
                  alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                  hint={t.common.tapForColor}
                  ariaSuffix={t.common.portraitAriaSuffix}
                  priority
                />
              </div>
              <p className="label-font mt-4 text-center text-[10px] font-bold tracking-[0.16em] text-ink/70">
                {t.site.university}
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden h-20 w-20 border-2 border-ink bg-v26yellow lg:block" />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-3 border-t-2 border-ink py-6 sm:grid-cols-3">
          {t.site.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="v26-card p-4 text-center"
              style={{ background: i === 0 ? "#ffd400" : i === 1 ? "#fff" : "#5b9eff" }}
            >
              <p className="display-font text-2xl sm:text-3xl">{stat.value}</p>
              <p className="label-font mt-1 text-[9px] font-semibold tracking-wider text-ink/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Marquee items={t.site.roles} />
    </section>
  );
}
