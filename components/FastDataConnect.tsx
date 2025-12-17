import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, BarChart3, ShieldCheck, Zap, Server, Cloud, Code, Globe, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Reveal, TextReveal, BlurText } from './ui/Reveal';
import { Button } from './ui/Button';
import { CountUp } from './ui/CountUp';
import { SpotlightCard } from './ui/SpotlightCard';
import { cn } from '../utils/cn';

const services = [
  { name: "Salesforce Architecture", icon: Cloud, desc: "Optimizing CRM workflows for maximum enterprise efficiency." },
  { name: "Google Cloud Solutions", icon: Server, desc: "Scalable, resilient infrastructure for modern applications." },
  { name: "Enterprise Analytics", icon: BarChart3, desc: "Transforming big data into actionable strategic intelligence." },
  { name: "Digital Transformation", icon: Zap, desc: "Modernizing legacy systems to accelerate business agility." },
  { name: "Cloud Migration", icon: Database, desc: "Seamless, secure transition to cloud-native environments." },
  { name: "Bespoke Development", icon: Code, desc: "Tailored software solutions for unique competitive advantages." }
];

const partners = ["Verizon", "JP Morgan", "Salesforce", "Google Cloud", "Microsoft", "Oracle", "AWS", "Snowflake", "Tableau"];

// --- Visual Background Component ---
const DataFlowVisual = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       {/* Ambient Glow */}
       <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
       
       {/* Moving Data Packets */}
       {[...Array(15)].map((_, i) => (
          <motion.div
             key={i}
             className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px]"
             initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
             animate={{ 
                y: [null, Math.random() * 100 + "%"],
                x: [null, Math.random() * 100 + "%"],
                opacity: [0, 0.8, 0] 
             }}
             transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5 
             }}
          />
       ))}

       {/* Digital Grid */}
       <svg className="absolute inset-0 w-full h-full opacity-[0.05] z-0">
          <pattern id="data-grid" width="60" height="60" patternUnits="userSpaceOnUse">
             <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#data-grid)" />
       </svg>
    </div>
  )
}

// --- Melting Text Effect Component ---
const MeltingText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <div className={cn("flex flex-wrap justify-center gap-[0.25em]", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ 
            filter: "blur(10px)", 
            opacity: 0, 
            y: -15,
            scaleY: 1.5,
          }}
          whileInView={{ 
            filter: "blur(0px)", 
            opacity: 1, 
            y: 0,
            scaleY: 1,
          }}
          transition={{ 
            duration: 1, 
            delay: i * 0.05, 
            ease: "circOut"
          }}
          className="inline-block origin-top"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

interface FastDataConnectProps {
  onNavigate?: (view: 'services' | 'consultation') => void;
}

