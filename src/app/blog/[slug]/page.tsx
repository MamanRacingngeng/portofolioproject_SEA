import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="pt-24">
      <section className="relative h-[40vh] min-h-[320px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-700/80 to-transparent" />
      </section>

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-fresh-600 hover:text-fresh-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <Badge className="mb-4">{post.category}</Badge>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-earth-700 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-earth-500 mb-8 pb-8 border-b border-cream-200">
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
                  <h2
                    key={i}
                    className="font-display text-2xl font-semibold text-earth-700 mt-8 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.includes("** –")) {
                const parts = block.split("\n");
                return (
                  <ol key={i} className="space-y-2 list-none">
                    {parts.map((line) => {
                      const match = line.match(/\*\*(.+?)\*\* – (.+)/);
                      if (match) {
                        return (
                          <li
                            key={line}
                            className="flex items-start gap-3 text-earth-600"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fresh-100 text-fresh-700 text-xs font-bold">
                              •
                            </span>
                            <span>
                              <strong className="text-earth-700">
                                {match[1]}
                              </strong>{" "}
                              – {match[2]}
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
                  <p key={i} className="text-earth-600 leading-relaxed">
                    <strong className="text-earth-700">
                      {block.match(/\*\*(.+?)\*\*/)?.[1]}
                    </strong>
                    {block.replace(/\*\*.+?\*\*/, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-earth-600 leading-relaxed text-lg">
                  {block}
                </p>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-cream-200">
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
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
