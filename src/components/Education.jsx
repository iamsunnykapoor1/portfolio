import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FiBookOpen size={12} />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3"
          >
            Formal undergraduate engineering foundation and core computer science studies.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Animated Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Marker Node with Pulsing Glow */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border border-brand-indigo/70 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              </div>

              {/* Education Main Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 relative overflow-hidden group">
                {/* Ambient glow accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-indigo/[0.04] rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <FiCalendar className="text-brand-indigo" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
                  {edu.degree}
                </h3>

                {/* Institution & CGPA details */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 font-medium mb-4">
                  <div className="flex items-center gap-1.5 text-brand-cyan">
                    <FiMapPin size={16} />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-mono">
                    <FiAward className="text-amber-400" size={14} />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {edu.summary}
                </p>

                {/* Key Coursework Tags */}
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <FiCheckCircle className="text-brand-indigo" /> Key Coursework & Fundamentals
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.keyCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.marksheetUrl && (
                  <a
                    href={edu.marksheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-cyan hover:text-brand-purple transition-colors"
                  >
                    <FiExternalLink size={14} />
                    View Marksheet
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
