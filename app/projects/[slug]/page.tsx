import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";
import PlatformDiagram from "@/components/ui/PlatformDiagram";
import PhoneGallery, { PhoneFrame } from "@/components/ui/PhoneGallery";
import { projects } from "@/lib/content";
import { getProjectDetail, projectDetails } from "@/lib/project-details";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectDetails.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  if (!detail) return {};
  return {
    title: detail.title,
    description: detail.lede,
    alternates: { canonical: `/projects/${detail.slug}` },
    openGraph: {
      title: `${detail.title} · Roy Bar`,
      description: detail.lede,
      url: `/projects/${detail.slug}`,
      ...(detail.shareImage
        ? { images: [{ url: detail.shareImage, width: 1200, height: 630 }] }
        : {}),
    },
    ...(detail.shareImage
      ? {
          twitter: {
            card: "summary_large_image" as const,
            title: `${detail.title} · Roy Bar`,
            description: detail.lede,
            images: [detail.shareImage],
          },
        }
      : {}),
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  if (!detail) notFound();

  const card = projects.find((p) => p.slug === slug);
  const tags = card?.tags ?? [];
  // Personal projects carry the violet accent from their card through to here.
  const accent =
    card?.kind === "side" ? "var(--accent-2)" : "var(--accent)";

  return (
    <>
      <Nav linkPrefix="/" />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 pt-32 pb-24">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-xs text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            All work
          </Link>

          <header className="mt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]">
              <span style={{ color: accent }}>{detail.period}</span>
              <span className="text-[color:var(--muted)]/50">{"  ·  "}</span>
              <span className="text-[color:var(--muted)]">{detail.meta}</span>
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--foreground)] md:text-5xl">
              {detail.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[color:var(--foreground)]/85">
              {detail.lede}
            </p>

            {tags.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[color:var(--border)] px-2.5 py-0.5 font-mono text-[11px] text-[color:var(--muted)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}

            {detail.links && (
              <div className="mt-8 flex flex-wrap gap-3">
                {detail.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors"
                    style={{
                      color: accent,
                      borderColor: `color-mix(in srgb, ${accent} 50%, transparent)`,
                      backgroundColor: `color-mix(in srgb, ${accent} 6%, transparent)`,
                    }}
                  >
                    {l.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            )}
          </header>

          <Section title="The problem">
            <p className="text-base leading-relaxed text-[color:var(--foreground)]/85">
              {detail.problem}
            </p>
          </Section>

          <Section title="What I built">
            <ul className="space-y-3">
              {detail.built.map((b) => (
                <li
                  key={b}
                  className="relative pl-5 text-base leading-relaxed text-[color:var(--foreground)]/85 before:absolute before:left-0 before:text-[color:var(--bullet)] before:content-['▸']"
                  style={{ ["--bullet" as string]: accent }}
                >
                  {b}
                </li>
              ))}
            </ul>
          </Section>

          {detail.animation && (
            <Section title="The core loop">
              <figure className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="w-[260px] shrink-0">
                  <PhoneFrame>
                    {/* Animated: a plain img so the animation is preserved. */}
                    <picture>
                      <source
                        srcSet={detail.animation.webp}
                        type="image/webp"
                      />
                      <img
                        src={detail.animation.gif}
                        alt={detail.animation.alt}
                        width={375}
                        height={812}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full"
                      />
                    </picture>
                  </PhoneFrame>
                </div>
                <figcaption className="max-w-md text-sm leading-relaxed text-[color:var(--muted)] md:pt-4">
                  {detail.animation.caption}
                </figcaption>
              </figure>
            </Section>
          )}

          {detail.gallery && (
            <Section title="The app" wide>
              <PhoneGallery
                intro={detail.gallery.intro}
                shots={detail.gallery.shots}
              />
            </Section>
          )}

          <Section title="Engineering notes">
            <div className="grid gap-6 md:grid-cols-2">
              {detail.notes.map((n) => (
                <div key={n.heading} className="glass rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-[color:var(--foreground)]">
                    {n.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                    {n.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {detail.diagram && (
            <Section title="Where it sits" wide>
              <PlatformDiagram
                highlight={detail.diagram.highlight}
                caption={detail.diagram.caption}
                className="mt-0"
                showTitle={false}
              />
            </Section>
          )}

          <Section title="Outcome">
            <p
              className="border-l-2 pl-4 text-lg leading-relaxed text-[color:var(--foreground)]"
              style={{ borderColor: `color-mix(in srgb, ${accent} 50%, transparent)` }}
            >
              {detail.outcome}
            </p>
          </Section>

          <div className="mt-20 border-t border-[color:var(--border)] pt-10">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              Back to all work
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  /** Media reads better wider than the prose column allows. */
  wide?: boolean;
}) {
  return (
    <section className={`mt-16 ${wide ? "lg:-mx-28 xl:-mx-40" : ""}`}>
      <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
