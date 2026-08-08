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
    "shrink-0 rounded-md border px-3 py-2 text-xs font-medium transition-colors tap-target sm:px-4 sm:text-sm",
    active
      ? "bg-foreground text-background border-foreground"
      : "border-border bg-card text-muted-foreground hover:bg-secondary"
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
      <PageHero label={page.label} title={page.title} description={page.description} />

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

      <section className="border-b border-border bg-background py-12 sm:py-16">
        <PageContainer>
          {filtered.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 overflow-hidden editorial-card sm:mb-12"
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
                  <h2 className="mb-3 break-anywhere text-xl font-bold sm:text-2xl">
                    {filtered[0].title}
                  </h2>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {filtered[0].excerpt}
                  </p>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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
                    className="inline-flex min-h-[var(--touch-min)] items-center gap-1 text-sm font-medium text-primary hover:underline"
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
                className="group editorial-card-hover overflow-hidden"
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
                  <Badge variant="outline" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="mb-2 line-clamp-2 text-base font-semibold sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex min-h-[var(--touch-min)] items-center gap-1 text-sm font-medium text-primary hover:underline"
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
