export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "natto-sacha-inchi-innovation",
    title:
      "Sacha Inchi Natto: Fermentation Innovation from Local Indonesian Raw Materials",
    excerpt:
      "How the simple patent invention for Sacha Inchi Natto Production Process delivers local food product diversification based on Plukenetia volubilis L. seeds.",
    content: `Natto is a traditional Japanese fermented product renowned for its health benefits. The "Sacha Inchi Natto Production Process" invention presents an innovative adaptation using sacha inchi seeds (Plukenetia volubilis L.) — a local Indonesian raw material rich in protein and omega-3 fatty acids.

## Invention Background

As a Food Technology undergraduate at Ahmad Dahlan University, I developed the sacha inchi natto production process alongside Sitta Istiqomah Said and Muhammad Fanni. The primary objective was to diversify local food products through fermentation technology.

## Production Process Stages

The patented process includes:

1. **Soaking** — Softening sacha inchi seeds to prepare for fermentation
2. **Peeling** — Preparing an optimal substrate for inoculation
3. **Fermentation** — Inoculation with Bacillus subtilis var. natto until the product matures

## Patent Significance

This simple patent was published in the Official Simple Patent Bulletin Series A on December 20, 2024. The invention opens opportunities for developing probiotic food products based on underutilized Indonesian raw materials.`,
    category: "Food Innovation",
    date: "2024-12-20",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Natto", "Sacha Inchi", "Patent", "Fermentation", "Innovation"],
  },
  {
    id: "blog-2",
    slug: "fermentation-science-natto",
    title: "The Science of Natto Fermentation: From Soybean to Sacha Inchi",
    excerpt:
      "Understanding the principles of natto fermentation and how local raw materials like sacha inchi can serve as an innovative alternative substrate.",
    content: `Natto fermentation involves Bacillus subtilis var. natto, which produces the nattokinase enzyme and beneficial bioactive compounds. Traditionally, natto is made from soybeans — however, raw material diversification is key to local food innovation.

## Why Sacha Inchi?

Sacha inchi seeds (Plukenetia volubilis L.) grow in Indonesia and offer an attractive nutritional profile: high protein, omega-3, and vitamin E. Adapting natto to sacha inchi requires different soaking and fermentation optimization compared to soybeans.

## Research Process

Our research focused on physicochemical characteristics during fermentation, soaking parameter evaluation, and sensory acceptance of the final product. Results were documented in the simple patent published in December 2024.`,
    category: "Food Science",
    date: "2024-11-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Fermentation", "Natto", "Sacha Inchi", "Research"],
  },
  {
    id: "blog-3",
    slug: "local-food-diversification-indonesia",
    title: "Local Food Diversification: The Potential of Sacha Inchi Seeds",
    excerpt:
      "Indonesia holds a wealth of local food resources that remain underutilized. Sacha inchi is one raw material with significant potential.",
    content: `Indonesia is one of the world's centers of food biodiversity. However, many local ingredients such as sacha inchi seeds are not yet fully leveraged in modern processed products.

## Sacha Inchi Potential

Plukenetia volubilis L., or sacha inchi, is known as the "Inca peanut" for its high omega-3 and protein content. Developing fermented products like sacha inchi natto adds economic and nutritional value to this ingredient.

## Diversification Vision

Through patent invention, we hope to inspire further development of innovative local food products — supporting farmers, the food industry, and community nutrition.`,
    category: "Food Technology",
    date: "2024-10-08",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Local Food", "Sacha Inchi", "Diversification", "Indonesia"],
  },
  {
    id: "blog-4",
    slug: "patent-simple-food-invention",
    title:
      "Understanding Simple Patents for Food Product Inventions",
    excerpt:
      "A brief guide to simple patents in Indonesia and how food technology students can protect their inventions.",
    content: `A simple patent is a form of intellectual property protection for inventions meeting specific inventive thresholds. In Indonesia, simple patents are published through the Official Simple Patent Bulletin Series A.

## Application Process

As an inventor, the process involves documenting the invention, drafting process claims, and submitting to the Directorate General of Intellectual Property (DGIP). Our "Sacha Inchi Natto Production Process" invention was published on December 20, 2024.

## Benefits for Students

Simple patents not only protect inventions but also strengthen the academic and professional profile of food technology students in the eyes of industry and recruiters.`,
    category: "Research",
    date: "2024-09-20",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3023bfa1e5?w=800&q=80",
    author: "Gnothi Sea Fauziah",
    tags: ["Patent", "IP", "Food Technology", "Innovation"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = [
  "All",
  "Food Science",
  "Food Innovation",
  "Food Technology",
  "Research",
];
