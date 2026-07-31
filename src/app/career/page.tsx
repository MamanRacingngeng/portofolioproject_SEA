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

export const metadata: Metadata = {
  title: "Career",
  description:
    "Education, certifications, and research publications of a Food Technology graduate from Universitas Ahmad Dahlan.",
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
    <div className="pt-24">
      <section className="py-16 bg-gradient-to-br from-cream-50 via-white to-fresh-50 relative">
        <div className="absolute inset-0 bg-molecule-pattern opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-fresh-600 tracking-widest uppercase mb-3">
            Career
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-700 mb-4">
            Education & Credentials
          </h1>
          <p className="text-earth-600/80 max-w-2xl mx-auto leading-relaxed">
            Academic achievements, professional certifications, and research
            contributions in food science and technology.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-fresh-100 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-fresh-600" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-earth-700">
              Education
            </h2>
          </div>

          <div className="bg-gradient-to-br from-fresh-50 to-cream-50 rounded-2xl p-8 border border-fresh-100 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-earth-700">
                  {education.degree}
                </h3>
                <p className="text-fresh-600 font-medium mt-1">
                  {education.university}
                </p>
              </div>
              <div className="text-right">
                <Badge>{education.years}</Badge>
                <p className="text-sm text-earth-600 mt-2">
                  GPA: <span className="font-semibold">{education.gpa}</span>
                </p>
              </div>
            </div>

            <div className="bg-white/80 rounded-xl p-5 mb-6">
              <p className="text-xs font-semibold text-earth-500 uppercase tracking-wide mb-2">
                Thesis
              </p>
              <p className="text-sm text-earth-700 leading-relaxed italic">
                &ldquo;{education.thesis}&rdquo;
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-earth-500 uppercase tracking-wide mb-3">
                Highlights
              </p>
              <ul className="space-y-2">
                {education.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-earth-600"
                  >
                    <Award className="h-4 w-4 text-wheat-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-wheat-100 flex items-center justify-center">
              <Award className="h-6 w-6 text-wheat-600" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-earth-700">
              Professional Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => {
              const Icon =
                certCategoryIcons[cert.category] || Award;
              return (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl p-5 border border-cream-200 hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-fresh-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-fresh-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-earth-700 text-sm">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-earth-500 mt-1">
                        {cert.issuer}
                      </p>
                      <Badge variant="outline" className="mt-2 text-[10px]">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-olive-100 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-olive-600" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-earth-700">
              Research & Publications
            </h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.id}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:shadow-card transition-shadow duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <Badge className={statusColors[pub.status]}>
                    {pub.status.replace("-", " ")}
                  </Badge>
                  <span className="text-xs text-earth-500">{pub.year}</span>
                </div>

                <h3 className="font-display text-lg font-semibold text-earth-700 mb-2 leading-snug">
                  {pub.title}
                </h3>

                <div className="flex flex-wrap gap-3 text-xs text-earth-500 mb-4">
                  <span>
                    Role:{" "}
                    <span className="font-medium text-earth-600">
                      {pub.role}
                    </span>
                  </span>
                  <span>•</span>
                  <span>
                    Journal:{" "}
                    <span className="font-medium text-earth-600">
                      {pub.journal}
                    </span>
                  </span>
                </div>

                <p className="text-sm text-earth-600 leading-relaxed mb-4">
                  {pub.abstract}
                </p>

                {pub.link && (
                  <a
                    href={pub.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-fresh-600 hover:text-fresh-700"
                  >
                    View Publication
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
