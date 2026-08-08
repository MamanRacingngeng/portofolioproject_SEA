"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getBlogPostBySlug } from "@/data/blog";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { PageShell, PageContainer } from "@/components/layout/page-shell";

interface BlogPostContentProps {
  slug: string;
}

export function BlogPostContent({ slug }: BlogPostContentProps) {
  const { t } = useLanguage();
  const post = getBlogPostBySlug(slug, t);

  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <PageShell>
      <section className="relative min-h-[35vh] border-b-2 border-ink sm:min-h-[40vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink/60" />
      </section>

      <article className="border-b-2 border-ink bg-white py-10 sm:py-12">
        <PageContainer size="narrow" className="max-w-3xl">
          <Link
            href="/blog"
            className="label-font mb-5 inline-flex min-h-[var(--touch-min)] items-center gap-2 text-xs font-bold tracking-wider text-ink/70 hover:text-ink sm:mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.common.backToBlog}
          </Link>

          <Badge className="mb-4">{post.category}</Badge>

          <h1 className="display-font mb-5 break-anywhere text-2xl leading-tight xs:text-3xl sm:mb-6 sm:text-4xl">
            {post.title}
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-4 border-b-2 border-ink pb-8 text-sm text-ink/60">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="prose-custom space-y-6">
            {paragraphs.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="display-font mb-4 mt-8 text-2xl">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.includes("** –")) {
                const parts = block.split("\n");
                return (
                  <ol key={i} className="list-none space-y-2">
                    {parts.map((line) => {
                      const match = line.match(/\*\*(.+?)\*\* – (.+)/);
                      if (match) {
                        return (
                          <li key={line} className="flex items-start gap-3 text-ink/80">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-ink bg-v26yellow text-xs font-bold">
                              •
                            </span>
                            <span>
                              <strong className="text-ink">{match[1]}</strong> – {match[2]}
                            </span>
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ol>
                );
              }
              if (block.startsWith("**") && block.includes("** – ")) {
                return (
                  <p key={i} className="leading-relaxed text-ink/80">
                    <strong className="text-ink">
                      {block.match(/\*\*(.+?)\*\*/)?.[1]}
                    </strong>
                    {block.replace(/\*\*.+?\*\*/, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-lg leading-relaxed text-ink/80">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t-2 border-ink pt-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4" />
                {t.common.backToAllArticles}
              </Button>
            </Link>
          </div>
        </PageContainer>
      </article>
    </PageShell>
  );
}
