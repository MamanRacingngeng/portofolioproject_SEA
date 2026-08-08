"use client";

import {
  GraduationCap,
  Award,
  BookOpen,
  Shield,
  FlaskConical,
  Download,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";
import {
  PageShell,
  PageContainer,
  PageHero,
} from "@/components/layout/page-shell";

const certCategoryIcons = {
  "food-safety": Shield,
  quality: Award,
  laboratory: FlaskConical,
  halal: Shield,
};

const certTints = ["mint", "honey", "coral", "violet"] as const;

export function CareerPageContent() {
  const { t } = useLanguage();
  const page = t.pages.career;
  const { education, certifications, publications } = t;

  const statusLabels = {
    published: page.status.published,
    submitted: page.status.submitted,
    "in-progress": page.status.inProgress,
  };

  return (
    <PageShell>
      <PageHero label={page.label} title={page.title} description={page.description} />

      <section className="py-12 sm:py-16">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mint text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold sm:text-2xl">{t.common.education}</h2>
          </div>

          <SurfaceCard tint="mint" className="!p-5 sm:!p-8">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="min-w-0">
                <h3 className="break-anywhere font-display text-lg font-bold sm:text-xl">{education.degree}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {education.university}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <Badge variant="honey">{education.years}</Badge>
                <p className="mt-2 text-xs text-muted-foreground">
                  {page.cohortLabel}{" "}
                  <span className="font-bold text-mint-dark">{education.gpa}</span>
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-mint-light/50 p-4 sm:p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-mint-dark">
                {t.common.patentInvention}
              </p>
              <p className="text-sm italic leading-relaxed">
                &ldquo;{education.thesis}&rdquo;
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                {t.common.highlights}
              </p>
              <ul className="space-y-2">
                {education.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-border/50 pt-6">
              <a
                href={siteConfig.cvUrl}
                download={siteConfig.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="coral" size="lg" className="w-full sm:w-auto">
                  <Download className="h-4 w-4" />
                  {t.common.downloadCvBtn}
                </Button>
              </a>
            </div>
          </SurfaceCard>
        </PageContainer>
      </section>

      <section className="bg-honey-light/40 py-12 sm:py-16">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-honey text-amber-950">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold sm:text-2xl">{page.professionalCertifications}</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => {
              const Icon = certCategoryIcons[cert.category] || Award;
              return (
                <SurfaceCard key={cert.id} tint={certTints[i % certTints.length]} className="!p-4 sm:!p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-mint">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-anywhere text-sm font-bold">{cert.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="outline" className="mt-2">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </SurfaceCard>
              );
            })}
          </div>
        </PageContainer>
      </section>

      <section className="pb-[max(3rem,env(safe-area-inset-bottom))] py-12 sm:py-16">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="font-display text-xl font-bold sm:text-2xl">{page.researchPublications}</h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {publications.map((pub, i) => (
              <SurfaceCard key={pub.id} tint={certTints[i % certTints.length]} className="!p-4 sm:!p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <Badge variant={pub.status}>{statusLabels[pub.status]}</Badge>
                  <span className="text-xs font-semibold text-muted-foreground">{pub.year}</span>
                </div>

                <h3 className="mb-2 break-anywhere font-display text-base font-bold leading-snug sm:text-lg">
                  {pub.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span>
                    {t.common.role}:{" "}
                    <span className="font-semibold text-foreground">{pub.role}</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>
                    {t.common.journal}:{" "}
                    <span className="font-semibold text-foreground">{pub.journal}</span>
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{pub.abstract}</p>
              </SurfaceCard>
            ))}
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
