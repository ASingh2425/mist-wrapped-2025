
import React from 'react';
import { motion } from 'framer-motion';

interface CommunityProps {
  data: {
    totalMembers: number;
    activeContributors: number;
    eventsConducted: number;
  };
}

export const CommunitySection: React.FC<CommunityProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center h-full px-6 md:px-24 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-[#121212] text-2xl md:text-5xl font-black uppercase mb-8 md:mb-16"
      >
        You showed up.
      </motion.h2>

      <div className="space-y-6 md:space-y-12">
        <StatRow label="Total Members" value={data.totalMembers} color="text-[#121212]" delay={0.2} />
        <StatRow label="Active Contributors" value={data.activeContributors} color="text-[#121212]/70" delay={0.4} />
        <StatRow label="Events Conducted" value={data.eventsConducted} color="text-[#121212]/50" delay={0.6} />
      </div>

      {/* Floating dark blobs for texture */}
      <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [Math.random() * 500, Math.random() * -500],
              x: [Math.random() * 500, Math.random() * -500],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-48 md:w-64 h-48 md:h-64 bg-[#121212] rounded-full blur-3xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

const StatRow: React.FC<{ label: string; value: number | string; color: string; delay: number }> = ({ label, value, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex flex-col md:flex-row md:items-baseline md:gap-6 border-b-2 md:border-b-4 border-[#121212]/10 pb-2 md:pb-4"
  >
    <span className={`${color} text-6xl md:text-9xl font-black leading-none tracking-tighter`}>{value}</span>
    <span className="text-[#121212] text-sm md:text-2xl font-bold uppercase tracking-wider">{label}</span>
  </motion.div>
);
