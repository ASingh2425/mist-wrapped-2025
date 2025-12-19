
import React from 'react';
import { motion } from 'framer-motion';

interface PersonalityProps {
  data: {
    ctfs: number;
    writeups: number;
    tools: number;
    description: string;
  };
}

export const PersonalitySection: React.FC<PersonalityProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-6 overflow-hidden relative">
      <div className="mb-8 md:mb-12 max-w-4xl z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#121212] text-lg md:text-3xl mb-4 md:mb-8 font-bold italic leading-tight"
        >
          "{data.description}"
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-12 z-10">
        <StatBlock value={data.ctfs} label="CTFs Attempted" />
        <StatBlock value={data.writeups} label="Writeups Published" />
        <StatBlock value={data.tools} label="Tools Explored" />
      </div>

      {/* Kinetic Background Text */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.06] select-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: i % 2 === 0 ? [-800, 800] : [800, -800] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="text-[8rem] md:text-[14rem] font-black whitespace-nowrap text-[#121212] leading-none"
          >
            VULNERABLE HACKER CTF OSINT WEB CRYPTO FORENSICS MALWARE REVERSE LINUX TOOLS
          </motion.div>
        ))}
      </div>
      
      {/* Dynamic colorful blobs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-64 md:w-96 h-64 md:h-96 bg-[#FF3131] rounded-full blur-[80px] md:blur-[100px] opacity-15"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-[#8A2BE2] rounded-full blur-[80px] md:blur-[100px] opacity-15"
      />
    </div>
  );
};

const StatBlock: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: -2 }}
    className="flex flex-col items-center bg-[#121212] p-4 md:p-6 min-w-[140px] md:min-w-[200px]"
  >
    <span className="text-[#FFFB00] text-4xl md:text-8xl font-black leading-none">{value}</span>
    <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 md:mt-4 font-bold">{label}</span>
  </motion.div>
);
