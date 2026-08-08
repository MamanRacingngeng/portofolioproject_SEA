"use client";

import Image from "next/image";
import { getActivityImage, type ActivityImageKey } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function ExperienceSection() {
  const { t } = useLanguage();
  const exp = t.home.experience;
  const typeLabels = exp.typeLabels;

  return (
    <section id="experience" className="border-b border-border py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12">
          <SectionHeader
            index={exp.index}
            label={exp.label}
            title={exp.title}
            description={exp.description}
          />
        </RevealOnScroll>

        <StaggerContainer className="divide-y divide-border border-y border-border">
          {t.experiences.map((item, index) => {
            const imageKey =
              "imageKey" in item && item.imageKey
                ? (item.imageKey as ActivityImageKey)
                : undefined;
            const imageSrc = imageKey ? getActivityImage(imageKey) : null;

            return (
              <StaggerItem key={item.id}>
                <article className="grid gap-0 bg-card transition-colors hover:bg-secondary/30 lg:grid-cols-[1fr_auto]">
                  <div className="p-5 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="font-serif text-2xl text-border">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-2 text-xl font-medium sm:text-2xl">{item.position}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                      <Badge variant="muted">
                        {typeLabels[item.type as keyof typeof typeLabels]}
                      </Badge>
                    </div>
                    <p className="mb-4 text-xs uppercase tracking-wider text-muted-foreground">
                      {item.duration} · {item.location}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.responsibilities.slice(0, 3).map((resp) => (
                        <li key={resp}>{resp}</li>
                      ))}
                    </ul>
                    {item.achievements[0] && (
                      <p className="mt-4 border-l-2 border-clay pl-3 text-sm text-foreground">
                        {item.achievements[0]}
                      </p>
                    )}
                  </div>
                  {imageSrc && (
                    <div className="relative min-h-[220px] lg:min-h-0 lg:w-64 xl:w-72">
                      <Image src={imageSrc} alt={item.position} fill className="object-cover" sizes="288px" />
                    </div>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
