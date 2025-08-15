"use client";
import React from "react";
import DarkVeil from "../../bg/DarkVeil/DarkVeil";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  Send,
  Download,
  ArrowDown,
  Mail,
} from "lucide-react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { TypingAnimation } from "./magicui/typing-animation";
import { motion } from "motion/react";
import { heroSlideInitial, heroSlideAnimate, heroSpring } from "@/lib/animation";

const Hero = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <DarkVeil />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
        >
          <TypingAnimation
            as="div"
            className="text-lg md:text-xl text-blue-300 mb-8 font-medium"
            duration={35}
            delay={200}
            startOnView
          >
            👋 Hey, I'm Caner
          </TypingAnimation>
          <motion.h1
            className="font-bold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
            initial={heroSlideInitial}
            whileInView={heroSlideAnimate}
            viewport={{ once: true, amount: 0.6 }}
            transition={heroSpring(0.4)}
          >
            <span className="block">Fullstack</span>
            <AnimatedGradientText
              speed={1}
              colorFrom="#0ea5e9"
              colorTo="#d946ef"
              className="block drop-shadow-[0_0_18px_rgba(14,165,233,0.18)]"
            >
              Developer
            </AnimatedGradientText>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-slate-300 mb-8"
            initial={heroSlideInitial}
            whileInView={heroSlideAnimate}
            viewport={{ once: true, amount: 0.6 }}
            transition={heroSpring(0.6)}
          >
            I'm a fullstack developer based in Germany.
            <br />
            Your ideas, our web. Let's start together.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={heroSlideInitial}
            whileInView={heroSlideAnimate}
            viewport={{ once: true, amount: 0.6 }}
            transition={heroSpring(0.8)}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-center transition-all duration-300 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef] hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-0 min-w-[11rem] sm:min-w-[12rem]"
              aria-label="Go to contact section"
            >
              <motion.span
                className="inline-flex items-center gap-2"
                initial={false}
                whileHover="hover"
              >
                <span>Get in touch</span>
                <motion.span variants={{ hover: { x: 4, rotate: 8 } }}>
                  <Mail size={18} />
                </motion.span>
              </motion.span>
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 border border-slate-700 text-slate-300 hover:border-[#0ea5e9] hover:text-[#38bdf8] backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/30 focus-visible:ring-offset-0 min-w-[11rem] sm:min-w-[12rem]"
              aria-label="Download CV as PDF"
            >
              <motion.span
                className="inline-flex items-center gap-2"
                initial={false}
                whileHover="hover"
              >
                <span>Download CV</span>
                <motion.span variants={{ hover: { x: 4, rotate: 8 } }}>
                  <Download size={18} />
                </motion.span>
              </motion.span>
            </motion.a>
          </motion.div>
          <motion.nav
            aria-label="Social links"
            className="flex gap-6 justify-center my-12"
            initial={heroSlideInitial}
            whileInView={heroSlideAnimate}
            viewport={{ once: true, amount: 0.6 }}
            transition={heroSpring(1)}
          >
            <a
              href="https://github.com/MitoruDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-slate-700 text-slate-300 hover:text-blue-400 hover:border-blue-600/50 hover:bg-blue-600/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/caner-elmas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-slate-700 text-slate-300 hover:text-blue-400 hover:border-blue-600/50 hover:bg-blue-600/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:contact@canerelmas.de"
              aria-label="Email"
              className="p-3 rounded-full border border-slate-700 text-slate-300 hover:text-blue-400 hover:border-blue-600/50 hover:bg-blue-600/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
            >
              <MailIcon size={20} />
            </a>
          </motion.nav>
        </motion.div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            type="button"
            onClick={handleScroll}
            aria-label="Scroll to next section"
            className="p-2 rounded-full border border-slate-700 text-slate-400 hover:text-[#38bdf8] hover:border-[#0ea5e9] transition-all duration-300 animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
