"use client";

import { motion } from "framer-motion";
import type { DiagramGroup } from "@/lib/project-details";

type BoxProps = {
  x: number;
  y: number;
  w: number;
  title: string;
  sub: string;
  tone?: "own" | "third";
  group: DiagramGroup;
  dim?: boolean;
};

const H = 72;
const DIMMED = 0.28;

function Box({ x, y, w, title, sub, tone = "own", dim = false }: BoxProps) {
  const accent = tone === "own" ? "var(--accent)" : "var(--accent-2)";
  return (
    <g opacity={dim ? DIMMED : 1}>
      <rect
        x={x}
        y={y}
        width={w}
        height={H}
        rx={12}
        fill="rgba(255,255,255,0.035)"
        stroke="rgba(255,255,255,0.14)"
      />
      <rect x={x} y={y + 12} width={3} height={H - 24} rx={1.5} fill={accent} />
      <text
        x={x + 18}
        y={y + 30}
        fill="var(--foreground)"
        fontSize={14.5}
        fontWeight={600}
      >
        {title}
      </text>
      <text
        x={x + 18}
        y={y + 51}
        fill="var(--muted)"
        fontSize={11}
        className="font-mono"
      >
        {sub}
      </text>
    </g>
  );
}

function TierLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fill="var(--muted)"
      fontSize={10.5}
      letterSpacing={2.2}
      className="font-mono"
    >
      {text.toUpperCase()}
    </text>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  dim = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dim?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="rgba(34,211,238,0.45)"
      strokeWidth={1.5}
      markerEnd="url(#pd-arrow)"
      opacity={dim ? DIMMED : 1}
    />
  );
}

type Props = {
  /** When set, everything outside these columns is dimmed for context. */
  highlight?: DiagramGroup[] | null;
  /** Replaces the default explanatory paragraph. */
  caption?: string;
  className?: string;
  /** Off when the surrounding page already provides a heading. */
  showTitle?: boolean;
};

export default function PlatformDiagram({
  highlight = null,
  caption,
  className,
  showTitle = true,
}: Props) {
  const dim = (group: DiagramGroup) =>
    highlight !== null && highlight.length > 0 && !highlight.includes(group);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`glass rounded-2xl p-6 md:p-8 ${className ?? "mt-14"}`}
    >
      <figcaption className="mb-6">
        {showTitle && (
          <>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--accent)]">
              system shape
            </p>
            <h3 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
              How the pieces fit together
            </h3>
          </>
        )}
        <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
          {caption ??
            "These tools aren't separate side projects — they're one system. Each operator surface I built ships with the service endpoint behind it and the storefront that consumes it. That's the whole shape of it, drawn."}
        </p>
      </figcaption>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 920 508"
          role="img"
          aria-labelledby="pd-title pd-desc"
          className="h-auto w-full min-w-[760px]"
        >
          <title id="pd-title">
            Architecture of the multi-brand commerce platform
          </title>
          <desc id="pd-desc">
            Three React operator tools — an experiment manager, a catalog and
            pricing backoffice, and a content targeting editor — sit on top of
            three C# and .NET services: an experiments and content API, a
            products and pricing API, and a read-only variant evaluation API.
            Those feed a Next.js multi-brand storefront and a GrowthBook
            integration, with GA4, Datadog RUM and Elasticsearch collecting
            behaviour from the storefront.
          </desc>

          <defs>
            <marker
              id="pd-arrow"
              viewBox="0 0 10 10"
              refX={8}
              refY={5}
              markerWidth={5}
              markerHeight={5}
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="rgba(34,211,238,0.7)" />
            </marker>
            <marker
              id="pd-arrow-2"
              viewBox="0 0 10 10"
              refX={8}
              refY={5}
              markerWidth={5}
              markerHeight={5}
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="rgba(168,85,247,0.8)" />
            </marker>
          </defs>

          {/* Tier 1 — operator surfaces */}
          <TierLabel x={20} y={18} text="Operator surfaces · React + TypeScript + MUI" />
          <Box
            x={20}
            y={28}
            w={280}
            title="Experiment Manager"
            group="experimentation"
            dim={dim("experimentation")}
            sub="dashboard · wizard · traffic split"
          />
          <Box
            x={320}
            y={28}
            w={280}
            title="Catalog & Pricing Backoffice"
            group="catalog"
            dim={dim("catalog")}
            sub="multi-currency · draft & publish"
          />
          <Box
            x={620}
            y={28}
            w={280}
            title="Content Targeting Editor"
            group="targeting"
            dim={dim("targeting")}
            sub="audience · geo · device · variants"
          />

          {/* Tier 2 — services */}
          <TierLabel x={20} y={130} text="In-house services · C# / .NET" />
          <Arrow x1={160} y1={142} x2={160} y2={178} dim={dim("experimentation")} />
          <Arrow x1={460} y1={142} x2={460} y2={178} dim={dim("catalog")} />
          <Arrow x1={760} y1={142} x2={760} y2={178} dim={dim("targeting")} />
          <Box
            x={20}
            y={186}
            w={280}
            title="Experiments & Content API"
            group="experimentation"
            dim={dim("experimentation")}
            sub="definitions · allocation · results"
          />
          <Box
            x={320}
            y={186}
            w={280}
            title="Products & Pricing API"
            group="catalog"
            dim={dim("catalog")}
            sub="catalog · per-currency overrides"
          />
          <Box
            x={620}
            y={186}
            w={280}
            title="Variant Evaluation API"
            group="targeting"
            dim={dim("targeting")}
            sub="read-only · powers the debugger"
          />

          {/* Tier 3 — customer-facing + third party */}
          <TierLabel x={20} y={288} text="Runtime · third-party assignment + Next.js storefront" />
          <Arrow x1={140} y1={300} x2={140} y2={336} dim={dim("experimentation")} />
          <Arrow x1={460} y1={300} x2={460} y2={336} dim={dim("catalog")} />
          <Arrow x1={760} y1={300} x2={760} y2={336} dim={dim("targeting")} />
          <Box
            x={20}
            y={344}
            w={240}
            title="GrowthBook"
            group="experimentation"
            dim={dim("experimentation")}
            sub="assignment & analysis"
            tone="third"
          />
          <Box
            x={300}
            y={344}
            w={600}
            title="Multi-brand Storefront"
            group="storefront"
            dim={dim("storefront")}
            sub="8 brands · multi-market · multi-currency · server-rendered"
          />

          {/* GrowthBook hands the storefront its variant assignment */}
          <line
            x1={260}
            y1={380}
            x2={300}
            y2={380}
            stroke="rgba(168,85,247,0.6)"
            strokeWidth={1.5}
            markerEnd="url(#pd-arrow-2)"
            opacity={dim("experimentation") && dim("storefront") ? DIMMED : 1}
          />

          {/* Tier 4 — measurement */}
          <Arrow x1={600} y1={416} x2={600} y2={446} dim={dim("measurement")} />
          <g opacity={dim("measurement") ? DIMMED : 1}>
            <TierLabel x={20} y={480} text="Measurement" />
            <rect
              x={300}
              y={454}
              width={600}
              height={44}
              rx={22}
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.12)"
            />
            <text
              x={600}
              y={481}
              fill="var(--muted)"
              fontSize={11.5}
              textAnchor="middle"
              className="font-mono"
            >
              GA4 &amp; dataLayer · Datadog RUM · Elasticsearch &amp; Kibana
            </text>
          </g>
        </svg>
      </div>
    </motion.figure>
  );
}
