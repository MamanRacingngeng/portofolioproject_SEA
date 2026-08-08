"use client";

import { skillCategories, labEquipment } from "@/data/skills";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { SurfaceCard } from "@/components/ui/surface-card";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

const categoryTints = ["white", "honey", "mint", "white", "honey", "mint"] as const;
const iconColors = ["text-[#003049]", "text-[#669bbc]", "text-[#c1121f]", "text-[#780000]"] as const;
const chipStyles = ["chip-mint", "chip-honey", "chip-coral", "chip-violet"] as const;

export function SkillsSection() {
  const { t } = useLanguage();
  const section = t.home.skills;

  return (
    <section id="skills" className="border-t border-[#003049]/10 bg-white py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <StaggerItem key={category.titleKey}>
              <SurfaceCard tint={categoryTints[i % categoryTints.length]} className="h-full">
                <div className="mb-4 flex items-center gap-2 border-b border-[#003049]/10 pb-3">
                  <category.icon className={`h-5 w-5 ${iconColors[i % iconColors.length]}`} />
                  <h3 className="font-display text-sm font-bold text-[#003049]">
                    {t.skills.categories[category.titleKey]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={skill} className={chipStyles[j % chipStyles.length]}>
                      {skill}
                    </span>
                  ))}
                </div>
              </SurfaceCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <RevealOnScroll>
          <div className="band-honey rounded-lg p-6 sm:p-8">
            <h3 className="font-display text-xl font-extrabold text-[#fdf0d5]">{section.labEquipment}</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
              {labEquipment.map((equip) => (
                <div key={equip.name} className="rounded-md border border-[#fdf0d5]/25 bg-[#003049]/15 p-3 text-center">
                  <equip.icon className="mx-auto h-5 w-5 text-[#fdf0d5]" />
                  <p className="mt-2 text-[10px] font-semibold leading-tight text-[#fdf0d5]/90">{equip.name}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
