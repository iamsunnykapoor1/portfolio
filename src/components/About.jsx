import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiGitCommit, FiUser, FiCheck } from 'react-icons/fi';
import { personalInfo, statsData } from '../data/portfolioData';

export default function About() {
  const statIcons = [
    <FiCode key="code" className="text-brand-cyan" size={24} />,
    <FiLayers key="layers" className="text-brand-indigo" size={24} />,
    <FiGitCommit key="git" className="text-brand-purple" size={24} />,
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-cyan text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FiUser size={12} />
            <span>Discover My Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">Me</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Animated Profile Avatar Placeholder Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Rotating Gradient Ring Effect */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand-cyan via-brand-indigo to-brand-purple opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />

              {/* Avatar Frame Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-900/90 border border-slate-700/80 p-3 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={
                    personalInfo.avatarUrl.startsWith('http')
                      ? personalInfo.avatarUrl
                      : `${import.meta.env.BASE_URL}${personalInfo.avatarUrl.replace(/^\//, '')}`
                  }
                  alt="Sunny Profile Avatar"
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image not found
                    e.target.src = `${import.meta.env.BASE_URL}avatar.svg`;
                  }}
                />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 inset-x-3 py-1.5 px-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-center shadow-lg">
                  <p className="text-xs font-semibold text-white tracking-wide">
                    {personalInfo.name} • Engineering Student
                  </p>
                  <p className="text-[10px] text-brand-cyan font-mono">
                    AI & ML Focus
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-slate-900/90 border border-brand-indigo/50 rounded-full text-[11px] font-mono text-indigo-300 shadow-md">
                const role = "Dev";
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Core Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4">
                Passionate about Engineering Intelligent Solutions
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                {personalInfo.aboutText}
              </p>

              {/* Focus Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Artificial Intelligence & ML",
                  "Deep Learning & Privacy",
                  "Algorithms & Data Structures",
                  "GATE Examination Preparation",
                  "Scalable Software Engineering",
                  "Core Computer Science Theory"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-300 text-sm">
                    <div className="w-5 h-5 rounded-md bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center shrink-0">
                      <FiCheck className="text-brand-cyan text-xs" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 relative overflow-hidden group"
            >
              {/* Subtle Card Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-indigo/10 rounded-full blur-2xl group-hover:bg-brand-indigo/20 transition-colors pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  {statIcons[idx % statIcons.length]}
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                  Metrics
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-1 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
                  {stat.number}
                </span>
              </div>

              <h4 className="text-base font-semibold text-slate-200 mb-1">
                {stat.label}
              </h4>

              <p className="text-xs text-slate-400 leading-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
