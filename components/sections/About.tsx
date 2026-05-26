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
              I&apos;m a developer focused on the web — I care about how
              interfaces <em className="text-[color:var(--accent)] not-italic">feel</em>,
              how they perform at scale, and the systems that ship them
              reliably.
            </p>
            <p className="text-[color:var(--muted)]">
              At <span className="text-[color:var(--foreground)]">Tenen Group</span> I work across a
              large Next.js codebase serving millions of sessions: feature-flagged
              experiments, real-user monitoring, internal tooling, and the
              occasional open-source module.
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
            <Stat k="Stack" v="React · Next" />
            <Stat k="Lang" v="TypeScript" />
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
