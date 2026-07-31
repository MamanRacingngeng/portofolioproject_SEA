import type { Dictionary } from "@/lib/i18n/get-dictionary";

export function getNavLinks(t: Dictionary) {
  return [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/career", label: t.nav.career },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];
}

export type ProjectCategoryKey =
  | "foodProductDevelopment"
  | "fermentationResearch"
  | "foodInnovation";

export type BlogCategoryKey =
  | "foodScience"
  | "foodInnovation"
  | "foodTechnology"
  | "research";

export function getProjectCategoryLabel(
  t: Dictionary,
  key: ProjectCategoryKey
): string {
  return t.projects.categories[key];
}

export function getBlogCategoryLabel(
  t: Dictionary,
  key: BlogCategoryKey
): string {
  return t.blogCategories[key];
}
