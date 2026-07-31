"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, Filter } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24">
      <section className="py-16 bg-gradient-to-br from-cream-50 via-white to-fresh-50 relative">
        <div className="absolute inset-0 bg-molecule-pattern opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-fresh-600 tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-700 mb-4">
              Research Projects
            </h1>
            <p className="text-earth-600/80 max-w-2xl mx-auto leading-relaxed">
              Detailed case studies showcasing food science research, product
              development, quality analysis, and food safety projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-[72px] z-40 border-b border-cream-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Filter className="h-4 w-4 text-earth-400 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-fresh-600 text-white shadow-soft"
                    : "bg-cream-100 text-earth-600 hover:bg-fresh-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden border border-cream-200 hover:shadow-elevated transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-700/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-earth-700">
                    <FlaskConical className="h-3 w-3 mr-1" />
                    {project.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <h2 className="font-display text-xl font-semibold text-earth-700 mb-2 group-hover:text-fresh-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-earth-600/80 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-earth-500 uppercase mb-2">
                      Objectives
                    </p>
                    <ul className="space-y-1">
                      {project.objectives.slice(0, 2).map((obj) => (
                        <li
                          key={obj}
                          className="text-xs text-earth-600 flex items-start gap-2"
                        >
                          <span className="text-fresh-500">•</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
