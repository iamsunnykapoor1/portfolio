import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const handleScrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-screen lg:px-12 lg:pb-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a770]/30 to-transparent" />
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:gap-20">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[#c5a770] sm:text-xs"
          >
            <span className="h-px w-8 bg-[#c5a770]" />
            COMPUTER SCIENCE & ENGINEERING
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-4xl font-heading text-[clamp(3.2rem,8.6vw,7.8rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[#f4f0e7]"
          >
            Hi, I&apos;m
            <br />
            <span className="text-[#c5a770]">Sunny Kapoor.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#c9c1b2] sm:text-xs"
          >
            <span className="border border-[#c5a770]/30 bg-[#c5a770]/[0.07] px-3 py-2 text-[#dec797]">Software Development</span>
            <span className="text-[#625e57]">•</span>
            <span>AI/ML</span>
            <span className="text-[#625e57]">•</span>
            <span>Data</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-7 max-w-2xl text-base leading-8 text-[#b8b0a2] sm:text-lg sm:leading-9"
          >
            I build practical software and AI/ML solutions with a focus on solving real-world problems and continuously improving my technical skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="group inline-flex min-h-12 items-center gap-4 bg-[#c5a770] px-5 text-sm font-semibold text-[#14120e] transition-colors hover:bg-[#dec797]"
            >
              View My Projects
              <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={17} />
            </button>
            <button
              onClick={onOpenResume}
              className="inline-flex min-h-12 items-center gap-3 border border-white/[0.14] px-5 text-sm font-medium text-[#e8e2d6] transition-colors hover:border-[#c5a770]/60 hover:text-[#dec797]"
            >
              Download Resume
              <FiArrowDownRight size={16} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="mt-10 flex items-center gap-5"
          >
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-[#9d988e] transition-colors hover:text-[#dec797]">
              <FiGithub size={18} />
            </a>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-[#9d988e] transition-colors hover:text-[#dec797]">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.socialLinks.email}`} aria-label="Send Email" className="text-[#9d988e] transition-colors hover:text-[#dec797]">
              <FiMail size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
            className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.14em] text-[#b8b0a2] sm:text-[11px]"
          >
            <span className="border border-[#c5a770]/20 bg-[#242019]/80 px-3 py-2">Computer Science & Engineering</span>
            <span className="border border-[#c5a770]/20 bg-[#242019]/80 px-3 py-2">AI/ML Projects</span>
            <span className="border border-[#c5a770]/20 bg-[#242019]/80 px-3 py-2">Python • Java • SQL</span>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative hidden min-h-[420px] items-end border-l border-[#c5a770]/20 pl-8 lg:flex xl:min-h-[500px] xl:pl-12"
          aria-label="Areas of focus"
        >
          <div className="absolute left-8 right-0 top-0 h-px bg-gradient-to-r from-[#c5a770]/40 to-transparent xl:left-12" />
          <div className="absolute right-0 top-8 h-64 w-64 rounded-full border border-[#c5a770]/10 xl:h-80 xl:w-80" />
          <div className="absolute right-8 top-16 h-48 w-48 rounded-full border border-[#c5a770]/[0.07] xl:right-12 xl:top-20 xl:h-64 xl:w-64" />
          <div className="relative z-10 w-full pb-1">
            <p className="mb-7 text-[10px] uppercase tracking-[0.24em] text-[#807b72]">Core Focus</p>
            {personalInfo.typingTitles.map((title, index) => (
              <div key={title} className="flex items-center gap-4 border-t border-white/[0.09] py-4">
                <span className="font-mono text-[10px] text-[#806c49]">0{index + 1}</span>
                <span className="font-heading text-lg font-medium text-[#d4cec1] xl:text-xl">{title}</span>
              </div>
            ))}
            <div className="mt-9 h-px w-full bg-gradient-to-r from-[#c5a770]/40 to-transparent" />
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#625e57]">{personalInfo.tagline}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
