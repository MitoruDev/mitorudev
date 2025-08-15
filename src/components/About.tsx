"use client";
import React from "react";
import { motion } from "motion/react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const About = () => {
  return (
    <div id="about" className="relative scroll-mt-20 md:scroll-mt-0 overflow-visible flex flex-col md:flex-row w-full min-h-screen px-6 md:px-12 lg:px-20 py-12 md:py-0">
      <BackgroundBeams
        className="z-0 pointer-events-none"
        fromColor="#a855f7"
        midColor="#9333ea"
        toColor="#d946ef"
        lineOpacity={0.5}
        backgroundStrokeOpacity={0.05}
        lineWidth={2}
      />
      <motion.div
        className="relative z-10 overflow-visible w-full md:w-1/2 h-40 sm:h-56 md:h-auto mb-8 md:mb-0 flex items-center justify-center transform-gpu will-change-[transform,filter,opacity]"
        initial={{ opacity: 0, y: 16, scale: 0.985, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedTooltip
          items={[
            {
              id: 1,
              name: "Caner Elmas",
              designation: "Fullstack Developer",
              image: "/pfp.png",
            },
          ]}
          imageClassName="h-40 w-40 sm:h-48 sm:w-48 md:h-64 md:w-64 ring-2 ring-purple-500 shadow-lg"
        />
      </motion.div>
      <motion.div
        className="relative z-10 w-full md:w-1/2 h-auto transform-gpu will-change-[transform,opacity]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="flex flex-col justify-center h-full"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.075, delayChildren: 0.08 } } }}
        >
          <motion.div className="text-sm sm:text-base md:text-xl text-blue-300 font-medium mb-3 md:mb-4" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            About me
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
              Hello, I'm{" "}
              <AnimatedGradientText speed={1} colorFrom="#0ea5e9" colorTo="#d946ef">
                Caner Elmas
              </AnimatedGradientText>
            </h1>
          </motion.div>
          <motion.div className="mt-3 md:mt-2" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <span className="rounded-md py-1.5 px-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-200 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl">Fullstack Developer</span>
          </motion.div>
          <motion.div className="mt-6 md:mt-8 text-sm sm:text-base leading-relaxed md:leading-7" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            I am currently working with a lot of technologies that are needed to build highly functional solutions. I'm passionate about creating digital experiences that combine beautiful design with robust functionality.
          </motion.div>
          <motion.div className="mt-3 md:mt-4 text-sm sm:text-base leading-relaxed md:leading-7" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            Based in Germany, I work with clients worldwide to bring their ideas to life through modern web technologies and best practices. Let's collaborate and create something amazing together!
          </motion.div>
          <motion.div className="pt-6 md:pt-8" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 md:mb-4">Follow Me</h4>
            <div className="flex gap-3 sm:gap-4">
              <motion.a whileHover={{ y: -1 }} href="https://github.com/MitoruDev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={18} className="sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a whileHover={{ y: -1 }} href="https://www.linkedin.com/in/caner-elmas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={18} className="sm:h-5 sm:w-5" />
              </motion.a>
              <motion.a whileHover={{ y: -1 }} href="mailto:contact@caner-elmas.de" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <MailIcon size={18} className="sm:h-5 sm:w-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
