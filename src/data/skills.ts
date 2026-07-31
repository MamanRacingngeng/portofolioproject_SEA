import {
  Microscope,
  FlaskConical,
  Beaker,
  Leaf,
  ShieldCheck,
  BarChart3,
  Package,
  Thermometer,
  TestTube,
  Scale,
  Droplets,
  Atom,
  type LucideIcon,
} from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Laboratory Skills",
    icon: Microscope,
    color: "fresh",
    skills: [
      "Microbiological Analysis",
      "Proximate Analysis",
      "Moisture Analysis",
      "Ash Content",
      "Protein Analysis",
      "Fat Analysis",
      "Carbohydrate Analysis",
    ],
  },
  {
    title: "Food Processing",
    icon: Beaker,
    color: "olive",
    skills: [
      "Food Preservation",
      "Food Packaging",
      "Food Formulation",
      "Fermentation",
      "Extrusion Technology",
      "Thermal Processing",
    ],
  },
  {
    title: "Food Safety & Quality",
    icon: ShieldCheck,
    color: "earth",
    skills: [
      "Quality Assurance",
      "Quality Control",
      "GMP",
      "SSOP",
      "HACCP",
      "ISO 22000",
      "Halal Assurance",
    ],
  },
  {
    title: "Research & Statistics",
    icon: BarChart3,
    color: "wheat",
    skills: [
      "SPSS",
      "Minitab",
      "Microsoft Excel",
      "Origin",
      "GraphPad Prism",
      "Experimental Design",
      "Data Analysis",
    ],
  },
  {
    title: "Professional Tools",
    icon: FlaskConical,
    color: "fresh",
    skills: [
      "Microsoft Office",
      "Canva",
      "Figma",
      "Google Workspace",
      "Laboratory Information Systems",
    ],
  },
];

export const labEquipment = [
  { name: "Spectrophotometer", icon: TestTube },
  { name: "Moisture Analyzer", icon: Droplets },
  { name: "pH Meter", icon: Thermometer },
  { name: "Analytical Balance", icon: Scale },
  { name: "Incubator", icon: Atom },
  { name: "Autoclave", icon: FlaskConical },
  { name: "Muffle Furnace", icon: Thermometer },
  { name: "Microscope", icon: Microscope },
];

export { Leaf, Package };
