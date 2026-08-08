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
import { SurfaceCard } from "@/components/ui/surface-card";
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
      <section className="relative min-h-[40vh] sm:min-h-[45vh] lg:min-h-[50vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-mint-dark/75" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
          <PageContainer size="narrow" className="relative">
            <Link
              href="/projects"
              className="mb-3 inline-flex min-h-[var(--touch-min)] items-center gap-2 text-sm font-semibold text-emerald-100 hover:text-white sm:mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.common.backToProjects}
            </Link>
            <Badge variant="honey" className="mb-3">
              <FlaskConical className="mr-1 h-3 w-3" />
              {project.category}
            </Badge>
            <h1 className="mb-2 break-anywhere font-display text-2xl font-extrabold text-white xs:text-3xl sm:mb-3 sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-sm text-emerald-50 sm:text-base md:text-lg">
              {project.shortDescription}
            </p>
          </PageContainer>
        </div>
      </section>

      <article className="py-10 sm:py-16">
        <PageContainer size="narrow">
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold">
              <BookOpen className="h-5 w-5 text-mint" />
              {t.common.overview}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{project.overview}</p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-display text-2xl font-bold">{t.common.background}</h2>
            <p className="leading-relaxed text-muted-foreground">{project.background}</p>
          </section>

          <SurfaceCard tint="honey" className="mb-10 sm:mb-12">
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
              <Target className="h-5 w-5 text-coral" />
              {t.common.objectives}
            </h2>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={obj} className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {obj}
                </li>
              ))}
            </ul>
          </SurfaceCard>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
              <Microscope className="h-5 w-5 text-mint" />
              {t.common.methodology}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.methodology.map((method, i) => (
                <SurfaceCard
                  key={method}
                  tint={i % 2 === 0 ? "mint" : "coral"}
                  className="!p-4 text-sm text-muted-foreground"
                >
                  {method}
                </SurfaceCard>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 font-display text-2xl font-bold">{t.common.process}</h2>
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-mint-light" />
              <div className="space-y-4">
                {project.process.map((step, i) => (
                  <div key={step} className="relative pl-10">
                    <div className="absolute left-2 top-3 h-4 w-4 rounded-full border-2 border-white bg-honey" />
                    <SurfaceCard tint="white" className="!p-4">
                      <p className="mb-1 text-xs font-bold text-mint">
                        {t.common.step} {i + 1}
                      </p>
                      <p className="text-sm text-muted-foreground">{step}</p>
                    </SurfaceCard>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="band-mint mb-10 rounded-3xl p-5 text-white sm:mb-12 sm:p-8">
            <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold">
              <CheckCircle2 className="h-5 w-5 text-honey" />
              {t.common.results}
            </h2>
            <ul className="space-y-3">
              {project.results.map((result) => (
                <li key={result} className="flex items-start gap-3 text-emerald-50">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-honey" />
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {project.gallery.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 font-display text-2xl font-bold">{t.common.gallery}</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((img, i) => (
                  <div key={img} className="relative h-48 overflow-hidden rounded-2xl shadow-md">
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
            <SurfaceCard tint="mint" className="mb-12">
              <h2 className="mb-2 font-display text-lg font-bold">{t.common.relatedPublication}</h2>
              <p className="text-sm italic text-muted-foreground">{project.relatedPublication}</p>
            </SurfaceCard>
          )}

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={tag} variant={i % 3 === 0 ? "mint" : i % 3 === 1 ? "honey" : "coral"}>
                {tag}
              </Badge>
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
