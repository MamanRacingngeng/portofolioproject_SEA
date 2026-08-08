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
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <RevealOnScroll className="flex flex-col justify-center bg-honey-light px-6 py-14 sm:px-10 sm:py-20 lg:py-24">
          <span className="section-label !bg-honey !text-amber-950">{cta.leftLabel}</span>
          <blockquote className="font-display mt-4 text-2xl font-bold leading-snug text-amber-950 sm:text-3xl">
            &ldquo;{cta.quote}&rdquo;
          </blockquote>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-amber-900/80 sm:text-base">
            {cta.quoteContext}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="band-mint flex flex-col justify-center px-6 py-14 text-white sm:px-10 sm:py-20 lg:py-24">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">{cta.rightTitle}</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-emerald-50 sm:text-base">
            {cta.rightDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact">
              <Button variant="honey" size="lg" className="w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                {cta.getInTouch}
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="white" size="lg" className="w-full sm:w-auto">
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
