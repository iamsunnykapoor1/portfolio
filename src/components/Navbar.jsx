import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const scrollPosition = window.scrollY + 180;
      for (const link of navLinks) {
        const section = document.getElementById(link.href.slice(1));
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(link.href.slice(1));
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openResume = () => {
    setMobileMenuOpen(false);
    onOpenResume();
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
      isScrolled
        ? 'border-white/[0.08] bg-[#0a0908]/95 py-3 backdrop-blur-xl'
        : 'border-transparent bg-transparent py-5'
    }`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, '#home')}
          className="group flex shrink-0 items-center gap-3"
          aria-label={`${personalInfo.name}, home`}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-[#c5a770]/45 font-heading text-sm font-semibold tracking-wide text-[#dec797] transition-colors group-hover:border-[#dec797]">
            SK
          </span>
          <span className="font-heading text-base font-semibold tracking-[0.02em] text-[#f4f0e7] transition-colors group-hover:text-[#dec797] sm:text-lg">
            {personalInfo.name}
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-3 lg:flex xl:gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative py-2 text-[11px] font-medium uppercase tracking-[0.13em] transition-colors ${
                  isActive ? 'text-[#dec797]' : 'text-[#aaa69d] hover:text-[#f4f0e7]'
                }`}
              >
                {link.name}
                <span className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#c5a770] transition-transform duration-200 ${
                  isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={openResume}
            className="hidden items-center gap-2 border border-[#c5a770]/60 bg-[#c5a770] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#14120e] transition-colors hover:border-[#dec797] hover:bg-[#dec797] sm:inline-flex"
          >
            <FiFileText size={15} />
            <span>Resume</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-[#e8e2d6] transition-colors hover:border-[#c5a770]/60 hover:text-[#dec797] lg:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-x-0 top-full border-b border-white/10 bg-[#11100e]/98 px-5 pb-5 pt-3 shadow-2xl backdrop-blur-xl sm:px-8 lg:hidden"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`border-b border-white/[0.06] py-3 text-sm transition-colors ${
                      isActive ? 'text-[#dec797]' : 'text-[#aaa69d] hover:text-[#f4f0e7]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <button
                onClick={openResume}
                className="mt-4 inline-flex items-center justify-center gap-2 border border-[#c5a770]/60 bg-[#c5a770] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#14120e] transition-colors hover:bg-[#dec797] sm:hidden"
              >
                <FiFileText size={15} />
                Resume
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
