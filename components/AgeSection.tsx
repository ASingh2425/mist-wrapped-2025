
import React from 'react';
import { motion } from 'framer-motion';

interface AgeProps {
  data: {
    age: number;
    description: string;
  };
}

export const AgeSection: React.FC<AgeProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-[#121212] relative overflow-hidden bg-[#FDFCF0] px-6">
      {/* Background Kinetic Elements */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-electric-purple/10 rounded-full blur-[80px] md:blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="flex flex-col items-center z-10 w-full"
      >
        <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] md:tracking-[1em] mb-4 md:mb-6 bg-charcoal text-white px-4 md:px-8 py-2 text-center">
            The Result
        </span>
        
        <div className="relative group">
            {/* Number "Ghost" for motion feel */}
            <motion.span 
                animate={{ x: [-3, 3, -3], opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 0.15, repeat: Infinity }}
                className="absolute inset-0 text-[10rem] md:text-[20rem] font-black leading-none tracking-tighter text-electric-purple -translate-x-2 blur-sm select-none text-center"
            >
                {data.age}
            </motion.span>
            
            <span className="relative text-[10rem] md:text-[20rem] font-black leading-none tracking-tighter text-charcoal text-center block">
                {data.age}
            </span>
        </div>

        <p className="max-w-2xl text-center text-xl md:text-4xl font-black mt-4 md:mt-8 px-4 md:px-12 leading-tight uppercase italic break-words">
          {data.description}
        </p>
      </motion.div>

      {/* Decorative Floating Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1]
                }}
                transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-charcoal/5"
                style={{ width: `${300 + i * 150}px`, height: `${300 + i * 150}px` }}
              />
          ))}
      </div>
    </div>
  );
};
