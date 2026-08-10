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
              I build the software other people{" "}
              <em className="text-[color:var(--accent)] not-italic">operate</em> —
              the dashboards, targeting rules and pricing tools that let content
              and product teams change a storefront without touching code. It
              means caring about how an interface feels, how it holds up at
              scale, and the services behind it in equal measure.
            </p>
            <p className="text-[color:var(--muted)]">
              At <span className="text-[color:var(--foreground)]">Tenen Group</span> I&apos;ve spent
              five years on a multi-brand commerce platform serving millions of
              sessions — building its A/B testing product from an empty screen,
              owning cross-sell and catalog pricing end to end, and writing the
              C# behind my own React when the feature needed it. Lately I build
              agentic tooling for the team, too.
            </p>
            <p className="text-[color:var(--muted)]">
              I got here sideways: CS degree, then automation scripts, SQL and
              Kibana dashboards on the technical-solutions side before I moved
              into product engineering. That&apos;s why the backend half never
              feels like someone else&apos;s problem.
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
            <Stat k="Experience" v="5+ years" />
            <Stat k="Scale" v="M+ sessions" />
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
