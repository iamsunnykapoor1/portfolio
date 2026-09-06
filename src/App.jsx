import React, { useState } from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 relative selection:bg-brand-indigo/30 selection:text-brand-cyan">
      {/* Dynamic Background Elements: Glowing Orbs, Grid & Floating Micro-Particles */}
      <BackgroundEffect />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Resume Preview / Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
