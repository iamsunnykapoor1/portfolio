import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiChevronRight, FiTerminal } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const titles = personalInfo.typingTitles;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDelay = 1800;

    let timer;

    if (!isDeleting && displayedText === fullText) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && displayedText === '') {
      // Switch to next word
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? fullText.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Central Radiant Glow Behind Hero Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-indigo/15 via-brand-cyan/15 to-brand-purple/15 rounded-full blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            Aspiring Software Developer & AI/ML
          </span>
        </motion.div>

        {/* Hero Greeting: Hi, I'm Sunny 👋 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading mb-4 text-white"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">Sunny</span> 👋
        </motion.h1>

        {/* Animated Typing Role Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-12 sm:h-14 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 font-mono text-lg sm:text-2xl font-semibold text-slate-200">
            <FiTerminal className="text-brand-cyan shrink-0" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-400">
              {displayedText}
            </span>
            <span className="inline-block w-2.5 h-6 bg-brand-cyan animate-pulse ml-0.5" />
          </div>
        </motion.div>

        {/* Short Introduction Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {personalInfo.bioIntro}
        </motion.p>

        {/* Two Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleScrollTo('#projects')}
            className="group relative px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-brand-indigo to-brand-purple shadow-lg shadow-indigo-600/30 overflow-hidden flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">View My Work</span>
            <FiChevronRight className="relative group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleScrollTo('#contact')}
            className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2"
          >
            <span>Contact Me</span>
            <FiMail className="text-brand-cyan" />
          </motion.button>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-brand-indigo/60 text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <FiGithub size={20} />
          </a>

          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-brand-blue/60 text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            href={`mailto:${personalInfo.socialLinks.email}`}
            aria-label="Send Email"
            className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-brand-purple/60 text-slate-400 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <FiMail size={20} />
          </a>
        </motion.div>

        {/* Scroll Indicator Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 sm:mt-20 flex justify-center"
        >
          <button
            onClick={() => handleScrollTo('#about')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors focus:outline-none"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FiArrowDown size={16} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
