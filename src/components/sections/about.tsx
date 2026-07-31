"use client";

import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function AboutSection() {
  const { t } = useLanguage();
  const about = t.home.about;

  return (
    <section id="about" className="border-t border-earth-200/60 bg-white py-16 sm:py-24">
      <div className="container-app mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mb-12 sm:mb-16">
          <SectionHeader
            index={about.index}
            label={about.label}
            title={about.title}
            description={about.description}
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <RevealOnScroll className="lg:col-span-7">
            <article className="editorial-card-dark h-full p-6 sm:p-8 lg:min-h-[280px]">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-wheat-400">
                {about.patentCard}
              </p>
              <h3 className="mb-4 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {t.site.patent.title}
              </h3>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-cream-200/85 sm:text-base">
                {t.site.patent.description}
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-cream-300/80">
                <span>
                  {t.common.published} {t.site.patent.published}
                </span>
                <span>·</span>
                <span>{t.site.patent.publication}</span>
              </div>
            </article>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {about.highlights.slice(0, 2).map((item) => (
              <StaggerItem key={item.num}>
                <article className="editorial-card h-full p-5 sm:p-6">
                  <span className="mb-3 block font-mono text-xs text-wheat-600">
                    {item.num}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold text-earth-700">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-earth-600/90">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-12">
            {about.highlights.slice(2).map((item) => (
              <StaggerItem key={item.num}>
                <article className="editorial-card h-full p-5">
                  <span className="mb-2 block font-mono text-xs text-wheat-600">
                    {item.num}
                  </span>
                  <h3 className="mb-2 font-display text-base font-semibold text-earth-700">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-earth-600/85">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
