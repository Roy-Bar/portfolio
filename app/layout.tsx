import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://roy-bar-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roy Bar — Frontend & Full-Stack Developer",
    template: "%s · Roy Bar",
  },
  description:
    "Frontend & full-stack developer specializing in React, Next.js, and TypeScript. Building fast, modern web experiences.",
  keywords: [
    "Roy Bar",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Roy Bar" }],
  creator: "Roy Bar",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Roy Bar — Frontend & Full-Stack Developer",
    description:
      "Frontend & full-stack developer specializing in React, Next.js, and TypeScript.",
    siteName: "Roy Bar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy Bar — Frontend & Full-Stack Developer",
    description:
      "Frontend & full-stack developer specializing in React, Next.js, and TypeScript.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
