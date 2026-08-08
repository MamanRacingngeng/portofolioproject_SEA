"use client";

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
import { getProjectBySlug } from "@/data/projects";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell, PageContainer } from "@/components/layout/page-shell";

interface ProjectDetailContentProps {
  slug: string;
}

export function ProjectDetailContent({ slug }: ProjectDetailContentProps) {
  const { t } = useLanguage();
  const project = getProjectBySlug(slug, t);

  if (!project) notFound();

  return (
    <PageShell>
      <section className="relative min-h-[40vh] border-b-2 border-ink sm:min-h-[45vh] lg:min-h-[50vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <PageContainer size="narrow" className="relative">
            <Link
              href="/projects"
              className="label-font mb-3 inline-flex min-h-[var(--touch-min)] items-center gap-2 text-xs font-bold tracking-wider text-white/80 hover:text-v26yellow sm:mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.common.backToProjects}
            </Link>
            <Badge className="mb-3 border-white bg-white/20 text-white">
              <FlaskConical className="mr-1 h-3 w-3" />
              {project.category}
            </Badge>
            <h1 className="display-font mb-2 break-anywhere text-2xl text-white xs:text-3xl sm:mb-3 sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-sm text-white/80 sm:text-base md:text-lg">
              {project.shortDescription}
            </p>
          </PageContainer>
        </div>
      </section>

      <article className="border-b-2 border-ink bg-white py-10 sm:py-16">
        <PageContainer size="narrow">
          <section className="mb-12">
            <h2 className="display-font mb-4 flex items-center gap-2 text-2xl">
              <BookOpen className="h-5 w-5 text-v26coral" />
              {t.common.overview}
            </h2>
            <p className="leading-relaxed text-ink/80">{project.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="display-font mb-4 text-2xl">{t.common.background}</h2>
            <p className="leading-relaxed text-ink/80">{project.background}</p>
          </section>

          <section className="v26-card mb-10 bg-v26mint p-5 sm:mb-12 sm:p-8">
            <h2 className="display-font mb-6 flex items-center gap-2 text-2xl">
              <Target className="h-5 w-5 text-v26coral" />
              {t.common.objectives}
            </h2>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={obj} className="flex items-start gap-3 text-ink/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border-2 border-ink bg-v26yellow text-xs font-bold">
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="display-font mb-6 flex items-center gap-2 text-2xl">
              <Microscope className="h-5 w-5 text-v26coral" />
              {t.common.methodology}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.methodology.map((method) => (
                <div
                  key={method}
                  className="v26-card bg-paper p-4 text-sm text-ink/80"
                >
                  {method}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="display-font mb-6 text-2xl">{t.common.process}</h2>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-ink/20" />
              <div className="space-y-4">
                {project.process.map((step, i) => (
                  <div key={step} className="relative pl-10">
                    <div className="absolute left-2.5 top-3 h-3 w-3 border-2 border-ink bg-v26yellow" />
                    <div className="v26-card bg-paper p-4">
                      <p className="label-font mb-1 text-[10px] font-bold tracking-wider text-v26coral">
                        {t.common.step} {i + 1}
                      </p>
                      <p className="text-sm text-ink/80">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="v26-card mb-10 border-ink bg-ink p-5 text-white sm:mb-12 sm:p-8">
            <h2 className="display-font mb-6 flex items-center gap-2 text-2xl">
              <CheckCircle2 className="h-5 w-5 text-v26yellow" />
              {t.common.results}
            </h2>
            <ul className="space-y-3">
              {project.results.map((result) => (
                <li key={result} className="flex items-start gap-3 text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-v26mint" />
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {project.gallery.length > 0 && (
            <section className="mb-12">
              <h2 className="display-font mb-6 text-2xl">{t.common.gallery}</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((img, i) => (
                  <div
                    key={img}
                    className="relative h-48 overflow-hidden border-2 border-ink"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.relatedPublication && (
            <section className="v26-card mb-12 bg-v26sky/40 p-6">
              <h2 className="display-font mb-2 text-lg">{t.common.relatedPublication}</h2>
              <p className="text-sm italic text-ink/75">{project.relatedPublication}</p>
            </section>
          )}

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <Link href="/projects">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4" />
              {t.common.backToAllProjects}
            </Button>
          </Link>
        </PageContainer>
      </article>
    </PageShell>
  );
}
