import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { BlogCategoryKey } from "@/lib/i18n/content";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryKey: BlogCategoryKey;
  date: string;
  readTime: string;
  image: string;
  author: string;
  tags: string[];
}

const blogMeta = [
  {
    id: "blog-1",
    slug: "natto-sacha-inchi-innovation",
    categoryKey: "foodInnovation" as BlogCategoryKey,
    date: "2024-12-20",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Natto", "Sacha Inchi", "Patent", "Fermentation", "Innovation"],
  },
  {
    id: "blog-2",
    slug: "fermentation-science-natto",
    categoryKey: "foodScience" as BlogCategoryKey,
    date: "2024-11-15",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Fermentation", "Natto", "Sacha Inchi", "Research"],
  },
  {
    id: "blog-3",
    slug: "local-food-diversification-indonesia",
    categoryKey: "foodTechnology" as BlogCategoryKey,
    date: "2024-10-08",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Local Food", "Sacha Inchi", "Diversification", "Indonesia"],
  },
  {
    id: "blog-4",
    slug: "patent-simple-food-invention",
    categoryKey: "research" as BlogCategoryKey,
    date: "2024-09-20",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3023bfa1e5?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Patent", "IP", "Food Technology", "Innovation"],
  },
];

export function getBlogPosts(t: Dictionary): BlogPost[] {
  return blogMeta.map((meta) => {
    const content = t.blog.bySlug[meta.slug as keyof typeof t.blog.bySlug];
    return {
      ...meta,
      ...content,
      category: content.category,
    };
  });
}

export function getBlogPostBySlug(
  slug: string,
  t: Dictionary
): BlogPost | undefined {
  return getBlogPosts(t).find((p) => p.slug === slug);
}

export function getBlogCategoryKeys(): BlogCategoryKey[] {
  return ["foodScience", "foodInnovation", "foodTechnology", "research"];
}

export const blogSlugs = blogMeta.map((b) => b.slug);
