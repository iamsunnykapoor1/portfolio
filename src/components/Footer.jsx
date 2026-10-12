import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#0a0908] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">
              {personalInfo.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-xs font-mono text-slate-400">Portfolio</span>
          </div>
          <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
            © 2026 {personalInfo.name}. Built with React and passion.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-indigo/60 transition-colors"
          >
            <FiGithub size={18} />
          </a>

          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-blue/60 transition-colors"
          >
            <FiLinkedin size={18} />
          </a>

          <a
            href={`mailto:${personalInfo.socialLinks.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-brand-purple/60 transition-colors"
          >
            <FiMail size={18} />
          </a>

          {/* Scroll To Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-brand-cyan hover:bg-slate-700 transition-colors ml-2"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
