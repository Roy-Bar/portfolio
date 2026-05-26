"use client";

import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03 — projects"
          title="Selected work"
          subtitle="A mix of day-job impact and side things I've shipped."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <TiltCard key={p.title} className="group">
              <div className="glass glass-hover relative h-full rounded-2xl p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0">
                    {p.sourceHref && (
                      <a
                        href={p.sourceHref}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Source for ${p.title}`}
                        className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${p.title}`}
                        className="text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                {p.meta && (
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] mb-3">
                    {p.meta}
                  </div>
                )}
                <p className="text-sm text-[color:var(--foreground)]/85 leading-relaxed">
                  {p.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[color:var(--border)] px-2.5 py-0.5 text-[11px] font-mono text-[color:var(--muted)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
