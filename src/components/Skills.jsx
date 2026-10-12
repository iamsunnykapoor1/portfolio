import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiCpu, 
  FiActivity, 
  FiTerminal, 
  FiCheckCircle, 
  FiZap 
} from 'react-icons/fi';
import { 
  SiPython, 
  SiCplusplus, 
  SiPostgresql, 
  SiGit, 
  SiGithub, 
  SiJupyter,
  SiPytorch,
  SiTensorflow
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { skillsData } from '../data/portfolioData';

// Map skills to respective specialized icons
const skillIcons = {
  "Java": <FaJava className="text-amber-400" size={20} />,
  "Python": <SiPython className="text-sky-400" size={20} />,
  "C/C++": <SiCplusplus className="text-blue-500" size={20} />,
  "SQL": <SiPostgresql className="text-cyan-400" size={20} />,
  "Data Structures & Algorithms": <FiCpu className="text-indigo-400" size={20} />,
  "Object-Oriented Programming": <FiCode className="text-purple-400" size={20} />,
  "DBMS": <SiPostgresql className="text-teal-400" size={20} />,
  "Operating Systems": <FiTerminal className="text-pink-400" size={20} />,
  "Machine Learning": <FiActivity className="text-emerald-400" size={20} />,
  "Deep Learning": <SiPytorch className="text-orange-400" size={20} />,
  "Federated Learning": <FiZap className="text-cyan-400" size={20} />,
  "Neural Networks": <SiTensorflow className="text-amber-400" size={20} />,
  "Git": <SiGit className="text-orange-500" size={20} />,
  "GitHub": <SiGithub className="text-slate-200" size={20} />,
  "VS Code": <FiTerminal className="text-sky-400" size={20} />,
  "Jupyter Notebook": <SiJupyter className="text-amber-500" size={20} />,
};

const categoryIcons = {
  "Programming": <FiCode className="text-brand-cyan" size={22} />,
  "Core Computer Science": <FiCpu className="text-brand-indigo" size={22} />,
  "Machine Learning & Data": <FiActivity className="text-brand-purple" size={22} />,
  "Visualization & Tools": <FiTerminal className="text-brand-cyan" size={22} />,
  "Tools & Environments": <FiTerminal className="text-brand-cyan" size={22} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FiZap size={12} />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">Expertise</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3"
          >
            A solid grounding in Computer Science fundamentals combined with specialized hands-on focus in AI & Machine Learning.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple mx-auto mt-4 rounded-full"
          />
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.12 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-800/80">
                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60 shadow-sm">
                  {categoryIcons[category.category] || <FiCode size={22} />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-brand-cyan transition-colors">
                    {category.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/70 border border-slate-800 hover:border-brand-indigo/40 transition-all group/item"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1 rounded-md bg-slate-800/80 shrink-0">
                        {skillIcons[skill.name] || <FiCheckCircle className="text-brand-indigo" size={16} />}
                      </div>
                      <span className="text-sm font-semibold text-slate-200 group-hover/item:text-white">
                        {skill.name}
                      </span>
                    </div>

                    {/* Highlight Badge & Subtle Indicator */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[11px]">
                      <span className="text-slate-400 font-mono">
                        {skill.highlight}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-brand-indigo/15 text-brand-cyan font-mono font-medium">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
