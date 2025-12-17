import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Calendar, Mail, ArrowRight, Zap, Shield, BarChart, Cloud, Code, Database, Server, Lock, RefreshCw, Layers, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal, TextReveal } from './ui/Reveal';
import { SpotlightCard } from './ui/SpotlightCard';
import { cn } from '../utils/cn';

interface ContactServicesProps {
  initialTab: 'services' | 'consultation';
  onBack: () => void;
}

const servicesList = [
  {
    id: 'enterprise',
    title: "Enterprise Architecture",
    desc: "Designing robust, scalable systems that serve as the backbone of your digital operations.",
    icon: Database,
    features: ["System Audit", "Scalability Planning", "Security Integration"]
  },
  {
    id: 'cloud',
    title: "Cloud Solutions",
    desc: "Seamless migration and optimization for AWS, Google Cloud, and Azure environments.",
    icon: Cloud,
    features: ["Cloud Migration", "Cost Optimization", "Serverless Architecture"]
  },
  {
    id: 'data',
    title: "Data Intelligence",
    desc: "Transforming raw data into actionable insights through advanced analytics and AI.",
    icon: BarChart,
    features: ["Big Data Pipelines", "BI Dashboards", "Predictive Analytics"]
  },
  {
    id: 'dev',
    title: "Custom Development",
    desc: "Bespoke software solutions tailored to your unique business challenges.",
    icon: Code,
    features: ["Full Stack Dev", "API Integration", "Legacy Modernization"]
  },
  {
    id: 'security',
    title: "Digital Security",
    desc: "Fortifying your infrastructure against modern cyber threats.",
    icon: Shield,
    features: ["Vulnerability Assessment", "Compliance", "Identity Management"]
  },
  {
    id: 'agile',
    title: "Agile Transformation",
    desc: "Implementing methodologies that increase velocity and adaptability.",
    icon: Zap,
    features: ["Process Optimization", "Team Training", "CI/CD Implementation"]
  }
];

// --- Star Field Component ---
const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 800 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5,
      opacity: Math.random() * 0.8 + 0.1,
      speed: Math.random() * 0.05 + 0.01,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      stars.forEach(star => {
        // Update twinkle
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7; // 0.4 to 1.0 range
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.speed;
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

// --- Visual Animations for Services ---

const EnterpriseVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div 
      className="w-24 h-24 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center z-10 backdrop-blur-sm"
      animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(37,99,235,0.1)", "0 0 40px rgba(37,99,235,0.2)", "0 0 20px rgba(37,99,235,0.1)"] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <Database className="w-10 h-10 text-blue-400" />
    </motion.div>
    {[0, 90, 180, 270].map((deg, i) => (
      <motion.div
        key={i}
        className="absolute w-12 h-12 rounded-xl bg-black border border-slate-800 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          x: Math.cos(deg * Math.PI / 180) * 120,
          y: Math.sin(deg * Math.PI / 180) * 120
        }}
        transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}
      >
        <Server className="w-5 h-5 text-slate-500" />
        <div 
          className="absolute w-[120px] h-[1px] bg-gradient-to-r from-blue-900/50 to-transparent"
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: `translate(-50%, -50%) rotate(${deg + 180}deg) translateX(50%)`,
            width: '80px',
            transformOrigin: 'left center',
            zIndex: -1
          }} 
        />
      </motion.div>
    ))}
  </div>
);

const CloudVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
     {[0, 1, 2].map((i) => (
       <motion.div
         key={i}
         className="absolute rounded-full blur-3xl opacity-10"
         style={{
           background: i === 0 ? '#3b82f6' : i === 1 ? '#9333ea' : '#ec4899',
           width: 150 + i * 50,
           height: 150 + i * 50,
         }}
         animate={{ 
           x: [0, 30, -30, 0],
           y: [0, -40, 20, 0],
           scale: [1, 1.1, 0.9, 1]
         }}
         transition={{ 
           duration: 8 + i * 2, 
           repeat: Infinity, 
           ease: "easeInOut",
           delay: i * 1.5 
         }}
       />
     ))}
     <motion.div 
       className="relative z-10 w-32 h-32 bg-black border border-white/10 rounded-full flex items-center justify-center shadow-2xl"
       animate={{ y: [-10, 10, -10] }}
       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
     >
       <Cloud className="w-16 h-16 text-slate-200" />
       <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
       <motion.div 
         className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-3 bg-blue-500 rounded-full"
         animate={{ y: [0, 80], opacity: [1, 0] }}
         transition={{ duration: 1.5, repeat: Infinity }}
       />
     </motion.div>
  </div>
);

const DataVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
     <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
     <motion.div 
        className="relative z-20 w-20 h-20 bg-black rounded-full border border-cyan-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.2)]"
        animate={{ boxShadow: ["0 0 30px rgba(34,211,238,0.2)", "0 0 60px rgba(34,211,238,0.5)", "0 0 30px rgba(34,211,238,0.2)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
     >
        <BarChart className="w-8 h-8 text-cyan-400" />
     </motion.div>
     {[1, 2, 3].map((i) => (
       <motion.div
         key={i}
         className="absolute rounded-full border border-cyan-500/10"
         style={{ width: i * 110 + 60, height: i * 110 + 60 }}
         animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
         transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
       >
          <motion.div 
             className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"
          />
       </motion.div>
     ))}
     <motion.div 
        className="absolute w-[200%] h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        animate={{ rotate: [0, 180, 360], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
     />
     <motion.div 
        className="absolute w-1 h-[200%] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
        animate={{ rotate: [0, -180, -360], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
     />
  </div>
);

const DevVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="w-80 bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
      <div className="h-8 bg-[#111] flex items-center gap-2 px-3 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="p-6 space-y-3 font-mono text-sm">
        <div className="flex gap-2 opacity-80">
           <span className="text-purple-400">const</span>
           <span className="text-blue-400">vision</span>
           <span className="text-white">=</span>
           <span className="text-yellow-300">await</span>
           <span className="text-blue-300">execute()</span>;
        </div>
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            className="h-1.5 bg-slate-800 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: ["0%", "80%", "60%"] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatDelay: 1 }}
          />
        ))}
        <motion.div 
           className="w-2 h-4 bg-blue-500"
           animate={{ opacity: [1, 0] }}
           transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>
    </div>
  </div>
);

const SecurityVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div 
      className="relative z-10"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <Shield className="w-32 h-32 text-emerald-900/30 fill-black" strokeWidth={1} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Lock className="w-10 h-10 text-emerald-500" />
      </div>
    </motion.div>
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-emerald-900/30"
        style={{ width: i * 100, height: i * 100 }}
        animate={{ rotate: 360, opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 10 - i * 2, repeat: Infinity, ease: "linear" }}
      >
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full blur-[1px]" />
      </motion.div>
    ))}
    <motion.div 
      className="absolute w-40 h-40 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-full origin-bottom"
      style={{ clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const AgileVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
     <motion.div 
       className="relative w-48 h-48"
       animate={{ rotate: 360 }}
       transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
     >
       {[0, 120, 240].map((deg, i) => (
         <div 
           key={i}
           className="absolute top-0 left-0 w-full h-full"
           style={{ transform: `rotate(${deg}deg)` }}
         >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-black rounded-full border border-amber-900/30 flex items-center justify-center transform -rotate-90">
                 <RefreshCw className="w-6 h-6 text-amber-600" />
              </div>
           </div>
           <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
             <circle cx="96" cy="96" r="96" stroke="rgba(180, 83, 9, 0.2)" strokeWidth="1" fill="none" strokeDasharray="40 200" />
           </svg>
         </div>
       ))}
     </motion.div>
     <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-10 h-10 text-amber-500 fill-amber-900/20" />
        </motion.div>
     </div>
  </div>
);

const VisualContainer = ({ activeId }: { activeId: string }) => {
  return (
    <div className="w-full h-full bg-black rounded-[3rem] border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] to-black z-0" />
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="relative z-10 w-full h-full"
        >
          {activeId === 'enterprise' && <EnterpriseVisual />}
          {activeId === 'cloud' && <CloudVisual />}
          {activeId === 'data' && <DataVisual />}
          {activeId === 'dev' && <DevVisual />}
          {activeId === 'security' && <SecurityVisual />}
          {activeId === 'agile' && <AgileVisual />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const ContactServices: React.FC<ContactServicesProps> = ({ initialTab, onBack }) => {
  const [activeTab, setActiveTab] = useState<'services' | 'consultation'>(initialTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Star Field Background - Deep Space */}
      <StarField />
      
      {/* Subtle Atmosphere - Reduced opacity to make stars pop */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium tracking-wide">Back to Journey</span>
          </button>
          
          <div className="flex bg-[#111]/80 rounded-full p-1 border border-white/5 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'services' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'text-slate-500 hover:text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('consultation')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'consultation' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]' : 'text-slate-500 hover:text-white'
              }`}
            >
              Consultation
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {activeTab === 'services' ? (
          <ServicesView />
        ) : (
          <ConsultationView />
        )}
      </main>
    </div>
  );
};

const ServicesView = () => {
  const [hoveredService, setHoveredService] = useState<string>('enterprise');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1400px] mx-auto"
    >
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-white/10 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
           <Layers className="w-3 h-3" /> Expertise
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight text-white">
          <TextReveal text="Engineered for Impact" />
        </h1>
        <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
          Comprehensive technology solutions designed to propel your business forward. 
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
        <div className="lg:w-1/2 space-y-4">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              className="cursor-pointer"
            >
              <div 
                className={cn(
                  "group relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden",
                  hoveredService === service.id 
                    ? "bg-black/80 backdrop-blur-md border-white/20 shadow-2xl scale-[1.02]" 
                    : "bg-[#080808]/50 border-white/5 hover:border-white/10 hover:bg-[#0a0a0a]/80"
                )}
              >
                <div className={cn(
                  "absolute left-0 top-[56px] -translate-y-1/2 w-1.5 h-12 bg-blue-500 rounded-r-full transition-all duration-300",
                  hoveredService === service.id ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                )} />

                <div className="flex items-start gap-6 relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300",
                    hoveredService === service.id ? "bg-blue-600 text-white" : "bg-[#111] text-slate-600 border border-white/5"
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-xl font-bold mb-2 transition-colors",
                      hoveredService === service.id ? "text-white" : "text-slate-400"
                    )}>
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 group-hover:text-slate-400 transition-colors">
                      {service.desc}
                    </p>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: hoveredService === service.id ? 'auto' : 0, opacity: hoveredService === service.id ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 pt-2 border-t border-white/10">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-xs text-blue-400/80">
                            <Check className="w-3 h-3 mr-2 text-blue-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  <ArrowRight className={cn(
                    "w-5 h-5 transition-all duration-300",
                    hoveredService === service.id ? "text-white translate-x-0 opacity-100" : "text-slate-700 -translate-x-4 opacity-0"
                  )} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="sticky top-32 h-[600px]">
            <VisualContainer activeId={hoveredService} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ConsultationView = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="max-w-6xl mx-auto"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
             <Calendar className="w-3 h-3" /> Consultation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight leading-tight text-white">
            Let's Architect <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 animate-gradient-x">
              The Future
            </span>
          </h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed mb-12 max-w-lg">
            Whether you're looking to modernize legacy infrastructure or build a new digital product from scratch, 
            it starts with a conversation.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="space-y-6">
          <ContactMethod 
            icon={Calendar} 
            title="Book a Discovery Call" 
            desc="30-minute strategic session to assess your needs."
            action="Schedule Now"
            href="mailto:mike.agar@fastdataconnect.com?subject=Discovery Call Request"
          />
          <ContactMethod 
            icon={Mail} 
            title="Email Inquiries" 
            desc="Detailed technical questions or RFP submissions."
            action="mike.agar@fastdataconnect.com"
            href="mailto:mike.agar@fastdataconnect.com"
          />
          <ContactMethod 
            icon={Calendar} 
            title="Phone Consultation" 
            desc="Direct line for immediate inquiries."
            action="+1 (203) 571-7669"
            href="tel:+12035717669"
          />
        </Reveal>
      </div>

      <Reveal delay={0.4}>
        <div className="relative group">
          {/* Animated Glow Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.6rem] opacity-30 blur-lg group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
            {/* Inner Sheen */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-6 font-display">Send a Message</h3>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all placeholder:text-slate-700" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all placeholder:text-slate-700" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all placeholder:text-slate-700" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Interest</label>
                <div className="relative">
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all appearance-none cursor-pointer">
                    <option>Digital Transformation</option>
                    <option>Cloud Architecture</option>
                    <option>Custom Development</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                     <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/60 transition-all h-32 resize-none placeholder:text-slate-700" placeholder="Tell us about your project..." />
              </div>

              <Button variant="primary" className="w-full py-5 text-lg font-bold shadow-lg shadow-blue-900/20">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  </motion.div>
);

const ContactMethod = ({ icon: Icon, title, desc, action, href }: any) => {
  const Component = href ? 'a' : 'div';
  const props = href ? { href, target: href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank', rel: href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noopener noreferrer' } : {};
  
  return (
    <Component {...props} className="flex items-start gap-5 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer hover:bg-white/10">
      <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300 shadow-lg">
        <Icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-slate-400 text-sm mb-3 font-light leading-relaxed">{desc}</p>
        <div className="flex items-center text-blue-400 font-bold text-xs uppercase tracking-wider group-hover:text-blue-300">
          {action} <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Component>
  );
};