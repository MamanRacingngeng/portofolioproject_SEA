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
    position: "Inventor — Simple Patent",
    institution: "Sacha Inchi Natto Production Process",
    duration: "2023 – 2024",
    location: "Yogyakarta, Indonesia",
    type: "research",
    responsibilities: [
      "Developed a natto production process using sacha inchi seeds (Plukenetia volubilis L.) as raw material",
      "Conducted soaking, peeling, and fermentation stages for natto production",
      "Collaborated with Sitta Istiqomah Said and Muhammad Fanni on research and invention documentation",
      "Prepared simple patent documentation for intellectual property registration",
    ],
    achievements: [
      "Simple patent published in the Official Simple Patent Bulletin Series A (December 20, 2024)",
      "Successfully diversified local food products based on sacha inchi seeds",
      "Invention covers the complete process from raw material to fermented product",
    ],
  },
  {
    id: "exp-2",
    position: "Laboratory Assistant Selection Candidate",
    institution: "Food Technology Program, Ahmad Dahlan University",
    duration: "2023 – 2024",
    location: "Yogyakarta, Indonesia",
    type: "research",
    responsibilities: [
      "Participated in selection for food technology laboratory course teaching assistants",
      "Prepared practical materials for food analysis and food processing courses",
      "Assisted with equipment and material preparation for laboratory sessions",
    ],
    achievements: [
      "Actively involved in Food Technology laboratory practicum at UAD",
      "Strengthened technical skills in food laboratory analysis",
    ],
  },
  {
    id: "exp-3",
    position: "Student Arts Delegate",
    institution: "Ahmad Dahlan University",
    duration: "2022 – Present",
    location: "Yogyakarta, Indonesia",
    type: "volunteer",
    responsibilities: [
      "Represented the university/faculty in student creative dance competitions",
      "Practiced and prepared choreography for university- and faculty-level events",
      "Served as part of UAD's student arts delegation",
    ],
    achievements: [
      "2nd Place in Creative Dance at university/faculty level",
      "Actively represented UAD in student cultural arts activities",
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
  university: "Ahmad Dahlan University, Yogyakarta",
  degree: "Food Technology (Bachelor of Food Technology)",
  years: "2022 – Present",
  gpa: "Class of 2022",
  thesis:
    "Sacha Inchi Natto Production Process (Plukenetia volubilis L.) — Simple Patent Invention",
  highlights: [
    "Simple Patent Inventor — Sacha Inchi Natto Production Process (2024)",
    "Laboratory Assistant Selection Candidate — Food Technology",
    "2nd Place in Creative Dance at university/faculty level",
    "Student Arts Delegate — Ahmad Dahlan University",
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
    name: "Simple Patent — Sacha Inchi Natto Production Process",
    issuer: "Directorate General of Intellectual Property (DGIP)",
    year: "2024",
    category: "quality",
  },
  {
    id: "cert-2",
    name: "Laboratory Safety & Chemical Handling",
    issuer: "Ahmad Dahlan University",
    year: "2022",
    category: "laboratory",
  },
  {
    id: "cert-3",
    name: "Basic Food Processing Techniques",
    issuer: "Food Technology Program, UAD",
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
      "Sacha Inchi Natto Production Process (Plukenetia volubilis L.)",
    role: "Inventor (Gnothi Sea Fauziah)",
    status: "published",
    journal: "Official Simple Patent Bulletin Series A",
    abstract:
      "A simple patent invention describing the diversification of local food products through natto production using sacha inchi seeds (Plukenetia volubilis L.) via soaking, peeling, and fermentation stages. Inventors: Gnothi Sea Fauziah, Sitta Istiqomah Said, and Muhammad Fanni.",
    year: "2024",
  },
];
