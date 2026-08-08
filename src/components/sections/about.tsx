"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function AboutSection() {
  const { t } = useLanguage();
  const about = t.home.about;

  return (
    <section id="about" className="border-b border-border bg-background py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
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
            <article className="h-full rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {about.patentCard}
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                {t.site.patent.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t.site.patent.description}
              </p>
              <p className="mt-6 text-xs text-muted-foreground">
                {t.common.published} {t.site.patent.published} · {t.site.patent.publication}
              </p>
            </article>
          </RevealOnScroll>

          <StaggerContainer className="grid gap-4 lg:col-span-5">
            {about.highlights.slice(0, 2).map((item) => (
              <StaggerItem key={item.num}>
                <article className="h-full rounded-xl border border-border bg-muted/40 p-5 sm:p-6">
                  <span className="text-xs font-bold text-primary">{item.num}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-12">
            {about.highlights.slice(2).map((item) => (
              <StaggerItem key={item.num}>
                <article className="h-full rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span className="text-xs font-bold text-muted-foreground">{item.num}</span>
                  <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
