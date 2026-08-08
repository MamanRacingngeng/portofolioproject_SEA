"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function AboutSection() {
  const { t } = useLanguage();
  const about = t.home.about;

  return (
    <section id="about" className="border-b border-border bg-card py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={about.index}
            label={about.label}
            title={about.title}
            description={about.description}
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <RevealOnScroll className="lg:col-span-7">
            <article className="editorial-card h-full bg-forest-light/40 p-6 sm:p-8">
              <p className="section-eyebrow text-forest">{about.patentCard}</p>
              <h3 className="font-serif mt-4 text-2xl leading-snug sm:text-3xl">
                {t.site.patent.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
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
                <article className="editorial-card-hover h-full p-5 sm:p-6">
                  <span className="font-serif text-3xl text-border">{item.num}</span>
                  <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
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
                <article className="editorial-card-hover h-full p-5">
                  <span className="text-xs text-muted-foreground">{item.num}</span>
                  <h3 className="mt-2 font-medium">{item.title}</h3>
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
