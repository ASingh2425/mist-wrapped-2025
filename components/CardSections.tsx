
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface Vulnerability {
  title: string;
  description: string;
  color: string;
}

interface Tool {
  name: string;
  tagline: string;
  color: string;
}

const TiltCard: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ ...style, rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const VulnerabilitySection: React.FC<{ vulnerabilities: Vulnerability[] }> = ({ vulnerabilities }) => {
  return (
    <div className="flex flex-col justify-center h-full px-6 md:px-24 overflow-hidden">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-[#121212] text-3xl md:text-7xl font-black uppercase mb-8 md:mb-16 tracking-tighter leading-none break-words"
      >
        On Repeat: <br/> <span className="text-white">Vulnerabilities</span>
      </motion.h2>

      <div className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-10 md:pb-16 snap-x">
        {vulnerabilities.map((v, i) => (
          <TiltCard
            key={i}
            className="flex-shrink-0 w-[280px] md:w-[400px] bg-white p-6 md:p-10 rounded-none flex flex-col justify-between h-[450px] md:h-[550px] snap-center shadow-[-10px_10px_40px_rgba(0,0,0,0.2)] relative overflow-hidden border-l-[12px] md:border-l-[16px]"
            style={{ borderLeftColor: v.color }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none" />

            <div>
              <div className="w-full aspect-[4/3] bg-[#121212] mb-6 md:mb-10 flex items-center justify-center relative overflow-hidden group">
                <span className="text-white/5 text-6xl md:text-8xl font-black select-none">MIST</span>
              </div>
              <h3 className="text-[#121212] text-2xl md:text-4xl font-black uppercase leading-tight mb-2 md:mb-4 break-words">{v.title}</h3>
              <p className="text-[#121212]/60 text-sm md:text-lg font-bold leading-tight">{v.description}</p>
            </div>
            
            <div className="flex justify-between items-end border-t border-charcoal/10 pt-4 md:pt-6">
              <div className="flex flex-col">
                <span className="text-[#121212]/30 text-[10px] font-black uppercase tracking-widest mb-1">Status</span>
                <span className="text-lg md:text-2xl font-black uppercase italic" style={{ color: v.color }}>Exploited</span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export const ToolsSection: React.FC<{ tools: Tool[] }> = ({ tools }) => {
  return (
    <div className="flex flex-col justify-center h-full px-6 md:px-24 bg-[#121212] relative overflow-hidden">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-white text-3xl md:text-7xl font-black uppercase mb-8 md:mb-16 tracking-tighter"
      >
        Your <span className="text-electric-purple italic">Arsenal</span>
      </motion.h2>

      <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar pb-10 md:pb-12 snap-x">
        {tools.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -5 }}
            className="flex-shrink-0 w-64 md:w-80 bg-[#1A1A1A] p-6 md:p-8 border border-white/5 flex flex-col h-[400px] md:h-[480px] snap-center relative group"
          >
            <span className="absolute top-6 right-6 text-white/5 text-6xl md:text-7xl font-black italic">{(i + 1).toString().padStart(2, '0')}</span>
            
            <div className="w-full aspect-square bg-gradient-to-br from-white/5 to-transparent mb-6 md:mb-10 flex items-center justify-center overflow-hidden relative border border-white/5">
                <div className="w-16 md:w-20 h-16 md:h-20 border border-white/10 rotate-45" />
            </div>
            
            <h3 className="text-white text-2xl md:text-4xl font-black uppercase mb-1 md:mb-2 relative z-10 break-words">{t.name}</h3>
            <p className="text-white/40 text-xs md:text-base font-bold italic relative z-10">{t.tagline}</p>
            
            <div className="mt-auto h-2 md:h-3 w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full" 
                    style={{ backgroundColor: t.color }} 
                />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
