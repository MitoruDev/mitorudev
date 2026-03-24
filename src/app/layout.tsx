import { headers } from "next/headers";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Caner Elmas Portfolio";

const getRequestSiteUrl = async () => {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") || headerStore.get("host") || "";
  const proto = headerStore.get("x-forwarded-proto")?.split(",")[0] ?? "https";
  return host ? `${proto}://${host}` : "";
};

const withSiteUrl = (siteUrl: string, path: string) => (siteUrl ? `${siteUrl}${path}` : path);

const buildStructuredData = (siteUrl: string) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": withSiteUrl(siteUrl, "/#website"),
      url: siteUrl || "/",
      name: siteName,
      description:
        "Portfolio of Caner Elmas, a fullstack developer in Germany specializing in React, Next.js, Node.js, and PHP/Symfony.",
      inLanguage: "en-US",
      publisher: {
        "@type": "Person",
        name: "Caner Elmas",
      },
    },
    {
      "@type": "Person",
      "@id": withSiteUrl(siteUrl, "/#person"),
      name: "Caner Elmas",
      url: siteUrl || "/",
      image: withSiteUrl(siteUrl, "/canerelmas.png"),
      jobTitle: "Fullstack Developer",
      description:
        "Caner Elmas is a fullstack developer based in Germany building performant web applications with TypeScript, React, Next.js, Node.js and PHP/Symfony.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "DE",
      },
      sameAs: ["https://www.linkedin.com/in/caner-elmas15/"],
    },
  ],
});

const buildMetadata = (siteUrl: string): Metadata => ({
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Caner Elmas — Fullstack Developer Portfolio",
    template: "%s | Caner Elmas",
  },
  description:
    "Caner Elmas is a fullstack developer based in Germany. Portfolio showcasing projects, skills, and services built with TypeScript, React, Next.js, Node.js, PHP, and Symfony.",
  keywords: [
    "Caner Elmas",
    "Caner Elmas Portfolio",
    "Caner Elmas Developer",
    "Fullstack Developer Germany",
    "Caner Elmas Website",
    "React Developer",
    "Next.js Developer",
    "PHP Symfony Developer",
  ],
  authors: [{ name: "Caner Elmas", url: siteUrl || "/" }],
  creator: "Caner Elmas",
  publisher: "Caner Elmas",
  applicationName: siteName,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl || "/",
    title: "Caner Elmas — Fullstack Developer Portfolio",
    description:
      "Caner Elmas is a fullstack developer based in Germany building performant, accessible web apps with TypeScript, React/Next.js, Node.js and PHP/Symfony.",
    siteName,
    images: [
      {
        url: "/canerelmas.png",
        width: 1200,
        height: 1200,
        alt: "Caner Elmas — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caner Elmas — Fullstack Developer Portfolio",
    description:
      "Caner Elmas is a fullstack developer based in Germany building performant, accessible web apps with TypeScript, React/Next.js, Node.js and PHP/Symfony.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getRequestSiteUrl();
  return buildMetadata(siteUrl);
}

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000000" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = await getRequestSiteUrl();
  const seoStructuredData = buildStructuredData(siteUrl);

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoStructuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
