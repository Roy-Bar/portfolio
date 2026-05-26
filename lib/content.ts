export const profile = {
  name: "Roy Bar",
  role: "Frontend & Full-Stack Developer",
  tagline:
    "I build fast, modern web experiences with React, Next.js, and TypeScript — from polished UI to the systems behind them.",
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
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES2024)", "HTML5"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Sass", "Framer Motion"],
  },
  {
    label: "Content & Editors",
    items: ["TipTap", "Rich-text architecture", "Headless CMS patterns"],
  },
  {
    label: "Experimentation & Analytics",
    items: ["GrowthBook", "Google Tag Manager", "Datadog RUM", "A/B testing"],
  },
  {
    label: "Tooling",
    items: ["Webpack", "Babel", "Jest", "ESLint", "Git"],
  },
  {
    label: "Backend",
    items: ["Node.js", "REST APIs", "Next.js API routes"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  meta?: string;
};

export const projects: Project[] = [
  {
    title: "Enterprise E-commerce Frontend",
    blurb:
      "Day-job: contribute to a large-scale Next.js storefront — nested product configurators, cart flows, and feature-flagged experiments rolled out to millions of sessions.",
    tags: ["Next.js", "React", "TypeScript", "GrowthBook", "Datadog RUM"],
    meta: "Tenen Group · production",
  },
  {
    title: "Site Experience Manager",
    blurb:
      "Internal CMS-like tool for editorial teams to compose pages, target components by URL pattern, and ship rich-content widgets with a TipTap-powered authoring surface.",
    tags: ["React", "TipTap", "Page targeting", "Component dashboards"],
    meta: "Tenen Group · internal",
  },
  {
    title: "tg-react-gtm-module",
    blurb:
      "Open-source React module that wires Google Tag Manager into modern React apps with a minimal, ergonomic API.",
    tags: ["React", "GTM", "JavaScript", "Open source"],
    href: "https://github.com/Roy-TG/tg-react-gtm-module",
    // Note: this repo lives under the Tenen Group GitHub org (Roy-TG)
    meta: "Open source · 2024",
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
    role: "Frontend / Full-Stack Developer",
    period: "Present",
    bullets: [
      "Build and maintain a high-traffic Next.js storefront serving millions of sessions.",
      "Ship feature-flagged experiments via GrowthBook and monitor real-user impact with Datadog RUM.",
      "Contribute to internal tooling for editorial teams — page targeting, rich-content authoring, component dashboards.",
      "Publish reusable open-source modules (e.g. tg-react-gtm-module).",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
