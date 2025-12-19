
import React from 'react';
import { motion } from 'framer-motion';

interface DomainProps {
  domains: string[];
}

export const DomainSection: React.FC<DomainProps> = ({ domains }) => {
  return (
    <div className="flex flex-col justify-center h-full px-6 md:px-24 text-[#121212] relative overflow-hidden">
      <div className="z-10 relative">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-7xl font-black uppercase mb-8 md:mb-16 tracking-tighter leading-tight"
        >
          Your Top <br/> <span className="text-[#8A2BE2]">Security</span> Genres
        </motion.h2>

        <div className="space-y-2 md:space-y-4 max-w-4xl">
          {domains.map((domain, index) => (
            <motion.div
              key={domain}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group flex items-center gap-4 md:gap-8 border-b border-charcoal/5 pb-2 md:pb-4"
            >
              <span className="text-2xl md:text-5xl font-black opacity-10 font-mono italic">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="transform transition-all duration-300 group-hover:translate-x-2 md:group-hover:translate-x-4">
                <span className="text-xl md:text-4xl font-black uppercase group-hover:text-[#8A2BE2] transition-colors break-words">
                  {domain}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Giant Kinetic Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 md:-right-48 opacity-[0.03] pointer-events-none select-none rotate-90 origin-center">
        <motion.div
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[15rem] md:text-[30rem] font-black uppercase whitespace-nowrap"
        >
          MASTERY SKILLS CTF OSINT WEB
        </motion.div>
      </div>

      {/* Floating abstract arcs */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 md:-bottom-64 md:-left-64 w-[300px] md:w-[600px] h-[300px] md:h-[600px] border-[30px] md:border-[60px] border-[#8A2BE2]/10 rounded-full"
      />
    </div>
  );
};
