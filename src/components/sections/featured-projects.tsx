"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/motion/animations";

export function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects(t);
  const [lead, ...rest] = featured;
  const section = t.home.projects;

  return (
    <section id="projects" className="border-b border-border py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
          <Link href="/projects" className="link-underline shrink-0 text-sm font-medium">
            {section.allProjects}
            <ArrowUpRight className="ml-1 inline h-4 w-4" />
          </Link>
        </RevealOnScroll>

        {lead && (
          <RevealOnScroll className="mb-6">
            <Link href={`/projects/${lead.slug}`} className="group grid border border-border bg-card lg:grid-cols-2">
              <div className="relative min-h-[240px] overflow-hidden bg-secondary lg:min-h-[320px]">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center border-t border-border p-6 sm:p-10 lg:border-l lg:border-t-0">
                <Badge className="mb-4 w-fit">{lead.category}</Badge>
                <h3 className="font-serif text-2xl sm:text-3xl">{lead.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {lead.shortDescription}
                </p>
                <span className="mt-6 text-sm font-medium text-foreground group-hover:underline">
                  {t.common.readCaseStudy} →
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <RevealOnScroll key={project.id}>
              <Link href={`/projects/${project.slug}`} className="group editorial-card-hover flex h-full flex-col">
                <div className="relative h-48 overflow-hidden bg-secondary sm:h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-border p-5">
                  <p className="section-eyebrow">{project.category}</p>
                  <h3 className="mt-2 font-medium">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
