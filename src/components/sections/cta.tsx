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
      <div className="grid grid-cols-1 md:grid-cols-2">
        <RevealOnScroll className="border-b border-border bg-muted/30 px-6 py-14 sm:px-10 sm:py-20 lg:px-16 md:border-b-0 md:border-r">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {cta.leftLabel}
          </p>
          <blockquote className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
            &ldquo;{cta.quote}&rdquo;
          </blockquote>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {cta.quoteContext}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="bg-primary px-6 py-14 text-primary-foreground sm:px-10 sm:py-20 lg:px-16">
          <h2 className="text-2xl font-bold sm:text-3xl">{cta.rightTitle}</h2>
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
    </section>
  );
}
