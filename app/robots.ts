import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // The CV carries a phone number; keep it reachable but out of search indexes.
    rules: { userAgent: "*", allow: "/", disallow: "/cv.pdf" },
    sitemap: "https://roy-bar-dev.vercel.app/sitemap.xml",
  };
}
