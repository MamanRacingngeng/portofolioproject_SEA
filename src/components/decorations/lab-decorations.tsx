"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  FlaskConical,
  Beaker,
  Dna,
  Leaf,
  Atom,
  Sparkles,
} from "lucide-react";

const icons = [
  { Icon: Microscope, x: "8%", y: "18%", delay: 0, size: 32, color: "text-fresh-400/40" },
  { Icon: FlaskConical, x: "88%", y: "12%", delay: 1, size: 28, color: "text-wheat-400/45" },
  { Icon: Beaker, x: "78%", y: "68%", delay: 2, size: 26, color: "text-olive-400/40" },
  { Icon: Dna, x: "12%", y: "72%", delay: 0.5, size: 30, color: "text-fresh-500/35" },
  { Icon: Leaf, x: "92%", y: "42%", delay: 1.5, size: 24, color: "text-fresh-400/50" },
  { Icon: Atom, x: "4%", y: "48%", delay: 2.5, size: 28, color: "text-wheat-500/40" },
  { Icon: Sparkles, x: "50%", y: "8%", delay: 3, size: 20, color: "text-fresh-300/50" },
];

export function LabDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {icons.map(({ Icon, x, y, delay, size, color }, i) => (
        <motion.div
          key={i}
          className={`absolute ${color}`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -16, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5 + i * 0.5,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}

export function MoleculeBackground() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 bg-molecule-pattern opacity-70"
      animate={{ opacity: [0.5, 0.75, 0.5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

export function GrainBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-grain-pattern opacity-50"
      aria-hidden="true"
    />
  );
}

export function SectionDivider() {
  return (
    <motion.div
      className="flex items-center justify-center py-8"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="h-px w-16 bg-gradient-to-r from-transparent via-fresh-400 to-fresh-300 sm:w-24" />
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="mx-4 h-5 w-5 text-fresh-500" />
      </motion.div>
      <div className="h-px w-16 bg-gradient-to-r from-fresh-300 via-fresh-400 to-transparent sm:w-24" />
    </motion.div>
  );
}
