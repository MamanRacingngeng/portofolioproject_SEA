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
import { SurfaceCard } from "@/components/ui/surface-card";
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
    "shrink-0 rounded-xl px-3 py-2 text-xs font-bold transition-all tap-target sm:px-4 sm:text-sm",
    active
      ? "bg-mint text-white shadow-lift"
      : "bg-white text-muted-foreground shadow-sm hover:bg-mint-light"
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
      <PageHero label={page.label} title={page.title} description={page.description} />

      <StickyBar>
        <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-1">
          <Filter className="h-4 w-4 shrink-0 text-mint" />
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

      <section className="py-12 sm:py-16">
        <PageContainer>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block h-full">
                  <SurfaceCard
                    tint={index % 3 === 0 ? "mint" : index % 3 === 1 ? "honey" : "coral"}
                    className="overflow-hidden !p-0"
                  >
                    <div className="relative h-48 overflow-hidden sm:h-56">
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
                      <h2 className="mb-2 break-anywhere font-display text-lg font-bold sm:text-xl">
                        {project.title}
                      </h2>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {project.shortDescription}
                      </p>

                      <span className="inline-flex min-h-[var(--touch-min)] items-center gap-1 text-sm font-bold text-mint group-hover:underline">
                        {t.common.viewCaseStudy}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </SurfaceCard>
                </Link>
              </motion.article>
            ))}
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
