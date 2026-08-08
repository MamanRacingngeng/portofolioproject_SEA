"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll } from "@/components/motion/animations";

export function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects(t);
  const [lead, ...rest] = featured;
  const section = t.home.projects;

  return (
    <section id="projects" className="border-b-2 border-ink bg-white py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
          <Link href="/projects" className="label-font inline-flex items-center gap-2 text-xs font-bold tracking-wider hover:underline">
            {section.allProjects}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>

        {lead && (
          <RevealOnScroll className="mb-5">
            <Link href={`/projects/${lead.slug}`} className="v26-card group grid overflow-hidden bg-v26mint lg:grid-cols-2">
              <div className="relative min-h-[220px] border-b-2 border-ink lg:min-h-[320px] lg:border-b-0 lg:border-r-2">
                <Image src={lead.image} alt={lead.title} fill sizes="50vw" className="object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="v26-sticker mb-3 w-fit bg-white text-[10px]">{lead.category}</span>
                <h3 className="display-font text-2xl sm:text-3xl">{lead.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{lead.shortDescription}</p>
                <span className="label-font mt-5 inline-flex items-center gap-1 text-xs font-bold">
                  {t.common.readCaseStudy}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((project) => (
            <RevealOnScroll key={project.id}>
              <Link href={`/projects/${project.slug}`} className="v26-card group flex h-full flex-col overflow-hidden bg-paper">
                <div className="relative h-44 border-b-2 border-ink sm:h-48">
                  <Image src={project.image} alt={project.title} fill sizes="50vw" className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="label-font text-[10px] font-bold tracking-wider text-ink/50">{project.category}</p>
                  <h3 className="display-font mt-2 text-lg">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink/70">{project.shortDescription}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
