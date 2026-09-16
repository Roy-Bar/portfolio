/**
 * Long-form copy for the /projects/[slug] pages. Kept out of content.ts so
 * that file stays the home page's single source of truth.
 *
 * Everything here is written for a reader who has never seen these systems:
 * no internal product names, no repository names, no company-specific
 * shorthand. A hiring manager, a developer and a recruiter should each be able
 * to follow it.
 */

export type DiagramGroup =
  | "experimentation"
  | "catalog"
  | "targeting"
  | "storefront"
  | "measurement";

export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  period: string;
  meta: string;
  lede: string;
  problem: string;
  built: string[];
  notes: { heading: string; body: string }[];
  outcome: string;
  /** Render the platform diagram, dimming everything outside these columns. */
  diagram?: { highlight: DiagramGroup[] | null; caption: string };
  gallery?: { intro: string; shots: Shot[] };
  animation?: { webp: string; gif: string; alt: string; caption: string };
  links?: { label: string; href: string }[];
  /** Absolute-from-root share image; falls back to the site-wide card. */
  shareImage?: string;
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "multi-brand-storefront",
    title: "Multi-Brand Storefront Platform",
    period: "2021 — present",
    meta: "Production · millions of sessions",
    lede:
      "Eight consumer brands, multiple countries and currencies, one platform. The longest-running thread in my work: five years across the same commerce surfaces, carried through two generations of stack.",
    problem:
      "Eight brands sharing one codebase pull in opposite directions. Each wants its own look, its own catalog and its own promotional mechanics; none wants to wait for the others. Meanwhile the platform itself was mid-generation — a legacy server-rendered storefront still serving most traffic while a Next.js replacement grew alongside it. Every feature had to be decided twice: where it lives now, and where it lives after the migration.",
    built: [
      "Features across the full commerce surface — category and search listing, product detail, reviews, cart, upsells and checkout — shipped continuously since 2021.",
      "Product-bundle configurators end to end: configurable multi-item products where each slot carries its own options, pricing and stock, plus the authoring UI, the REST APIs, the storefront rendering and the analytics.",
      "The customer account and authentication surfaces, including social sign-in and the hardening that a page holding personal data needs.",
      "Resilience and quality plumbing the platform lacked: error boundaries, a markup validator in the build, cookie-consent handling, and out-of-stock subscription flows.",
      "The migration path off the legacy stack — a behavioural spec for each page first, then a thin JSON API in .NET, then a new React page, so the old and new storefronts could serve traffic side by side.",
    ],
    notes: [
      {
        heading: "Migrating a shop that can't close",
        body: "You cannot rewrite a storefront in one release. The approach that worked was strangling it page by page: pin down what the legacy page actually does — including the behaviour nobody documented — expose it as a thin JSON contract, then build the new page against that contract. The legacy app keeps serving until the replacement is provably equivalent.",
      },
      {
        heading: "Server rendering is a commerce requirement",
        body: "Prices, stock and promotional eligibility have to be right in the first paint. A storefront that renders a price and then corrects it has already lost the customer's trust. That pushes the interesting work onto the server and makes the data contract, not the component tree, the thing to get right.",
      },
      {
        heading: "Nested products break the usual assumptions",
        body: "A bundle whose slots each have their own options, price and stock means the cart line is a tree, not a row. Pricing, validation and analytics all have to agree on how that tree collapses into one number — and the authoring UI has to make an invalid tree hard to build in the first place.",
      },
      {
        heading: "Eight brands is an architecture problem, not a CSS problem",
        body: "The instinct is to branch on brand inside components. That scales to about three brands and then becomes unmaintainable. The durable answer was to push brand identity out into configuration — which became its own piece of work.",
      },
    ],
    outcome:
      "The same commerce surfaces, carried through two generations of stack without ever stopping the shop.",
    diagram: {
      highlight: ["storefront", "measurement"],
      caption:
        "Highlighted: the customer-facing surface and the measurement behind it. The rest of the platform is dimmed for context.",
    },
  },
  {
    slug: "multi-brand-design-system",
    title: "Multi-Brand Theming System",
    period: "2024",
    meta: "Platform work · refactor at scale",
    lede:
      "Eight brands and their sub-brands were diverging through per-brand branching inside the components. I replaced that with tokens, so brand identity became configuration instead of code paths.",
    problem:
      "Every brand difference had been solved locally, at the point it was noticed. A component would check which brand it was rendering for and pick a colour, a font, a spacing value, sometimes a whole layout. Multiply that by eight brands, their sub-brands and years of accumulation, and the result is a codebase where nobody can answer \"what does this brand look like?\" without reading every component — and where launching a sub-brand means touching dozens of files.",
    built: [
      "A token layer: colour, typography and spacing expressed as per-brand CSS custom properties, resolved once at the root rather than branched at each usage site.",
      "A shared typography system — the scale and its mixins moved into common code, so brand differences became values rather than duplicated rules.",
      "Sub-brand support as a first-class case, including the shared surfaces (announcement bars, headers) that need to reflect a sub-brand without forking the component.",
      "A single theme hook replacing the brand-checking hook the components had been calling, so consumers ask \"what does the theme say?\" instead of \"which brand am I?\".",
      "A migration through the existing components, moving brand-specific styling out to the token layer without changing what any brand rendered.",
    ],
    notes: [
      {
        heading: "The refactor had to be invisible",
        body: "Eight live brands means the acceptance criterion is that nothing changes visually. That inverts the usual workflow: the interesting output isn't a new feature, it's a diff that provably renders identically. Design QA passes per brand were the real test suite.",
      },
      {
        heading: "Replacing useBrand with useTheme is the whole idea",
        body: "The old hook told a component which brand it was serving, which invited it to make brand decisions. The new one tells it what the current theme's values are. Same call site, but the component no longer knows or cares which brand it's in — and that's what stops the branching from growing back.",
      },
      {
        heading: "Tokens are documentation",
        body: "The side effect that mattered most: after the migration, a brand's identity is one readable set of values. Designers can see it, new engineers can find it, and a sub-brand launch is a diff someone can review rather than an archaeology exercise.",
      },
    ],
    outcome:
      "Adding a sub-brand went from editing components across the codebase to declaring a token set.",
    diagram: {
      highlight: ["storefront"],
      caption: "Highlighted: the storefront surface this work restructured.",
    },
  },
  {
    slug: "internationalization",
    title: "Internationalization & Multi-Currency",
    period: "2024",
    meta: "Market expansion",
    lede:
      "A year of making one storefront behave correctly in many countries — and of learning that currency is a commercial decision, not a conversion.",
    problem:
      "The platform sold internationally but wasn't really international. Currency was largely assumed, locale was inferred inconsistently, and features built for one market leaked into others where they made no sense — a loyalty programme priced in one currency showing to a customer being charged in another. Expanding into a new region meant answering, for every surface: which locale, which currency, which features apply here, and what do we do about the visitor whose country we don't serve?",
    built: [
      "Server-side geo-localization, so the first render already knows where the visitor is rather than correcting itself after hydration.",
      "A locale and currency selector, plus the localization prompt that offers a visitor their own market instead of silently redirecting them.",
      "Per-market site configuration — supported locales, currencies and defaults expressed as configuration per brand site rather than as conditionals in the code.",
      "Currency-gated features: mechanics that are only correct in their home currency now declare that, rather than rendering wrong prices elsewhere.",
      "Rollout of several new currencies across the brand estate, including the region and currency that opened a new market.",
      "The unserved-country cases nobody enjoys: excluded-country messaging on products and in the cart, shipping notifications, and translated states for all of it.",
    ],
    notes: [
      {
        heading: "Geo detection belongs on the server",
        body: "Doing it client-side means the first paint is wrong and then flickers — which on a commerce page means showing a price you then change. Moving detection server-side made the first render authoritative, at the cost of having to think properly about caching per market.",
      },
      {
        heading: "Currency is not a conversion rate",
        body: "The tempting model is one price converted at runtime. It produces mathematically correct, commercially wrong prices, and it breaks any feature whose economics are currency-specific. Treating each market's currency as its own configured decision is more work up front and far less wrong afterwards.",
      },
      {
        heading: "Internationalization is mostly the sad paths",
        body: "The selector and the translations are the easy half. The work that actually took the year was the visitor from a country you don't ship to, the product excluded from one market, the cart mixing available and unavailable items — each needing a correct, translated, non-embarrassing state.",
      },
    ],
    outcome:
      "Opened new markets — including a region and currency the platform had never served.",
    diagram: {
      highlight: ["storefront"],
      caption:
        "Highlighted: the storefront surface, where locale and currency resolution happens.",
    },
  },
  {
    slug: "analytics-measurement",
    title: "Analytics & Measurement Layer",
    period: "2022 — 2025",
    meta: "Cross-cutting · owned end to end",
    lede:
      "The measurement substrate under the storefront: built from scratch, maintained for three years, and the thing every experiment and funnel downstream reads from.",
    problem:
      "Analytics had accumulated rather than been designed. Events were added per feature by whoever shipped the feature, named however seemed reasonable at the time, so the same customer action could be recorded three ways on three page types. Then the industry-wide move to GA4 arrived, which meant the whole event model had to be rebuilt anyway. Without a consistent data layer, no funnel could be trusted and no experiment could be measured.",
    built: [
      "The migration to GA4, including the event-model rework it forced rather than a mechanical port of the old events.",
      "A Google Tag Manager data layer built from scratch, and later refactored into a proper module once its shape was known.",
      "An event taxonomy spanning the whole journey — home, category and listing, product detail, carousels, side menu, cart, upsells and checkout — so the same action means the same thing everywhere.",
      "Commerce-specific instrumentation: product and bundle interaction events, cross-sell attribution, and the identifiers needed to follow a session without carrying personal data into the data layer.",
      "SEO and structured data: schema markup for products and reviews, sitemap and indexing correctness, and the crawl issues that follow from getting those wrong.",
      "Client-side observability with Datadog RUM, so a broken storefront surfaces as a signal rather than as a support ticket.",
    ],
    notes: [
      {
        heading: "A taxonomy is a contract, not a spreadsheet",
        body: "The value isn't in having events; it's in the same action producing the same event with the same shape on every page type. Once that holds, analysts stop asking engineers what a number means — and experiments become measurable, because a conversion is defined in exactly one place.",
      },
      {
        heading: "Instrument with the feature, not after it",
        body: "Retrofitted analytics measures what is easy to measure. Building the events alongside the feature means measuring what the feature was actually for — which is why I've kept ownership of this layer while building the features that emit into it.",
      },
      {
        heading: "Identity without personal data",
        body: "Following a session across pages needs a stable identifier; a data layer is the last place personal data should live. Hashing the identifier before it reaches the client resolves the tension, and is the kind of decision that is cheap early and expensive to retrofit.",
      },
      {
        heading: "SEO is a measurement problem too",
        body: "Structured data, sitemaps and indexing directives are how a storefront reports itself to search engines. Treating them as part of the measurement layer rather than as a marketing afterthought is what keeps the reporting and the reality in agreement.",
      },
    ],
    outcome:
      "Every experiment, funnel and merchandising decision downstream reads from a data layer I designed and still own.",
    diagram: {
      highlight: ["measurement", "storefront"],
      caption:
        "Highlighted: the measurement layer and the storefront it observes.",
    },
  },
  {
    slug: "experimentation-platform",
    title: "In-house Experimentation Platform",
    period: "2025 — present",
    meta: "Owned end to end",
    lede:
      "An A/B testing product built inside a proprietary content platform, so that the people who decide what to test can run the test themselves.",
    problem:
      "Every experiment on the storefront needed an engineer. A product manager who wanted to try a different hero, price presentation or cross-sell layout wrote a ticket, waited for a sprint, and waited again to find out whether the result was significant. The bottleneck wasn't the code — it was that the tooling assumed an engineer would always be in the loop.",
    built: [
      "An experiments dashboard: every test with its status, traffic split, audience and elapsed runtime in one list, with the active-variant count surfaced per entry.",
      "A setup wizard that walks a non-engineer from hypothesis to running experiment — pick the surface, define the variants, set the audience, allocate traffic.",
      "Traffic allocation and assignment wired through GrowthBook, with the assignment decision made early in the request so a visitor's variant is stable from the first render.",
      "A results page that reads the statistical analysis back into the tool: per-variant performance, significance, and metric-aware formatting so a rate and a revenue figure don't render the same way.",
      "The lifecycle around a test rather than just its start: stopping an experiment, overriding a variant's content, and recording a conclusion so the decision outlives the dashboard.",
      "The C#/.NET endpoints behind all of it — experiment definitions, allocation and results — consumed by the React admin app.",
    ],
    notes: [
      {
        heading: "Statistics belong in the tool, not in a spreadsheet",
        body: "The hard part of an experimentation product isn't starting a test — it's ending one. If reading the result means exporting to a spreadsheet, the loop stays broken and an analyst becomes the new bottleneck. Pulling the analysis back into the results page is what let product managers conclude tests unaided.",
      },
      {
        heading: "A wizard is a specification, not a UI flourish",
        body: "Each wizard step maps to a decision the engine actually needs — surface, variants, audience, allocation. Framing it as a sequence of decisions rather than a form meant the invalid states largely stopped existing, instead of being validated after the fact.",
      },
      {
        heading: "Buy the statistics, build the workflow",
        body: "Bucketing and significance testing are solved problems with sharp edges; a home-grown version is a liability. Delegating them to a purpose-built engine and spending the effort on the workflow around it — who can start a test, how it's reviewed, how it ends — is where the actual product value was.",
      },
      {
        heading: "Owning both halves changed the design",
        body: "Because I wrote the .NET endpoints as well as the React that calls them, the API ended up shaped like the screens rather than like the database. When the results page needed one more aggregate, that was an afternoon rather than a cross-team negotiation.",
      },
    ],
    outcome:
      "Product managers now design, launch, stop and conclude tests themselves — no engineering ticket, no deploy.",
    diagram: {
      highlight: ["experimentation"],
      caption:
        "Highlighted: the surfaces and service this project covers. The rest of the platform is dimmed for context.",
    },
  },
  {
    slug: "content-targeting",
    title: "Content Targeting & Variant Inspection",
    period: "2025 — present",
    meta: "Owned end to end · own initiative",
    lede:
      "The targeting half of the same platform: which content variant a page shows, to whom, and — when someone asks — why.",
    problem:
      "Deciding what a page shows is only half the problem. The other half is that several people edit the same content, targeting rules accumulate until nobody can predict which variant wins, and when the wrong one appears there is no way for a non-engineer to find out why. Two editors could open the same variant and the second save would silently erase the first. And \"why isn't my variant showing?\" was answered by a developer reading logs and reconstructing the decision by hand.",
    built: [
      "Page targeting by audience, geography, device and cart contents, with an extended filter panel and validation that flags impossible filter values at authoring time.",
      "Variant management for people who work in it daily: priority ordering, cloning, bulk actions, drafts, and a publish step separate from editing.",
      "Optimistic locking with conflict resolution — when two people edit the same variant, the second one is told, and shown what happened, instead of overwriting the first.",
      "Unsaved-change guards across the surfaces where people lose work: switching site, navigating the side menu, leaving mid-edit.",
      "An on-page debugger overlaying a live storefront page: the variant currently rendering, and the audience, geography, device and active experiment the targeting engine matched to choose it.",
      "A read-only evaluation endpoint on the .NET API exposing the engine's reasoning without granting the ability to change anything.",
    ],
    notes: [
      {
        heading: "Last write wins is a data-loss bug wearing a shrug",
        body: "The default behaviour of a naive editor is to let the second save erase the first, silently. Optimistic locking is not much code — a version on the record, a check on write — but the product work is what happens next: telling the person clearly enough that they can recover their edit rather than just refusing it.",
      },
      {
        heading: "Explaining a decision is harder than making one",
        body: "The engine already knew why it picked a variant. Turning that into a sentence a marketer can act on meant deciding which of the matched rules mattered and which were noise — a product problem wearing a debugging problem's clothes.",
      },
      {
        heading: "Read-only is a design decision",
        body: "The evaluation endpoint exposes reasoning and nothing else. Making it strictly read-only meant it could be safe to run against production, which is the only place the answer is actually interesting.",
      },
      {
        heading: "Nobody asked for the debugger",
        body: "I built it because I kept answering the same question. That's the most reliable signal I know that a tool is worth building: a question asked often enough that answering it has become part of the job.",
      },
    ],
    outcome:
      "Turned \"why isn't my variant showing?\" from a developer's afternoon into a marketer's 30 seconds — and made concurrent editing safe.",
    diagram: {
      highlight: ["targeting"],
      caption:
        "Highlighted: the targeting editor and the read-only evaluation endpoint the debugger reads from.",
    },
  },
  {
    slug: "catalog-pricing-backoffice",
    title: "Catalog & Pricing Backoffice",
    period: "2026",
    meta: "0→1",
    lede:
      "An internal product for catalog and pricing operations, taken from an empty screen to production — including the C# in the pricing service behind it.",
    problem:
      "Pricing lived in spreadsheets and was applied with SQL. Changing a price in one market meant someone careful writing a query against production, and a crossed-out \"was\" price that didn't match its \"now\" price was only discovered once a customer saw it. There was no draft state, so there was no way to prepare a change and review it before it was live.",
    built: [
      "A products dashboard and product detail screens — the operational view of the catalog, built for the people who maintain it daily.",
      "A multi-currency tab with per-currency overrides: a base price plus deliberate exceptions, rather than one number reinterpreted per market.",
      "Crossed-price validation, so a promotional \"was\" price that doesn't make sense against its current price is rejected at authoring time rather than discovered in production.",
      "A draft/publish model: prepare a change, review it, publish it — with the live catalog untouched until publish.",
      "The supporting C# in the pricing service, including persisting base prices and recomputing the non-default currencies from them on draft save, so the derived prices can never drift from their source.",
    ],
    notes: [
      {
        heading: "Draft/publish is the whole feature",
        body: "Everything else in this tool is a form. What made it trustworthy is that nothing takes effect until someone publishes it — which turns pricing from an irreversible action into a reviewable one, and is the reason a non-engineer can now be trusted with it.",
      },
      {
        heading: "Derive on write, not on read",
        body: "Per-currency prices are computed from a base price when the draft is saved, and stored. Deriving them at read time would have been less code and a worse system: the storefront would recompute prices on every request, and a change to the conversion logic would silently rewrite history.",
      },
      {
        heading: "Per-currency overrides beat conversion",
        body: "Converting one base price into every market gives mathematically correct, commercially wrong prices. Modelling an override per currency admits that pricing is a decision rather than a calculation, and stores the decision explicitly.",
      },
    ],
    outcome:
      "Replaced a spreadsheet-and-SQL process — price changes now ship the same day, without a developer.",
    diagram: {
      highlight: ["catalog"],
      caption:
        "Highlighted: the backoffice surface and the pricing service it drives.",
    },
  },
  {
    slug: "agentic-dev-tooling",
    title: "Agentic Dev Tooling",
    period: "2026",
    meta: "Own initiative",
    lede:
      "Two internal tools that give a small team leverage: an autonomous UI QA agent, and a searchable knowledge graph over twenty services.",
    problem:
      "Two recurring costs. Regression testing a multi-brand storefront by hand doesn't scale — the critical flows are long, and the fifth manual pass of the week is the one that misses something. And in a codebase spread across twenty services, \"where is this used?\" is answered by grepping repository after repository, which means the answer depends on how patient you were.",
    built: [
      "An autonomous UI QA agent that drives the product in a real browser, walks the critical flows and reports regressions with screenshots — so a failure arrives as evidence rather than as a description.",
      "A cross-repo code knowledge index: an AST-derived graph spanning 20 services, with semantic search over the top.",
      "Query paths for the questions that actually get asked — where a symbol is used across service boundaries, how one service reaches another, what a change would affect.",
      "Accumulated operational knowledge captured as reusable instructions, so what the QA agent and the release process learned from one run is available to the next.",
    ],
    notes: [
      {
        heading: "An AST graph beats embeddings for structural questions",
        body: "\"What calls this?\" has an exact answer, and a parser knows it. Deriving the graph from the syntax tree means the structural queries are correct rather than probable; the semantic layer sits on top for the fuzzy questions where recall matters more than precision.",
      },
      {
        heading: "A QA agent has to report like a colleague",
        body: "An agent that says \"the checkout flow failed\" costs as much time as it saves. Screenshots at the point of failure turn the report into something actionable without a re-run, which is the difference between a tool people use and a tool people ignore.",
      },
      {
        heading: "Tooling is a compounding investment",
        body: "Neither of these shipped a feature. Both changed how expensive the next feature is — and on a small team maintaining a large surface, that's usually where the leverage actually is.",
      },
    ],
    outcome:
      "\"Where is this used across services?\" became a query instead of an afternoon of grepping.",
    diagram: {
      highlight: null,
      caption:
        "This work spans every layer rather than sitting in one column — the whole platform is the surface it covers.",
    },
  },
  {
    slug: "tiny-bites",
    shareImage: "/projects/tiny-bites/share.png",
    title: "Tiny Bites — Baby Feeding Tracker",
    period: "2026",
    meta: "Side project · live",
    lede:
      "A warm, mobile-first app for new parents to log feeds, sleep and changes, share with a co-parent, and see the pattern that emerges. Designed and built end to end, solo.",
    problem:
      "A newborn generates a surprising amount of data, and both parents need the same view of it at 3am on different phones. Notes apps lose it; the tracking apps we tried buried the one action you actually need — log a feed, right now, one-handed — under sign-up flows and upsells.",
    built: [
      "One-tap logging for feeds (breast left/right/both, formula, pumped bottle), solids, supplements, diapers and nappy changes — with an optional duration timer and notes.",
      "A sleep tracker with a live Start Sleep / Wake Up session, plus manual entry for the nap you forgot to start.",
      "A dashboard that answers the 3am questions: how long since the last feed, how much today, is she asleep right now and for how long.",
      "A unified history across every activity type, grouped by day, filterable and searchable, with inline edit and delete.",
      "Charts over 7 and 30 days for feeding volume and hours slept, and CSV/JSON export for the paediatrician.",
      "Email auth with per-user Firestore security rules, so each account only ever reaches its own data.",
    ],
    notes: [
      {
        heading: "The active session lives in the database, not in the component",
        body: "An open sleep is a row with a start and a null end. Because the session is server state rather than a running timer in one tab, a reload keeps counting, and the other parent's phone shows the same \"asleep for 42m\" — which is the entire point of a two-parent tracker. It also means the timer is a derived value, so there is no clock to drift or reconcile.",
      },
      {
        heading: "Real-time listeners instead of refetching",
        body: "Every screen subscribes to Firestore rather than polling. Two phones logging in the same minute both stay correct without any conflict handling on my side, and the UI has no refresh affordance because it never needs one.",
      },
      {
        heading: "One-handed, at 3am, in the dark",
        body: "That constraint drove the whole interface: a bottom nav reachable with a thumb, a primary action large enough to hit without looking, and warm low-contrast colours that don't wake anyone up. Most design decisions in this app fall out of that single scenario.",
      },
      {
        heading: "Aggregation on the client",
        body: "Daily totals, per-type breakdowns and the chart buckets are all derived in hooks from the same subscribed rows. For a dataset this size that's cheaper and simpler than maintaining aggregates in the database — and it means a corrected entry updates every number that depends on it, with no backfill.",
      },
    ],
    outcome:
      "Live and free for anyone to use, with the source public — click through and read it.",
    gallery: {
      intro:
        "Screens from the running app, captured on a 375-point viewport against a synthetic dataset.",
      shots: [
        {
          src: "/projects/tiny-bites/dashboard.webp",
          alt: "Tiny Bites dashboard showing today's feed count, volume, and a live sleep counter",
          caption:
            "Dashboard — today's totals, time since the last feed, and a live counter for the sleep in progress.",
        },
        {
          src: "/projects/tiny-bites/sleep.webp",
          alt: "Tiny Bites sleep tracker with a running session timer and Wake Up button",
          caption:
            "The active sleep session, counting up from a row in the database rather than a timer in the tab.",
        },
        {
          src: "/projects/tiny-bites/sleep-chart.webp",
          alt: "Seven-day sleep chart above a day-grouped sleep history",
          caption:
            "Seven-day hours-slept chart, with the session history grouped by day beneath it.",
        },
        {
          src: "/projects/tiny-bites/timeline.webp",
          alt: "A day timeline with feeding, sleep and tummy-time bands, above a seven-day volume chart",
          caption:
            "The day at a glance — feeds, sleeps and tummy time on one timeline, over the seven-day volume chart.",
        },
        {
          src: "/projects/tiny-bites/history.webp",
          alt: "Unified history list mixing sleep, feeding, tummy time and diaper entries",
          caption:
            "One history for every activity type, with inline edit and delete on each entry.",
        },
        {
          src: "/projects/tiny-bites/log-feeding.webp",
          alt: "Log Feeding form showing the feeding type selector",
          caption:
            "Logging a feed — type first, because that is the decision the parent has already made.",
        },
        {
          src: "/projects/tiny-bites/export.webp",
          alt: "Export screen with a date range, summary statistics and CSV download",
          caption:
            "Export — a date range, the aggregates for it, and CSV or JSON out.",
        },
      ],
    },
    animation: {
      webp: "/projects/tiny-bites/log-flow.webp",
      gif: "/projects/tiny-bites/log-flow.gif",
      alt: "Recording of logging a feed: dashboard, feeding form, amount entry, then the dashboard totals updating",
      caption:
        "The core loop, recorded end to end: five feeds and 330 ml before, six and 450 ml after — the dashboard updates from the same subscription that drew it.",
    },
    links: [
      { label: "Open the live app", href: "https://tiny-bites-57104.web.app" },
      { label: "Read the source", href: "https://github.com/Roy-Bar/tiny-bites" },
    ],
  },
];

export function getProjectDetail(slug: string): ProjectDetail | undefined {
  return projectDetails.find((p) => p.slug === slug);
}
