"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function AboutSection() {
  const { t } = useLanguage();
  const about = t.home.about;

  return (
    <section id="about" className="border-b-2 border-ink bg-white py-16 sm:py-24">
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
            <article className="v26-card h-full bg-v26yellow p-6 sm:p-8">
              <p className="label-font mb-3 text-xs font-bold tracking-[0.18em] text-ink/60">
                {about.patentCard}
              </p>
              <h3 className="display-font mb-4 text-2xl leading-snug sm:text-3xl">
                {t.site.patent.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
                {t.site.patent.description}
              </p>
              <p className="label-font mt-6 text-[10px] font-semibold tracking-wider text-ink/60">
                {t.common.published} {t.site.patent.published} · {t.site.patent.publication}
              </p>
            </article>
          </RevealOnScroll>

          <StaggerContainer className="grid gap-4 lg:col-span-5">
            {about.highlights.slice(0, 2).map((item) => (
              <StaggerItem key={item.num}>
                <article className="v26-card h-full p-5 sm:p-6">
                  <span className="label-font text-xs font-bold text-v26coral">{item.num}</span>
                  <h3 className="display-font mt-2 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-12">
            {about.highlights.slice(2).map((item, i) => (
              <StaggerItem key={item.num}>
                <article
                  className="v26-card h-full p-5"
                  style={{
                    background: i === 0 ? "#fff" : i === 1 ? "#5b9eff" : "#7dffb2",
                  }}
                >
                  <span className="label-font text-xs font-bold text-ink/50">{item.num}</span>
                  <h3 className="display-font mt-2 text-base">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
