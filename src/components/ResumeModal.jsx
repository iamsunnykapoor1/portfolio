import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiFileText, FiCheck, FiExternalLink } from 'react-icons/fi';
import { personalInfo, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-brand-indigo/20 border border-brand-indigo/40 text-brand-cyan">
              <FiFileText size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                {personalInfo.name}'s Resume
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Engineering Student • Software & AI/ML
              </p>
            </div>
          </div>

          {/* Resume Summary Highlights Box */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 mb-6 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span>Education</span>
              <span className="text-brand-cyan text-right">B.Tech in CSE (CGPA: 9.28)</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span>University</span>
              <span className="text-slate-200 text-right">Bharati Vidyapeeth, Pune (2023–2027)</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span>Core Stack</span>
              <span className="text-emerald-400 text-right">Python, C, Java, SQL, Scikit-learn, NLP</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span>Leadership</span>
              <span className="text-slate-200 text-right">Co-Head CSE Dept & GFG Coordinator</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span>Contact</span>
              <span className="text-indigo-300 text-right">+91 7209383380 • Pune</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Sunny_Kapoor_Resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all"
            >
              <FiDownload size={16} />
              <span>Download PDF</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-cyan text-sm font-semibold border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <FiExternalLink size={16} />
              <span>View PDF</span>
            </a>
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
