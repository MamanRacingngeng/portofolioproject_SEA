export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "understanding-haccp-food-industry",
    title: "Understanding HACCP: A Practical Guide for Food Industry Professionals",
    excerpt:
      "Hazard Analysis Critical Control Points (HACCP) is the cornerstone of modern food safety management. Learn how to implement it effectively in food processing facilities.",
    content: `Hazard Analysis Critical Control Points (HACCP) is a systematic preventive approach to food safety that addresses physical, chemical, and biological hazards through analysis and control.

## The Seven Principles of HACCP

1. **Conduct a hazard analysis** – Identify potential hazards at each process step
2. **Determine Critical Control Points (CCPs)** – Points where control is essential
3. **Establish critical limits** – Maximum/minimum values for each CCP
4. **Establish monitoring procedures** – Regular checks to ensure CCPs are controlled
5. **Establish corrective actions** – Steps when monitoring indicates deviation
6. **Establish verification procedures** – Confirm the HACCP system works
7. **Establish record-keeping** – Document all monitoring and corrective actions

## Practical Implementation Tips

During my internship at Indofood, I learned that successful HACCP implementation requires commitment from all levels of the organization. The most common challenges include inadequate training, poor documentation, and failure to validate critical limits with scientific evidence.

Start with a thorough process flow diagram verified through on-site observation. Engage production staff in hazard identification – they often know where problems occur before they become critical.`,
    category: "Food Safety",
    date: "2025-06-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1574484266355-9c9c4a8b8b8b?w=800&q=80",
    author: "Nadia Rahma Putri",
    tags: ["HACCP", "Food Safety", "Quality Assurance", "GMP"],
  },
  {
    id: "blog-2",
    slug: "fermentation-science-tempeh",
    title: "The Science Behind Tempeh Fermentation: From Soybeans to Superfood",
    excerpt:
      "Explore the biochemical transformations during tempeh fermentation and how indigenous microbial strains contribute to its nutritional enhancement.",
    content: `Tempeh fermentation represents one of Indonesia's greatest contributions to global food science. The transformation of humble soybeans into a protein-rich, probiotic food involves complex microbial ecology.

## The Fermentation Process

Rhizopus oligosporus, the primary mold responsible for tempeh fermentation, produces enzymes that break down soybean proteins and carbohydrates. This process:

- Increases protein digestibility by 15-20%
- Reduces anti-nutritional factors (trypsin inhibitors)
- Generates bioactive peptides with antioxidant properties
- Creates favorable conditions for lactic acid bacteria proliferation

## Research Insights

My thesis research revealed that fermentation time significantly affects probiotic viability. The optimal window of 32-36 hours at 32°C balances microbial growth with desirable textural properties.

Understanding these parameters enables food technologists to develop tempeh-based products with enhanced functional properties while preserving traditional quality characteristics.`,
    category: "Food Science",
    date: "2025-05-28",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    author: "Nadia Rahma Putri",
    tags: ["Fermentation", "Tempeh", "Probiotics", "Research"],
  },
  {
    id: "blog-3",
    slug: "proximate-analysis-guide",
    title: "Proximate Analysis: Essential Methods Every Food Technologist Should Master",
    excerpt:
      "A comprehensive overview of moisture, ash, protein, fat, and carbohydrate analysis methods used in food laboratories worldwide.",
    content: `Proximate analysis forms the foundation of food composition testing. These five parameters – moisture, ash, protein, fat, and carbohydrate – provide essential data for nutritional labeling, quality control, and product development.

## Standard Methods

**Moisture Content** – Oven drying at 105°C until constant weight (AOAC 934.01)

**Ash Content** – Muffle furnace at 550°C (AOAC 942.05)

**Protein** – Kjeldahl method with 6.25 conversion factor for plant proteins (AOAC 992.23)

**Fat** – Soxhlet extraction with petroleum ether (AOAC 920.39)

**Carbohydrate** – Calculated by difference: 100 - (moisture + ash + protein + fat)

## Quality Assurance in Analysis

Always run triplicate samples, include method blanks, and use certified reference materials. Calibration of equipment and proper sample preparation are equally critical for reliable results.`,
    category: "Research",
    date: "2025-04-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1581093458791-9f3023bfa1e5?w=800&q=80",
    author: "Nadia Rahma Putri",
    tags: ["Proximate Analysis", "Laboratory", "AOAC", "Quality Control"],
  },
  {
    id: "blog-4",
    slug: "sustainable-food-packaging",
    title: "Sustainable Food Packaging: From Plastic to Edible Films",
    excerpt:
      "The food industry is shifting toward biodegradable packaging solutions. Discover how edible films from seaweed and other renewable sources are changing the game.",
    content: `The global food packaging market generates over 300 million tons of plastic waste annually. Edible and biodegradable packaging offers a promising alternative that aligns with circular economy principles.

## Edible Film Technology

Films made from polysaccharides (carrageenan, starch, chitosan) and proteins (gelatin, whey) can provide adequate barrier properties while being completely biodegradable or even edible.

## Key Performance Parameters

- **Tensile strength**: Must withstand handling during distribution
- **Water vapor permeability**: Critical for moisture-sensitive products
- **Oxygen barrier**: Essential for oxidative-sensitive foods
- **Biodegradability**: Complete breakdown within 30-90 days

Our research on carrageenan films from Eucheuma cottonii demonstrated promising mechanical properties and complete biodegradation within 21 days, making them viable for short-shelf-life products.`,
    category: "Food Innovation",
    date: "2025-03-22",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1615485920104-857866b366cf?w=800&q=80",
    author: "Nadia Rahma Putri",
    tags: ["Packaging", "Sustainability", "Innovation", "Biodegradable"],
  },
  {
    id: "blog-5",
    slug: "nutrition-labeling-regulations",
    title: "Navigating Food Nutrition Labeling Regulations in Indonesia",
    excerpt:
      "Understanding BPOM requirements for nutrition facts panels, health claims, and allergen declarations for food products in the Indonesian market.",
    content: `Proper nutrition labeling is both a legal requirement and a consumer trust issue. In Indonesia, BPOM Regulation No. 31/2018 governs nutrition labeling requirements for packaged foods.

## Mandatory Information

- Serving size and servings per container
- Energy value (kcal/kJ)
- Total fat, saturated fat, trans fat
- Total carbohydrate, sugars, dietary fiber
- Protein and sodium content
- % Daily Value based on 2,000 kcal reference diet

## Common Compliance Issues

Many SMEs struggle with accurate nutrient analysis and proper rounding rules. Using calculated values from ingredient databases requires validation against laboratory analysis for final products.`,
    category: "Food Technology",
    date: "2025-02-14",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    author: "Nadia Rahma Putri",
    tags: ["Nutrition", "Regulations", "BPOM", "Labeling"],
  },
  {
    id: "blog-6",
    slug: "career-food-technology-indonesia",
    title: "Building a Career in Food Technology: Opportunities in Indonesia's Growing Industry",
    excerpt:
      "Indonesia's food and beverage industry is valued at over USD 120 billion. Here's how Food Technology graduates can navigate career paths in R&D, QA, and production.",
    content: `Indonesia's food industry is one of the largest in Southeast Asia, with major players like Indofood, Mayora, GarudaFood, and Nutrifood continuously investing in innovation and quality.

## Career Pathways

**Research & Development** – Product formulation, sensory evaluation, shelf life testing

**Quality Assurance/Control** – HACCP implementation, audit management, supplier quality

**Production/Operations** – Process optimization, GMP compliance, efficiency improvement

**Regulatory Affairs** – Product registration, labeling compliance, export certification

## Skills That Stand Out

Beyond technical laboratory skills, employers value candidates who demonstrate problem-solving ability, cross-functional communication, and understanding of commercial constraints. Internship experience at recognized food companies significantly strengthens your profile.`,
    category: "Product Development",
    date: "2025-01-08",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    author: "Nadia Rahma Putri",
    tags: ["Career", "Industry", "Food Technology", "Indonesia"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = [
  "All",
  "Food Science",
  "Food Safety",
  "Food Innovation",
  "Food Processing",
  "Food Technology",
  "Research",
  "Product Development",
  "Nutrition",
];
