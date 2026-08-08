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
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProjectCategoryKey;

const filterBtn = (active: boolean) =>
  cn(
    "label-font shrink-0 border-2 border-ink px-3 py-2 text-[10px] font-bold uppercase tracking-wider transition-all tap-target sm:px-4 sm:text-xs",
    active
      ? "bg-v26yellow shadow-[3px_3px_0_#0e0e0e]"
      : "bg-white hover:bg-paper"
  );

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
          <Filter className="h-4 w-4 shrink-0 text-ink/40" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={filterBtn(activeCategory === cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </StickyBar>

      <section className="border-b-2 border-ink bg-paper py-12 sm:py-16">
        <PageContainer>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="v26-card group overflow-hidden bg-white"
              >
                <div className="relative h-48 overflow-hidden border-b-2 border-ink sm:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <Badge className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    {project.category}
                  </Badge>
                </div>

                <div className="p-4 sm:p-6">
                  <h2 className="display-font mb-2 break-anywhere text-lg sm:text-xl">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-ink/75">
                    {project.shortDescription}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="label-font inline-flex min-h-[var(--touch-min)] items-center gap-1 text-xs font-bold tracking-wider hover:underline"
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
