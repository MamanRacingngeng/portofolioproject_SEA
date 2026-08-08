"use client";

import Image from "next/image";
import { getActivityImage, type ActivityImageKey } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function ExperienceSection() {
  const { t } = useLanguage();
  const exp = t.home.experience;
  const typeLabels = exp.typeLabels;

  return (
    <section id="experience" className="border-b-2 border-ink bg-paper py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={exp.index}
            label={exp.label}
            title={exp.title}
            description={exp.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="space-y-5">
          {t.experiences.map((item, index) => {
            const imageKey =
              "imageKey" in item && item.imageKey
                ? (item.imageKey as ActivityImageKey)
                : undefined;
            const imageSrc = imageKey ? getActivityImage(imageKey) : null;

            return (
              <StaggerItem key={item.id}>
                <article className="v26-card overflow-hidden bg-white">
                  <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                    <div className="p-5 sm:p-6">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="label-font text-xs font-bold text-v26coral">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="display-font mt-1 text-xl sm:text-2xl">{item.position}</h3>
                          <p className="mt-1 text-sm font-semibold text-ink/70">{item.institution}</p>
                        </div>
                        <span className="v26-sticker bg-v26sky text-[10px]">
                          {typeLabels[item.type as keyof typeof typeLabels]}
                        </span>
                      </div>
                      <p className="label-font mb-4 text-[10px] tracking-wider text-ink/50">
                        {item.duration} · {item.location}
                      </p>
                      <ul className="space-y-1.5 text-sm text-ink/80">
                        {item.responsibilities.slice(0, 3).map((resp) => (
                          <li key={resp} className="flex gap-2">
                            <span className="text-v26coral">→</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                      {item.achievements[0] && (
                        <p className="mt-4 border-l-4 border-v26yellow pl-3 text-sm font-medium">
                          {item.achievements[0]}
                        </p>
                      )}
                    </div>
                    {imageSrc && (
                      <div className="relative min-h-[200px] border-t-2 border-ink lg:min-h-0 lg:w-56 lg:border-l-2 lg:border-t-0 xl:w-64">
                        <Image src={imageSrc} alt={item.position} fill className="object-cover" sizes="256px" />
                      </div>
                    )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
