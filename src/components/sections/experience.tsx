"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getActivityImage, type ActivityImageKey } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { cn } from "@/lib/utils";

const rowAccents = ["border-l-mint", "border-l-honey", "border-l-coral"] as const;
const numColors = ["text-mint", "text-honey", "text-coral"] as const;

export function ExperienceSection() {
  const { t } = useLanguage();
  const exp = t.home.experience;
  const typeLabels = exp.typeLabels;

  return (
    <section id="experience" className="border-t border-[#003049]/10 bg-white py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={exp.index}
            label={exp.label}
            title={exp.title}
            description={exp.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="space-y-4">
          {t.experiences.map((item, index) => {
            const imageKey =
              "imageKey" in item && item.imageKey
                ? (item.imageKey as ActivityImageKey)
                : undefined;
            const imageSrc = imageKey ? getActivityImage(imageKey) : null;
            const accent = rowAccents[index % rowAccents.length];

            return (
              <StaggerItem key={item.id}>
                <motion.article
                  whileHover={{ x: 4 }}
                  className={cn(
                    "overflow-hidden rounded-2xl border-l-4 bg-white shadow-md",
                    accent
                  )}
                >
                  <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                    <div className="p-5 sm:p-8">
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className={cn("font-display text-2xl font-extrabold", numColors[index % 3])}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{item.position}</h3>
                          <p className="mt-1 text-sm font-medium text-muted-foreground">{item.institution}</p>
                        </div>
                        <Badge variant={index % 3 === 0 ? "mint" : index % 3 === 1 ? "honey" : "coral"}>
                          {typeLabels[item.type as keyof typeof typeLabels]}
                        </Badge>
                      </div>
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {item.duration} · {item.location}
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {item.responsibilities.slice(0, 3).map((resp) => (
                          <li key={resp} className="flex gap-2">
                            <span className="text-mint">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                      {item.achievements[0] && (
                        <p className="mt-4 rounded-md border border-[#669bbc]/30 bg-[#669bbc]/10 px-4 py-3 text-sm font-medium text-[#003049]">
                          {item.achievements[0]}
                        </p>
                      )}
                    </div>
                    {imageSrc && (
                      <div className="relative min-h-[200px] lg:min-h-0 lg:w-64 xl:w-72">
                        <Image src={imageSrc} alt={item.position} fill className="object-cover" sizes="288px" />
                      </div>
                    )}
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
