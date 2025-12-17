import React from 'react';
import { BookOpen, Coffee, Camera, Heart } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { InsightCard } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';

const insights: InsightCard[] = [
  {
    title: "The Perpetual Student",
    content: "Stagnation is obsolescence. Relevance requires a relentless appetite for knowledge and the humility to constantly unlearn and relearn.",
    icon: BookOpen
  },
  {
    title: "The Clarity of Stillness",
    content: "In a world of noise, silence is power. A disciplined practice of mindfulness fuels the clarity required for high-stakes decision-making.",
    icon: Coffee
  },
  {
    title: "The Lens of Detail",
    content: "Photography is the art of observation. It trains the eye to find symmetry in chaos and beauty in the overlooked details.",
    icon: Camera
  },
  {
    title: "The Legacy of Impact",
    content: "True success is not accumulated; it is shared. Mentorship is the responsibility of experience, contributing to the growth of the community.",
    icon: Heart
  }
];

const PersonalInsights: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal width="100%" className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">Beyond Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight px-2">Personal Insights</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {insights.map((card, i) => (
            <Reveal key={i} delay={i * 0.1} direction="up">
              <SpotlightCard 
                className="bg-[#0a0a0a] p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/10 h-full group"
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="flex items-start justify-between mb-6 sm:mb-8">
                  <div className="p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                    <card.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-300">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed font-normal text-sm sm:text-base md:text-lg">{card.content}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInsights;