"use client";

import { Building2, MapPin } from "lucide-react";
import { experiences } from "@/data/career";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll, StaggerContainer, StaggerItem } from "@/components/motion/animations";

const typeLabels = {
  internship: "Internship",
  research: "Research",
  volunteer: "Volunteer",
  work: "Work",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-earth-200/60 bg-cream-50 py-16 sm:py-24">
      <div className="container-app mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mb-12 sm:mb-16">
          <SectionHeader
            index="04"
            label="Experience"
            title="Where the research actually happened"
            description="Patent work, laboratory practicum, and university activities beyond the classroom."
          />
        </RevealOnScroll>

        <StaggerContainer className="space-y-4">
          {experiences.map((exp, index) => (
            <StaggerItem key={exp.id}>
              <article className="editorial-card grid gap-4 p-5 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-6">
                <div className="font-mono text-sm font-medium text-wheat-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-earth-700 sm:text-xl">
                        {exp.position}
                      </h3>
                      <div className="mt-1 flex items-start gap-1.5 text-sm text-fresh-700">
                        <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <span>{exp.institution}</span>
                      </div>
                    </div>
                    <span className="w-fit border border-earth-200 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-earth-600">
                      {typeLabels[exp.type]}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-earth-500">
                    <span>{exp.duration}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="mb-4 space-y-1.5 text-sm text-earth-600/90">
                    {exp.responsibilities.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-fresh-500">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.achievements[0] && (
                    <p className="border-l-2 border-wheat-400 pl-3 text-sm font-medium text-earth-700">
                      {exp.achievements[0]}
                    </p>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
