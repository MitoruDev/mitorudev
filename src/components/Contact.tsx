"use client";

import React from "react";
import { motion } from "motion/react";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { Mail, LinkedinIcon, Send, MessageCircle } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:elmascaner2005@gmail.com",
    icon: Mail,
    description: "Say hello",
    primary: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caner-elmas15/",
    icon: LinkedinIcon,
    description: "Connect professionally",
    primary: false,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden w-full min-h-[80vh] flex items-center py-16 md:py-24"
    >
      <BackgroundBeams
        className="z-0 pointer-events-none"
        fromColor="#0ea5e9"
        midColor="#9333ea"
        toColor="#d946ef"
        lineOpacity={0.4}
        backgroundStrokeOpacity={0.04}
        lineWidth={1.5}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 md:px-8 flex flex-col items-center">
        <motion.div
          className="text-sm sm:text-base md:text-xl text-blue-300 font-medium mb-2 md:mb-3 text-center"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Get in touch
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatedGradientText
            speed={1}
            colorFrom="#0ea5e9"
            colorTo="#d946ef"
            className="inline-block"
          >
            Let&apos;s work together
          </AnimatedGradientText>
        </motion.h2>

        <motion.div
          className="flex justify-center mb-2"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block h-[2px] w-24 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef] origin-center" />
        </motion.div>

        <motion.p
          className="text-slate-400 text-center text-base md:text-lg max-w-xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Have a project in mind or just want to say hi? I&apos;d love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl mx-auto">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.primary ? undefined : "_blank"}
                rel={item.primary ? undefined : "noopener noreferrer"}
                className={`group relative flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border transition-all duration-300 overflow-hidden min-w-0 ${
                  item.primary
                    ? "border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]"
                    : "border-slate-700/60 bg-slate-900/40 hover:border-slate-600 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-slate-900/50"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.primary && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5" />
                  </motion.div>
                )}
                <span
                  className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-xl ${
                    item.primary
                      ? "bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 text-cyan-300 group-hover:text-cyan-200"
                      : "bg-slate-800/80 text-slate-300 group-hover:text-white"
                  }`}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <div className="relative z-10 text-center">
                  <span className="block font-semibold text-white text-lg">{item.label}</span>
                  <span className="block text-sm text-slate-400 mt-0.5">{item.description}</span>
                </div>
                {item.primary && (
                  <span className="relative z-10 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    <Send size={14} />
                    Send a message
                  </span>
                )}
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-12 md:mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <MessageCircle size={16} />
            I typically reply within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
