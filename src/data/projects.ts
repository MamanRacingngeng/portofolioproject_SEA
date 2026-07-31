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
    slug: "probiotic-tempeh-fermentation",
    title: "Probiotic-Rich Tempeh Fermentation Optimization",
    category: "Fermentation Research",
    shortDescription:
      "Optimizing fermentation parameters to enhance probiotic viability in traditional tempeh using indigenous microbial strains.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    overview:
      "A comprehensive research project investigating the effects of fermentation time, temperature, and inoculum concentration on probiotic survival in tempeh produced with indigenous Rhizopus oligosporus strains from Yogyakarta region.",
    background:
      "Tempeh is a traditional Indonesian fermented soybean product with growing global interest. This research addresses the gap in probiotic enhancement of tempeh while maintaining traditional sensory characteristics and nutritional profile.",
    objectives: [
      "Identify optimal fermentation parameters for maximum probiotic viability",
      "Characterize physicochemical changes during fermentation",
      "Evaluate sensory acceptability of optimized tempeh samples",
      "Compare probiotic counts with commercial tempeh products",
    ],
    methodology: [
      "Isolation and identification of Rhizopus oligosporus from local tempeh starters",
      "Factorial design experiment (3×3×2) for time, temperature, inoculum",
      "Proximate analysis (moisture, protein, fat, ash, carbohydrate)",
      "Total plate count and lactic acid bacteria enumeration",
      "pH and moisture monitoring at 6-hour intervals",
      "Sensory evaluation using 9-point hedonic scale (n=30 panelists)",
    ],
    process: [
      "Soybean soaking and dehulling (12 hours, 25°C)",
      "Cooking and cooling to inoculation temperature",
      "Inoculation with standardized spore suspension (10⁶ CFU/g)",
      "Incubation under controlled conditions (30-37°C, 48 hours)",
      "Sample collection at 0, 12, 24, 36, 48 hours",
      "Laboratory analysis and data statistical processing (SPSS)",
    ],
    results: [
      "Optimal fermentation: 36 hours at 32°C with 2% inoculum",
      "Probiotic count reached 8.2 log CFU/g at optimal conditions",
      "Protein content increased 12% compared to unfermented soybeans",
      "Sensory scores exceeded 7.5/9 for all attributes",
      "Statistical significance confirmed (p < 0.05) for all main effects",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80",
      "https://images.unsplash.com/photo-1574484266355-9c9c4a8b8b8b?w=600&q=80",
    ],
    relatedPublication:
      "Effect of Fermentation Time and Inoculum Concentration on Probiotic Viability in Tempeh",
    featured: true,
    tags: ["Fermentation", "Probiotics", "Tempeh", "Microbiology"],
  },
  {
    id: "proj-2",
    slug: "mocaf-proximate-analysis",
    title: "MOCAF Proximate Composition Analysis",
    category: "Nutritional Analysis",
    shortDescription:
      "Comparative proximate analysis of modified cassava flour from three local Indonesian cassava varieties.",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    overview:
      "Systematic evaluation of nutritional composition of Modified Cassava Flour (MOCAF) derived from Adira, Malang, and UJ5 cassava varieties using standardized AOAC analytical methods.",
    background:
      "MOCAF is an important alternative carbohydrate source in Indonesia. Understanding compositional differences between varieties enables targeted application in food product development and nutritional labeling.",
    objectives: [
      "Determine proximate composition of three MOCAF varieties",
      "Compare nutritional profiles against commercial MOCAF standards",
      "Identify variety best suited for specific food applications",
      "Establish baseline data for future product development",
    ],
    methodology: [
      "MOCAF production following standard fermentation-desiccation protocol",
      "Moisture content analysis (oven drying, 105°C)",
      "Ash content determination (muffle furnace, 550°C)",
      "Protein analysis (Kjeldahl method)",
      "Fat content (Soxhlet extraction)",
      "Carbohydrate by difference calculation",
    ],
    process: [
      "Cassava harvesting and quality grading",
      "Peeling, washing, and grating",
      "Fermentation (48 hours) and pressing",
      "Granulation and sun-drying to 12% moisture",
      "Milling and sieving (80 mesh)",
      "Triplicate analysis for each parameter",
    ],
    results: [
      "Moisture content: 10.2–11.8% across varieties",
      "Protein content highest in Malang variety (2.8%)",
      "Ash content within acceptable limits (< 2.5%)",
      "Carbohydrate content: 82–86% dry basis",
      "All varieties met SNI standards for MOCAF",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80",
      "https://images.unsplash.com/photo-1595853035070-59a39bab84e0?w=600&q=80",
    ],
    relatedPublication:
      "Proximate Composition Analysis of Modified Cassava Flour (MOCAF) from Local Varieties",
    featured: true,
    tags: ["Proximate Analysis", "MOCAF", "Cassava", "Nutrition"],
  },
  {
    id: "proj-3",
    slug: "herbal-infusion-shelf-life",
    title: "Herbal Infusion Beverage Shelf Life Study",
    category: "Shelf Life Analysis",
    shortDescription:
      "Accelerated storage study and kinetic modeling for predicting commercial shelf life of herbal infusion beverages.",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    overview:
      "Applied accelerated shelf life testing (ASLT) methodology to predict the commercial shelf life of a novel herbal infusion beverage under ambient storage conditions.",
    background:
      "Herbal beverages are gaining market share but often lack robust shelf life data. This project applies food chemistry and kinetic modeling to provide evidence-based shelf life claims.",
    objectives: [
      "Determine quality degradation kinetics under accelerated conditions",
      "Identify critical quality attributes for shelf life determination",
      "Predict ambient shelf life using Arrhenius equation",
      "Recommend storage conditions and packaging requirements",
    ],
    methodology: [
      "Accelerated storage at 35°C, 40°C, 45°C (90 days)",
      "Quality parameters: pH, Brix, color (L*a*b*), microbial count",
      "Arrhenius plot for activation energy calculation",
      "Q10 method for shelf life extrapolation",
      "Sensory evaluation at monthly intervals",
    ],
    process: [
      "Beverage formulation and pilot production (50 L batch)",
      "Packaging in PET bottles with nitrogen flushing",
      "Storage in controlled environmental chambers",
      "Monthly sampling and comprehensive analysis",
      "Data modeling using Excel and Origin software",
    ],
    results: [
      "Predicted shelf life: 8 months at 25°C storage",
      "Critical parameter: color change (ΔE > 3 at end of life)",
      "Activation energy (Ea): 42.3 kJ/mol for color degradation",
      "Microbial stability maintained throughout storage period",
      "Recommended storage: cool, dry place away from light",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    ],
    featured: true,
    tags: ["Shelf Life", "Kinetics", "Beverage", "Quality"],
  },
  {
    id: "proj-4",
    slug: "functional-snack-development",
    title: "High-Protein Functional Snack Development",
    category: "Food Product Development",
    shortDescription:
      "Development of a high-protein, low-sugar snack bar using local ingredients and extrusion technology.",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dcfd9b303?w=800&q=80",
    overview:
      "Product development project creating a functional snack bar with enhanced protein content using mung bean protein isolate, red rice, and natural sweeteners.",
    background:
      "Growing consumer demand for functional foods presents an opportunity for locally-sourced, nutritionally enhanced snack products targeting health-conscious millennials.",
    objectives: [
      "Formulate snack bar with ≥15% protein content",
      "Achieve acceptable sensory profile (score ≥7/9)",
      "Ensure 6-month shelf stability at ambient conditions",
      "Develop scalable production protocol",
    ],
    methodology: [
      "Ingredient screening and compatibility testing",
      "Response surface methodology for formulation optimization",
      "Texture profile analysis (TPA)",
      "Accelerated shelf life testing",
      "Cost analysis and nutritional labeling calculation",
    ],
    process: [
      "Protein isolate extraction from mung beans",
      "Ingredient mixing and binding with honey-date syrup",
      "Cold pressing into bar format",
      "Individual wrapping in moisture-barrier film",
      "Quality testing and iterative reformulation (5 iterations)",
    ],
    results: [
      "Final formulation: 16.2% protein, 8.3% fat, 42% carbohydrate",
      "Overall sensory acceptability: 7.8/9",
      "Water activity (aw): 0.52 – suitable for ambient storage",
      "Production cost: IDR 4,200 per 40g bar",
      "Ready for pilot market testing",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1604329760661-e71dcfd9b303?w=600&q=80",
      "https://images.unsplash.com/photo-1499638673689-79a3b8ee185c?w=600&q=80",
    ],
    featured: false,
    tags: ["Product Development", "Functional Food", "Snacks", "Formulation"],
  },
  {
    id: "proj-5",
    slug: "haccp-noodle-facility",
    title: "HACCP Plan Development for Noodle Facility",
    category: "Food Safety Research",
    shortDescription:
      "Comprehensive HACCP plan development and validation for an instant noodle manufacturing facility.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    overview:
      "Applied HACCP principles to develop, implement, and validate a complete food safety management plan for an instant noodle production facility as part of quality assurance internship.",
    background:
      "Food safety management systems are critical for export-oriented food manufacturers. This project demonstrates practical HACCP implementation in a high-volume processing environment.",
    objectives: [
      "Conduct comprehensive hazard analysis for all process steps",
      "Identify Critical Control Points (CCPs) with scientific justification",
      "Establish critical limits, monitoring, and corrective actions",
      "Validate HACCP plan through challenge testing",
    ],
    methodology: [
      "Process flow diagram development with on-site verification",
      "Hazard analysis using decision tree approach",
      "CCP determination and critical limit establishment",
      "Monitoring record design and verification schedule",
      "Validation through microbiological challenge studies",
    ],
    process: [
      "Facility walk-through and process mapping",
      "Stakeholder interviews (QA, production, maintenance)",
      "Draft HACCP plan preparation (12 process steps)",
      "Internal audit and gap analysis",
      "Plan revision and management approval",
    ],
    results: [
      "5 Critical Control Points identified and validated",
      "Monitoring procedures reduced deviation response time by 40%",
      "Zero critical non-conformances in follow-up audit",
      "Plan approved by facility QA manager and external consultant",
      "Documentation package ready for certification audit",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
    ],
    featured: false,
    tags: ["HACCP", "Food Safety", "Quality Assurance", "GMP"],
  },
  {
    id: "proj-6",
    slug: "edible-packaging-film",
    title: "Edible Packaging Film from Seaweed",
    category: "Food Packaging",
    shortDescription:
      "Development and characterization of biodegradable edible packaging film from local seaweed extract.",
    image:
      "https://images.unsplash.com/photo-1615485920104-857866b366cf?w=800&q=80",
    overview:
      "Research into developing edible, biodegradable packaging films using carrageenan extracted from Eucheuma cottonii seaweed as a sustainable alternative to plastic packaging.",
    background:
      "Plastic pollution from food packaging is a global concern. Edible films from renewable marine resources offer a promising sustainable packaging solution for the food industry.",
    objectives: [
      "Extract and characterize carrageenan from local seaweed",
      "Formulate edible film with optimal mechanical properties",
      "Evaluate barrier properties (water vapor, oxygen)",
      "Assess biodegradability and food contact safety",
    ],
    methodology: [
      "Carrageenan extraction (alkali treatment, precipitation)",
      "Film casting with glycerol plasticizer (solution casting method)",
      "Tensile strength and elongation testing",
      "Water vapor permeability (WVP) measurement",
      "Scanning electron microscopy (SEM) for microstructure",
    ],
    process: [
      "Seaweed collection and drying (Karimunjawa source)",
      "Extraction and purification of carrageenan",
      "Film formulation with varying glycerol concentrations (0.5–2.0%)",
      "Casting, drying (40°C, 24 hours), and conditioning",
      "Physical and mechanical property testing",
    ],
    results: [
      "Optimal glycerol concentration: 1.5% (w/w)",
      "Tensile strength: 28.4 MPa, elongation: 12.3%",
      "WVP: 2.1 × 10⁻¹¹ g·m/m²·s·Pa",
      "Complete biodegradation within 21 days in soil",
      "Film successfully preserved fresh fruit for 5 days",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1615485920104-857866b366cf?w=600&q=80",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0bdc6?w=600&q=80",
    ],
    featured: false,
    tags: ["Packaging", "Biodegradable", "Seaweed", "Sustainability"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
