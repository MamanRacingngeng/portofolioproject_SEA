"use client";

import Image from "next/image";
import { Building2, MapPin } from "lucide-react";
import { getActivityImage, type ActivityImageKey } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function ExperienceSection() {
  const { t } = useLanguage();
  const exp = t.home.experience;
  const typeLabels = exp.typeLabels;

  return (
    <section id="experience" className="border-t border-earth-200/60 bg-cream-50 py-16 sm:py-24">
      <div className="container-app mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mb-12 sm:mb-16">
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

            return (
              <StaggerItem key={item.id}>
                <article className="editorial-card overflow-hidden p-0">
                  <div className="grid gap-0 sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto]">
                    <div className="hidden p-5 font-mono text-sm font-medium text-wheat-600 sm:block sm:p-6">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="mb-2 font-mono text-sm font-medium text-wheat-600 sm:hidden">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="font-display text-lg font-semibold text-earth-700 sm:text-xl">
                            {item.position}
                          </h3>
                          <div className="mt-1 flex items-start gap-1.5 text-sm text-fresh-700">
                            <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            <span>{item.institution}</span>
                          </div>
                        </div>
                        <span className="w-fit border border-earth-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-earth-600">
                          {typeLabels[item.type as keyof typeof typeLabels]}
                        </span>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-earth-500">
                        <span>{item.duration}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      </div>

                      <ul className="mb-4 space-y-1.5 text-sm text-earth-600/90">
                        {item.responsibilities.slice(0, 3).map((resp) => (
                          <li key={resp} className="flex gap-2">
                            <span className="text-fresh-500">—</span>
                            {resp}
                          </li>
                        ))}
                      </ul>

                      {item.achievements[0] && (
                        <p className="border-l-2 border-wheat-400 pl-3 text-sm font-medium text-earth-700">
                          {item.achievements[0]}
                        </p>
                      )}
                    </div>

                    {imageSrc && (
                      <div className="relative min-h-[200px] border-t border-earth-100 sm:min-h-0 sm:border-l sm:border-t-0 lg:w-56 xl:w-64">
                        <Image
                          src={imageSrc}
                          alt={item.position}
                          fill
                          sizes="(max-width: 1024px) 100vw, 256px"
                          className="object-cover object-top"
                        />
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
