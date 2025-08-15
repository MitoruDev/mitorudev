"use client";
import React from "react";
import Image from "next/image";
import { Code2, User, Sparkles, Award, Briefcase, Calendar, Mail, Github, Linkedin, Activity } from "lucide-react";
import { motion } from "motion/react";

const AboutBentoPage = () => {
  const cols = 14;
  const rows = 6;
  const heat = Array.from({ length: rows * cols }, (_, i) => {
    const x = i % cols;
    const y = Math.floor(i / cols);
    const v = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin((x * 1.2 + y * 0.9) * 0.7));
    return Number(v.toFixed(2));
  });
  return (
    <div className="relative min-h-screen w-full px-6 md:px-12 lg:px-20 py-8 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-[#0ea5e9] via-[#9333ea] to-[#d946ef] bg-clip-text text-transparent">
            About
          </span>
          
        </h1>
        <p className="mt-2 text-slate-400">A modern, animated Bento grid showcasing who I am.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[12rem] md:auto-rows-[14rem] gap-3">
        {/* PFP Card */}
        <div className="group relative col-span-1 md:col-span-1 row-span-2 overflow-hidden rounded-2xl transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:shadow-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-[#a855f7] via-[#22d3ee] to-[#d946ef] opacity-30 blur-sm animate-spin" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-800/10" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-gradient-to-tr from-fuchsia-500/30 to-indigo-500/30 blur-2xl"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full overflow-hidden ring-2 ring-purple-500/40 shadow-xl">
              <Image
                src="/pfp.png"
                alt="Caner Elmas"
                fill
                sizes="(min-width: 768px) 224px, (min-width: 640px) 192px, 160px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/10" />
        </div>

        {/* Name Card */}
        <div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:shadow-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(110deg,#0ea5e933,45%,#9333ea33,55%,#d946ef33)] [background-size:200%_100%] animate-pulse" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/40 to-slate-800/10" />
          <div className="absolute top-3 right-4 z-10 hidden md:flex items-center gap-1">
            <span className="h-2 w-6 rounded-sm bg-[#0ea5e9]" />
            <span className="h-2 w-6 rounded-sm bg-[#9333ea]" />
            <span className="h-2 w-6 rounded-sm bg-[#d946ef]" />
            <span className="h-2 w-6 rounded-sm bg-[#eab308]" />
          </div>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-6 top-6 h-6 w-6 rotate-45 rounded-sm bg-gradient-to-br from-cyan-400/80 to-fuchsia-400/80"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="absolute right-10 bottom-10 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 blur-xl"
          />
          <div className="relative z-10 flex h-full flex-col items-start justify-center p-5">
            <div className="flex items-center gap-3 text-white/90">
              <Sparkles className="h-6 w-6 text-fuchsia-300" />
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0ea5e9] via-[#9333ea] to-[#d946ef] bg-clip-text text-transparent">
                Caner Elmas
              </h3>
            </div>
            <p className="mt-2 text-slate-300">Based in Germany • Building delightful web experiences</p>
          </div>
          <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/10" />
        </div>

        {/* Role Card */}
        <div className="group relative col-span-1 md:col-span-1 overflow-hidden rounded-2xl transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:shadow-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#0ea5e980,#9333ea80,#d946ef80,#0ea5e980)] opacity-20 blur-[2px] animate-spin" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 grid place-items-center"
          >
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Code2 className="h-5 w-5 text-cyan-300" />
              <span className="text-xs font-semibold tracking-wide text-white/90">
                Fullstack Developer
              </span>
            </div>
          </motion.div>
          <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/10" />
        </div>

        {/* Stats Card */}
        <div className="group relative col-span-1 md:col-span-1 overflow-hidden rounded-2xl transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:shadow-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-[radial-gradient(circle_at_30%_20%,#0ea5e950,transparent_40%),radial-gradient(circle_at_80%_70%,#d946ef50,transparent_40%)]" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/10" />
          <div className="relative z-10 grid h-full grid-cols-2 gap-2 p-4 text-white/90">
            <div className="flex flex-col items-start justify-center gap-2">
              <motion.div initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-300" />
                <span className="text-sm">3+ Years</span>
              </motion.div>
              <motion.div initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-cyan-300" />
                <span className="text-sm">20+ Projects</span>
              </motion.div>
              <motion.div initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-fuchsia-300" />
                <span className="text-sm">10+ Clients</span>
              </motion.div>
            </div>
            <div className="grid place-items-center">
              <div className="relative h-20 w-20">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(#0ea5e9_0_40%,#9333ea_40%_70%,#d946ef_70%_100%)] opacity-80" />
                <div className="absolute inset-2 rounded-full bg-slate-900/80 backdrop-blur" />
                <div className="absolute inset-0 grid place-items-center text-xs text-white/90">100%</div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/10" />
        </div>

        {/* Activity Card (GitHub-style heatmap) */}
        <div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:shadow-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-[linear-gradient(90deg,#0ea5e933,#9333ea33,#d946ef33)] [background-size:300%_100%] animate-[gradient-x_8s_ease_infinite]" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/10" />
          <div className="relative z-10 h-full p-5">
            <div className="mb-3 flex items-center gap-2">
              <Activity className="h-5 w-5 text-emerald-300" />
              <h4 className="text-lg font-semibold text-white/90">Activity</h4>
              <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/70">last 14×6</span>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent [background-size:200%_100%] animate-[gradient-x_3s_linear_infinite]" />
              <div className="grid grid-cols-14 gap-1">
                {heat.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % cols) * 0.03 + Math.floor(i / cols) * 0.02 }}
                    className="h-3 w-3 rounded-[3px] md:h-3.5 md:w-3.5"
                    style={{
                      backgroundColor: `rgba(16, 185, 129, ${v})`,
                      boxShadow: v > 0.7 ? "0 0 10px rgba(16,185,129,0.35)" : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/10" />
        </div>

        {/* Contact Card */}
        <div className="group relative col-span-1 md:col-span-1 overflow-hidden rounded-2xl transition-transform duration-300 ease-out md:hover:-translate-y-1 md:hover:shadow-2xl">
          <div className="absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_0deg_at_50%_50%,#0ea5e9,#9333ea,#d946ef,#0ea5e9)] opacity-20 blur-sm animate-spin" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/20" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-300" />
              <h4 className="text-lg font-semibold text-white/90">Get in touch</h4>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:contact@caner-elmas.de" className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">
                Email
              </a>
              <a href="https://github.com/MitoruDev" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/caner-elmas/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/10" />
        </div>
      </div>
    </div>
  );
};

export default AboutBentoPage;