"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Mail,
  FlaskConical,
  Microscope,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LabDecorations, MoleculeBackground } from "@/components/decorations/lab-decorations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-fresh-50">
      <MoleculeBackground />
      <GrainBackground />
      <LabDecorations />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Badge variant="outline" className="mb-6">
                <FlaskConical className="h-3 w-3 mr-1" />
                {siteConfig.degree}
              </Badge>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-700 leading-tight mb-4"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-6"
            >
              {siteConfig.roles.map((role) => (
                <span
                  key={role}
                  className="text-sm font-medium text-fresh-600 bg-fresh-50 px-3 py-1 rounded-full"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-earth-600/80 leading-relaxed mb-8 max-w-xl"
            >
              {siteConfig.summary}
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="secondary" size="lg">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <p className="text-2xl font-display font-bold text-fresh-600">
                  3.72
                </p>
                <p className="text-xs text-earth-500">GPA</p>
              </div>
              <div className="h-10 w-px bg-fresh-200" />
              <div>
                <p className="text-2xl font-display font-bold text-fresh-600">
                  6+
                </p>
                <p className="text-xs text-earth-500">Research Projects</p>
              </div>
              <div className="h-10 w-px bg-fresh-200" />
              <div>
                <p className="text-2xl font-display font-bold text-fresh-600">
                  6
                </p>
                <p className="text-xs text-earth-500">Certifications</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-fresh-200/40 to-wheat-400/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-fresh-100 to-cream-100 rounded-3xl p-3 shadow-elevated">
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-b from-fresh-50 to-white">
                  <Image
                    src="/images/portrait.png"
                    alt={`${siteConfig.name} - Food Technologist`}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-fresh-100 flex items-center justify-center">
                    <Microscope className="h-5 w-5 text-fresh-600" />
                  </div>
                  <div>
                    <p className="text-xs text-earth-500">Specialization</p>
                    <p className="text-sm font-semibold text-earth-700">
                      Food Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GrainBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-grain-pattern opacity-40"
      aria-hidden="true"
    />
  );
}
