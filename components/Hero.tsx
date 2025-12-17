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
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black flex items-center justify-center lg:justify-start">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: bgY, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Gradients to ensure text readability on the LEFT side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90" />
        
        <img
          src="/media/img/hero-mike-agar-BD3MvvMb.webp"
          alt="Founder Portrait"
          className="w-full h-full object-cover"
          style={{ objectPosition: '75% center' }}
        />
      </motion.div>

      {/* Content - Aligned Left */}
      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 h-full items-center">
        
        <motion.div 
          style={{ y: textY }}
          className="flex flex-col items-start text-left pb-20 lg:pb-0"
        >
          {/* Premium Badge */}
          <Reveal direction="down" delay={0.2} width="100%" className="flex justify-start mb-8">
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg group hover:bg-white/10 transition-colors cursor-default">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase group-hover:text-white transition-colors">Portfolio 2024</span>
             </div>
          </Reveal>

          {/* Headline - Clean Typography */}
          <div className="mb-10 relative flex flex-col items-start w-full">
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.0] font-display mb-2 lg:mb-4 text-left">
               <span className="text-white">
                 <TextReveal text="From Dehradun" delay={0.3} className="block" />
               </span>
             </h1>
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.0] font-display pb-2 text-left">
               <span className="text-white">
                 <TextReveal text="to the World" delay={0.6} className="block" />
               </span>
             </h1>
             
             {/* Subtle Glow behind text */}
             <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] -z-10 rounded-full opacity-50" />
          </div>

          {/* Description */}
          <Reveal delay={1.0} width="100%" className="flex justify-start mb-12">
            <p className="text-lg md:text-2xl text-slate-300 max-w-xl font-light leading-relaxed antialiased drop-shadow-lg text-left">
              <BlurText text="Bridging the serenity of the Himalayas with the velocity of global innovation. A narrative of rhythm, resilience, and technological mastery." />
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={1.4} direction="up" width="100%" className="flex flex-col sm:flex-row gap-5 justify-start w-full sm:w-auto">
            <Button 
              onClick={() => onNavigate?.('consultation')}
              variant="outline" 
              size="lg" 
              className="border-white/20 hover:bg-white/10 text-white backdrop-blur-sm min-w-[200px]"
              icon={<Calendar className="w-4 h-4 ml-2" />}
            >
              Schedule Consultation
            </Button>
            <Button 
              onClick={() => onNavigate?.('services')}
              variant="primary" 
              size="lg" 
              icon={<ArrowRight className="w-5 h-5 text-black" />} 
              className="min-w-[180px]"
            >
              View Services
            </Button>
          </Reveal>
        </motion.div>

        {/* Spacer for Portrait Visibility on Right */}
        <div className="hidden lg:block" />
        
      </div>

      {/* Cinematic Scroll Indicator - Fixed to Bottom Right */}
      <motion.div 
        className="absolute bottom-8 right-6 lg:bottom-12 lg:right-10 z-30 flex flex-col items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 1 }}
      >
        <span className="text-[10px] text-white/70 font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">Scroll to Explore</span>
        <div className="h-16 lg:h-20 w-[1px] bg-white/20 overflow-hidden rounded-full">
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