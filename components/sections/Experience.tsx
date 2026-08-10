"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04 — experience" title="Where I've worked" />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--accent)]/60 via-[color:var(--accent)]/20 to-transparent"
          />
          <ul className="space-y-10">
            {experience.map((e, i) => (
              <motion.li
                key={`${e.company}-${e.period}`}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-12"
              >
                <span
                  aria-hidden
                  className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_18px_var(--accent-glow)]"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                    {e.role}{" "}
                    <span className="text-[color:var(--muted)] font-normal">
                      · {e.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-[color:var(--muted)]">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-[color:var(--foreground)]/85">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative pl-4 text-sm leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[color:var(--accent)]"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--muted)]">
            Education
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((ed) => (
              <li key={ed.school} className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold text-[color:var(--foreground)]">
                    {ed.degree}{" "}
                    <span className="font-normal text-[color:var(--muted)]">
                      · {ed.school}
                    </span>
                  </p>
                  <span className="font-mono text-xs text-[color:var(--muted)]">
                    {ed.period}
                  </span>
                </div>
                {ed.note && (
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--foreground)]/75">
                    {ed.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
