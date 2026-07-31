"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import { getProjects, getProjectCategoryKeys } from "@/data/projects";
import type { ProjectCategoryKey } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import {
  PageShell,
  PageContainer,
  PageHero,
  StickyBar,
} from "@/components/layout/page-shell";

type FilterKey = "all" | ProjectCategoryKey;

export default function ProjectsPage() {
  const { t } = useLanguage();
  const page = t.pages.projects;
  const projects = getProjects(t);
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");

  const categories: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.projects.categories.all },
    ...getProjectCategoryKeys().map((key) => ({
      key,
      label: t.projects.categories[key],
    })),
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  return (
    <PageShell>
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
      />

      <StickyBar>
        <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-1">
          <Filter className="h-4 w-4 shrink-0 text-earth-400" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-all tap-target sm:px-4 sm:text-sm ${
                activeCategory === cat.key
                  ? "bg-fresh-600 text-white shadow-soft"
                  : "bg-cream-100 text-earth-600 hover:bg-fresh-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </StickyBar>

      <section className="bg-cream-50 py-12 sm:py-16">
        <PageContainer>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group overflow-hidden rounded-2xl border border-cream-200 bg-white transition-all duration-500 hover:shadow-elevated"
              >
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-700/50 to-transparent" />
                  <Badge className="absolute left-3 top-3 bg-white/90 text-earth-700 sm:left-4 sm:top-4">
                    {project.category}
                  </Badge>
                </div>

                <div className="p-4 sm:p-6">
                  <h2 className="mb-2 break-anywhere font-display text-lg font-semibold text-earth-700 transition-colors group-hover:text-fresh-600 sm:text-xl">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-earth-600/80">
                    {project.shortDescription}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-h-[var(--touch-min)] items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700"
                  >
                    {t.common.viewCaseStudy}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
