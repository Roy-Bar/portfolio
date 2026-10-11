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
    default: "Roy Bar — Solutions Engineering Team Lead",
    template: "%s · Roy Bar",
  },
  description:
    "I build the backoffice tools, pricing systems and storefronts behind eight e-commerce brands — React, Next.js, TypeScript, and the .NET services behind them.",
  keywords: [
    "Roy Bar",
    "Solutions Engineering Team Lead",
    "Engineering Team Lead",
    "Solutions Engineering",
    "Software Engineer",
    "Frontend Engineer",
    "Product Engineer",
    "Growth Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "C#",
    ".NET",
    "A/B testing",
    "Experimentation",
    "E-commerce",
    "Portfolio",
  ],
  authors: [{ name: "Roy Bar" }],
  creator: "Roy Bar",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Roy Bar — Solutions Engineering Team Lead",
    description:
      "I build the backoffice tools, pricing systems and storefronts behind eight e-commerce brands.",
    siteName: "Roy Bar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy Bar — Solutions Engineering Team Lead",
    description:
      "I build the backoffice tools, pricing systems and storefronts behind eight e-commerce brands.",
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
