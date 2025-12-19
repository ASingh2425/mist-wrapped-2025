
import React from 'react';
import { motion } from 'framer-motion';

interface ImpactProps {
  data: {
    workshops: number;
    recruitments: number;
    challenges: number;
    reach: string;
  };
}

export const ImpactSection: React.FC<ImpactProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-white px-6 md:px-24 text-center relative overflow-hidden">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-2xl md:text-6xl font-black uppercase mb-12 md:mb-20 leading-tight break-words"
      >
        Together, MIST <br className="hidden md:block" /> secured the year.
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-5xl relative z-10">
        <StatTile value={data.workshops} label="Workshops" />
        <StatTile value={data.recruitments} label="New Recruits" />
        <StatTile value={data.challenges} label="Challenges" />
        <StatTile value={data.reach} label="Reach" />
      </div>

      {/* Background kinetic pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/10"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatTile: React.FC<{ value: number | string; label: string }> = ({ value, label }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", damping: 15 }}
    className="flex flex-col items-center"
  >
    <span className="text-4xl md:text-7xl font-black mb-1 md:mb-2 leading-none">{value}</span>
    <span className="text-white/60 text-[10px] md:text-sm font-bold uppercase tracking-widest">{label}</span>
  </motion.div>
);
