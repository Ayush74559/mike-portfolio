import React, { useState } from 'react';
import { ArrowUpRight, Code, Lightbulb, Rocket, X, ChevronRight, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, TextReveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { SpotlightCard } from './ui/SpotlightCard';
import { cn } from '../utils/cn';

interface Step {
  title: string;
  desc: string;
}

interface Topic {
  id: string;
  title: string;
  icon: React.ElementType;
  desc: string;
  color: string;
  accent: string;
  steps: Step[];
}

const topics: Topic[] = [
  { 
    id: 'ideation',
    title: "Ignition", 
    icon: Lightbulb, 
    desc: "Transforming abstract sparks into tangible flames.", 
    color: "rgba(251, 191, 36, 0.15)",
    accent: "#fbbf24",
    steps: [
      { title: "Strategic Discovery", desc: "Identifying core user friction points through deep market analysis and empathetic research." },
      { title: "Divergent Thinking", desc: "Unconstrained brainstorming sessions where volume precedes value, leading to breakthrough concepts." },
      { title: "Concept Validation", desc: "Rapid prototyping and rigorous user testing to validate hypotheses before a single line of code is written." }
    ]
  },
  { 
    id: 'development',
    title: "Engineering", 
    icon: Code, 
    desc: "Crafting resilient, scalable architectures.", 
    color: "rgba(59, 130, 246, 0.15)",
    accent: "#3b82f6",
    steps: [
      { title: "Architecture Design", desc: "Selecting optimal technology stacks for maximum scalability, security, and performance." },
      { title: "Iterative Sprints", desc: "Agile development cycles with continuous feedback loops to adapt to evolving requirements." },
      { title: "Precision QA", desc: "Automated testing pipelines and manual scrutiny to ensure a flawless, premium user experience." }
    ]
  },
  { 
    id: 'launch',
    title: "Velocity", 
    icon: Rocket, 
    desc: "Orchestrating market entry with impact.", 
    color: "rgba(239, 68, 68, 0.15)", // Red background glow
    accent: "#ef4444", // Red accent
    steps: [
      { title: "Go-to-Market", desc: "Defining precise positioning and messaging to penetrate the target audience effectively." },
      { title: "Soft Launch", desc: "Strategic release to limited cohorts to gather telemetry and optimize the conversion funnel." },
      { title: "Global Scale", desc: "Expanding infrastructure and marketing operations for mass adoption and high availability." }
    ]
  }
];

// --- Visual Animation Components ---

const IdeationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    {/* Background Glow - Clean, no rings */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent opacity-50" />
    
    {/* Central Core Idea - Pulsing Essence */}
    <div className="relative z-10">
       <motion.div 
         className="absolute inset-0 rounded-full bg-amber-500 blur-3xl"
         animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       />
       <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1a1500] to-[#2b2000] border border-amber-500/30 flex items-center justify-center shadow-2xl backdrop-blur-xl">
           <Lightbulb className="w-10 h-10 text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
       </div>
    </div>

    {/* Rising Sparks - Minimal */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`spark-${i}`}
        className="absolute w-0.5 h-0.5 bg-amber-200 rounded-full blur-[0.5px]"
        initial={{ y: 50, opacity: 0, scale: 0 }}
        animate={{ y: -100, opacity: [0, 1, 0], scale: 1 }}
        transition={{ duration: 3 + Math.random(), repeat: Infinity, delay: Math.random() * 2, ease: "easeOut" }}
      />
    ))}
  </div>
);

const DevelopmentVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center bg-slate-950/50">
     {/* Grid Background */}
     <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

     {/* Floating Code Blocks Stacking */}
     <div className="relative z-10 perspective-1000 transform-style-3d">
         {[0, 1, 2].map((i) => (
             <motion.div
                key={i}
                className="w-48 h-16 mb-2 rounded-xl border border-blue-500/30 bg-blue-900/20 backdrop-blur-md flex items-center gap-3 px-4 shadow-lg"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.4, duration: 0.8, ease: "backOut" }}
             >
                 <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Code className="w-4 h-4 text-blue-400" />
                 </div>
                 <div className="flex-1 space-y-2">
                     <div className="h-2 w-20 bg-blue-400/20 rounded-full" />
                     <div className="h-2 w-12 bg-blue-400/10 rounded-full" />
                 </div>
                 {/* Connection Dot */}
                 <motion.div 
                    className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.4 + 0.6 }}
                 />
             </motion.div>
         ))}
     </div>
     
     {/* Scanning Beam */}
     <motion.div 
       className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"
       animate={{ top: ["0%", "100%", "0%"] }}
       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
     />
  </div>
);

const LaunchVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#05050a]">
    {/* Velocity Tunnel / Speed Lines - Red Theme */}
    <div className="absolute inset-0 flex items-center justify-center">
       {[...Array(20)].map((_, i) => (
         <motion.div 
           key={i}
           className="absolute w-[2px] h-[100px] bg-gradient-to-b from-transparent via-red-500/50 to-transparent rounded-full"
           style={{
             left: `${Math.random() * 100}%`,
             opacity: Math.random()
           }}
           animate={{
             y: ['-100vh', '100vh']
           }}
           transition={{
             duration: Math.random() * 0.5 + 0.2,
             repeat: Infinity,
             ease: "linear",
             delay: Math.random()
           }}
         />
       ))}
    </div>

    {/* The Rocket Container */}
    <motion.div 
       className="relative z-10"
       animate={{
         y: [0, -2, 2, 0], // Engine shake
       }}
       transition={{
         duration: 0.08,
         repeat: Infinity
       }}
    >
       {/* Rocket Icon Container */}
       <div className="relative p-5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_50px_rgba(239,68,68,0.2)]">
          {/* Rotate rocket to point up (Lucide rocket points up-right 45deg) */}
          <Rocket className="w-16 h-16 text-red-500 transform -rotate-45" strokeWidth={1.5} />
       </div>
       
       {/* Main Engine Flame */}
       <motion.div
         className="absolute top-full left-1/2 -translate-x-1/2 w-6 h-24 bg-gradient-to-b from-red-500 via-orange-600 to-transparent rounded-full blur-md"
         style={{ originY: 0 }}
         animate={{
           scaleY: [0.8, 1.2, 0.8],
           opacity: [0.8, 1, 0.8]
         }}
         transition={{
           duration: 0.1,
           repeat: Infinity
         }}
       />
       
       {/* Secondary Thrust Sparks */}
       <motion.div 
         className="absolute top-full left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-600/20 rounded-full blur-xl"
         animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
         transition={{ duration: 0.2, repeat: Infinity }}
       />
    </motion.div>
    
    {/* Shockwaves/Atmosphere Re-entry effect - Red */}
    <motion.div
       className="absolute z-0 w-full h-full bg-gradient-to-t from-red-900/10 to-transparent"
       animate={{ opacity: [0.2, 0.5, 0.2] }}
       transition={{ duration: 2, repeat: Infinity }}
    />
  </div>
);

interface CreateExtraordinaryProps {
  onNavigate?: (view: 'services' | 'consultation') => void;
}

