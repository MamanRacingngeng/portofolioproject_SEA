"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getActivities } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { cn } from "@/lib/utils";

function ParallaxActivityImage({
  src,
  alt,
  sizes,
  span,
  category,
}: {
  src: string;
  alt: string;
  sizes: string;
  span: "large" | "medium" | "small";
  category: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [span === "large" ? 36 : 22, -36]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        span === "large" ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3]"
      )}
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover scale-110 transition-transform duration-700 group-hover:scale-[1.15]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-earth-900/10 to-transparent" />
      <span className="absolute left-4 top-4 border border-white/30 bg-earth-900/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream-100 backdrop-blur-sm">
        {category}
      </span>
    </div>
  );
}

export function ActivitiesSection() {
  const { t } = useLanguage();
  const section = t.home.activities;
  const items = getActivities(t);

  return (
    <section id="activities" className="border-t border-earth-200/60 bg-white py-16 sm:py-24">
      <div className="container-app mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mb-10 sm:mb-14">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {items.map((item) => (
            <StaggerItem
              key={item.id}
              className={cn(
                item.span === "large" && "sm:col-span-2 lg:col-span-7",
                item.span === "medium" && "lg:col-span-5",
                item.span === "small" && "lg:col-span-4"
              )}
            >
              <figure className="editorial-card group h-full overflow-hidden">
                <ParallaxActivityImage
                  src={item.image}
                  alt={item.title}
                  span={item.span}
                  category={item.category}
                  sizes={
                    item.span === "large"
                      ? "(max-width: 1024px) 100vw, 58vw"
                      : item.span === "medium"
                        ? "(max-width: 1024px) 100vw, 42vw"
                        : "(max-width: 1024px) 50vw, 33vw"
                  }
                />
                <figcaption className="p-4 sm:p-5">
                  <h3 className="mb-1 font-display text-base font-semibold text-earth-700 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-earth-600/90">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
