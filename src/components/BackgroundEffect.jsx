import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark Ambient Gradient Layer */}
      <div className="absolute inset-0 bg-[#07090e]" />

      {/* Cyber Grid Pattern with Mask */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" 
      />

      {/* Ambient Glowing Orbs / Blobs with Smooth Motion */}
      {/* Cyan/Blue Orb (Top-Left) */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-cyan-600/15 blur-[120px] pointer-events-none"
      />

      {/* Indigo/Purple Orb (Top-Right / Center) */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 70, -40, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none"
      />

      {/* Deep Violet Orb (Bottom-Left) */}
      <motion.div
        animate={{
          x: [0, 70, -50, 0],
          y: [0, -50, 60, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[130px] pointer-events-none"
      />

      {/* Floating Micro Particles */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/40"
            style={{
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              top: `${(i * 7.5 + 4) % 95}%`,
              left: `${(i * 13.7 + 8) % 96}%`,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + (i % 5) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 4) * 1.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
