"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading index="05 — contact" title="Let's build something" />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-lg text-[color:var(--muted)] mb-10"
        >
          Open to interesting roles, freelance work, and a good conversation.
          The fastest way to reach me is email.
        </motion.p>

        <div className="flex flex-col items-center gap-6">
          <CopyEmailButton />

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 hover:border-[color:var(--accent)]/60 hover:text-[color:var(--accent)] transition-colors"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 hover:border-[color:var(--accent)]/60 hover:text-[color:var(--accent)] transition-colors"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={profile.cvHref}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-4 py-2 hover:border-[color:var(--accent)]/60 hover:text-[color:var(--accent)] transition-colors"
            >
              <Download size={16} /> CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
