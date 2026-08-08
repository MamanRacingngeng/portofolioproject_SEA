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
      <section className="relative min-h-[35vh] border-b border-border sm:min-h-[40vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </section>

      <article className="border-b border-border bg-background py-10 sm:py-12">
        <PageContainer size="narrow" className="max-w-3xl">
          <Link
            href="/blog"
            className="mb-5 inline-flex min-h-[var(--touch-min)] items-center gap-2 text-sm text-primary hover:underline sm:mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.common.backToBlog}
          </Link>

          <Badge className="mb-4">{post.category}</Badge>

          <h1 className="mb-5 break-anywhere text-2xl font-bold leading-tight xs:text-3xl sm:mb-6 sm:text-4xl">
            {post.title}
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-border pb-8 text-sm text-muted-foreground">
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
                  <h2 key={i} className="mb-4 mt-8 text-2xl font-bold">
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
                          <li key={line} className="flex items-start gap-3 text-muted-foreground">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                              •
                            </span>
                            <span>
                              <strong className="text-foreground">{match[1]}</strong> – {match[2]}
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
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">
                      {block.match(/\*\*(.+?)\*\*/)?.[1]}
                    </strong>
                    {block.replace(/\*\*.+?\*\*/, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
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
