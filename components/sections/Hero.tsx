"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/content";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-aurora"
    >
      <div className="absolute inset-0 -z-10 opacity-80">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-[color:var(--accent)] mb-4"
        >
          {`// hello, world`}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter leading-[1.02]"
        >
          I&apos;m <span className="text-gradient">{profile.name}</span>.
          <br />
          <span className="text-[color:var(--muted)]">{profile.role}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-[color:var(--muted)]"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[#07070a] hover:bg-[color:var(--accent)]/90 transition-colors"
          >
            See my work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-6 py-3 text-sm hover:border-[color:var(--accent)]/60 hover:text-[color:var(--accent)] transition-colors"
          >
            Get in touch
          </a>
          <div className="ml-2 flex items-center gap-3">
            <a
              href={profile.socials.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-[color:var(--muted)] uppercase"
        >
          scroll
        </motion.div>
      </div>
    </section>
  );
}
