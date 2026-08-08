"use client";

import Link from "next/link";
import { Mail, ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/motion/animations";
import { motion } from "framer-motion";

export function CTASection() {
  const { t } = useLanguage();
  const cta = t.home.cta;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fresh-500 via-fresh-600 to-leaf-600" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 70% 80%, rgba(249,115,22,0.3), transparent 50%)",
        }}
      />

      <div className="container-app relative z-10 mx-auto max-w-7xl py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-1 h-6 w-6 shrink-0 text-white/80" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                  {cta.leftLabel}
                </p>
                <blockquote className="font-display mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
                  &ldquo;{cta.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  {cta.quoteContext}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl sm:p-8"
            >
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {cta.rightTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                {cta.rightDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="w-full bg-white text-fresh-700 hover:bg-cream-100 sm:w-auto">
                    <Mail className="h-4 w-4" />
                    {cta.getInTouch}
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button
                    variant="glass"
                    size="lg"
                    className="w-full border-white/40 text-white hover:bg-white/20 sm:w-auto"
                  >
                    {cta.exploreProjects}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
