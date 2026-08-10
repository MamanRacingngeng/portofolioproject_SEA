"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Instagram, Sparkles } from "lucide-react";
import { getPkmReActivities } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { PosterCard } from "@/components/ui/poster-card";
import { FloatingShape } from "@/components/motion/floating";
import { RevealOnScroll } from "@/components/motion/animations";

const textVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export function PkmReSpotlight() {
  const { t } = useLanguage();
  const pkm = t.home.activities.pkmRe;
  const posters = getPkmReActivities(t);
  const reduceMotion = useReducedMotion();

  return (
    <RevealOnScroll className="mb-14">
      <div className="relative overflow-hidden rounded-2xl border border-[#003049]/15 shadow-accent">
        <div className="pkm-spotlight-bg relative overflow-hidden px-5 py-8 sm:px-10 sm:py-10">
          {!reduceMotion && (
            <>
              <FloatingShape
                className="left-[6%] top-[12%] h-24 w-24 rounded-full bg-[#669bbc]/25 blur-[2px]"
                duration={7}
                y={20}
                x={10}
              />
              <FloatingShape
                className="right-[8%] top-[20%] h-16 w-16 rounded-2xl bg-[#c1121f]/20"
                delay={0.8}
                duration={6}
                y={14}
                rotate={12}
              />
              <FloatingShape
                className="bottom-[15%] left-[35%] h-10 w-10 rounded-full bg-[#fdf0d5]/15"
                delay={1.2}
                duration={5}
                y={8}
              />
            </>
          )}

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div custom={0} variants={textVariants}>
                <Badge
                  variant="honey"
                  className="mb-4 animate-badge-glow border-[#fdf0d5]/30 bg-[#669bbc]/35 text-[#fdf0d5]"
                >
                  <Sparkles className="mr-1.5 inline h-3 w-3" />
                  {pkm.badge}
                </Badge>
              </motion.div>
              <motion.h3
                custom={1}
                variants={textVariants}
                className="font-display text-2xl font-extrabold leading-tight text-[#fdf0d5] sm:text-3xl lg:text-4xl"
              >
                {pkm.title}
              </motion.h3>
              <motion.p
                custom={2}
                variants={textVariants}
                className="mt-2 text-sm font-semibold text-[#669bbc] sm:text-base"
              >
                {pkm.subtitle}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="mt-4 max-w-md text-sm leading-relaxed text-[#fdf0d5]/85"
              >
                {pkm.description}
              </motion.p>
              <motion.a
                custom={4}
                variants={textVariants}
                href="https://instagram.com/pkmre_atensi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#669bbc]/50 bg-[#669bbc]/20 px-4 py-2.5 text-sm font-semibold text-[#fdf0d5] backdrop-blur-sm transition-colors hover:bg-[#669bbc]/35"
              >
                <Instagram className="h-4 w-4" />
                {pkm.socialLabel}: {pkm.socialHandle}
              </motion.a>
            </motion.div>

            <div className="relative lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
                {posters.map((item, i) => (
                  <PosterCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    caption={item.caption}
                    index={i}
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden border-t border-[#003049]/10 bg-[#780000] py-2">
          <div className="animate-marquee-scroll flex w-max gap-8 whitespace-nowrap px-4 text-xs font-bold uppercase tracking-[0.2em] text-[#fdf0d5]/90">
            {[...Array(4)].map((_, row) =>
              ["Fermentasi", "Penelitian", "PKM-RE 2024", "Sacha Inchi", "UAD", "Natto"].map(
                (word) => (
                  <span key={`${row}-${word}`} className="flex items-center gap-8">
                    {word}
                    <span className="text-[#c1121f]">◆</span>
                  </span>
                )
              )
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
