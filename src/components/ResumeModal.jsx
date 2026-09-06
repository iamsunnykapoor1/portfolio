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
              <span>Target Role</span>
              <span className="text-brand-cyan">Software Developer / AI & ML Intern</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span>Degree</span>
              <span className="text-slate-200">B.Tech in Engineering</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              <span>Core Stack</span>
              <span className="text-slate-200">Python, Java, Deep Learning, SQL</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span>Featured Research</span>
              <span className="text-indigo-300">FedSentry (Federated Learning)</span>
            </div>
          </div>

          {/* User instructions note */}
          <p className="text-xs text-slate-400 mb-6 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 leading-relaxed">
            💡 <strong className="text-slate-200">Quick Note:</strong> To link your official PDF resume, simply place your PDF file in the <code className="text-brand-cyan font-mono">public/resume.pdf</code> folder of this project.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/resume.pdf"
              download={`${personalInfo.name}_Resume.pdf`}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all"
            >
              <FiDownload size={16} />
              <span>Download PDF Resume</span>
            </a>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
