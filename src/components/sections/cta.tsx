"use client";

import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/motion/animations";

export function CTASection() {
  return (
    <section className="border-t border-earth-200/60">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <RevealOnScroll className="flex flex-col justify-center bg-cream-100 px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-fresh-700">
            06 — Let&apos;s talk
          </p>
          <blockquote className="font-display text-2xl font-semibold leading-snug text-earth-700 sm:text-3xl lg:text-4xl">
            &ldquo;Good food science starts with curiosity — and ends with something
            people actually want to eat.&rdquo;
          </blockquote>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-earth-600 sm:text-base">
            Open to R&D roles, fermentation research collaborations, and product
            development opportunities in food technology.
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.1}
          className="flex flex-col justify-center bg-earth-800 px-6 py-14 sm:px-10 sm:py-20 lg:px-16"
        >
          <h2 className="mb-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            Work together?
          </h2>
          <p className="mb-8 max-w-sm text-sm leading-relaxed text-cream-200/85 sm:text-base">
            Send a message about research, internships, or product development —
            I&apos;ll get back to you.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full rounded-md bg-wheat-500 text-white hover:bg-wheat-600 sm:w-auto"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-md border-cream-300/40 bg-transparent text-cream-100 hover:bg-earth-700 sm:w-auto"
              >
                Explore projects
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
