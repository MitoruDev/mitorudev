import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import About from "@/components/About";
import CircularText from "@/components/CircularText";
import Skills from "@/components/Skills";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="relative cursor-none">
      <CircularText
        text="CANERELMAS"
        spinDuration={12}
        size={100}
        fontSizeClass="text-lg"
        density={1}
        className="fixed bottom-6 right-6 z-40"
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
      <SmoothCursor />
      <ScrollToTop className="fixed bottom-13 right-12.5 z-40" />
    </div>
  );
}
