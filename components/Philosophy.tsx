import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal, BlurText } from './ui/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[500px] sm:h-[600px] md:h-[800px] bg-blue-900/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse-slow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal width="100%" direction="up" duration={1.2}>
          <div className="glass-panel-dark max-w-5xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 text-center relative overflow-hidden border border-white/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
            
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-blue-500 mx-auto mb-6 sm:mb-8 md:mb-10 opacity-80" />
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight mb-8 sm:mb-10 md:mb-12 tracking-tight px-2">
              "<BlurText text="True mastery is born from obsession. Innovation is not merely a choice, but a necessity for those who lead." delay={0.2} />"
            </h2>
            
            <div className="flex items-center justify-center gap-4 sm:gap-6 opacity-60">
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent to-slate-500" />
              <span className="text-slate-300 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-bold">Philosophy</span>
              <div className="h-px w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent to-slate-500" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;