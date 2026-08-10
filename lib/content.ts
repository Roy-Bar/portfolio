export const profile = {
  name: "Roy Bar",
  role: "Senior Frontend & Full-Stack Engineer",
  tagline:
    "I build the systems non-engineers operate — experimentation platforms, content and pricing tools, and the storefronts they drive. React, Next.js, TypeScript, and the .NET services behind them.",
  location: "Israel",
  email: "roy.bar134@gmail.com",
  cvHref: "/cv.pdf",
  socials: {
    github: "https://github.com/Roy-Bar",
    linkedin: "https://www.linkedin.com/in/roybarlinked/",
  },
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "MUI", "Framer Motion"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Sass", "Design systems"],
  },
  {
    label: "Backend & Data",
    items: ["C#", ".NET", "Node.js", "SQL", "REST APIs"],
  },
  {
    label: "Experimentation & Analytics",
    items: [
      "A/B testing",
      "GrowthBook",
      "GA4 & dataLayer",
      "Google Tag Manager",
      "Datadog RUM",
      "Kibana & Elasticsearch",
    ],
  },
  {
    label: "Commerce",
    items: [
      "Multi-currency pricing",
      "Internationalization",
      "Cart & checkout",
      "Catalog & merchandising",
      "Multi-brand platforms",
    ],
  },
  {
    label: "Content & Editors",
    items: ["Rich-text architecture", "TipTap", "Headless CMS patterns", "Page targeting"],
  },
  {
    label: "AI & Tooling",
    items: [
      "Agentic dev workflows",
      "Autonomous QA agents",
      "RAG & knowledge graphs",
      "Vite",
      "Jest",
      "Git",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  sourceHref?: string;
  meta?: string;
};

export const projects: Project[] = [
  {
    title: "Experience Manager & A/B Testing Platform",
    blurb:
      "Built the experimentation product inside our content platform end to end — experiments dashboard, setup wizard, traffic allocation, GrowthBook integration, and a results page that reads analysis back into the tool. Product managers now design, run, stop and conclude tests without engineering.",
    tags: ["React", "TypeScript", "MUI", "GrowthBook", "C# / .NET"],
    meta: "Tenen Group · #1 contributor to the repo",
  },
  {
    title: "Multi-Brand E-commerce Storefront",
    blurb:
      "Next.js platform serving eight brands across multiple countries and currencies. Owned cross-sell and nested-product configurators end to end — authoring UI, APIs, storefront rendering, and GA4 analytics — plus the internationalization work that opened a new market.",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "GA4"],
    meta: "Tenen Group · production",
  },
  {
    title: "Catalog & Pricing Backoffice",
    blurb:
      "New product for catalog and pricing operations, from empty screen to live: products dashboard, product details, and a multi-currency tab with per-currency overrides, crossed-price validation and a draft/publish model. Wrote the C# in the pricing service to back it.",
    tags: ["React", "TypeScript", "C# / .NET", "Multi-currency"],
    meta: "Tenen Group · 0→1",
  },
  {
    title: "Experience Inspector",
    blurb:
      "An on-page debug panel that shows which content variant a live storefront page is rendering — and exactly why it won. Required exposing a read-only evaluation endpoint on the .NET API and turning the decision engine's reasoning into something a non-engineer can read.",
    tags: ["React", "C# / .NET", "Developer tooling", "Internal"],
    meta: "Tenen Group · own initiative",
  },
  {
    title: "Tiny Bites — Baby Feeding Tracker",
    blurb:
      "A warm, friendly app for new parents to log feedings, share with co-parents, and visualize patterns. Real-time multi-user, auth, charts, and CSV export — built end to end.",
    tags: ["React 18", "Vite", "Firebase Auth", "Firestore", "Recharts", "Tailwind"],
    href: "https://tiny-bites-57104.web.app",
    sourceHref: "https://github.com/Roy-Bar/tiny-bites",
    meta: "Side project · live",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Tenen Group",
    role: "Senior Frontend & Full-Stack Engineer",
    period: "2021 — Present",
    bullets: [
      "Own three product areas end to end — experimentation, cross-sell configurators, and catalog pricing — across five repositories and three backend services.",
      "Top contributor to the experience-management platform, building the A/B testing product from an empty screen to a tool product managers run unaided.",
      "Work full-stack when the feature needs it: C# and .NET endpoints on three services, consumed by the React and Next.js surfaces I build.",
      "Lead the migration of the last legacy ASP.NET pages to Next.js — behavioural spec first, then a thin JSON API and a new React page.",
      "Ship internationalization and multi-currency work that opened a new market, and handle production hotfixes on high-traffic commerce surfaces.",
      "Build leverage for the team: an autonomous UI QA agent, a cross-repo knowledge index, and design specs written before code.",
      "Review ~90 pull requests a year and write the product's user guides and release notes for non-technical teams.",
    ],
  },
  {
    company: "Tenen Group",
    role: "Technical Solution Engineer",
    period: "2020 — 2021",
    bullets: [
      "Built C#/.NET automation tooling that took manual steps out of the technical support process.",
      "Wrote complex SQL against production data and stood up Kibana and Elasticsearch dashboards so teams could self-serve their own analytics.",
      "Integrated third-party pixels and APIs through JavaScript and Google Tag Manager.",
      "Where the .NET and SQL depth I still use as a product engineer came from.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: "Holon Institute of Technology (HIT)",
    degree: "B.Sc. Computer Science",
    period: "2016 — 2019",
    note: "Graduated with an 86 average. Elective coursework in computer vision and machine learning.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
