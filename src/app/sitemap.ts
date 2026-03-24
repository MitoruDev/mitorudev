import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const withBase = (path: string) => path;
  return [
    { url: withBase("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: withBase("/About"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}


