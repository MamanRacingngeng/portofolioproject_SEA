import type { Metadata } from "next";
import {
  GraduationCap,
  Award,
  BookOpen,
  ExternalLink,
  Shield,
  FlaskConical,
} from "lucide-react";
import {
  education,
  certifications,
  publications,
} from "@/data/career";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import {
  PageShell,
  PageContainer,
  PageHero,
} from "@/components/layout/page-shell";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Education, certifications, and research publications of Gnothi Sea Fauziah — Food Technology student at Ahmad Dahlan University.",
};

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

export default function CareerPage() {
  return (
    <PageShell>
      <PageHero
        label="Career"
        title="Education & Credentials"
        description="Academic achievements, professional certifications, and patent publications in food science and technology."
      />

      <section className="bg-white py-12 sm:py-16">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fresh-100 sm:h-12 sm:w-12">
              <GraduationCap className="h-5 w-5 text-fresh-600 sm:h-6 sm:w-6" />
            </div>
            <h2 className="font-display text-xl font-semibold text-earth-700 sm:text-2xl">
              Education
            </h2>
          </div>

          <div className="rounded-2xl border border-fresh-100 bg-gradient-to-br from-fresh-50 to-cream-50 p-5 shadow-soft sm:p-8">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold text-earth-700 sm:text-xl break-anywhere">
                  {education.degree}
                </h3>
                <p className="mt-1 font-medium text-fresh-600">
                  {education.university}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <Badge>{education.years}</Badge>
                <p className="mt-2 text-sm text-earth-600">
                  Cohort:{" "}
                  <span className="font-semibold">{education.gpa}</span>
                </p>
              </div>
            </div>

            <div className="mb-6 rounded-xl bg-white/80 p-4 sm:p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-earth-500">
                Patent Invention
              </p>
              <p className="text-sm italic leading-relaxed text-earth-700">
                &ldquo;{education.thesis}&rdquo;
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-earth-500">
                Highlights
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
                  Download CV
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
              Professional Certifications
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
                      <h3 className="text-sm font-semibold text-earth-700 break-anywhere">
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

      <section className="bg-white py-12 sm:py-16 safe-pb">
        <PageContainer size="narrow">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive-100 sm:h-12 sm:w-12">
              <BookOpen className="h-5 w-5 text-olive-600 sm:h-6 sm:w-6" />
            </div>
            <h2 className="font-display text-xl font-semibold text-earth-700 sm:text-2xl">
              Research & Publications
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
                    {pub.status.replace("-", " ")}
                  </Badge>
                  <span className="text-xs text-earth-500">{pub.year}</span>
                </div>

                <h3 className="mb-2 font-display text-base font-semibold leading-snug text-earth-700 sm:text-lg break-anywhere">
                  {pub.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-earth-500">
                  <span>
                    Role:{" "}
                    <span className="font-medium text-earth-600">
                      {pub.role}
                    </span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>
                    Journal:{" "}
                    <span className="font-medium text-earth-600">
                      {pub.journal}
                    </span>
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-earth-600">
                  {pub.abstract}
                </p>

                {pub.link && (
                  <a
                    href={pub.link}
                    className="inline-flex min-h-[var(--touch-min)] items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700"
                  >
                    View Publication
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
