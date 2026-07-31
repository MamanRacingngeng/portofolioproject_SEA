"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import {
  PageShell,
  PageContainer,
  PageHero,
  StickyBar,
} from "@/components/layout/page-shell";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <PageShell>
      <PageHero
        label="Insights"
        title="Food Science Blog"
        description="Articles on food science, safety, innovation, processing, and career insights for food technology professionals."
      />

      <StickyBar>
        <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-all tap-target sm:px-4 sm:text-sm ${
                activeCategory === cat
                  ? "bg-fresh-600 text-white shadow-soft"
                  : "bg-cream-100 text-earth-600 hover:bg-fresh-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </StickyBar>

      <section className="bg-cream-50 py-12 sm:py-16">
        <PageContainer>
          {filtered.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition-shadow hover:shadow-card sm:mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[200px] md:min-h-[280px]">
                  <Image
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-8">
                  <Badge className="mb-3 w-fit">{filtered[0].category}</Badge>
                  <h2 className="mb-3 font-display text-xl font-semibold text-earth-700 sm:text-2xl break-anywhere">
                    {filtered[0].title}
                  </h2>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-earth-600/80">
                    {filtered[0].excerpt}
                  </p>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-earth-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(filtered[0].date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {filtered[0].readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${filtered[0].slug}`}
                    className="inline-flex min-h-[var(--touch-min)] items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {filtered.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-cream-200 bg-white transition-all duration-300 hover:shadow-card"
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <Badge variant="outline" className="mb-3 text-[10px]">
                    {post.category}
                  </Badge>
                  <h3 className="mb-2 line-clamp-2 font-display text-base font-semibold text-earth-700 transition-colors group-hover:text-fresh-600 sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-earth-600/80">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-earth-500">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex min-h-[var(--touch-min)] items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700"
                    >
                      Read
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
