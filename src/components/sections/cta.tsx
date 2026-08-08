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
    <section className="border-b-2 border-ink">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <RevealOnScroll className="border-b-2 border-ink bg-v26yellow px-6 py-14 sm:px-10 sm:py-20 lg:px-16 md:border-b-0 md:border-r-2">
          <p className="label-font mb-4 text-xs font-bold tracking-[0.2em] text-ink/60">
            {cta.leftLabel}
          </p>
          <blockquote className="display-font text-2xl leading-snug sm:text-3xl">
            &ldquo;{cta.quote}&rdquo;
          </blockquote>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/75 sm:text-base">
            {cta.quoteContext}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="bg-ink px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
          <h2 className="display-font text-2xl text-white sm:text-3xl">{cta.rightTitle}</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75 sm:text-base">
            {cta.rightDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button variant="default" size="lg" className="w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                {cta.getInTouch}
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
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
