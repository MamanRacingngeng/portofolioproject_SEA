import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Target,
  FlaskConical,
  CheckCircle2,
  BookOpen,
  Microscope,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

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
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="pt-24">
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-700/80 via-earth-700/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-cream-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <Badge className="mb-3 bg-white/20 text-white border-white/30">
              <FlaskConical className="h-3 w-3 mr-1" />
              {project.category}
            </Badge>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              {project.title}
            </h1>
            <p className="text-cream-200 text-lg max-w-2xl">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-earth-700 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-fresh-600" />
              Overview
            </h2>
            <p className="text-earth-600 leading-relaxed">{project.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-earth-700 mb-4">
              Background
            </h2>
            <p className="text-earth-600 leading-relaxed">{project.background}</p>
          </section>

          <section className="mb-12 bg-fresh-50 rounded-2xl p-8">
            <h2 className="font-display text-2xl font-semibold text-earth-700 mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-fresh-600" />
              Objectives
            </h2>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li
                  key={obj}
                  className="flex items-start gap-3 text-earth-600"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fresh-600 text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-earth-700 mb-6 flex items-center gap-2">
              <Microscope className="h-5 w-5 text-fresh-600" />
              Research Methodology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.methodology.map((method) => (
                <div
                  key={method}
                  className="bg-white rounded-xl p-4 border border-cream-200 text-sm text-earth-600"
                >
                  {method}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-earth-700 mb-6">
              Process
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-fresh-200" />
              <div className="space-y-4">
                {project.process.map((step, i) => (
                  <div key={step} className="relative pl-10">
                    <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full bg-fresh-500 border-2 border-white" />
                    <div className="bg-cream-50 rounded-xl p-4 border border-cream-200">
                      <p className="text-xs font-semibold text-fresh-600 mb-1">
                        Step {i + 1}
                      </p>
                      <p className="text-sm text-earth-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-12 bg-earth-700 rounded-2xl p-8 text-white">
            <h2 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-fresh-300" />
              Results
            </h2>
            <ul className="space-y-3">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 text-cream-100"
                >
                  <CheckCircle2 className="h-5 w-5 text-fresh-400 shrink-0 mt-0.5" />
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {project.gallery.length > 0 && (
            <section className="mb-12">
              <h2 className="font-display text-2xl font-semibold text-earth-700 mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={img}
                    className="relative h-48 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.relatedPublication && (
            <section className="mb-12 bg-cream-50 rounded-2xl p-6 border border-cream-200">
              <h2 className="font-display text-lg font-semibold text-earth-700 mb-2">
                Related Publication
              </h2>
              <p className="text-sm text-earth-600 italic">
                {project.relatedPublication}
              </p>
            </section>
          )}

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <Link href="/projects">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4" />
              Back to All Projects
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
