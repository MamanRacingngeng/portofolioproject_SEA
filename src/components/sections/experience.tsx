"use client";

import { motion } from "framer-motion";
import { Building2, FlaskConical, Award, MapPin } from "lucide-react";
import { experiences } from "@/data/career";
import { Badge } from "@/components/ui/badge";

const typeColors = {
  internship: "bg-wheat-100 text-wheat-600",
  research: "bg-fresh-100 text-fresh-700",
  volunteer: "bg-olive-100 text-olive-700",
  work: "bg-earth-100 text-earth-600",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-cream-50 to-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-fresh-600 tracking-widest uppercase mb-3">
            Professional Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-700 mb-4">
            Laboratory & Industry Experience
          </h2>
          <p className="text-earth-600/80 max-w-2xl mx-auto">
            Hands-on experience in food manufacturing, research laboratories,
            and quality assurance environments.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-fresh-200 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                  <div className="h-4 w-4 rounded-full bg-fresh-500 border-4 border-white shadow-soft" />
                </div>

                <div className="md:w-1/2" />

                <div className="md:w-1/2">
                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-cream-200 hover:shadow-card transition-shadow duration-300 ml-0 md:ml-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-fresh-50 flex items-center justify-center shrink-0">
                          <FlaskConical className="h-6 w-6 text-fresh-600" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-semibold text-earth-700">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-fresh-600">
                            <Building2 className="h-3.5 w-3.5" />
                            {exp.institution}
                          </div>
                        </div>
                      </div>
                      <Badge
                        className={typeColors[exp.type]}
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-earth-500 mb-4">
                      <span>{exp.duration}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-earth-600 uppercase tracking-wide mb-2">
                        Responsibilities
                      </p>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-earth-600/80 flex items-start gap-2"
                          >
                            <span className="text-fresh-400 mt-1.5 shrink-0">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-earth-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Achievements
                      </p>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-fresh-700/80 flex items-start gap-2"
                          >
                            <span className="text-wheat-500 mt-1 shrink-0">
                              ✦
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
