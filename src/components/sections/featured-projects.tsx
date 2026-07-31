"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedProjectsSection() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-sm font-medium text-fresh-600 tracking-widest uppercase mb-3">
              Featured Projects
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-700 mb-4">
              Research & Development
            </h2>
            <p className="text-earth-600/80 max-w-xl">
              Selected food science projects demonstrating laboratory research,
              product development, and quality analysis capabilities.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 hover:shadow-elevated transition-all duration-500 ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "h-64 lg:h-72" : "h-48"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-700/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-earth-700">
                    <FlaskConical className="h-3 w-3 mr-1" />
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-earth-700 mb-2 group-hover:text-fresh-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-earth-600/80 leading-relaxed mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-earth-500 uppercase tracking-wide mb-2">
                    Key Results
                  </p>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result) => (
                      <li
                        key={result}
                        className="text-xs text-earth-600 flex items-start gap-2"
                      >
                        <span className="text-fresh-500 shrink-0">→</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700 transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
