import type { MetadataRoute } from "next";
import { projectDetails } from "@/lib/project-details";

const siteUrl = "https://roy-bar-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectDetails.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
