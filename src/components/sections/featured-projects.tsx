"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealOnScroll } from "@/components/motion/animations";
import { cn } from "@/lib/utils";

export function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects(t);
  const [lead, ...rest] = featured;
  const section = t.home.projects;

  return (
    <section id="projects" className="border-t border-earth-200/60 bg-cream-50 py-16 sm:py-24">
      <div className="container-app mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 lg:flex-row lg:items-end">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-fresh-700 hover:text-fresh-800"
          >
            {section.allProjects}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </RevealOnScroll>

        {lead && (
          <RevealOnScroll>
            <Link
              href={`/projects/${lead.slug}`}
              className="group editorial-card mb-5 grid overflow-hidden lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="relative min-h-[220px] lg:min-h-[360px]">
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-earth-900/20" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-fresh-700">
                  {lead.category}
                </p>
                <h3 className="mb-3 font-display text-2xl font-semibold leading-tight text-earth-700 sm:text-3xl">
                  {lead.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-earth-600/90 sm:text-base">
                  {lead.shortDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-fresh-700">
                  {t.common.readCaseStudy}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </RevealOnScroll>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {rest.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 0.08}>
              <Link
                href={`/projects/${project.slug}`}
                className="group editorial-card flex h-full flex-col"
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-earth-500">
                    {project.category}
                  </p>
                  <h3 className="mb-2 font-display text-lg font-semibold text-earth-700 group-hover:text-fresh-700">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 flex-1 text-sm text-earth-600/85">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "border border-earth-200 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-earth-600"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
