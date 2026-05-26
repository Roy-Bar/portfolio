"use client";

import { motion } from "framer-motion";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="font-mono text-xs text-[color:var(--accent)] mb-2"
      >
        {index}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-5xl font-semibold tracking-tight text-[color:var(--foreground)]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 max-w-xl text-[color:var(--muted)]"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
