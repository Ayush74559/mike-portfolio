import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { MapPin, Music, Star, Heart, Plane, Briefcase, Building2, Globe } from 'lucide-react';
import { Reveal, TextReveal, BlurText } from './ui/Reveal';
import { TimelineItem } from '../types';

const timelineData: TimelineItem[] = [
  {
    year: 'Early Years',
    title: 'The Genesis: Dehradun',
    description: 'Rooted in the serenity of the Himalayas, where the quietude of nature first sparked an endless curiosity and a dream to transcend boundaries.',
    icon: MapPin,
  },
  {
    year: 'Bollywood Era',
    title: "The Melodic Breakthrough",
    description: "A voice that resonated across a nation. 'Kabhi Bhoola Kabhi Yaad Kiya' became more than a song—it became a cultural anthem in the golden era of Hindi cinema.",
    icon: Music,
  },
  {
    year: 'Behind the Scenes',
    title: 'Orchestrating Talent',
    description: 'Transitioning from center stage to the director\'s chair. Mastering the intricate business of production and artist management, understanding the industry from the inside out.',
    icon: Star,
  },
  {
    year: 'Life Lessons',
    title: 'Resilience in Adversity',
    description: 'Forged in the fire of challenge. Transforming personal setbacks into the bedrock of professional wisdom and unwavering character.',
    icon: Heart,
  },
  {
    year: 'New Horizons',
    title: 'A Continental Leap',
    description: 'Embracing the unknown. A strategic pivot to the West, driven by an unyielding hunger for innovation and the promise of the American dream.',
    icon: Plane,
  },
  {
    year: 'Tech Breakthrough',
    title: 'Architecting the Enterprise',
    description: 'Two decades of high-stakes technological leadership. Delivering critical infrastructure and solutions for global giants like Verizon and JP Morgan.',
    icon: Briefcase,
  },
  {
    year: 'Entrepreneurship',
    title: 'The Entrepreneurial Vision',
    description: 'Fast Data Connect: A purpose-built entity designed to bridge the chasm between complex data architectures and actionable business intelligence.',
    icon: Building2,
  },
  {
    year: 'Global Impact',
    title: 'The Convergence',
    description: 'Harmonizing the binary world of code with the fluid world of melody. A legacy defined by dual mastery, inspiring the next generation of creators.',
    icon: Globe,
  },
];

const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Fix speed: Target the specific container instead of global window scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });
  
  return (
    <section className="py-20 sm:py-32 md:py-40 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal width="100%" className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight font-display px-2">
            <TextReveal text="The Journey Unfolds" />
          </h2>
          <div className="max-w-2xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20">
            <p className="text-slate-400 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              <BlurText text="From the mountains of Dehradun to the global tech landscape, every chapter tells a story of passion, resilience, and transformation." delay={0.2} />
            </p>
          </div>
        </Reveal>

        {/* Visual Journey Tribute Image */}
        <Reveal width="100%" delay={0.4} className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <div className="relative max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Image container with responsive sizing */}
            <div className="relative w-full overflow-hidden bg-black/50">
              <motion.img
                src="/images/mike-sir-tribute.png"
                alt="Journey from Melodies to Success - Safar Suron Se Safalta Tak"
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Decorative border glow */}
              <div className="absolute inset-0 border-2 border-white/5 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] pointer-events-none" />
            </div>
            
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 bg-gradient-to-t from-black via-black/90 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-center"
              >
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-serif italic mb-2">
                  "Safar Suron Se Safalta Tak"
                </p>
                <p className="text-slate-400 text-xs sm:text-sm font-light">
                  Journey from Melodies to Success
                </p>
              </motion.div>
            </div>
          </div>
        </Reveal>

        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          {/* Central Line (Background) */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] sm:w-px bg-slate-800 transform md:-translate-x-1/2" />
          
          {/* Animated Progress Line - Synced to section scroll */}
          <motion.div 
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-[2px] sm:w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-1/2 z-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
          />

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {timelineData.map((item, index) => (
              <TimelineNode key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineNode: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row-reverse`}>
      
      {/* Spacer for Desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Center Icon - Enhanced Mobile */}
      <div className="absolute left-4 sm:left-6 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#111] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex items-center justify-center relative z-10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-slate-400 group-hover:text-white transition-colors duration-500 relative z-10" />
        </motion.div>
      </div>

      {/* Content Card - Enhanced Responsive */}
      <div className={`w-full md:w-1/2 pl-14 sm:pl-16 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-24' : 'md:pl-12 lg:pl-24'}`}>
        <Reveal 
          direction={isEven ? 'left' : 'right'} 
          delay={0.1}
          className="w-full"
        >
          <div className="bg-[#0a0a0a] p-6 sm:p-7 md:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] shadow-2xl border border-white/10 group relative overflow-hidden hover:border-white/20 transition-all duration-500">
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <span className="inline-block text-xs sm:text-sm font-bold text-blue-400 tracking-wider uppercase mb-2 sm:mb-3">
                {item.year}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

    </div>
  );
};

export default JourneyTimeline;