const FastDataConnect: React.FC<FastDataConnectProps> = ({ onNavigate }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-20 sm:py-32 md:py-40 bg-black relative overflow-hidden">
        {/* Dynamic Background */}
        <DataFlowVisual />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Cinematic Header Section */}
            <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-24 md:mb-32 px-2">
                 <Reveal width="100%" direction="down">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 md:mb-10 shadow-sm">
                        <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                        <span>Enterprise Grade Solutions</span>
                    </div>
                 </Reveal>
                 
                 <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-6 sm:mb-8 md:mb-10 tracking-tighter leading-[1.05] font-display">
                    <TextReveal text="Architecting" className="block" delay={0.1} />
                    <span className="block mt-1 sm:mt-2">
                       <TextReveal text="Tomorrow" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300" delay={0.4} />
                    </span>
                 </h2>

                 <Reveal delay={0.6} width="100%">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto antialiased">
                       <BlurText text="Decades of enterprise leadership distilled into a singular vision: to dismantle technological complexity and empower business agility." />
                    </p>
                 </Reveal>
            </div>

            {/* Feature Section: Intro Card + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 mb-20 sm:mb-32 md:mb-40 items-center">
                {/* Left: The "Card" - Apple Style */}
                <Reveal width="100%" className="perspective-1000">
                    <SpotlightCard 
                        spotlightColor="rgba(6, 182, 212, 0.2)"
                        className="bg-[#0a0a0a] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 shadow-2xl border border-white/10 overflow-hidden relative group min-h-[400px] sm:min-h-[500px] md:min-h-[550px] flex flex-col justify-between transform transition-all duration-700 hover:scale-[1.02]"
                    >
                        {/* Background Effects */}
                         <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-blue-900/10" />
                        </div>

                        {/* Scan Line Effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 animate-[scan_4s_ease-in-out_infinite]" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
                                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                                    <Database className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                    <span>Fast Data Connect</span>
                                </div>
                                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all duration-300">
                                   <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] font-display">
                                Digital <br/> Transformation <span className="text-cyan-400">Redefined</span>
                            </h3>
                            
                            <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light">
                                Born from the intersection of enterprise demand and technological capability. We do not just implement software; we engineer competitive advantage for forward-thinking organizations.
                            </p>

                            <Button onClick={() => window.open('https://fastdataconnect.com/', '_blank')} variant="primary" className="w-full md:w-auto font-bold text-sm sm:text-base">
                                Visit Fast Data Connect
                            </Button>
                        </div>
                    </SpotlightCard>
                </Reveal>

                 {/* Right: 3D Floating Stats (Digital Backbone Visual) */}
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center hidden lg:flex perspective-1000">
                     {/* Interactive SVG Network Background */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <motion.circle cx="300" cy="300" r="150" stroke="url(#lineGrad)" strokeWidth="1" fill="none" 
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.4"
                        />
                         <motion.circle cx="300" cy="300" r="250" stroke="url(#lineGrad)" strokeWidth="1" fill="none" strokeDasharray="4 8"
                            animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} opacity="0.3"
                        />
                     </svg>

                     {/* Stats Cards - Floating in 3D */}
                     <motion.div 
                        initial={{ y: 80, opacity: 0, rotateX: 5 }}
                        whileInView={{ y: -130, x: 140, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="absolute bg-[#0a0a0a]/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 z-20 w-48"
                     >
                         <div className="text-xs text-slate-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                             <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Uptime
                         </div>
                         <div className="text-3xl font-bold text-white font-display"><CountUp end={99.9} suffix="%" /></div>
                     </motion.div>

                     <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute z-30"
                     >
                         <div className="relative bg-[#0a0a0a] p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/30 border border-slate-700/50 w-72 text-center group overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                             <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 animate-pulse-slow relative z-10">
                                 <Database className="w-8 h-8 text-white" />
                             </div>
                             <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2 relative z-10">Daily Data Volume</div>
                             <div className="text-5xl font-bold text-white font-display relative z-10"><CountUp end={2.5} suffix="TB+" /></div>
                         </div>
                     </motion.div>

                     <motion.div 
                        initial={{ y: 80, opacity: 0, rotateX: 5 }}
                        whileInView={{ y: 130, x: -140, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.3, type: "spring" }}
                        className="absolute bg-[#0a0a0a]/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 z-20 w-52"
                     >
                         <div className="text-xs text-slate-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                             <Globe className="w-3 h-3 text-blue-500" /> Projects
                         </div>
                         <div className="text-3xl font-bold text-white font-display"><CountUp end={100} suffix="+" /></div>
                     </motion.div>
                </div>
            </div>

            {/* Core Services Grid */}
            <div className="max-w-7xl mx-auto mb-20 sm:mb-32 md:mb-40">
                <Reveal width="100%" className="mb-10 sm:mb-12 md:mb-16 text-center">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display px-2">Core Services</h3>
                     <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-blue-600 mx-auto mt-4 sm:mt-6 rounded-full" />
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {services.map((service, i) => (
                        <Reveal key={i} delay={i * 0.1} width="100%" className="h-full">
                            <SpotlightCard 
                                spotlightColor="rgba(59, 130, 246, 0.15)"
                                className="flex flex-col h-full p-6 sm:p-7 md:p-8 bg-[#0a0a0a] rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] border border-white/10 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-blue-900/20 to-transparent rounded-bl-full -mr-6 sm:-mr-7 md:-mr-8 -mt-6 sm:-mt-7 md:-mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                
                                <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 mb-4 sm:mb-5 md:mb-6 shadow-sm group-hover:shadow-lg relative z-10">
                                    <service.icon className="w-6 h-6 sm:w-6.5 sm:h-6.5 md:w-7 md:h-7" />
                                </div>
                                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors relative z-10">{service.name}</h4>
                                <p className="text-slate-400 leading-relaxed text-xs sm:text-sm font-medium relative z-10">{service.desc}</p>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Partners Infinite Marquee */}
            <div className="mb-20 sm:mb-32 md:mb-40">
                 <div className="text-center mb-8 sm:mb-10 md:mb-12">
                     <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">Trusted Partners</span>
                 </div>
                 
                 <div className="relative w-full overflow-hidden py-6 sm:py-8 md:py-10 bg-black border-y border-white/10">
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />
                    
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {[...partners, ...partners, ...partners].map((partner, i) => (
                            <div key={i} className="mx-6 sm:mx-8 md:mx-12 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display">
                                    {partner}
                                </span>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Vision Statement - ENHANCED MISSION BOX */}
            <div className="max-w-5xl mx-auto mb-20 sm:mb-32 md:mb-40 px-4 sm:px-6">
                 <Reveal width="100%">
                     <div className="relative bg-black p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden text-center group">
                        {/* Deep Dark Glossy Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                            {/* Animated Pill Badge */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 sm:mb-10 md:mb-12"
                            >
                                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white" />
                                <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.2em]">The Mission</span>
                            </motion.div>
                            
                            <Quote className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white/20 mb-6 sm:mb-8 md:mb-10 rotate-180" />
                            
                            {/* Mission Text */}
                            <div className="mb-10 sm:mb-12 md:mb-14 max-w-4xl mx-auto px-2">
                                <MeltingText 
                                    text="Technology is the lever; human potential is the force. Our mission is to democratize enterprise-grade intelligence for the modern business." 
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-medium leading-tight text-white"
                                />
                            </div>
                            
                            {/* Signature Footer */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="flex flex-col items-center gap-2 sm:gap-3"
                            >
                                <div className="text-2xl sm:text-3xl text-white font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>Mike Agar</div>
                                <div className="w-10 sm:w-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-[0.25em]">Founder & CEO</div>
                            </motion.div>
                        </div>
                     </div>
                 </Reveal>
            </div>

            {/* CTA Box */}
             <Reveal width="100%" direction="up">
                 <div className="max-w-6xl mx-auto px-4 sm:px-6">
                     <div className="bg-[#0b1221] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 text-center shadow-2xl border border-white/5 relative overflow-hidden group">
                         <div className="absolute inset-0 bg-gradient-to-br from-[#0b1221] via-[#1e3a8a]/20 to-[#0b1221] z-0" />
                         <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_70%)] group-hover:scale-110 transition-transform duration-[2s]" />
                         
                         <div className="relative z-10">
                            <motion.div 
                                initial={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", duration: 1 }}
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mb-6 sm:mb-8 md:mb-10 shadow-lg shadow-blue-500/30"
                            >
                                 <Zap className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                            </motion.div>
                            
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 font-display tracking-tight px-2">Ready to Transform?</h2>
                            <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-2">
                                Let's discuss your business needs and how we can build your digital backbone together.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                                <Button onClick={() => onNavigate?.('consultation')} variant="primary" className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold w-full sm:w-auto">
                                    Schedule Consultation
                                </Button>
                                <Button onClick={() => onNavigate?.('services')} variant="outline" className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg w-full sm:w-auto">
                                    View Services
                                </Button>
                            </div>
                         </div>
                     </div>
                 </div>
             </Reveal>

        </div>
    </section>
  );
};

export default FastDataConnect;