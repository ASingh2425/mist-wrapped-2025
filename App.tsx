
import React from 'react';
import { motion } from 'framer-motion';
import { wrappedData as data } from './data.ts';
import { HeroSection } from './components/Hero.tsx';
import { CommunitySection } from './components/StatsSections.tsx';
import { DomainSection } from './components/DomainSection.tsx';
import { PersonalitySection } from './components/PersonalitySection.tsx';
import { AgeSection } from './components/AgeSection.tsx';
import { VulnerabilitySection, ToolsSection } from './components/CardSections.tsx';
import { ImpactSection } from './components/ImpactSection.tsx';
import { OutroSection } from './components/Outro.tsx';

const App: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-[#121212]">
      {/* SECTION 1 - HERO */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-gradient-to-br from-[#121212] via-[#121212] to-[#8A2BE2]/20">
        <HeroSection data={data.hero} />
      </section>

      {/* SECTION 2 - COMMUNITY */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-[#00FF41]">
        <CommunitySection data={data.community} />
      </section>

      {/* SECTION 3 - DOMAINS */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-[#FDFCF0]">
        <DomainSection domains={data.topDomains} />
      </section>

      {/* SECTION 4 - PERSONALITY */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-[#FFFB00]">
        <PersonalitySection data={data.personality} />
      </section>

      {/* SECTION 5 - AGE */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-[#FDFCF0]">
        <AgeSection data={data.securityAge} />
      </section>

      {/* SECTION 6 - VULNERABILITIES */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-[#FF3131]">
        <VulnerabilitySection vulnerabilities={data.vulnerabilities} />
      </section>

      {/* SECTION 7 - TOOLS */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-[#121212]">
        <ToolsSection tools={data.tools} />
      </section>

      {/* SECTION 8 - IMPACT */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-[#8A2BE2]">
        <ImpactSection data={data.impact} />
      </section>

      {/* SECTION 9 - OUTRO */}
      <section className="h-screen w-full snap-start relative overflow-hidden bg-gradient-to-tr from-[#121212] via-[#8A2BE2] to-[#FF3131]">
        <OutroSection />
      </section>

      {/* Persistent Scroll Hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/40 text-[10px] tracking-[0.5em] uppercase font-bold"
        >
          Keep Scrolling
        </motion.div>
      </div>
    </div>
  );
};

export default App;
