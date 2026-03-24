import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ClientOnly } from "@/components/ClientOnly";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export const metadata: Metadata = {
  title: "Caner Elmas — Fullstack Developer Portfolio",
  description:
    "Caner Elmas is a fullstack developer in Germany. Explore his portfolio with projects, skills, and contact details.",
  keywords: [
    "Caner Elmas",
    "Caner Elmas Portfolio",
    "Fullstack Developer Germany",
    "React Developer Germany",
    "Next.js Developer",
    "PHP Symfony Developer",
  ],
  openGraph: {
    title: "Caner Elmas — Fullstack Developer Portfolio",
    description:
      "Caner Elmas is a fullstack developer in Germany. Explore his portfolio with projects, skills, and contact details.",
  },
  twitter: {
    title: "Caner Elmas — Fullstack Developer Portfolio",
    description:
      "Caner Elmas is a fullstack developer in Germany. Explore his portfolio with projects, skills, and contact details.",
  },
};

export default function Home() {
  return (
    <div className="relative cursor-none">
      <ClientOnly />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
