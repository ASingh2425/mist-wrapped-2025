
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    subtext: string;
  };
}

export const HeroSection: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 md:px-12 relative z-10 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 -z-20 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #8A2BE2 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-5xl mx-auto"
      >
        <motion.h1
          className="text-white text-[9vw] sm:text-[8vw] md:text-8xl font-black mb-2 uppercase leading-[1.1] md:leading-[0.9] tracking-tighter break-normal"
        >
          {data.title}
        </motion.h1>
        <motion.h1
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#FFFB00] text-[9vw] sm:text-[8vw] md:text-8xl font-black mb-8 uppercase leading-[1.1] md:leading-[0.9] tracking-tighter block break-normal"
        >
          {data.subtitle}
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-white/40 text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[1em] uppercase bg-white/5 px-4 md:px-6 py-2 backdrop-blur-sm inline-block"
      >
        {data.subtext}
      </motion.p>

      {/* Pulsing Scanline */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-30 z-20 pointer-events-none"
      />
    </div>
  );
};
