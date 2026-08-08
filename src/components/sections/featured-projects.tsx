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
    <section id="projects" className="border-b border-border bg-muted/20 py-16 sm:py-24">
      <div className="container-app mx-auto max-w-7xl">
        <RevealOnScroll className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {section.allProjects}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>

        {lead && (
          <RevealOnScroll className="mb-5">
            <Link
              href={`/projects/${lead.slug}`}
              className="group grid overflow-hidden rounded-xl border border-border bg-card shadow-sm lg:grid-cols-2"
            >
              <div className="relative min-h-[220px] lg:min-h-[320px]">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <Badge className="mb-3 w-fit">{lead.category}</Badge>
                <h3 className="text-2xl font-bold sm:text-3xl">{lead.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {lead.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
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
              <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="relative h-44 sm:h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
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
