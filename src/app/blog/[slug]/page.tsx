import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogSlugs } from "@/data/blog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { BlogPostContent } from "@/components/pages/blog-post-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug, getDictionary("en"));
  if (!post) return { title: getDictionary("en").common.articleNotFound };

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
  if (!blogSlugs.includes(slug)) notFound();

  return <BlogPostContent slug={slug} />;
}
