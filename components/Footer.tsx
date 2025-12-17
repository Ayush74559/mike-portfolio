import React from 'react';
import { ArrowUp, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/Button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-300 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold text-white mb-4">Initiate Dialogue</h3>
            <p className="text-slate-400 font-light leading-relaxed mb-6">
              Seeking partnerships, technical discourse, and visionary collaborations. Let's architect something definitive.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Linkedin} href="#" />
              <SocialIcon icon={Twitter} href="#" />
              <SocialIcon icon={Github} href="#" />
              <SocialIcon icon={Mail} href="mailto:hello@example.com" />
            </div>
          </div>

          <div className="glass-panel-dark p-8 rounded-2xl w-full md:w-auto min-w-[300px]">
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-4 font-bold">Direct Channel</p>
            <Button variant="secondary" className="w-full justify-center mb-3">
              Schedule a Call
            </Button>
            <p className="text-center text-xs text-slate-500">Response time: within 24 hours</p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-end items-center pt-8 border-t border-slate-900">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            Back to Top
            <span className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
              <ArrowUp className="w-4 h-4" />
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
    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;