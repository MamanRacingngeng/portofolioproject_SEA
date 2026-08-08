"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { SurfaceCard } from "@/components/ui/surface-card";
import { RevealOnScroll } from "@/components/motion/animations";
import { FloatingField } from "@/components/motion/floating";

export function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects(t);
  const [lead, ...rest] = featured;
  const section = t.home.projects;

  return (
    <section id="projects" className="relative overflow-hidden bg-mint-light/30 py-16 sm:py-24">
      <FloatingField variant="section" />
      <div className="container-app relative z-[1] mx-auto max-w-7xl">
        <RevealOnScroll className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            index={section.index}
            label={section.label}
            title={section.title}
            description={section.description}
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-coral px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            {section.allProjects}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>

        {lead && (
          <RevealOnScroll className="mb-6">
            <Link href={`/projects/${lead.slug}`} className="group block overflow-hidden rounded-3xl shadow-lift">
              <div className="grid bg-white lg:grid-cols-2">
                <div className="relative min-h-[240px] overflow-hidden lg:min-h-[320px]">
                  <Image
                    src={lead.image}
                    alt={lead.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center bg-mint p-6 text-white sm:p-10">
                  <Badge variant="honey" className="mb-4 w-fit">{lead.category}</Badge>
                  <h3 className="font-display text-2xl font-extrabold sm:text-3xl">{lead.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-emerald-50 sm:text-base">
                    {lead.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-honey group-hover:underline">
                    {t.common.readCaseStudy} →
                  </span>
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((project, i) => (
            <RevealOnScroll key={project.id}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <SurfaceCard tint={i % 2 === 0 ? "honey" : "coral"} className="flex h-full flex-col overflow-hidden !p-0">
                  <div className="relative h-48 overflow-hidden sm:h-52">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Badge variant="mint" className="mb-2 w-fit">{project.category}</Badge>
                    <h3 className="font-display font-bold">{project.title}</h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>
                  </div>
                </SurfaceCard>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
