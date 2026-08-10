"use client";

import { getActivities } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { ActivityCard } from "@/components/ui/activity-card";
import { PkmReSpotlight } from "@/components/sections/pkm-re-spotlight";
import { FloatingField } from "@/components/motion/floating";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { cn } from "@/lib/utils";

const badgeVariants = ["mint", "honey", "coral", "violet"] as const;

export function ActivitiesSection() {
  const { t } = useLanguage();
  const section = t.home.activities;
  const items = getActivities(t).filter((item) => !["act-8", "act-9", "act-10"].includes(item.id));

  return (
    <section id="activities" className="relative overflow-hidden border-t border-[#003049]/10 py-16 sm:py-24">
      <div className="activities-section-bg absolute inset-0" aria-hidden="true" />
      <FloatingField variant="fiery-ocean" />

      <div className="container-app relative z-10 mx-auto max-w-7xl">
        <RevealOnScroll className="mb-10">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <PkmReSpotlight />

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((item, i) => (
            <StaggerItem
              key={item.id}
              className={cn(
                item.span === "large" && "sm:col-span-2 lg:col-span-7",
                item.span === "medium" && "lg:col-span-5",
                item.span === "small" && "lg:col-span-4"
              )}
            >
              <ActivityCard
                image={item.image}
                title={item.title}
                caption={item.caption}
                category={item.category}
                layout={item.layout}
                span={item.span}
                badgeVariant={badgeVariants[i % badgeVariants.length]}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
