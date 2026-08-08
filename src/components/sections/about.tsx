"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceCard } from "@/components/ui/surface-card";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { FloatingField } from "@/components/motion/floating";

const highlightTints = ["mint", "honey", "coral", "violet", "mint", "honey"] as const;

export function AboutSection() {
  const { t } = useLanguage();
  const about = t.home.about;

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24">
      <FloatingField variant="section" />
      <div className="container-app relative z-[1] mx-auto max-w-7xl">
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
            <SurfaceCard tint="mint" className="h-full !bg-mint !p-6 text-white sm:!p-8">
              <span className="inline-block rounded-lg bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {about.patentCard}
              </span>
              <h3 className="font-display mt-4 text-2xl font-bold leading-snug sm:text-3xl">
                {t.site.patent.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-emerald-50/90">
                {t.site.patent.description}
              </p>
              <p className="mt-6 text-xs text-emerald-100/80">
                {t.common.published} {t.site.patent.published} · {t.site.patent.publication}
              </p>
            </SurfaceCard>
          </RevealOnScroll>

          <StaggerContainer className="grid gap-4 lg:col-span-5">
            {about.highlights.slice(0, 2).map((item, i) => (
              <StaggerItem key={item.num}>
                <SurfaceCard tint={highlightTints[i]} className="h-full">
                  <span className="font-display text-3xl font-extrabold text-mint/30">{item.num}</span>
                  <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </SurfaceCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-12">
            {about.highlights.slice(2).map((item, i) => (
              <StaggerItem key={item.num}>
                <SurfaceCard tint={highlightTints[i + 2]} className="h-full">
                  <span className="text-xs font-bold text-mint">{item.num}</span>
                  <h3 className="mt-2 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </SurfaceCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
