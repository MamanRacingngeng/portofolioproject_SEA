"use client";

import { motion } from "framer-motion";
import { skillCategories, labEquipment } from "@/data/skills";
import { cn } from "@/lib/utils";

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  fresh: {
    bg: "bg-fresh-50",
    icon: "bg-fresh-100 text-fresh-600 group-hover:bg-fresh-600 group-hover:text-white",
    border: "border-fresh-100 hover:border-fresh-200",
  },
  olive: {
    bg: "bg-olive-50",
    icon: "bg-olive-100 text-olive-600 group-hover:bg-olive-600 group-hover:text-white",
    border: "border-olive-100 hover:border-olive-200",
  },
  earth: {
    bg: "bg-cream-100",
    icon: "bg-earth-100 text-earth-600 group-hover:bg-earth-600 group-hover:text-white",
    border: "border-cream-200 hover:border-earth-200",
  },
  wheat: {
    bg: "bg-cream-50",
    icon: "bg-wheat-100 text-wheat-600 group-hover:bg-wheat-500 group-hover:text-white",
    border: "border-cream-200 hover:border-wheat-200",
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-fresh-50/50 to-cream-50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-fresh-600 tracking-widest uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-700 mb-4">
            Laboratory & Professional Expertise
          </h2>
          <p className="text-earth-600/80 max-w-2xl mx-auto">
            Comprehensive skills in food analysis, processing, safety systems,
            and research methodology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color] || colorMap.fresh;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "group rounded-2xl p-6 border transition-all duration-300 hover:shadow-card",
                  colors.bg,
                  colors.border
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={cn(
                      "h-11 w-11 rounded-xl flex items-center justify-center transition-colors duration-300",
                      colors.icon
                    )}
                  >
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-earth-700">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium bg-white/80 text-earth-600 px-3 py-1.5 rounded-full border border-white shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 border border-cream-200 shadow-soft"
        >
          <h3 className="font-display text-xl font-semibold text-earth-700 mb-6 text-center">
            Laboratory Equipment Proficiency
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {labEquipment.map((equip) => (
              <div
                key={equip.name}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-fresh-50 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-fresh-50 flex items-center justify-center">
                  <equip.icon className="h-5 w-5 text-fresh-600" />
                </div>
                <p className="text-[10px] text-earth-600 text-center font-medium leading-tight">
                  {equip.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
