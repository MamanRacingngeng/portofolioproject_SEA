import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ProjectDetailContent } from "@/components/pages/project-detail-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug, getDictionary("en"));
  if (!project) return { title: getDictionary("en").common.projectNotFound };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!projectSlugs.includes(slug)) notFound();

  return <ProjectDetailContent slug={slug} />;
}
