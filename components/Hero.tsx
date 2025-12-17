import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal, TextReveal, BlurText } from './ui/Reveal';

interface HeroProps {
  onNavigate?: (view: 'services' | 'consultation') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  
  // Parallax Animations
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] w-full overflow-hidden bg-black flex items-center justify-center lg:justify-start">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Enhanced Gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 md:via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 md:via-transparent to-transparent z-10 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10 md:hidden" />
        
        <img
          src="/images/hero-mike-agar-BD3MvvMb.webp"
          alt="Founder Portrait"
          className="w-full h-full object-cover"
          style={{ objectPosition: '75% center' }}
        />
      </motion.div>

      {/* Content - Aligned Left */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 h-full items-center">
        
        <motion.div 
          style={{ y: textY }}
          className="flex flex-col items-start text-left pb-16 sm:pb-20 lg:pb-0 px-2 sm:px-0"
        >
          {/* Premium Badge */}
          <Reveal direction="down" delay={0.2} width="100%" className="flex justify-start mb-6 sm:mb-8 w-full">
             <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg group hover:bg-white/10 transition-colors cursor-default">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-300 uppercase group-hover:text-white transition-colors">Portfolio 2024</span>
             </div>
          </Reveal>

          {/* Headline - Responsive Typography */}
          <div className="mb-6 sm:mb-8 md:mb-10 relative flex flex-col items-start w-full">
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tighter leading-[1.05] sm:leading-[1.0] font-display mb-1 sm:mb-2 lg:mb-4 text-left">
               <span className="text-white">
                 <TextReveal text="From Dehradun" delay={0.3} className="block" />
               </span>
             </h1>
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tighter leading-[1.05] sm:leading-[1.0] font-display pb-2 text-left">
               <span className="text-white">
                 <TextReveal text="to the World" delay={0.6} className="block" />
               </span>
             </h1>
             
             {/* Subtle Glow behind text */}
             <div className="absolute -inset-8 sm:-inset-10 bg-blue-500/10 blur-[80px] sm:blur-[100px] -z-10 rounded-full opacity-50" />
          </div>

          {/* Description */}
          <Reveal delay={1.0} width="100%" className="flex justify-start mb-8 sm:mb-10 md:mb-12 w-full">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-xl font-light leading-relaxed antialiased drop-shadow-lg text-left">
              <BlurText text="Bridging the serenity of the Himalayas with the velocity of global innovation. A narrative of rhythm, resilience, and technological mastery." />
            </p>
          </Reveal>

          {/* Buttons - Enhanced Mobile Layout */}
          <Reveal delay={1.4} direction="up" width="100%" className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-start w-full">
            <Button 
              onClick={() => onNavigate?.('consultation')}
              variant="outline" 
              size="lg" 
              className="border-white/20 hover:bg-white/10 text-white backdrop-blur-sm w-full sm:w-auto sm:min-w-[200px] text-sm sm:text-base"
              icon={<Calendar className="w-4 h-4 ml-2" />}
            >
              Schedule Consultation
            </Button>
            <Button 
              onClick={() => onNavigate?.('services')}
              variant="primary" 
              size="lg" 
              icon={<ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-black" />} 
              className="w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
            >
              View Services
            </Button>
          </Reveal>
        </motion.div>

        {/* Spacer for Portrait Visibility on Right */}
        <div className="hidden lg:block" />
        
      </div>

      {/* Cinematic Scroll Indicator - Responsive Positioning */}
      <motion.div 
        className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 lg:bottom-12 lg:right-10 z-30 flex flex-col items-center gap-3 sm:gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 1 }}
      >
        <span className="text-[9px] sm:text-[10px] text-white/70 font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 hidden sm:block">Scroll to Explore</span>
        <div className="h-12 sm:h-16 lg:h-20 w-[1px] bg-white/20 overflow-hidden rounded-full">
             <motion.div 
               className="w-full h-1/2 bg-white"
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;