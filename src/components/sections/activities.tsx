"use client";

import Image from "next/image";
import { getActivities } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { cn } from "@/lib/utils";

export function ActivitiesSection() {
  const { t } = useLanguage();
  const section = t.home.activities;
  const items = getActivities(t);

  return (
    <section id="activities" className="border-b-2 border-ink bg-v26sky/30 py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((item) => (
            <StaggerItem
              key={item.id}
              className={cn(
                item.span === "large" && "sm:col-span-2 lg:col-span-7",
                item.span === "medium" && "lg:col-span-5",
                item.span === "small" && "lg:col-span-4"
              )}
            >
              <figure className="v26-card group overflow-hidden bg-white">
                <div
                  className={cn(
                    "relative overflow-hidden border-b-2 border-ink",
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
                  <span className="v26-sticker absolute left-3 top-3 bg-v26yellow text-[9px]">
                    {item.category}
                  </span>
                </div>
                <figcaption className="p-4 sm:p-5">
                  <h3 className="display-font text-base sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.caption}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
