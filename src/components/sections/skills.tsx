"use client";

import { skillCategories, labEquipment } from "@/data/skills";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function SkillsSection() {
  const { t } = useLanguage();
  const section = t.home.skills;

  return (
    <section id="skills" className="border-b border-border bg-card py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.titleKey}>
              <article className="editorial-card-hover h-full p-5">
                <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
                  <category.icon className="h-4 w-4 text-forest" />
                  <h3 className="text-sm font-medium">
                    {t.skills.categories[category.titleKey]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-border bg-secondary/50 px-2 py-1 text-xs text-foreground"
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
          <div className="border border-border bg-secondary/30 p-6 sm:p-8">
            <h3 className="font-serif text-xl">{section.labEquipment}</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {labEquipment.map((equip) => (
                <div key={equip.name} className="text-center">
                  <equip.icon className="mx-auto h-5 w-5 text-forest" />
                  <p className="mt-2 text-[10px] leading-tight text-muted-foreground">{equip.name}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
