import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

const normalizeUrl = (input: string) => {
  const base = input.trim().replace(/\/$/, "");
  return /^https?:\/\//.test(base) ? base : `https://${base}`;
};

const getSiteUrl = async (): Promise<string> => {
  const headerStore = await headers();
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) return normalizeUrl(envUrl);

  const host = headerStore.get("x-forwarded-host") || headerStore.get("host");
  if (host) {
    const protocol = headerStore.get("x-forwarded-proto")?.split(",")[0] || "https";
    return `${protocol}://${host.replace(/\/$/, "")}`;
  }

  const fallback = process.env.VERCEL_URL?.trim();
  if (fallback) return normalizeUrl(fallback);

  return "https://mitoru.de";
};

const withBase = (siteUrl: string, path: string) =>
  `${normalizeUrl(siteUrl)}${path.startsWith("/") ? path : `/${path}`}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const siteUrl = await getSiteUrl();
  return [
    { url: withBase(siteUrl, "/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: withBase(siteUrl, "/About"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}


