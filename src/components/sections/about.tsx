"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { FoodTechBg } from "@/components/decorations/food-tech-bg";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

const highlightAccents = ["green", "citrus", "berry", "wheat", "green"] as const;

export function AboutSection() {
  const { t } = useLanguage();
  const about = t.home.about;

  return (
    <section id="about" className="mesh-section relative border-t border-fresh-100/80 py-16 sm:py-24">
      <FoodTechBg variant="section" />
      <div className="container-app relative z-10 mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={about.index}
            label={about.label}
            title={about.title}
            description={about.description}
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-7">
            <InteractiveCard accent="green" className="h-full p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-fresh-600">
                {about.patentCard}
              </p>
              <h3 className="font-display mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                {t.site.patent.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.site.patent.description}
              </p>
              <p className="mt-6 text-xs text-muted-foreground">
                {t.common.published} {t.site.patent.published} · {t.site.patent.publication}
              </p>
            </InteractiveCard>
          </RevealOnScroll>

          <StaggerContainer className="grid gap-4 lg:col-span-5">
            {about.highlights.slice(0, 2).map((item, i) => (
              <StaggerItem key={item.num}>
                <InteractiveCard accent={highlightAccents[i]} className="h-full p-5 sm:p-6">
                  <span className="font-display text-2xl font-bold text-fresh-500/30">{item.num}</span>
                  <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-12">
            {about.highlights.slice(2).map((item, i) => (
              <StaggerItem key={item.num}>
                <InteractiveCard accent={highlightAccents[i + 2]} className="h-full p-5">
                  <span className="text-xs font-bold text-muted-foreground">{item.num}</span>
                  <h3 className="mt-2 text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
