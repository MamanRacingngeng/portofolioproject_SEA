"use client";

import Image from "next/image";
import { getActivityImage, type ActivityImageKey } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { InteractiveCard } from "@/components/ui/interactive-card";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function ExperienceSection() {
  const { t } = useLanguage();
  const exp = t.home.experience;
  const typeLabels = exp.typeLabels;

  return (
    <section id="experience" className="bg-gradient-to-b from-background to-cream-50/80 py-16 sm:py-24">
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
                <InteractiveCard accent={index % 2 === 0 ? "green" : "citrus"} className="overflow-hidden p-0">
                  <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
                    <div className="p-5 sm:p-6">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="font-display text-3xl font-bold text-fresh-200">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-1 text-xl font-bold sm:text-2xl">{item.position}</h3>
                          <p className="mt-1 text-sm font-medium text-fresh-600">{item.institution}</p>
                        </div>
                        <Badge variant={index % 3 === 0 ? "default" : index % 3 === 1 ? "citrus" : "berry"}>
                          {typeLabels[item.type as keyof typeof typeLabels]}
                        </Badge>
                      </div>
                      <p className="mb-4 text-xs text-muted-foreground">
                        {item.duration} · {item.location}
                      </p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {item.responsibilities.slice(0, 3).map((resp) => (
                          <li key={resp} className="flex gap-2">
                            <span className="text-fresh-500">✦</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                      {item.achievements[0] && (
                        <p className="mt-4 rounded-xl bg-fresh-50 px-3 py-2 text-sm font-medium text-fresh-800">
                          {item.achievements[0]}
                        </p>
                      )}
                    </div>
                    {imageSrc && (
                      <div className="group relative min-h-[200px] lg:min-h-0 lg:w-56 xl:w-64">
                        <Image
                          src={imageSrc}
                          alt={item.position}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="256px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    )}
                  </div>
                </InteractiveCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
