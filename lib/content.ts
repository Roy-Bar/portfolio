export const profile = {
  name: "Roy Bar",
  role: "Senior Frontend & Full-Stack Engineer",
  tagline:
    "I build the systems non-engineers operate — experimentation platforms, backoffice and pricing tools, and the multi-brand storefronts they drive. React, Next.js, TypeScript, and the .NET services behind them.",
  location: "Tel Aviv, Israel",
  email: "roy.bar134@gmail.com",
  cvHref: "/cv.pdf",
  socials: {
    github: "https://github.com/Roy-Bar",
    linkedin: "https://www.linkedin.com/in/roybarlinked/",
    repo: "https://github.com/Roy-Bar/portfolio",
  },
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "MUI",
      "Tailwind CSS",
      "SCSS / CSS Modules",
      "Framer Motion",
    ],
  },
  {
    label: "Design systems & theming",
    items: [
      "Multi-brand theming",
      "Design tokens",
      "Typography systems",
      "Shared component libraries",
      "Rich-text editors (TipTap)",
    ],
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
      "Dynamic Yield",
      "GA4 & dataLayer",
      "Google Tag Manager",
      "Datadog RUM",
      "Elasticsearch & Kibana",
    ],
  },
  {
    label: "Commerce & operations",
    items: [
      "Backoffice systems",
      "CRM & lifecycle messaging",
      "Multi-currency pricing",
      "Internationalization",
      "Geo-localization",
      "Cart & checkout",
      "Catalog & merchandising",
      "SEO & structured data",
    ],
  },
  {
    label: "AI-assisted engineering",
    items: [
      "Claude Code",
      "Agentic dev workflows",
      "MCP",
      "Autonomous QA agents",
      "RAG & knowledge graphs",
      "Agent & prompt design",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  /** Years the work spans, so the timeline is visible on the card. */
  period: string;
  /** Personal projects are pinned first and tinted differently. */
  kind: "work" | "side";
  blurb: string;
  outcome: string;
  tags: string[];
  href?: string;
  sourceHref?: string;
  meta?: string;
};

export const projects: Project[] = [
  {
    slug: "multi-brand-storefront",
    title: "Multi-Brand Storefront Platform",
    period: "2021 — present",
    kind: "work",
    blurb:
      "Eight consumer brands across multiple countries on one platform. I've shipped across its category, product, review, cart and checkout surfaces for five years — first on the legacy storefront, then on the Next.js platform that replaced it, and now on the thin JSON APIs retiring the last legacy pages.",
    outcome:
      "The longest-running thread in my work: the same commerce surfaces, carried through two generations of stack without stopping the shop.",
    tags: ["Next.js", "React", "TypeScript", "SCSS", "C# / .NET"],
    meta: "Production · millions of sessions",
  },
  {
    slug: "multi-brand-design-system",
    title: "Multi-Brand Theming System",
    period: "2024",
    kind: "work",
    blurb:
      "Eight brands and their sub-brands were diverging through per-brand branching in the components. I replaced that with design tokens and per-brand CSS variables, a shared typography system, and a single theme hook — so brand identity became configuration instead of code paths.",
    outcome:
      "Adding a sub-brand went from editing components across the codebase to declaring a token set.",
    tags: ["Design tokens", "SCSS", "React", "Design systems"],
    meta: "Platform work · refactor at scale",
  },
  {
    slug: "internationalization",
    title: "Internationalization & Multi-Currency",
    period: "2024",
    kind: "work",
    blurb:
      "A year of making one storefront behave correctly in many countries: server-side geo-localization, a locale and currency selector, per-market site configuration, currency-gated features, and the rollout of several new currencies across the brand estate.",
    outcome:
      "Opened new markets — including a new region and currency the platform had never served.",
    tags: ["Next.js", "i18n", "Multi-currency", "Geo-localization"],
    meta: "Market expansion",
  },
  {
    slug: "analytics-measurement",
    title: "Analytics & Measurement Layer",
    period: "2022 — 2025",
    kind: "work",
    blurb:
      "The measurement substrate under the storefront, built from scratch and maintained for three years: the GA4 migration, a Google Tag Manager data layer, an event taxonomy spanning home, category, product and cart, SEO structured data, and Datadog RUM for client-side observability.",
    outcome:
      "Every experiment, funnel and merchandising decision downstream reads from a data layer I designed and own.",
    tags: ["GA4", "Google Tag Manager", "Datadog RUM", "SEO", "TypeScript"],
    meta: "Cross-cutting · owned end to end",
  },
  {
    slug: "experimentation-platform",
    title: "In-house Experimentation Platform",
    period: "2025 — present",
    kind: "work",
    blurb:
      "An A/B testing product built inside a proprietary content platform: experiments dashboard, setup wizard, traffic allocation, GrowthBook integration, and a results page that reads the statistical analysis back into the tool.",
    outcome:
      "Product managers now design, launch, stop and conclude tests themselves — no engineering ticket, no deploy.",
    tags: ["React", "TypeScript", "MUI", "GrowthBook", "C# / .NET"],
    meta: "Owned end to end",
  },
  {
    slug: "content-targeting",
    title: "Content Targeting & Variant Inspection",
    period: "2025 — present",
    kind: "work",
    blurb:
      "The targeting side of the same platform: which content variant a page shows, to whom, and why. Audience, geography, device and cart-based filters; variant priority, cloning and bulk actions; concurrent-edit conflict resolution; and an on-page debugger that explains a live page's variant decision to a non-engineer.",
    outcome:
      "Turned \"why isn't my variant showing?\" from a developer's afternoon into a marketer's 30 seconds.",
    tags: ["React", "TypeScript", "C# / .NET", "Optimistic locking"],
    meta: "Owned end to end · own initiative",
  },
  {
    slug: "catalog-pricing-backoffice",
    title: "Catalog & Pricing Backoffice",
    period: "2026",
    kind: "work",
    blurb:
      "A 0→1 internal product for catalog and pricing operations: products dashboard, product detail screens, and a multi-currency tab with per-currency overrides, crossed-price validation and a draft/publish model. I wrote the C# in the pricing service that recomputes per-currency prices from a base price on save.",
    outcome:
      "Replaced a spreadsheet-and-SQL process — price changes now ship the same day, without a developer.",
    tags: ["React", "TypeScript", "C# / .NET", "Multi-currency"],
    meta: "0→1",
  },
  {
    slug: "agentic-dev-tooling",
    title: "Agentic Dev Tooling",
    period: "2026",
    kind: "work",
    blurb:
      "Two internal tools that give a small team leverage. An autonomous UI QA agent that drives the product in a real browser, walks critical flows and reports regressions with screenshots. And a cross-repo code knowledge index — an AST-derived graph spanning 20 services, with semantic search on top.",
    outcome:
      "\"Where is this used across services?\" became a query instead of an afternoon of grepping.",
    tags: ["LLM agents", "RAG", "Knowledge graphs", "Developer tooling"],
    meta: "Own initiative",
  },
  {
    slug: "tiny-bites",
    title: "Tiny Bites — Baby Feeding Tracker",
    period: "2026",
    kind: "side",
    blurb:
      "A warm, mobile-first app for new parents to log feeds, sleep and changes, share with a co-parent, and see the pattern that emerges. Real-time multi-user sync, auth, charts and CSV export — designed and built end to end, solo.",
    outcome:
      "Live and free for anyone to use, with the source public — click through and read it.",
    tags: ["React 18", "Vite", "Firebase Auth", "Firestore", "Recharts", "Tailwind"],
    href: "https://tiny-bites-57104.web.app",
    sourceHref: "https://github.com/Roy-Bar/tiny-bites",
    meta: "Side project · live",
  },
];

/**
 * Newest first, with personal projects pinned to the front.
 *
 * The order is derived from `period` rather than the declaration order, so
 * adding a project only means writing its years correctly.
 */
export function sortedProjects(list: Project[] = projects): Project[] {
  const years = (period: string) => {
    const found = period.match(/\d{4}/g) ?? [];
    const start = found.length ? Number(found[0]) : 0;
    // Ongoing work outranks work that ended in the same year it started.
    const end = /present/i.test(period)
      ? 9999
      : Number(found[found.length - 1] ?? start);
    return { start, end };
  };

  return [...list]
    .map((project, index) => ({ project, index, ...years(project.period) }))
    .sort(
      (a, b) =>
        Number(b.project.kind === "side") - Number(a.project.kind === "side") ||
        b.start - a.start ||
        b.end - a.end ||
        a.index - b.index,
    )
    .map((entry) => entry.project);
}

export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  note: string;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "Tenengroup",
    note: "Multi-brand direct-to-consumer e-commerce group — eight brands, multiple countries and currencies, millions of sessions a month. Its storefronts, content platform and backoffice tools are all built in house.",
    roles: [
      {
        title: "Senior Frontend & Full-Stack Engineer",
        period: "Sep 2021 — Present",
        bullets: [
          "Five years on the group's storefront platform, across its category, product, review, cart and checkout surfaces — first on the legacy storefront, then on the Next.js platform that replaced it, and now the thin JSON APIs retiring the last legacy pages.",
          "Owned the measurement layer from 2022: the GA4 migration, a Google Tag Manager data layer built from scratch, an event taxonomy spanning every major page type, SEO structured data, and Datadog RUM for client-side observability.",
          "Replaced per-brand branching with a theming system in 2024 — design tokens, per-brand CSS variables, a shared typography scale and a single theme hook — so a new sub-brand became configuration rather than a fork.",
          "Led the internationalization and multi-currency programme in 2024: server-side geo-localization, a locale and currency selector, per-market site configuration, currency-gated features and several new currencies — work that opened new markets.",
          "Built the group's A/B testing product from an empty screen to a tool product managers run unaided — experiments dashboard, setup wizard, traffic allocation, GrowthBook integration, and a results page that reads statistical analysis back into the tool.",
          "Built the content-targeting editor alongside it: audience, geography, device and cart-based page filters, variant priority, cloning and bulk actions, and optimistic locking with conflict resolution so two editors can't silently overwrite each other.",
          "Delivered a catalog & pricing backoffice 0→1 — one of several backoffice systems I own — replacing a spreadsheet-and-SQL process with a multi-currency tool merchandisers publish from themselves — including the C# that recomputes per-currency prices from a base price on save.",
          "Own product-bundle configurators end to end — configurable multi-item products where each slot carries its own options, price and stock — across the authoring UI, the REST APIs, the storefront rendering and the analytics.",
          "Work full-stack when the feature needs it: C# endpoints across several .NET services, consumed by the React and Next.js surfaces I build on top of them.",
          "Build leverage for the team: an autonomous UI QA agent, a cross-repo code knowledge index, versioned releases with written release notes, and design specs before code. De-facto frontend reviewer on the platform.",
        ],
      },
      {
        title: "Technical Solution Engineer",
        period: "May 2020 — Sep 2021",
        bullets: [
          "Ran the technical side of e-commerce operations across roughly a dozen country sites — writing production SQL for order, refund, stock and promotion interventions, and automating the recurring ones in C#/.NET.",
          "Built operational reports and stood up Elasticsearch and Kibana dashboards so fulfilment, customer-care and merchandising teams could self-serve their own analytics.",
          "Integrated the CRM and lifecycle-messaging stack through JavaScript and Google Tag Manager — email and cart-abandonment triggers, SMS, referral and review platforms — alongside on-site search feeds and advertising pixels.",
          "Supported new brand-site launches and configured order-management, fraud and shipping parameters in production.",
          "Where the .NET, SQL and commerce-domain depth I still lean on as a product engineer came from.",
        ],
      },
      {
        title: "QA Specialist (part-time)",
        period: "Feb 2020 — May 2020",
        bullets: [
          "Manual QA across the commerce platform — how I learned the system I would spend the next six years building.",
        ],
      },
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
