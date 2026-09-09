"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Shot } from "@/lib/project-details";

/**
 * Mobile screenshots in a phone-shaped frame. The shots are 375x812 points,
 * so without a bezel a tall narrow image reads as a broken layout rather than
 * a phone. Scrolls horizontally on narrow viewports.
 */
export default function PhoneGallery({
  intro,
  shots,
}: {
  intro: string;
  shots: Shot[];
}) {
  return (
    <div>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
        {intro}
      </p>

      <ul className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 lg:grid-cols-4">
        {shots.map((shot, i) => (
          <motion.li
            key={shot.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.05 }}
            className="w-[236px] shrink-0 snap-center md:w-auto"
          >
            <figure>
              <PhoneFrame>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={750}
                  height={1624}
                  sizes="(min-width: 1024px) 240px, (min-width: 768px) 30vw, 236px"
                  className="h-auto w-full"
                />
              </PhoneFrame>
              <figcaption className="mt-4 text-xs leading-relaxed text-[color:var(--muted)]">
                {shot.caption}
              </figcaption>
            </figure>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-[color:var(--border)] bg-white/[0.04] p-2 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-black">
        {children}
      </div>
    </div>
  );
}
