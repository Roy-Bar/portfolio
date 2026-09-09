"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04 — experience" title="Where I've worked" />

        <div className="space-y-14">
          {experience.map((company) => (
            <div key={company.company}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                  {company.company}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
                  {company.note}
                </p>
              </motion.div>

              <div className="relative">
                <div
                  aria-hidden
                  className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--accent)]/60 via-[color:var(--accent)]/20 to-transparent"
                />
                <ul className="space-y-10">
                  {company.roles.map((r, i) => (
                    <motion.li
                      key={`${r.title}-${r.period}`}
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
                        <h4 className="text-lg font-semibold text-[color:var(--foreground)]">
                          {r.title}
                        </h4>
                        <span className="font-mono text-xs text-[color:var(--muted)]">
                          {r.period}
                        </span>
                      </div>
                      <ul className="mt-3 space-y-2 text-[color:var(--foreground)]/85">
                        {r.bullets.map((b) => (
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
            </div>
          ))}
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
