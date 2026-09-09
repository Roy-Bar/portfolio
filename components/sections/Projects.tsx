"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { sortedProjects } from "@/lib/content";

export default function Projects() {
  const items = sortedProjects();

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03 — projects"
          title="Selected work"
          subtitle="What I built, and what changed because of it. Open any card for the problem it solved, how it was built, and where it sits in the wider system."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => {
            const side = p.kind === "side";
            // Personal projects read violet; client work stays on the cyan accent.
            const accent = side ? "var(--accent-2)" : "var(--accent)";

            return (
            <TiltCard
              key={p.title}
              className="group"
              glow={side ? "rgba(168,85,247,0.20)" : undefined}
            >
              <div
                className={`relative h-full rounded-2xl p-6 flex flex-col ${
                  side ? "glass-violet" : "glass glass-hover"
                }`}
              >
                {/* Card-wide target. An overlay link rather than a wrapping
                    anchor, so the live/source links below stay valid HTML. */}
                <Link
                  href={`/projects/${p.slug}`}
                  aria-label={`${p.title} — read more`}
                  className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ outlineColor: accent }}
                />
                <div className="relative z-10 flex items-start justify-between gap-3 mb-3">
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
                        className="relative z-10 text-[color:var(--muted)] transition-colors"
                        onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
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
                        className="relative z-10 text-[color:var(--muted)] transition-colors"
                        onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                  <div style={{ color: accent }}>{p.period}</div>
                  {p.meta && (
                    <div className="text-[color:var(--muted)]">{p.meta}</div>
                  )}
                </div>
                <p className="text-sm text-[color:var(--foreground)]/85 leading-relaxed">
                  {p.blurb}
                </p>
                <p
                  className="mt-4 border-l-2 pl-3 text-sm leading-relaxed text-[color:var(--foreground)]"
                  style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}
                >
                  {p.outcome}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-sm"
                  style={{ color: accent }}
                >
                  Find out more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <ul className="mt-auto pt-5 flex flex-wrap gap-1.5">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
