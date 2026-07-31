"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

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
              Insights
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-700 mb-4">
              Food Science Blog
            </h1>
            <p className="text-earth-600/80 max-w-2xl mx-auto leading-relaxed">
              Articles on food science, safety, innovation, processing, and
              career insights for food technology professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-cream-200 sticky top-[72px] z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {blogCategories.map((cat) => (
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
          {filtered.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[280px]">
                  <Image
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-3">{filtered[0].category}</Badge>
                  <h2 className="font-display text-2xl font-bold text-earth-700 mb-3">
                    {filtered[0].title}
                  </h2>
                  <p className="text-earth-600/80 text-sm leading-relaxed mb-4 line-clamp-3">
                    {filtered[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-earth-500 mb-4">
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
                    className="inline-flex items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-cream-200 hover:shadow-card transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3 text-[10px]">
                    {post.category}
                  </Badge>
                  <h3 className="font-display text-lg font-semibold text-earth-700 mb-2 group-hover:text-fresh-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-earth-600/80 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-earth-500">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium text-fresh-600 hover:text-fresh-700 flex items-center gap-1"
                    >
                      Read
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
