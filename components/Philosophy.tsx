import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal, BlurText } from './ui/Reveal';

const Philosophy: React.FC = () => {
  return (
    <section className="py-48 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%" direction="up" duration={1.2}>
          <div className="glass-panel-dark max-w-5xl mx-auto rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden border border-white/5">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
            
            <Quote className="w-16 h-16 text-blue-500 mx-auto mb-10 opacity-80" />
            
            <h2 className="text-4xl md:text-6xl font-medium text-white leading-tight mb-12 tracking-tight">
              "<BlurText text="True mastery is born from obsession. Innovation is not merely a choice, but a necessity for those who lead." delay={0.2} />"
            </h2>
            
            <div className="flex items-center justify-center gap-6 opacity-60">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-500" />
              <span className="text-slate-300 tracking-[0.3em] uppercase text-sm font-bold">Philosophy</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-500" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Philosophy;