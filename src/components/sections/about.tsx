"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Lightbulb,
  Target,
  Heart,
  Brain,
  FlaskConical,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionDivider } from "@/components/decorations/lab-decorations";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    description: `Graduated from ${siteConfig.university} with a ${siteConfig.degree}, achieving a GPA of ${siteConfig.gpa}. Thesis focused on fermentation optimization and probiotic enhancement.`,
  },
  {
    icon: FlaskConical,
    title: "Research Interests",
    description:
      "Passionate about fermentation science, probiotic foods, sustainable packaging, and functional food development. Experienced in proximate and microbiological analysis.",
  },
  {
    icon: Target,
    title: "Career Goals",
    description:
      "Seeking opportunities in R&D, quality assurance, or product development at leading food companies. Committed to contributing to Indonesia's food innovation landscape.",
  },
  {
    icon: Heart,
    title: "Industry Passion",
    description:
      "Deeply motivated by the potential of food technology to improve nutrition, reduce waste, and create sustainable solutions for global food challenges.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Mindset",
    description:
      "Combines traditional food knowledge with modern scientific approaches. Experienced in transforming local ingredients into innovative, market-ready products.",
  },
  {
    icon: Brain,
    title: "Scientific Thinking",
    description:
      "Applies rigorous experimental design, statistical analysis, and evidence-based decision making to all research and quality assurance activities.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-fresh-600 tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-700 mb-4">
            Food Scientist with a Purpose
          </h2>
          <p className="text-earth-600/80 max-w-2xl mx-auto leading-relaxed">
            A dedicated Food Technology graduate combining laboratory expertise
            with a passion for innovation, quality, and sustainable food
            solutions.
          </p>
        </motion.div>

        <SectionDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:shadow-card hover:border-fresh-200 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-fresh-100 flex items-center justify-center mb-4 group-hover:bg-fresh-600 transition-colors duration-300">
                <item.icon className="h-6 w-6 text-fresh-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-earth-700 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-earth-600/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
