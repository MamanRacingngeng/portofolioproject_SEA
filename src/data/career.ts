export interface Experience {
  id: string;
  position: string;
  institution: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
  type: "internship" | "research" | "volunteer" | "work";
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    position: "Quality Control Intern",
    institution: "PT Indofood CBP Sukses Makmur Tbk",
    duration: "Jan 2025 – Apr 2025",
    location: "Semarang, Indonesia",
    type: "internship",
    responsibilities: [
      "Conducted daily quality control checks on instant noodle production lines",
      "Performed moisture content, ash content, and fat analysis using AOAC methods",
      "Monitored GMP and SSOP compliance across processing areas",
      "Documented non-conformance reports and assisted in corrective action plans",
    ],
    achievements: [
      "Reduced sample testing turnaround time by 15% through optimized lab workflow",
      "Contributed to HACCP documentation review for seasoning powder line",
      "Received Outstanding Intern recognition for analytical accuracy",
    ],
  },
  {
    id: "exp-2",
    position: "Research Assistant",
    institution: "Food Technology Laboratory, Universitas Ahmad Dahlan",
    duration: "Sep 2023 – Dec 2024",
    location: "Yogyakarta, Indonesia",
    type: "research",
    responsibilities: [
      "Assisted in proximate and microbiological analysis for thesis research",
      "Operated laboratory equipment including autoclave, incubator, and spectrophotometer",
      "Prepared culture media and maintained microbial strain collections",
      "Collected and analyzed fermentation kinetics data for tempeh optimization",
    ],
    achievements: [
      "Co-authored research poster presented at National Food Technology Symposium 2024",
      "Validated analytical methods achieving 98.5% reproducibility",
      "Managed laboratory inventory and calibration schedules",
    ],
  },
  {
    id: "exp-3",
    position: "Food Safety Volunteer",
    institution: "Himpunan Mahasiswa Teknologi Pangan UAD",
    duration: "Aug 2022 – Jun 2024",
    location: "Yogyakarta, Indonesia",
    type: "volunteer",
    responsibilities: [
      "Organized community workshops on food hygiene and safe food handling",
      "Conducted basic food safety audits for campus cafeteria vendors",
      "Developed educational materials on HACCP principles for SMEs",
    ],
    achievements: [
      "Trained 200+ community members on food safety best practices",
      "Led team of 8 volunteers in Food Safety Awareness Week campaign",
    ],
  },
];

export interface Education {
  university: string;
  degree: string;
  years: string;
  gpa: string;
  thesis: string;
  highlights: string[];
}

export const education: Education = {
  university: "Universitas Ahmad Dahlan",
  degree: "Bachelor of Food Technology (S1 Teknologi Pangan)",
  years: "2021 – 2025",
  gpa: "3.72 / 4.00",
  thesis:
    "Optimization of Fermentation Parameters for Probiotic-Rich Tempeh Using Indigenous Rhizopus oligosporus Strains",
  highlights: [
    "Dean's List (2023, 2024)",
    "Best Undergraduate Research Presentation – Faculty of Agriculture",
    "Member, Indonesian Association of Food Technologists (IAFT)",
  ],
};

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: "food-safety" | "quality" | "laboratory" | "halal";
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "HACCP for Food Industry",
    issuer: "National Agency of Drug and Food Control (BPOM)",
    year: "2024",
    category: "food-safety",
  },
  {
    id: "cert-2",
    name: "ISO 22000:2018 Food Safety Management",
    issuer: "BSI Group Indonesia",
    year: "2024",
    category: "food-safety",
  },
  {
    id: "cert-3",
    name: "Good Manufacturing Practice (GMP)",
    issuer: "Ministry of Health RI",
    year: "2023",
    category: "quality",
  },
  {
    id: "cert-4",
    name: "Halal Assurance System (HAS)",
    issuer: "LPPOM MUI",
    year: "2024",
    category: "halal",
  },
  {
    id: "cert-5",
    name: "Laboratory Safety & Chemical Handling",
    issuer: "Universitas Ahmad Dahlan",
    year: "2022",
    category: "laboratory",
  },
  {
    id: "cert-6",
    name: "Basic Microbiological Techniques",
    issuer: "IAFT Training Center",
    year: "2023",
    category: "laboratory",
  },
];

export interface Publication {
  id: string;
  title: string;
  role: string;
  status: "published" | "submitted" | "in-progress";
  journal: string;
  abstract: string;
  link?: string;
  year: string;
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title:
      "Effect of Fermentation Time and Inoculum Concentration on Probiotic Viability in Tempeh",
    role: "First Author",
    status: "submitted",
    journal: "Journal of Food Science and Technology",
    abstract:
      "This study investigates the optimization of fermentation parameters to maximize probiotic viability in tempeh produced with indigenous Rhizopus oligosporus strains, analyzing pH, moisture, and microbial counts over 48-hour fermentation cycles.",
    year: "2025",
  },
  {
    id: "pub-2",
    title:
      "Proximate Composition Analysis of Modified Cassava Flour (MOCAF) from Local Varieties",
    role: "Co-Author",
    status: "published",
    journal: "Indonesian Journal of Food Technology",
    abstract:
      "Comparative proximate analysis of three local cassava varieties processed into modified cassava flour, evaluating moisture, protein, fat, ash, and carbohydrate content using standard AOAC methods.",
    link: "#",
    year: "2024",
  },
  {
    id: "pub-3",
    title:
      "Shelf Life Prediction of Herbal Infusion Beverages Using Accelerated Storage Studies",
    role: "Second Author",
    status: "in-progress",
    journal: "Food Research International (Target)",
    abstract:
      "Accelerated shelf life testing of herbal infusion beverages at elevated temperature and humidity conditions, with kinetic modeling to predict commercial shelf life under ambient storage.",
    year: "2025",
  },
];
