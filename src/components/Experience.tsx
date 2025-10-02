"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'

const Experience = () => {
    const experiences = [
        {
          id: 1,
          company: 'CHECK24 Hotel Connect GmbH',
          position: 'Junior Fullstack Developer',
          duration: '2025 - Present',
          location: 'Essen, Germany',
          description: 'Leading development of enterprise-scale applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance.',
          achievements: [
            'Reduced application load time by 40% through optimization',
            'Led a team of 5 developers on major product redesign',
            'Implemented CI/CD pipeline reducing deployment time by 60%'
          ],
          technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'MongoDB'],
          website: 'https://www.check24.de'
        },
        {
          id: 2,
          company: 'Volksversand GmbH',
          position: 'Fullstack Developer Apprentice',
          duration: '2024 - 2025',
          location: 'Hagen, Germany',
          description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications. Collaborated with designers and product managers to deliver exceptional user experiences.',
          achievements: [
            'Built 15+ responsive web applications',
            'Improved customer satisfaction scores by 25%',
            'Introduced automated testing reducing bugs by 50%'
          ],
          technologies: ['PHP', 'Javascript', 'MySQL', 'Shopware 5', 'Shopware 6'],
          website: 'https://www.volksversand.de'
        },
        {
          id: 3,
          company: 'Westfalia Werkzeugcompany GmbH & Co. KG',
          position: 'Backend Developer Apprentice',
          duration: '2022 - 2024',
          location: 'Hagen, Germany',
          description: 'Focused on creating intuitive user interfaces for startup products. Worked closely with UX designers to implement pixel-perfect designs and smooth user interactions.',
          achievements: [
            'Developed mobile-first responsive designs',
            'Increased user engagement by 35%',
            'Contributed to 3 successful product launches'
          ],
          technologies: ['RPG 3', 'RPG Free', 'MySQL', 'HTML', 'CSS'],
          website: 'https://www.westfalia.de'
        }
      ]

    return (
        <section id="experience" className="relative scroll-mt-20 md:scroll-mt-0 overflow-hidden w-full py-14 md:py-20">
            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
                <motion.div
                    className="text-sm sm:text-base md:text-xl text-blue-300 font-medium mb-2 md:mb-3 text-left"
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    My Journey
                </motion.div>
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-left"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                    Work Experience
                    <motion.span
                        className="mt-2 block h-[2px] w-28 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef] origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                </motion.h2>

                <div className="relative mt-10 space-y-16">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            className={`relative flex flex-col md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-6 md:gap-8`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: (index % 3) * 0.07 }}
                        >
                            {/* Center line segment for this item only */}
                            <div className="hidden md:block pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#0ea5e9] to-[#d946ef]" />
                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef] rounded-full border-4 border-slate-950 z-10" />

                            <div className={`group relative rounded-2xl w-full md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} transform-gpu will-change-[transform,opacity,filter]`}>
                                <GlowingEffect
                                    blur={0}
                                    borderWidth={2}
                                    spread={40}
                                    glow={false}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.08}
                                    gradient={`linear-gradient(90deg, rgba(14,165,233,0.6), rgba(147,51,234,0.6), rgba(217,70,239,0.6))`}
                                />
                                <div className="relative z-10 rounded-2xl p-6 md:p-7 border border-slate-800/70 bg-slate-900/40 transition-all group-hover:border-slate-700 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-1">{experience.position}</h3>
                                            <a
                                                href={experience.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-blue-300 font-semibold hover:text-cyan-300 transition-colors"
                                                aria-label={`Visit ${experience.company} website`}
                                            >
                                                <span>{experience.company}</span>
                                                <ExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>{experience.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} />
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <span>Key Achievements</span>
                                            <span className="h-px flex-1 bg-gradient-to-r from-[#0ea5e9] to-[#d946ef]" />
                                        </div>
                                        <ul className="space-y-1">
                                            {experience.achievements.map((achievement, idx) => (
                                                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                                                    <span className="text-cyan-300 mt-1.5 flex-shrink-0">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {experience.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full border text-xs bg-slate-900/60 border-slate-700 text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {index < experiences.length - 1 && (
                                <div className="md:hidden my-4 h-px w-20 self-center bg-gradient-to-r from-[#0ea5e9] to-[#d946ef]" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience