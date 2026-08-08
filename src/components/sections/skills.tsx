"use client";

import { motion } from "framer-motion";
import { skillCategories, labEquipment } from "@/data/skills";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

const accents = ["green", "citrus", "berry", "wheat", "green", "citrus"] as const;

export function SkillsSection() {
  const { t } = useLanguage();
  const section = t.home.skills;

  return (
    <section id="skills" className="py-16 sm:py-24">
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
              <InteractiveCard accent={accents[index % accents.length]} className="h-full p-5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-fresh-100 text-fresh-600">
                    <category.icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-bold">{t.skills.categories[category.titleKey]}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </InteractiveCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <RevealOnScroll>
          <InteractiveCard accent="green" className="p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold">{section.labEquipment}</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {labEquipment.map((equip, i) => (
                <motion.div
                  key={equip.name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-br from-fresh-50 to-cream-100 p-3 text-center"
                >
                  <equip.icon
                    className={`h-5 w-5 ${i % 3 === 0 ? "text-fresh-500" : i % 3 === 1 ? "text-citrus-500" : "text-berry-500"}`}
                  />
                  <p className="text-[10px] leading-tight text-muted-foreground">{equip.name}</p>
                </motion.div>
              ))}
            </div>
          </InteractiveCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
