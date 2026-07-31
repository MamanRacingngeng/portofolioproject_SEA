"use client";

import { skillCategories, labEquipment } from "@/data/skills";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function SkillsSection() {
  const { t } = useLanguage();
  const section = t.home.skills;

  return (
    <section id="skills" className="border-t border-earth-200/60 bg-white py-16 sm:py-24">
      <div className="container-app mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mb-12 sm:mb-16">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="mb-10 grid grid-cols-1 gap-4 sm:mb-14 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <StaggerItem key={category.titleKey}>
              <article className="editorial-card h-full p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-3 border-b border-earth-100 pb-3">
                  <span className="font-mono text-xs text-wheat-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <category.icon className="h-4 w-4 text-fresh-700" />
                  <h3 className="font-display text-base font-semibold text-earth-700">
                    {t.skills.categories[category.titleKey]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-earth-200 bg-cream-50 px-2.5 py-1 text-xs text-earth-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <RevealOnScroll>
          <div className="editorial-card p-6 sm:p-8">
            <h3 className="mb-6 font-display text-lg font-semibold text-earth-700">
              {section.labEquipment}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {labEquipment.map((equip) => (
                <div
                  key={equip.name}
                  className="flex flex-col items-center gap-2 border border-earth-100 bg-cream-50/50 p-3 text-center"
                >
                  <equip.icon className="h-5 w-5 text-fresh-700" />
                  <p className="text-[10px] leading-tight text-earth-600">
                    {equip.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
