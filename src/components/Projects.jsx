import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiExternalLink, 
  FiLayers, 
  FiShield, 
  FiDatabase, 
  FiCpu, 
  FiCheck, 
  FiArrowRight,
  FiInfo,
  FiX,
  FiZap,
  FiActivity
} from 'react-icons/fi';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FiLayers size={12} />
            <span>Featured Portfolio Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-purple to-pink-500">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3"
          >
            Practical engineering projects exploring IoT telemetry, predictive AI optimization, and real-world impact.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-pink-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl border border-slate-800/90 hover:border-brand-indigo/50 transition-all duration-500 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Card Top: Visual Banner / Architecture Preview */}
              <div className="relative h-60 sm:h-64 bg-gradient-to-br from-slate-900 via-slate-950 to-[#07090e] p-6 border-b border-slate-800/80 overflow-hidden flex flex-col justify-between">
                {/* Ambient glow accent */}
                <div 
                  className={`absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-30 pointer-events-none ${
                    project.accentColor === 'cyan'
                      ? 'bg-cyan-500'
                      : project.accentColor === 'emerald'
                      ? 'bg-emerald-500'
                      : 'bg-indigo-500'
                  }`}
                />

                {/* Top Badge & Category */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-indigo/20 border border-brand-indigo/40 text-brand-cyan tracking-wide">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Card Center Visual Art / Architecture Flow */}
                <div className="relative z-10 my-auto py-2">
                  {project.id === 'fertilizer-recommendation' ? (
                    /* Specific Pipeline Diagram for Crop Fertilizer DL Project */
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-inner">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 text-center">
                        Prediction Pipeline Workflow
                      </p>
                      <div className="flex items-center justify-between gap-1 sm:gap-2 text-center">
                        <div className="flex-1 p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                          <p className="text-[11px] font-semibold text-brand-cyan leading-tight">
                            Soil & Crop
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5">NPK & pH</p>
                        </div>
                        <FiArrowRight className="text-brand-indigo shrink-0 text-xs animate-pulse" />
                        <div className="flex-1 p-1.5 sm:p-2 rounded-lg bg-indigo-950/60 border border-indigo-700/50">
                          <p className="text-[11px] font-semibold text-indigo-300 leading-tight">
                            DL Model
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5">Pattern NN</p>
                        </div>
                        <FiArrowRight className="text-brand-purple shrink-0 text-xs animate-pulse" />
                        <div className="flex-1 p-1.5 sm:p-2 rounded-lg bg-emerald-950/60 border border-emerald-700/50">
                          <p className="text-[11px] font-semibold text-emerald-300 leading-tight">
                            Optimal Rec
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5">Dosage</p>
                        </div>
                      </div>
                    </div>
                  ) : project.id === 'ai-energy-optimizer' ? (
                    /* Specific Optimization Visual for AI Energy Optimizer */
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-inner">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 text-center">
                        Optimization Architecture
                      </p>
                      <div className="flex items-center justify-between gap-1 sm:gap-2 text-center">
                        <div className="flex-1 p-1.5 sm:p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                          <p className="text-[11px] font-semibold text-amber-400 leading-tight flex items-center justify-center gap-1">
                            <FiZap size={11} className="shrink-0" />
                            <span className="truncate">IoT & API</span>
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5 truncate">kW & Weather</p>
                        </div>
                        <FiArrowRight className="text-amber-500 shrink-0 text-xs animate-pulse" />
                        <div className="flex-1 p-1.5 sm:p-2 rounded-lg bg-emerald-950/60 border border-emerald-700/50">
                          <p className="text-[11px] font-semibold text-emerald-300 leading-tight flex items-center justify-center gap-1">
                            <FiCpu size={11} className="shrink-0" />
                            <span className="truncate">RF Model</span>
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5 truncate">Flask REST</p>
                        </div>
                        <FiArrowRight className="text-emerald-500 shrink-0 text-xs animate-pulse" />
                        <div className="flex-1 p-1.5 sm:p-2 rounded-lg bg-cyan-950/60 border border-cyan-700/50">
                          <p className="text-[11px] font-semibold text-cyan-300 leading-tight flex items-center justify-center gap-1">
                            <FiActivity size={11} className="shrink-0" />
                            <span className="truncate">Streamlit</span>
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5 truncate">Analytics</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Specific Decentralized Network Visual for FedSentry */
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 shadow-inner text-center">
                      <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
                        <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 flex items-center gap-1">
                          <FiDatabase size={13} className="text-brand-cyan shrink-0" />
                          <span className="text-[11px]">Nodes</span>
                        </div>
                        <span className="text-brand-indigo font-bold text-xs">⇄</span>
                        <div className="p-2 rounded-lg bg-indigo-950/70 border border-indigo-700/60 text-indigo-200 flex items-center gap-1 shadow-sm">
                          <FiShield size={13} className="text-brand-purple shrink-0" />
                          <span className="text-[11px]">Core</span>
                        </div>
                        <span className="text-brand-purple font-bold text-xs">⇄</span>
                        <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-300 flex items-center gap-1">
                          <FiCpu size={13} className="text-emerald-400 shrink-0" />
                          <span className="text-[11px]">Global</span>
                        </div>
                      </div>
                      <p className="text-[9px] text-slate-400 mt-2 font-mono">
                        Collaborative Intelligence without raw data exchange
                      </p>
                    </div>
                  )}
                </div>

                {/* Subtitle / Key Insight bar */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-slate-300">
                    <FiCpu className="text-brand-cyan" /> AI Architecture
                  </span>
                  <span className="text-brand-indigo group-hover:underline flex items-center gap-1 cursor-pointer" onClick={() => setSelectedProject(project)}>
                    <FiInfo size={13} /> Deep Dive
                  </span>
                </div>
              </div>

              {/* Card Bottom: Details & Action Buttons */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                        <FiCheck className="text-brand-cyan shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:border-brand-indigo/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: GitHub & Live Demo */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 transition-all shadow-sm group/btn"
                  >
                    <FiGithub size={16} className="group-hover/btn:rotate-6 transition-transform" />
                    <span>GitHub Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-indigo to-brand-purple hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20 transition-all group/btn"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-indigo/20 border border-brand-indigo/40 text-brand-cyan mb-3 inline-block">
              {selectedProject.badge}
            </span>

            <h3 className="text-2xl font-bold font-heading text-white mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              {selectedProject.detailedInfo}
            </p>

            <h4 className="text-sm font-bold font-mono text-brand-cyan uppercase tracking-wider mb-2">
              Key Engineering Aspects
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedProject.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <FiCheck className="text-brand-cyan mt-1 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700"
              >
                <FiGithub size={16} />
                <span>View on GitHub</span>
              </a>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-indigo hover:bg-indigo-500 text-white text-sm font-semibold"
              >
                <FiExternalLink size={16} />
                <span>Open Live Demo</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
