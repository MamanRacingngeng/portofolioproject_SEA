export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  overview: string;
  background: string;
  objectives: string[];
  methodology: string[];
  process: string[];
  results: string[];
  gallery: string[];
  documentation?: string;
  relatedPublication?: string;
  featured: boolean;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "natto-sacha-inchi-production",
    title: "Sacha Inchi Natto Production Process",
    category: "Food Product Development",
    shortDescription:
      "Simple patent invention: diversifying local food products through natto production from sacha inchi seeds (Plukenetia volubilis L.).",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    overview:
      "A simple patent invention project developing a natto production process using sacha inchi seeds (Plukenetia volubilis L.) as an alternative for local food product diversification in Indonesia. Gnothi Sea Fauziah served as inventor alongside Sitta Istiqomah Said and Muhammad Fanni.",
    background:
      "Natto is a traditional Japanese fermented product renowned for its health benefits. Sacha inchi seeds (Plukenetia volubilis L.) are a local Indonesian source of protein and omega-3 fatty acids that remain underutilized in fermented products. This invention bridges natto technology with local raw materials to create an innovative food product.",
    objectives: [
      "Develop a natto production process using sacha inchi seeds as raw material",
      "Determine optimal soaking and peeling stages for sacha inchi",
      "Optimize the fermentation process to produce quality natto",
      "Diversify local food products based on sacha inchi seeds",
    ],
    methodology: [
      "Selection and preparation of sacha inchi seeds (Plukenetia volubilis L.)",
      "Optimization of soaking stage for softening and enzyme activation",
      "Peeling process and fermentation substrate preparation",
      "Inoculation of Bacillus subtilis var. natto and controlled fermentation",
      "Evaluation of physicochemical and sensory characteristics of the final product",
      "Process documentation for simple patent application",
    ],
    process: [
      "Preparation of quality sacha inchi seeds",
      "Controlled soaking of seeds",
      "Peeling and cleaning of sacha inchi seeds",
      "Substrate preparation for natto microbial inoculation",
      "Fermentation with Bacillus subtilis var. natto",
      "Packaging and evaluation of sacha inchi natto product",
    ],
    results: [
      "Simple patent registered in the Official Simple Patent Bulletin Series A (December 20, 2024)",
      "Sacha inchi natto production process fully documented",
      "Successfully diversified local food products based on sacha inchi seeds",
      "Invention involves three inventors: Gnothi Sea Fauziah, Sitta Istiqomah Said, Muhammad Fanni",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
    ],
    relatedPublication:
      "Sacha Inchi Natto Production Process (Plukenetia volubilis L.) — Official Simple Patent Bulletin Series A",
    featured: true,
    tags: [
      "Patent",
      "Natto",
      "Sacha Inchi",
      "Fermentation",
      "Product Development",
    ],
  },
  {
    id: "proj-2",
    slug: "sacha-inchi-fermentation-research",
    title: "Sacha Inchi Seed Fermentation Research",
    category: "Fermentation Research",
    shortDescription:
      "Research on fermentation characteristics of sacha inchi seeds as raw material for local probiotic food products.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    overview:
      "Supporting research for the sacha inchi natto patent invention, focusing on fermentation characteristics of sacha inchi seeds (Plukenetia volubilis L.) and evaluation of process parameters from soaking through fermentation.",
    background:
      "Sacha inchi seeds have high protein and fat content, making them challenging for fermentation processes. This research identified key parameters to produce a stable, consumption-ready fermented product.",
    objectives: [
      "Characterize sacha inchi seeds prior to fermentation",
      "Determine optimal soaking conditions",
      "Evaluate natto fermentation development on sacha inchi substrate",
    ],
    methodology: [
      "Proximate analysis of sacha inchi seeds",
      "Soaking parameter study (time, temperature, pH)",
      "Fermentation monitoring (temperature, humidity, duration)",
      "Sensory evaluation of final product",
    ],
    process: [
      "Sacha inchi raw material characterization",
      "Soaking optimization",
      "Controlled fermentation",
      "Product analysis and evaluation",
    ],
    results: [
      "Fermentation process parameters documented for patent",
      "Sacha inchi natto product successfully formulated",
      "Direct contribution to the 2024 simple patent invention",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
      "https://images.unsplash.com/photo-1581093458791-9f3023bfa1e5?w=600&q=80",
    ],
    relatedPublication:
      "Sacha Inchi Natto Production Process (Plukenetia volubilis L.)",
    featured: true,
    tags: ["Fermentation", "Sacha Inchi", "Research", "Laboratory"],
  },
  {
    id: "proj-3",
    slug: "local-food-diversification",
    title: "Local Food Product Diversification",
    category: "Food Innovation",
    shortDescription:
      "Innovating local Indonesian food products through indigenous raw materials such as sacha inchi seeds.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    overview:
      "A food innovation project aimed at increasing the added value of local Indonesian raw materials through modern processing and fermentation technology, aligned with national food diversification goals.",
    background:
      "Indonesia possesses a wealth of local food resources that remain underutilized. Product diversification — such as sacha inchi natto — opens opportunities for economic growth and improved community nutrition.",
    objectives: [
      "Identify potential local food materials for fermented products",
      "Develop innovative product prototypes based on local ingredients",
      "Evaluate consumer acceptance of diversified products",
    ],
    methodology: [
      "Literature review of local food materials",
      "Product formulation and process trials",
      "Sensory evaluation and basic analysis",
    ],
    process: [
      "Local raw material survey",
      "Product formulation development",
      "Process trials and iteration",
      "Innovation results presentation",
    ],
    results: [
      "Sacha inchi natto established as a flagship diversification product",
      "Contribution to simple patent invention",
      "Replicable model for local food diversification",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    ],
    featured: true,
    tags: ["Innovation", "Local Food", "Diversification", "Indonesia"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
