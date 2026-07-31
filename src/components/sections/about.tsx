"use client";

import { siteConfig } from "@/data/site";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

const highlights = [
  {
    num: "01",
    title: "Academic Background",
    description: `Food Technology undergraduate at ${siteConfig.university}, Class of ${siteConfig.cohort}. Active in research and laboratory practicum.`,
  },
  {
    num: "02",
    title: "Research Interests",
    description:
      "Food fermentation, local product diversification, and indigenous raw materials such as sacha inchi seeds.",
  },
  {
    num: "03",
    title: "Career Direction",
    description:
      "Product R&D, fermentation innovation, and contributing to Indonesia's food industry.",
  },
  {
    num: "04",
    title: "Innovation Approach",
    description:
      "Bridging traditional food knowledge with modern technology — natto adapted to local sacha inchi.",
  },
  {
    num: "05",
    title: "Industry Passion",
    description:
      "Creating food products that improve nutrition and diversify Indonesia's food landscape.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-t border-earth-200/60 bg-white py-16 sm:py-24">
      <div className="container-app mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mb-12 sm:mb-16">
          <SectionHeader
            index="02"
            label="About"
            title="Food technologist with a patent on the lab bench"
            description={siteConfig.summary}
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          <RevealOnScroll className="lg:col-span-7">
            <article className="editorial-card-dark h-full p-6 sm:p-8 lg:min-h-[280px]">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-wheat-400">
                Patent Invention
              </p>
              <h3 className="mb-4 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {siteConfig.patent.title}
              </h3>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-cream-200/85 sm:text-base">
                {siteConfig.patent.description}
              </p>
              <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-cream-300/80">
                <span>Published {siteConfig.patent.published}</span>
                <span>·</span>
                <span>{siteConfig.patent.publication}</span>
              </div>
            </article>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {highlights.slice(0, 2).map((item) => (
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
            {highlights.slice(2).map((item) => (
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
