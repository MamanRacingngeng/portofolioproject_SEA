"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/motion/animations";
import { motion } from "framer-motion";

export function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects(t);
  const [lead, ...rest] = featured;
  const section = t.home.projects;

  return (
    <section id="projects" className="bg-gradient-to-b from-fresh-50/40 to-background py-16 sm:py-24">
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
            className="inline-flex items-center gap-2 rounded-full bg-fresh-100 px-4 py-2 text-sm font-semibold text-fresh-700 transition-all hover:bg-fresh-200 hover:scale-105"
          >
            {section.allProjects}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </RevealOnScroll>

        {lead && (
          <RevealOnScroll className="mb-5">
            <Link href={`/projects/${lead.slug}`}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group grid overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-soft backdrop-blur-md lg:grid-cols-2"
              >
                <div className="relative min-h-[220px] overflow-hidden lg:min-h-[320px]">
                  <Image
                    src={lead.image}
                    alt={lead.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-fresh-600/20 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <Badge variant="citrus" className="mb-3 w-fit">
                    {lead.category}
                  </Badge>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{lead.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {lead.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-fresh-600">
                    {t.common.readCaseStudy}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </RevealOnScroll>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((project, i) => (
            <RevealOnScroll key={project.id}>
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow-card backdrop-blur-sm"
                >
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Badge variant={i % 2 === 0 ? "default" : "berry"} className="mb-2 w-fit">
                      {project.category}
                    </Badge>
                    <h3 className="font-display text-lg font-bold">{project.title}</h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                      {project.shortDescription}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
