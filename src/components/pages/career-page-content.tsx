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

const statusColors = {
  published: "bg-fresh-100 text-fresh-700",
  submitted: "bg-wheat-100 text-wheat-600",
  "in-progress": "bg-olive-100 text-olive-700",
};

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
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
      />

      <section className="bg-white py-12 sm:py-16">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fresh-100 sm:h-12 sm:w-12">
              <GraduationCap className="h-5 w-5 text-fresh-600 sm:h-6 sm:w-6" />
            </div>
            <h2 className="font-display text-xl font-semibold text-earth-700 sm:text-2xl">
              {t.common.education}
            </h2>
          </div>

          <div className="rounded-2xl border border-fresh-100 bg-gradient-to-br from-fresh-50 to-cream-50 p-5 shadow-soft sm:p-8">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="min-w-0">
                <h3 className="break-anywhere font-display text-lg font-semibold text-earth-700 sm:text-xl">
                  {education.degree}
                </h3>
                <p className="mt-1 font-medium text-fresh-600">
                  {education.university}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <Badge>{education.years}</Badge>
                <p className="mt-2 text-sm text-earth-600">
                  {page.cohortLabel}{" "}
                  <span className="font-semibold">{education.gpa}</span>
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-white/80 p-4 sm:p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-earth-500">
                {t.common.patentInvention}
              </p>
              <p className="text-sm italic leading-relaxed text-earth-700">
                &ldquo;{education.thesis}&rdquo;
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-earth-500">
                {t.common.highlights}
              </p>
              <ul className="space-y-2">
                {education.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-earth-600"
                  >
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-wheat-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-fresh-100 pt-6">
              <a
                href={siteConfig.cvUrl}
                download={siteConfig.cvFileName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroPrimary" size="lg" className="w-full sm:w-auto">
                  <Download className="h-4 w-4" />
                  {t.common.downloadCvBtn}
                </Button>
              </a>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="bg-cream-50 py-12 sm:py-16">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wheat-100 sm:h-12 sm:w-12">
              <Award className="h-5 w-5 text-wheat-600 sm:h-6 sm:w-6" />
            </div>
            <h2 className="font-display text-xl font-semibold text-earth-700 sm:text-2xl">
              {page.professionalCertifications}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certifications.map((cert) => {
              const Icon = certCategoryIcons[cert.category] || Award;
              return (
                <div
                  key={cert.id}
                  className="rounded-2xl border border-cream-200 bg-white p-4 transition-shadow duration-300 hover:shadow-card sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fresh-50">
                      <Icon className="h-5 w-5 text-fresh-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-anywhere text-sm font-semibold text-earth-700">
                        {cert.name}
                      </h3>
                      <p className="mt-1 text-xs text-earth-500">{cert.issuer}</p>
                      <Badge variant="outline" className="mt-2 text-[10px]">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      <section className="safe-pb bg-white py-12 sm:py-16">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive-100 sm:h-12 sm:w-12">
              <BookOpen className="h-5 w-5 text-olive-600 sm:h-6 sm:w-6" />
            </div>
            <h2 className="font-display text-xl font-semibold text-earth-700 sm:text-2xl">
              {page.researchPublications}
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.id}
                className="rounded-2xl border border-cream-200 bg-cream-50 p-4 transition-shadow duration-300 hover:shadow-card sm:p-6"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <Badge className={statusColors[pub.status]}>
                    {statusLabels[pub.status]}
                  </Badge>
                  <span className="text-xs text-earth-500">{pub.year}</span>
                </div>

                <h3 className="mb-2 break-anywhere font-display text-base font-semibold leading-snug text-earth-700 sm:text-lg">
                  {pub.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-earth-500">
                  <span>
                    {t.common.role}:{" "}
                    <span className="font-medium text-earth-600">{pub.role}</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>
                    {t.common.journal}:{" "}
                    <span className="font-medium text-earth-600">
                      {pub.journal}
                    </span>
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-earth-600">
                  {pub.abstract}
                </p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
