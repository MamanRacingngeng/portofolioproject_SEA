"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  FlaskConical,
  Beaker,
  Dna,
  Leaf,
  Atom,
} from "lucide-react";

const icons = [
  { Icon: Microscope, x: "10%", y: "20%", delay: 0, size: 28 },
  { Icon: FlaskConical, x: "85%", y: "15%", delay: 1, size: 24 },
  { Icon: Beaker, x: "75%", y: "70%", delay: 2, size: 22 },
  { Icon: Dna, x: "15%", y: "75%", delay: 0.5, size: 26 },
  { Icon: Leaf, x: "90%", y: "45%", delay: 1.5, size: 20 },
  { Icon: Atom, x: "5%", y: "50%", delay: 2.5, size: 24 },
];

export function LabDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {icons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-fresh-300/20"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
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
    <div
      className="pointer-events-none absolute inset-0 bg-molecule-pattern opacity-60"
      aria-hidden="true"
    />
  );
}

export function GrainBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-grain-pattern"
      aria-hidden="true"
    />
  );
}

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8" aria-hidden="true">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-fresh-300 to-transparent" />
      <Leaf className="mx-4 h-4 w-4 text-fresh-400" />
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-fresh-300 to-transparent" />
    </div>
  );
}
