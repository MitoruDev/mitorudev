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

const siteUrl = "https://caner-elmas.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Caner Elmas — Fullstack Developer",
    template: "%s | Caner Elmas",
  },
  description:
    "Portfolio of Caner Elmas, a fullstack developer building performant, accessible web apps with TypeScript, React/Next.js, Node.js and PHP/Symfony.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Caner Elmas — Fullstack Developer",
    description:
      "Portfolio of Caner Elmas, a fullstack developer building performant, accessible web apps with TypeScript, React/Next.js, Node.js and PHP/Symfony.",
    siteName: "Caner Elmas",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Caner Elmas — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caner Elmas — Fullstack Developer",
    description:
      "Portfolio of Caner Elmas, a fullstack developer building performant, accessible web apps with TypeScript, React/Next.js, Node.js and PHP/Symfony.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000000" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
