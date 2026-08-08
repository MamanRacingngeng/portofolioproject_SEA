"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getBlogPosts, getBlogCategoryKeys } from "@/data/blog";
import type { BlogCategoryKey } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import {
  PageShell,
  PageContainer,
  PageHero,
  StickyBar,
} from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

type FilterKey = "all" | BlogCategoryKey;

const filterBtn = (active: boolean) =>
  cn(
    "label-font shrink-0 border-2 border-ink px-3 py-2 text-[10px] font-bold uppercase tracking-wider transition-all tap-target sm:px-4 sm:text-xs",
    active
      ? "bg-v26yellow shadow-[3px_3px_0_#0e0e0e]"
      : "bg-white hover:bg-paper"
  );

export default function BlogPage() {
  const { t } = useLanguage();
  const page = t.pages.blog;
  const posts = getBlogPosts(t);
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");

  const categories: { key: FilterKey; label: string }[] = [
    { key: "all", label: t.blog.categories.all },
    ...getBlogCategoryKeys().map((key) => ({
      key,
      label: t.blog.categories[key],
    })),
  ];

  const filtered =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.categoryKey === activeCategory);

  return (
    <PageShell>
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
      />

      <StickyBar>
        <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1">
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
          {filtered.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="v26-card mb-8 overflow-hidden bg-white sm:mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative min-h-[200px] border-b-2 border-ink md:min-h-[280px] md:border-b-0 md:border-r-2">
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
                  <h2 className="display-font mb-3 break-anywhere text-xl sm:text-2xl">
                    {filtered[0].title}
                  </h2>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-ink/75">
                    {filtered[0].excerpt}
                  </p>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-ink/55">
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
                    className="label-font inline-flex min-h-[var(--touch-min)] items-center gap-1 text-xs font-bold tracking-wider hover:underline"
                  >
                    {t.common.readArticle}
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
                className="v26-card group overflow-hidden bg-white"
              >
                <div className="relative h-44 overflow-hidden border-b-2 border-ink sm:h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="display-font mb-2 line-clamp-2 text-base sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-ink/75">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-ink/55">{formatDate(post.date)}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="label-font flex min-h-[var(--touch-min)] items-center gap-1 text-xs font-bold tracking-wider hover:underline"
                    >
                      {t.common.read}
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