const CreateExtraordinary: React.FC<CreateExtraordinaryProps> = ({ onNavigate }) => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  return (
    <section className="py-40 bg-black relative overflow-hidden">
       {/* Cinematic Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b,transparent_70%)] opacity-40" />
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Apple-style Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-32">
          <Reveal width="100%" direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold tracking-[0.2em] uppercase mb-10 backdrop-blur-md shadow-lg">
              <Layers className="w-3 h-3 text-blue-400" />
              <span>The Process</span>
            </div>
          </Reveal>
          
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tighter leading-[1.05] font-display">
            <TextReveal text="Let's Create" delay={0.1} /> 
            <br />
            <span className="block mt-2">
              <TextReveal text="Something Extraordinary" delay={0.4} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-300 animate-gradient-x" />
            </span>
          </h2>
          
          <Reveal delay={0.6}>
            <p className="text-xl md:text-3xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto antialiased">
              Synthesizing creative intuition with engineering precision to architect the future.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {topics.map((item, i) => (
            <Reveal key={i} delay={0.8 + (i * 0.1)} direction="up" className="h-full">
              <div onClick={() => setSelectedTopic(item)} className="h-full cursor-pointer perspective-1000 group">
                <SpotlightCard
                  className={cn(
                    "h-full p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 flex flex-col relative overflow-hidden",
                    "hover:border-white/10 hover:scale-[1.02] hover:shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
                  )}
                  spotlightColor={item.color}
                >
                   {/* Card Background Glow */}
                   <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" style={{ backgroundColor: item.accent }} />

                  <div className="flex justify-between items-start mb-auto">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg bg-white/5 border border-white/5 backdrop-blur-sm"
                    >
                      <item.icon className="w-8 h-8 transition-colors duration-300 group-hover:text-white" style={{ color: item.accent }} />
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0 border border-white/10">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="mt-12">
                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-100 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-lg font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                      
                      <div className="flex items-center text-xs font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-[0.15em] border-t border-white/5 pt-6">
                        View Process <ChevronRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1.2} className="mt-24 flex justify-center">
           <Button
             onClick={() => onNavigate?.('consultation')}
             variant="primary"
             size="lg"
             className={cn(
               "bg-white text-slate-950 hover:bg-blue-50 px-12 py-5 text-lg font-bold rounded-full transition-all",
               "shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95"
             )}
           >
             Start a Project
           </Button>
        </Reveal>
      </div>

      {/* Cinematic Tutorial Modal */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTopic(null)}
              className="absolute inset-0 bg-[#000000]/90 backdrop-blur-2xl"
            />
            
            {/* Modal Container */}
            <motion.div 
              layoutId={`card-${selectedTopic.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.15 }}
              className="relative w-full max-w-6xl h-[85vh] bg-[#0b0c10] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTopic(null)}
                className={cn(
                  "absolute top-6 right-6 p-3 rounded-full bg-black/40 text-white/70 transition-colors z-30 border border-white/10 backdrop-blur-md group",
                  "hover:bg-white/10 hover:text-white"
                )}
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Left Column: Visual Animation */}
              <div className="w-full md:w-1/2 relative overflow-hidden bg-black border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center min-h-[300px]">
                {/* Visual Container */}
                <div className="absolute inset-0 w-full h-full">
                  {selectedTopic.id === 'ideation' && <IdeationVisual />}
                  {selectedTopic.id === 'development' && <DevelopmentVisual />}
                  {selectedTopic.id === 'launch' && <LaunchVisual />}
                </div>

                <div className="absolute bottom-10 left-10 right-10 z-20">
                   <h3 className="text-5xl font-bold text-white font-display mb-3 tracking-tight">{selectedTopic.title}</h3>
                   <div className="h-1.5 w-20 rounded-full" style={{ backgroundColor: selectedTopic.accent }} />
                </div>
              </div>

              {/* Right Column: Step-by-Step Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 bg-[#0b0c10] overflow-y-auto custom-scrollbar relative">
                <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-[#0b0c10] to-transparent pointer-events-none z-10" />
                
                <div className="mt-8 space-y-12 relative z-0 pb-20">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 block">Overview</span>
                    <p className="text-slate-300 text-xl leading-relaxed font-light">{selectedTopic.desc}</p>
                  </div>

                  <div className="space-y-8">
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Key Phases</span>
                    {selectedTopic.steps.map((step, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (index * 0.15), duration: 0.5 }}
                        className="group relative pl-8"
                      >
                        {/* Vertical Line */}
                        <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 group-hover:bg-white/20 transition-colors" />
                        <div 
                          className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full border border-[#0b0c10] transition-colors duration-500"
                          style={{ backgroundColor: selectedTopic.accent }}
                        />

                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-slate-400 leading-relaxed text-lg font-light">
                          {step.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10] to-transparent flex justify-between items-end">
                  <span className="text-slate-500 text-sm">Step {selectedTopic.steps.length} of {selectedTopic.steps.length}</span>
                  <Button
                    onClick={() => setSelectedTopic(null)}
                    variant="outline"
                    className={cn(
                      "border-slate-700 text-slate-300",
                      "hover:text-white hover:border-white"
                    )}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CreateExtraordinary;