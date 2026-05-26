"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02 — skills"
          title="What I work with"
          subtitle="The tools I reach for most often, grouped by where they live in the stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent)] mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-[color:var(--border)] bg-white/[0.02] px-3 py-1 text-sm text-[color:var(--foreground)]/90 hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--accent)]/5 transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
