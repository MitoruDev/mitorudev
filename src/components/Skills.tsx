"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import {
  React as ReactIcon,
  Figma,
  Git,
  NodeJs,
  MongoDB,
  MySQL,
  Redis,
  Docker,
  TailwindCSS,
  FramerLight,
  ExpressJsLight,
  NextJs,
  TypeScript,
  ThreeJsLight,
  PHP,
  GitHubLight,
  GitLab,
  Bitbucket,
  Jira,
  VercelLight,
  ViteJS,
  ESLint,
  Vitest,
  Appwrite,
  SymfonyLight,
  Doctrine,
  Shopware,
  Atlassian,
  Bootstrap5,
  Elastic,
  MaterialUI,
  Postman,
  NPM,
  Slack,
  Swagger,
} from "developer-icons";
import { GlowingEffect } from "./ui/glowing-effect";
import { AnimatePresence, motion } from "framer-motion";
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          level: 95,
          description: "Language",
          icon: <ReactIcon size={28} />,
        },
        {
          name: "Next.js",
          level: 90,
          description: "Framework",
          icon: <NextJs size={28} />,
        },
        {
          name: "Vite.js",
          level: 85,
          description: "Framework",
          icon: <ViteJS size={28} />,
        },
        {
          name: "TypeScript",
          level: 88,
          description: "Language",
          icon: <TypeScript size={28} />,
        },
        {
          name: "Tailwind CSS",
          level: 92,
          description: "CSS Framework",
          icon: <TailwindCSS size={28} />,
        },
        {
          name: "Bootstrap",
          level: 80,
          description: "CSS Framework",
          icon: <Bootstrap5 size={28} />,
        },
        {
          name: "Material UI",
          level: 80,
          description: "CSS Framework",
          icon: <MaterialUI size={28} />,
        },
        {
          name: "ESLint",
          level: 85,
          description: "Linting",
          icon: <ESLint size={28} />,
        },
        {
          name: "Vitest",
          level: 85,
          description: "Testing Framework",
          icon: <Vitest size={28} />,
        },
        {
          name: "Framer Motion",
          level: 85,
          description: "Animation Library",
          icon: <FramerLight size={28} />,
        },
        {
          name: "Three.js",
          level: 75,
          description: "3D Library",
          icon: <ThreeJsLight size={28} />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Symfony",
          level: 85,
          description: "Framework",
          icon: <SymfonyLight size={28} />,
        },
        {
          name: "PHP",
          level: 90,
          description: "Language",
          icon: <PHP size={28} />,
        },
        {
          name: "Doctrine",
          level: 60,
          description: "ORM",
          icon: <Doctrine size={28} />,
        },
        {
          name: "Shopware 5",
          level: 80,
          description: "Framework",
          icon: <Shopware size={28} />,
        },
        {
          name: "Shopware 6",
          level: 80,
          description: "Framework",
          icon: <Shopware size={28} />,
        },
        {
          name: "Node.js",
          level: 90,
          description: "Language",
          icon: <NodeJs size={28} />,
        },
        {
          name: "Express.js",
          level: 88,
          description: "Framework",
          icon: <ExpressJsLight size={28} />,
        },
        {
          name: "MongoDB",
          level: 85,
          description: "Database",
          icon: <MongoDB size={28} />,
        },
        {
          name: "MySQL",
          level: 82,
          description: "Database",
          icon: <MySQL size={28} />,
        },
        {
          name: "Redis",
          level: 78,
          description: "Database",
          icon: <Redis size={28} />,
        },
        {
          name: "Appwrite",
          level: 80,
          description: "Backend as a Service",
          icon: <Appwrite size={28} />,
        },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Figma",
          level: 88,
          description: "Design Tool",
          icon: <Figma size={28} />,
        },
        {
          name: "Git",
          level: 95,
          description: "Version Control",
          icon: <Git size={28} />,
        },
        {
          name: "GitHub",
          level: 95,
          description: "Version Control",
          icon: <GitHubLight size={28} />,
        },
        {
          name: "GitLab",
          level: 90,
          description: "Version Control",
          icon: <GitLab size={28} />,
        },
        {
          name: "Bitbucket",
          level: 85,
          description: "Version Control",
          icon: <Bitbucket size={28} />,
        },
        {
          name: "Atlassian",
          level: 80,
          description: "Project Management",
          icon: <Atlassian size={28} />,
        },
        {
          name: "Jira",
          level: 80,
          description: "Project Management",
          icon: <Jira size={28} />,
        },
        {
          name: "Slack",
          level: 80,
          description: "Communication",
          icon: <Slack size={28} />,
        },
        {
          name: "Kibana",
          level: 80,
          description: "Monitoring",
          icon: <Elastic size={28} />,
        },
        {
          name: "Docker",
          level: 80,
          description: "Containerization",
          icon: <Docker size={28} />,
        },
        {
          name: "Vercel",
          level: 82,
          description: "Cloud Service",
          icon: <VercelLight size={28} />,
        },
        {
          name: "Postman",
          level: 80,
          description: "API Testing",
          icon: <Postman size={28} />,
        },
        {
          name: "Swagger",
          level: 80,
          description: "API Documentation",
          icon: <Swagger size={28} />,
        },
        {
          name: "NPM",
          level: 80,
          description: "Package Manager",
          icon: <NPM size={28} />,
        },
      ],
    },
  ];
  const [columns, setColumns] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);
  const handleCategoryClick = (idx: number) => {
    setPage(0);
    setActiveCategory(idx);
    // Smoothly bring grid into view (useful on mobile)
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) return 3; // lg
      if (w >= 640) return 2; // sm
      return 1;
    };
    const onResize = () => setColumns(compute());
    setColumns(compute());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset pagination when category or breakpoint changes
  useEffect(() => {
    setPage(0);
  }, [activeCategory, columns]);
  return (
    <div
      id="skills"
      className="relative scroll-mt-20 md:scroll-mt-0 overflow-hidden w-full py-14 md:py-20"
    >
      <BackgroundBeams
        className="z-0 pointer-events-none"
        fromColor="#a855f7"
        midColor="#9333ea"
        toColor="#d946ef"
        lineOpacity={0.5}
        backgroundStrokeOpacity={0.05}
        lineWidth={2}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8 flex flex-col gap-2">
        <motion.div
          className="text-sm sm:text-base md:text-xl text-blue-300 font-medium mb-2 md:mb-3 text-left md:text-left"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          My Expertise
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-left md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Skills & Technologies
          <motion.span
            className="mt-2 block h-[2px] w-28 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef] origin-left"
            key={`underline-${activeCategory}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.h1>
        <div className="flex flex-wrap items-center gap-3 pt-6">
          {["Frontend", "Backend", "Tools & Others"].map((label, idx) => (
            <motion.button
              key={label}
              type="button"
              onClick={() => handleCategoryClick(idx)}
              aria-pressed={activeCategory === idx}
              className={[
                "relative inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40",
                activeCategory === idx
                  ? "text-white bg-gradient-to-r from-[#0ea5e9] to-[#d946ef] hover:shadow-lg"
                  : "border border-slate-700 text-slate-300 hover:border-[#0ea5e9] hover:text-[#38bdf8]",
              ].join(" ")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {label}
              </span>
              {activeCategory === idx && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#d946ef]" />
              )}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
            key={`${activeCategory}-${
              isMounted && columns === 1
                ? Math.min(
                    page,
                    Math.ceil(
                      skillCategories[activeCategory].skills.length / 5
                    ) - 1
                  )
                : 0
            }`}
            layout
            ref={gridRef}
          >
            {(() => {
              const skills = skillCategories[activeCategory].skills;
              const isMobile = isMounted && columns === 1;
              const pageSize = 5;
              const totalPages = isMobile
                ? Math.ceil(skills.length / pageSize)
                : 1;
              const currentPage = isMobile ? Math.min(page, totalPages - 1) : 0;
              const startIdx = isMobile ? currentPage * pageSize : 0;
              const visible = isMobile
                ? skills.slice(startIdx, startIdx + pageSize)
                : skills;
              return visible.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="group relative rounded-2xl transform-gpu will-change-[transform,opacity,filter]"
                  layout
                  initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  exit={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay:
                      (index % columns) * 0.07 +
                      Math.floor(index / columns) * 0.04,
                  }}
                  whileHover={{ y: -1, scale: 1.005 }}
                >
                  <GlowingEffect
                    blur={0}
                    borderWidth={2}
                    spread={40}
                    glow={false}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.08}
                    gradient={`linear-gradient(90deg, rgba(14,165,233,0.6), rgba(147,51,234,0.6), rgba(217,70,239,0.6))`}
                  />
                  <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 px-4 py-4 transition-all group-hover:border-slate-700 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center"
                      initial={false}
                      whileHover={{ rotate: 2, scale: 1.04 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-base font-semibold text-white/90 tracking-[-0.01em]">
                        {skill.name}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ));
            })()}
          </motion.div>
        </AnimatePresence>

        {/* Mobile pagination */}
        {isMounted &&
          columns === 1 &&
          skillCategories[activeCategory].skills.length > 5 && (
          <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="p-2 rounded-full border border-slate-700 text-slate-300 hover:text-[#38bdf8] hover:border-[#0ea5e9] transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({
              length: Math.ceil(
                skillCategories[activeCategory].skills.length / 5
              ),
            }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Page ${i + 1}`}
                onClick={() => setPage(i)}
                className={[
                  "h-7 w-7 rounded-full border transition-colors",
                  i ===
                  Math.min(
                    page,
                    Math.ceil(
                      skillCategories[activeCategory].skills.length / 5
                    ) - 1
                  )
                    ? "border-[#0ea5e9] text-white bg-gradient-to-r from-[#0ea5e9]/20 to-[#d946ef]/20"
                    : "border-slate-700 text-slate-300 hover:text-[#38bdf8] hover:border-[#0ea5e9]",
                ].join(" ")}
              >
                <span className="text-[11px] leading-none align-middle">
                  {i + 1}
                </span>
              </button>
            ))}
            <button
              type="button"
              aria-label="Next"
              onClick={() =>
                setPage((p) =>
                  Math.min(
                    Math.ceil(
                      skillCategories[activeCategory].skills.length / 5
                    ) - 1,
                    p + 1
                  )
                )
              }
              className="p-2 rounded-full border border-slate-700 text-slate-300 hover:text-[#38bdf8] hover:border-[#0ea5e9] transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
