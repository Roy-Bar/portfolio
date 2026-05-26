"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { profile } from "@/lib/content";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-3 rounded-full border border-[color:var(--accent)]/40 bg-[color:var(--accent)]/5 px-5 py-3 font-mono text-sm text-[color:var(--foreground)] hover:bg-[color:var(--accent)]/10 hover:border-[color:var(--accent)] transition-all"
    >
      <Mail size={16} className="text-[color:var(--accent)]" />
      <span>{profile.email}</span>
      <span className="ml-1 text-[color:var(--muted)] group-hover:text-[color:var(--accent)]">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  );
}
