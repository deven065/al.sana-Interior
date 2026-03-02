export type Project = {
  slug: string;
  name: string;
  location: string;
  budgetRange: string;
  area: string;
  timeline: string;
  valueAnchor: string;
  testimonial: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "3bhk-andheri-west",
    name: "3BHK Andheri West",
    location: "Andheri West, Mumbai",
    budgetRange: "₹9.5L – ₹12L",
    area: "1,280 sq ft",
    timeline: "45 Days",
    valueAnchor: "Project Value: ₹9.5L – Completed in 45 Days",
    testimonial:
      "The finish quality and speed were exactly what we expected from a premium studio.",
    summary:
      "Luxury living-dining transformation with modular storage, statement lighting, and turnkey execution.",
  },
  {
    slug: "2bhk-powai-lake-view",
    name: "2BHK Powai Lake View",
    location: "Powai, Mumbai",
    budgetRange: "₹8L – ₹10.5L",
    area: "980 sq ft",
    timeline: "38 Days",
    valueAnchor: "Project Value: ₹8.2L – Completed in 38 Days",
    testimonial:
      "From design to handover, every milestone was transparent and professionally managed.",
    summary:
      "Premium 2BHK interior with earthy palette, compact luxury storage, and high-efficiency planning.",
  },
  {
    slug: "villa-vashi-signature",
    name: "Villa Vashi Signature",
    location: "Vashi, Navi Mumbai",
    budgetRange: "₹12L – ₹15L",
    area: "1,750 sq ft",
    timeline: "60 Days",
    valueAnchor: "Project Value: ₹12L – Completed in 60 Days",
    testimonial:
      "AL.Sana made the process stress-free and delivered exactly what was promised.",
    summary:
      "Bespoke villa interiors featuring layered lighting, premium finishes, and custom bedroom suites.",
  },
];

export const services = [
  {
    slug: "luxury-residential-interiors",
    title: "Luxury Residential Interiors",
    starting: "Starts from ₹8 Lakhs",
    problem:
      "Homeowners want a premium look but struggle with fragmented teams and execution uncertainty.",
    solution:
      "We deliver end-to-end luxury residential interiors with one accountable team and fixed milestone plans.",
  },
  {
    slug: "2bhk-3bhk-interior-design",
    title: "2BHK / 3BHK Interior Design",
    starting: "Starts from ₹5 Lakhs",
    problem:
      "Apartment layouts often waste space and do not support modern family living.",
    solution:
      "We optimize every square foot through functional planning, smart storage, and premium finishing.",
  },
  {
    slug: "modular-kitchen-design",
    title: "Modular Kitchen Design",
    starting: "Starts from ₹3.5 Lakhs",
    problem:
      "Many kitchens look premium in renders but fail in day-to-day functionality.",
    solution:
      "Our modular kitchens balance workflow, durability, and elegant finishes for long-term usability.",
  },
  {
    slug: "bedroom-interiors",
    title: "Bedroom Interiors",
    starting: "Starts from ₹2.5 Lakhs",
    problem:
      "Bedrooms often become cluttered and fail to feel restful despite expensive materials.",
    solution:
      "We design calming, storage-smart bedrooms with luxury textures and ergonomic lighting.",
  },
  {
    slug: "commercial-office-interiors",
    title: "Commercial / Office Interiors",
    starting: "Starts from ₹7 Lakhs",
    problem:
      "Commercial spaces need branding, efficiency, and speed without disrupting operations.",
    solution:
      "We create high-performance office interiors with premium aesthetics and fast phased execution.",
  },
] as const;

export const blogPosts = [
  {
    slug: "interior-design-cost-in-mumbai-2026",
    title: "Interior Design Cost in Mumbai 2026",
    excerpt: "A realistic cost framework for premium apartments and villas in Mumbai.",
  },
  {
    slug: "2bhk-interior-budget-breakdown",
    title: "2BHK Interior Budget Breakdown",
    excerpt: "How to allocate budget across living, kitchen, bedrooms, and utility zones.",
  },
  {
    slug: "latest-modular-kitchen-trends",
    title: "Latest Modular Kitchen Trends",
    excerpt: "Top materials, finishes, and planning trends for modern Mumbai homes.",
  },
  {
    slug: "vastu-tips-for-modern-homes",
    title: "Vastu Tips for Modern Homes",
    excerpt: "Practical vastu-aligned design choices without compromising contemporary style.",
  },
] as const;

export const testimonials = [
  {
    name: "Mosin M.",
    text: "Alsana interior the work quality it's like superb. Mr Ajaz and his workers very professionally highly recommended to alsana interior .... thank you ......",
  },
  {
    name: "Saqeb H.",
    text: "Excellent work by alsana interior. Thank you Mr Ajaz Shaikh sir.",
  },
  {
    name: "Mohit N.",
    text: "Completely professional — person reached within 1 hour of call. Will highly recommend for their service. Thanks Firoz.",
  },
  {
    name: "Sahaban A.",
    text: "Great job, always work on time and good communication.",
  },
  {
    name: "Nivena S.",
    text: "Feroz did a very good job in fixing the leakage. Was neat in his work. Satisfied with the work done. No complaints.",
  },
  {
    name: "rohan G.",
    text: "Thank u so much sir.",
  },
  {
    name: "Sana S.",
    text: "Thank you for suggestion 😊 nice speech.",
  },
  {
    name: "Anas K.",
    text: "Good job.",
  },
  {
    name: "Akbar K.",
    text: "Super.",
  },
  {
    name: "Yuvraj G.",
    text: "Great service.",
  },
] as const;
