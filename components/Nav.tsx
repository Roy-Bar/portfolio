"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/content";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[color:var(--background)]/70 backdrop-blur-md border-b border-[color:var(--border)]"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-[color:var(--foreground)]"
        >
          <span className="text-[color:var(--accent)]">{"<"}</span>
          {profile.name.toLowerCase().replace(" ", ".")}
          <span className="text-[color:var(--accent)]">{" />"}</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvHref}
              className="rounded-full border border-[color:var(--accent)]/50 px-4 py-1.5 text-[color:var(--accent)] hover:bg-[color:var(--accent)]/10 transition-colors font-mono text-xs"
            >
              CV ↓
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[color:var(--foreground)] p-2"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--background)]/95 backdrop-blur-md"
          >
            <ul className="flex flex-col px-6 py-4 gap-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.cvHref}
                  className="inline-block rounded-full border border-[color:var(--accent)]/50 px-4 py-1.5 text-[color:var(--accent)] font-mono text-xs"
                >
                  CV ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
