import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiFileText, FiDownload, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for navbar styling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue/20 via-brand-indigo/30 to-brand-purple/20 border border-brand-indigo/40 group-hover:border-brand-cyan transition-colors">
              <span className="font-heading font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">
                S
              </span>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-30 blur transition-opacity" />
            </div>
            <div className="flex items-baseline">
              <span className="text-xl font-bold font-heading tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {personalInfo.name}
              </span>
              <span className="w-1.5 h-1.5 ml-1 rounded-full bg-brand-cyan animate-pulse" />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-brand-indigo/80 to-brand-purple/80 rounded-full -z-10 shadow-sm shadow-indigo-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (Resume) & Hamburger */}
          <div className="flex items-center gap-3">
            {/* Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-100 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-brand-indigo/20 hover:to-brand-purple/20 border border-slate-700 hover:border-brand-indigo/60 rounded-xl transition-all shadow-sm group"
            >
              <FiFileText className="text-brand-cyan group-hover:rotate-12 transition-transform" />
              <span>Resume</span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-indigo"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a0d17]/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-indigo/30 to-brand-purple/30 text-white border border-brand-indigo/50'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-indigo to-brand-purple text-white shadow-lg shadow-indigo-600/30"
              >
                <FiFileText size={18} />
                <span>View & Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
