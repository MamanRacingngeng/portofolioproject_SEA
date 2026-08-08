"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getActivities } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { FloatingField, FloatingElement } from "@/components/motion/floating";
import { cn } from "@/lib/utils";

const badgeVariants = ["mint", "honey", "coral", "violet"] as const;

export function ActivitiesSection() {
  const { t } = useLanguage();
  const section = t.home.activities;
  const items = getActivities(t);

  return (
    <section id="activities" className="relative overflow-hidden py-16 sm:py-24">
      <FloatingField variant="section" />
      <div className="container-app relative z-[1] mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((item, i) => (
            <StaggerItem
              key={item.id}
              className={cn(
                item.span === "large" && "sm:col-span-2 lg:col-span-7",
                item.span === "medium" && "lg:col-span-5",
                item.span === "small" && "lg:col-span-4"
              )}
            >
              <FloatingElement delay={i * 0.2} duration={5 + (i % 3)} y={10}>
                <motion.figure
                  whileHover={{ y: -6 }}
                  className="group h-full overflow-hidden rounded-2xl bg-white shadow-md"
                >
                <div
                  className={cn(
                    "relative overflow-hidden",
                    item.span === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mint-dark/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <figcaption className="p-4 sm:p-5">
                  <Badge variant={badgeVariants[i % badgeVariants.length]} className="mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="font-display font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
                </figcaption>
              </motion.figure>
              </FloatingElement>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
