import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiSend, 
  FiGithub, 
  FiLinkedin, 
  FiMessageSquare, 
  FiUser, 
  FiCheckCircle, 
  FiArrowUpRight,
  FiMapPin
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all fields before sending.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FiMessageSquare size={12} />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple">Amazing Together 🚀</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3"
          >
            Have a question, collaboration idea, or project in mind? Reach out and I'll get back to you promptly.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contact Layout: Left Info & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">
                Contact Information
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Feel free to connect directly via email or check out my code and professional updates across my social profiles.
              </p>

              {/* Direct Cards */}
              <div className="space-y-4 pt-2">
                {/* Email Direct */}
                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-indigo/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 text-brand-cyan">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">Direct Email</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors break-all">
                        {personalInfo.socialLinks.email}
                      </p>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-slate-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* GitHub Direct */}
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-purple/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-brand-purple">
                      <FiGithub size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">GitHub Profile</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        Explore Code & Repositories
                      </p>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-slate-500 group-hover:text-brand-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* LinkedIn Direct */}
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-blue/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-brand-blue">
                      <FiLinkedin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-400">LinkedIn</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        Connect Professionally
                      </p>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-slate-500 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                </a>

                {/* Location & Phone */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2 text-slate-300">
                    <FiMapPin size={15} className="text-brand-cyan" />
                    Pune, India
                  </span>
                  <a href="tel:+917209383380" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    +91 7209383380
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 relative overflow-hidden">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form below and I'll respond as soon as possible.
              </p>

              {/* Success Notification */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-600/50 flex items-center gap-3 text-emerald-300"
                  >
                    <FiCheckCircle size={22} className="shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">Message sent successfully!</p>
                      <p className="text-xs text-emerald-400">Thank you for reaching out, Sunny will get in touch soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-red-700/50 text-red-300 text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                    />
                    <FiUser className="absolute right-3.5 top-3.5 text-slate-500" size={16} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm"
                    />
                    <FiMail className="absolute right-3.5 top-3.5 text-slate-500" size={16} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project idea, or say hello..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-indigo via-brand-purple to-pink-500 hover:from-indigo-500 hover:to-pink-600 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
