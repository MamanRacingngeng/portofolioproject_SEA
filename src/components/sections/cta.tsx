"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/motion/animations";

export function CTASection() {
  const { t } = useLanguage();
  const cta = t.home.cta;

  return (
    <section className="border-b border-border">
      <div className="container-app mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <RevealOnScroll className="border-b border-border px-0 py-14 sm:py-20 lg:border-b-0 lg:border-r lg:py-24 lg:pr-12">
            <p className="section-eyebrow">{cta.leftLabel}</p>
            <blockquote className="font-serif mt-4 text-2xl leading-snug sm:text-3xl">
              &ldquo;{cta.quote}&rdquo;
            </blockquote>
            <p className="mt-5 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
              {cta.quoteContext}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="bg-forest px-0 py-14 text-primary-foreground sm:py-20 lg:py-24 lg:pl-12">
            <h2 className="font-serif text-2xl sm:text-3xl">{cta.rightTitle}</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-90 sm:text-base">
              {cta.rightDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Mail className="h-4 w-4" />
                  {cta.getInTouch}
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                >
                  {cta.exploreProjects}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
