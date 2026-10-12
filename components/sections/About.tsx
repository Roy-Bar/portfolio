"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01 — about" title="A bit about me" />

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 text-lg leading-relaxed text-[color:var(--foreground)]/90 space-y-4"
          >
            <p>
              I build{" "}
              <em className="text-[color:var(--accent)] not-italic">both sides</em>{" "}
              of e-commerce: the online stores customers shop on, and the internal
              tools behind them that let non-technical teams launch products, set
              prices, run experiments and change the site without waiting for a
              developer. It means caring about how an interface feels, how it
              holds up at scale, and the services behind it in equal measure.
            </p>
            <p className="text-[color:var(--muted)]">
              For six years that has been at{" "}
              <span className="text-[color:var(--foreground)]">Tenengroup</span>, a
              multi-brand direct-to-consumer e-commerce group — eight brands,
              multiple countries and currencies, millions of sessions a month,
              with the storefronts, content platform and backoffice tools all
              built in house.
            </p>
            <p className="text-[color:var(--muted)]">
              The work has moved outward in layers. I started on the storefront
              itself: its category, product, cart and checkout surfaces, first on
              the legacy stack and then on the Next.js platform that replaced it.
              That led into the cross-cutting problems — an analytics layer built
              from scratch, a theming system that turned eight diverging brands
              into configuration, and the internationalization and multi-currency
              work that opened new markets. Lately it&apos;s the tools one level
              up: an A/B testing product, content targeting, and a catalog and
              pricing backoffice, with the C# behind my own React when the
              feature needs it.
            </p>
            <p className="text-[color:var(--muted)]">
              I got here sideways. Before engineering I ran the technical side of
              e-commerce operations across a dozen country sites — production SQL,
              automation, dashboards and third-party integrations. That&apos;s why
              the backend half never feels like someone else&apos;s problem, and
              why I tend to notice the operational cost of a design before it
              ships.
            </p>
            <p className="text-[color:var(--muted)]">
              In October 2026 that came full circle: I now lead{" "}
              <span className="text-[color:var(--foreground)]">
                Solutions Engineering
              </span>
              , the technical go-to for the rest of the company. The goal is
              simple: answer faster, and make recurring problems go away for good,
              increasingly with AI and agentic workflows.
            </p>
            <p className="text-[color:var(--muted)]">
              These days I build the team&apos;s AI tooling too — an autonomous UI
              QA agent, and a searchable knowledge graph over twenty of the
              group&apos;s services so cross-repo questions stop being
              archaeology.
            </p>
            <div className="pt-2 flex items-center gap-2 text-sm text-[color:var(--muted)] font-mono">
              <MapPin size={14} className="text-[color:var(--accent)]" />
              {profile.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            <Stat k="Stack" v="React · Next · .NET" />
            <Stat k="Experience" v="6+ years" />
            <Stat k="Domain" v="E-commerce platforms" />
            <Stat k="Mode" v="Open to chat" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="glass glass-hover rounded-2xl p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
        {k}
      </div>
      <div className="mt-2 text-lg font-medium text-[color:var(--foreground)]">
        {v}
      </div>
    </div>
  );
}
