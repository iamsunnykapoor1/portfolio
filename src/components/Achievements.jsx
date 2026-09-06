import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle, FiBookOpen, FiTrendingUp, FiStar } from 'react-icons/fi';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  FiAward: <FiAward className="text-amber-400" size={24} />,
  FiCheckCircle: <FiCheckCircle className="text-emerald-400" size={24} />,
  FiBookOpen: <FiBookOpen className="text-brand-cyan" size={24} />,
  FiTrendingUp: <FiTrendingUp className="text-brand-purple" size={24} />,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FiStar size={12} />
            <span>Milestones & Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-brand-purple to-brand-cyan">Certifications</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3"
          >
            Dedicated to continuous technical growth, algorithmic rigor, and competitive problem solving.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-amber-400 via-brand-purple to-brand-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800/80 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 rounded-full blur-2xl group-hover:bg-brand-indigo/20 transition-colors pointer-events-none" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/60 shadow-sm">
                    {iconMap[item.icon] || <FiAward size={24} />}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-brand-indigo/15 text-brand-cyan border border-brand-indigo/30">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {item.date}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono text-brand-purple uppercase tracking-wider block mb-1">
                  {item.category}
                </span>

                <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-1.5 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Status footer pill */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Verified Milestone</span>
                <span className="text-brand-cyan flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Profile
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
