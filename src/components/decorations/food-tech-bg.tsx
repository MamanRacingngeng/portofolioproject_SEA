"use client";

import { motion } from "framer-motion";
import { FlaskConical, Leaf, Microscope, Droplets, Sparkles } from "lucide-react";

const bubbles = [
  { size: 120, x: "8%", y: "15%", color: "bg-fresh-300/30", delay: 0 },
  { size: 80, x: "85%", y: "20%", color: "bg-citrus-300/25", delay: 1 },
  { size: 100, x: "75%", y: "70%", color: "bg-berry-400/20", delay: 2 },
  { size: 60, x: "15%", y: "75%", color: "bg-wheat-300/30", delay: 0.5 },
  { size: 40, x: "50%", y: "10%", color: "bg-fresh-200/40", delay: 1.5 },
];

const icons = [
  { Icon: FlaskConical, x: "12%", y: "25%", color: "text-fresh-500/50", delay: 0 },
  { Icon: Leaf, x: "88%", y: "18%", color: "text-leaf-500/50", delay: 0.8 },
  { Icon: Microscope, x: "82%", y: "65%", color: "text-citrus-500/45", delay: 1.2 },
  { Icon: Droplets, x: "8%", y: "68%", color: "text-fresh-400/45", delay: 0.4 },
  { Icon: Sparkles, x: "48%", y: "8%", color: "text-berry-400/40", delay: 1.6 },
];

export function FoodTechBg({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const opacity = variant === "hero" ? 1 : 0.6;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ opacity }}
    >
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute animate-blob rounded-full blur-2xl ${b.color}`}
          style={{ width: b.size, height: b.size, left: b.x, top: b.y }}
          animate={{
            y: [0, -20, 10, 0],
            x: [0, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}

      {icons.map(({ Icon, x, y, color, delay }, i) => (
        <motion.div
          key={`icon-${i}`}
          className={`absolute ${color}`}
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
