import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Mic2, ExternalLink } from 'lucide-react';
import { Reveal, TextReveal } from './ui/Reveal';
import { Button } from './ui/Button';

const MusicalJourney: React.FC = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start video when section enters viewport
            setIsVideoActive(true);
          } else {
            // Stop video when section leaves viewport
            setIsVideoActive(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const videoSrc = isVideoActive 
    ? "https://www.youtube.com/embed/NvPSwIl334A?list=RDNvPSwIl334A&autoplay=1&controls=1&modestbranding=1&rel=0&enablejsapi=1"
    : "about:blank"; // Use blank page when not active to stop video

  return (
    <section ref={sectionRef} className="py-40 bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/img/musical-background.jpg"
          alt="Musical Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Enhanced Background */}
        <div className="text-center max-w-4xl mx-auto mb-24 relative">
          {/* Enhanced Background Overlay for Header */}
          <div className="absolute inset-0 -m-12 rounded-[3rem] bg-gradient-to-br from-black/60 via-black/40 to-black/80 backdrop-blur-sm border border-white/5" />
          <div
            className="absolute inset-0 -m-12 rounded-[3rem] opacity-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/media/img/musical-background.jpg)' }}
          />
          
          <div className="relative z-10 p-12">
            <Reveal width="100%">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-serif italic drop-shadow-2xl">
                A Symphony of Life
              </h2>
            </Reveal>
            <Reveal delay={0.2} width="100%">
               <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed font-serif italic drop-shadow-lg">
                From the cinematic grandeur of Bollywood to the intimacy of Ghazals, music is the rhythm that underscores every chapter of the journey.
               </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Highlight Song Card (Visual Focus) */}
          <div className="sticky top-24">
            <Reveal direction="right" width="100%">
              <div className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-slate-900 to-slate-800 cursor-pointer border border-white/10">
                {/* YouTube Video Preview */}
                <div className="absolute inset-0">
                  <iframe
                    src={videoSrc}
                    title="Kabhi Bhoola Kabhi Yaad Kiya"
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Loading indicator when video is not active */}
                  {!isVideoActive && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                      <div className="text-center">
                        <PlayCircle className="w-16 h-16 text-white/60 mx-auto mb-4" />
                        <p className="text-white/80 text-lg font-medium">Scroll to this section to play music</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Vinyl Spin Effect visual */}
                <div className="absolute top-10 right-10 w-24 h-24 rounded-full border-2 border-white/10 animate-spin-slow opacity-30 z-10" />
                
                {/* Additional decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-sm z-10" />
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-sm z-10" />
                
                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 z-20">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
                    <Mic2 className="w-3 h-3" />
                    <span>Featured Track</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight font-display drop-shadow-lg">
                    Kabhi Bhoola Kabhi Yaad Kiya
                  </h3>
                  
                  <p className="text-slate-300 text-lg mb-8 font-light leading-relaxed drop-shadow-md">
                    An anthem that defined a generation. A melody that transcends time, echoing the depth of human emotion.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {isVideoActive ? (
                      <Button
                        variant="primary"
                        className="w-full md:w-auto font-bold"
                        icon={<ExternalLink className="w-4 h-4 text-black" />}
                        onClick={() => {
                          // Open YouTube video with autoplay
                          const videoUrl = 'https://youtu.be/NvPSwIl334A?list=RDNvPSwIl334A&autoplay=1';
                          window.open(videoUrl, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        Listen on YouTube
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        className="w-full md:w-auto font-bold"
                        icon={<PlayCircle className="w-4 h-4 text-black" />}
                        onClick={() => {
                          setIsVideoActive(true);
                        }}
                      >
                        Play Track
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Editorial Content Blocks */}
          <div className="space-y-12 py-8">
            <ContentBlock 
              title="The Cinematic Era"
              content="My native tongue was melody. 'Kabhi Bhoola Kabhi Yaad Kiya' was not just a performance; it was a connection with the collective soul of an audience, a timeless contribution to Indian cinema."
              delay={0.2}
              highlight
            />

            <ContentBlock 
              title="The Renaissance"
              content="Returning to the purity of sound. A modern reinterpretation of Ghazals and Bhajans, fusing heritage with contemporary acoustics to speak to a new global audience."
              delay={0.4}
            />

            <ContentBlock 
              title="The Harmony of Systems"
              content="Code is logic; music is emotion. Yet both demand structure, rhythm, and the pursuit of perfection. One builds the mind, the other feeds the spirit."
              delay={0.6}
              highlight
            />

            <Reveal delay={0.8} className="pt-8">
               <div className="flex flex-col sm:flex-row gap-4">
                 <Button variant="secondary" className="px-8 bg-emerald-600 hover:bg-emerald-500 font-serif italic">
                   New Releases
                 </Button>
                 <Button variant="outline" className="px-8 border-white/20 text-white font-serif italic">
                   Musical Portfolio
                 </Button>
               </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentBlock: React.FC<{ title: string; content: string; delay: number; highlight?: boolean }> = ({ title, content, delay, highlight }) => (
  <Reveal delay={delay} width="100%">
    <div className={`p-10 rounded-[2rem] border transition-all duration-300 hover:shadow-lg ${highlight ? 'bg-amber-900/10 border-amber-500/20 hover:bg-amber-900/20' : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'}`}>
      <h3 className={`text-2xl font-bold mb-4 font-serif italic ${highlight ? 'text-amber-500' : 'text-white'}`}>{title}</h3>
      <p className="text-lg text-slate-400 leading-relaxed font-serif italic font-light">{content}</p>
    </div>
  </Reveal>
);

export default MusicalJourney;