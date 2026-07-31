import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { ProjectCategoryKey } from "@/lib/i18n/content";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryKey: ProjectCategoryKey;
  shortDescription: string;
  image: string;
  overview: string;
  background: string;
  objectives: string[];
  methodology: string[];
  process: string[];
  results: string[];
  gallery: string[];
  relatedPublication?: string;
  featured: boolean;
  tags: string[];
}

const projectMeta = [
  {
    id: "proj-1",
    slug: "natto-sacha-inchi-production",
    categoryKey: "foodProductDevelopment" as ProjectCategoryKey,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
    ],
    featured: true,
    tags: ["Patent", "Natto", "Sacha Inchi", "Fermentation", "Product Development"],
  },
  {
    id: "proj-2",
    slug: "sacha-inchi-fermentation-research",
    categoryKey: "fermentationResearch" as ProjectCategoryKey,
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
      "https://images.unsplash.com/photo-1581093458791-9f3023bfa1e5?w=600&q=80",
    ],
    featured: true,
    tags: ["Fermentation", "Sacha Inchi", "Research", "Laboratory"],
  },
  {
    id: "proj-3",
    slug: "local-food-diversification",
    categoryKey: "foodInnovation" as ProjectCategoryKey,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    ],
    featured: true,
    tags: ["Innovation", "Local Food", "Diversification", "Indonesia"],
  },
];

export function getProjects(t: Dictionary): Project[] {
  return projectMeta.map((meta) => {
    const content =
      t.projects.bySlug[meta.slug as keyof typeof t.projects.bySlug];
    return {
      ...meta,
      ...content,
      category: content.category,
    };
  });
}

export function getProjectBySlug(
  slug: string,
  t: Dictionary
): Project | undefined {
  return getProjects(t).find((p) => p.slug === slug);
}

export function getFeaturedProjects(t: Dictionary): Project[] {
  return getProjects(t).filter((p) => p.featured);
}

export function getProjectCategoryKeys(): ProjectCategoryKey[] {
  return ["foodProductDevelopment", "fermentationResearch", "foodInnovation"];
}

export const projectSlugs = projectMeta.map((p) => p.slug);
