import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)] py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[color:var(--muted)]">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name} · built with Next.js + R3F
        </p>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs hover:text-[color:var(--accent)] transition-colors"
        >
          view source ↗
        </a>
      </div>
    </footer>
  );
}
