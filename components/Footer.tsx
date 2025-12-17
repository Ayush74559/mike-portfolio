import React from 'react';
import { ArrowUp, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/Button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-300 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Journey Completion Indicator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 via-slate-800 to-transparent" />
      
      {/* Subtle journey completion glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[200px] sm:h-[300px] bg-blue-900/5 rounded-full blur-[80px] sm:blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16 md:mb-20 gap-8 sm:gap-10">
          <div className="max-w-md w-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Initiate Dialogue</h3>
            <p className="text-slate-400 font-light leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Seeking partnerships, technical discourse, and visionary collaborations. Let's architect something definitive.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <SocialIcon icon={Linkedin} href="https://linkedin.com/in/agarmike" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Github} href="#" />
              <SocialIcon icon={Mail} href="mailto:mike.agar@fastdataconnect.com" />
            </div>
          </div>

          <div className="glass-panel-dark p-6 sm:p-8 rounded-xl sm:rounded-2xl w-full md:w-auto md:min-w-[280px] lg:min-w-[300px]">
            <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-widest mb-3 sm:mb-4 font-bold">Direct Channel</p>
            <a href="tel:+12035717669" className="block mb-2">
              <Button variant="secondary" className="w-full justify-center mb-2 sm:mb-3 text-sm sm:text-base">
                Call: +1 (203) 571-7669
              </Button>
            </a>
            <p className="text-center text-[10px] sm:text-xs text-slate-500 mb-2">or</p>
            <a href="mailto:mike.agar@fastdataconnect.com" className="block text-center text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors">
              mike.agar@fastdataconnect.com
            </a>
            <p className="text-center text-[10px] sm:text-xs text-slate-500 mt-2">Response time: within 24 hours</p>
          </div>
        </div>

        {/* Journey Completion Message */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-slate-500 text-sm sm:text-base font-light italic">
            "Every journey begins with a single step. This one continues with every connection."
          </p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-slate-900 gap-4">
          <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
            © 2024 Mike Agar. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors group"
          >
            Back to Top
            <span className="p-1.5 sm:p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ElementType, href: string }> = ({ icon: Icon, href }) => (
  <a 
    href={href}
    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
    aria-label={`Social media link`}
  >
    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
  </a>
);

export default Footer;