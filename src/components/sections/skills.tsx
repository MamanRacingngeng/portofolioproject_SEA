"use client";

import { skillCategories, labEquipment } from "@/data/skills";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function SkillsSection() {
  const { t } = useLanguage();
  const section = t.home.skills;

  return (
    <section id="skills" className="border-b border-border bg-background py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <StaggerItem key={category.titleKey}>
              <article className="h-full rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
                  <span className="text-xs font-bold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <category.icon className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">
                    {t.skills.categories[category.titleKey]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs"
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
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold">{section.labEquipment}</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {labEquipment.map((equip) => (
                <div
                  key={equip.name}
                  className="flex flex-col items-center gap-2 rounded-lg border border-border bg-muted/30 p-3 text-center"
                >
                  <equip.icon className="h-5 w-5 text-primary" />
                  <p className="text-[10px] leading-tight text-muted-foreground">{equip.name}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
