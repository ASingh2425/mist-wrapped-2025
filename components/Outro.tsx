
import React from 'react';
import { motion } from 'framer-motion';

export const OutroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#8A2BE2] opacity-20 blur-[100px] md:blur-[180px] -z-10" />

      <div className="mb-12 md:mb-20 space-y-2 md:space-y-4 max-w-full">
        {['Same curiosity.', 'Sharper skills.', 'See you in 2026.'].map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
          >
            <p className={`text-[8vw] sm:text-[7vw] md:text-7xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[0.95] break-normal ${i === 1 ? 'text-[#FFFB00]' : 'text-white'}`}>
                {text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
            whileHover={{ scale: 1.05, rotate: -1, backgroundColor: '#FFFB00', color: '#121212' }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-white text-[#121212] px-8 md:px-16 py-5 md:py-8 text-lg md:text-2xl font-black uppercase rounded-none transition-colors duration-300"
        >
            <span className="relative z-10">Share Wrapped</span>
            <div className="absolute inset-0 border-2 md:border-4 border-white -m-1 md:-m-2 group-hover:m-0 transition-all duration-300" />
        </motion.button>
      </motion.div>

      <div className="mt-16 md:mt-24 flex flex-col items-center">
        <div className="w-8 md:w-12 h-0.5 md:h-1 bg-white/20 mb-6 md:mb-8" />
        <div className="text-white/40 text-[8px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.8em] px-4">
            © 2025 Manipal Information Security Team
        </div>
      </div>

      {/* Extreme corner elements - Logo as watermark */}
      <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 opacity-[0.05] select-none pointer-events-none">
        <img 
          src="https://mistmanipal.in/assets/img/logo.png" 
          alt="MIST Official Logo" 
          className="w-24 md:w-80 h-auto filter grayscale invert brightness-200"
          onError={(e) => {
            // Fallback to text if the image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      
      <div className="absolute top-4 right-4 md:top-12 md:right-12 text-white/5 font-mono text-4xl md:text-9xl font-black italic select-none">2025</div>
    </div>
  );
};
