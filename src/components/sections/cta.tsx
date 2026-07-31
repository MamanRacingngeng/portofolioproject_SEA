"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fresh-600 to-fresh-800" />
      <div className="absolute inset-0 bg-molecule-pattern opacity-10" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Innovate Together?
          </h2>
          <p className="text-fresh-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Looking for a passionate Food Technologist for your R&D, Quality
            Assurance, or Product Development team? Let&apos;s connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-fresh-700 hover:bg-cream-50 shadow-elevated"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Explore My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
