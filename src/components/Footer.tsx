import React from 'react';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-8 mt-12 text-sm text-center text-slate-500">
      <div className="glass-panel mx-auto w-[90%] md:w-3/4 lg:w-1/2 rounded-2xl p-6 flex flex-col items-center gap-4">
        
        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="p-2 transition-transform hover:scale-110 hover:text-sky-500">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 transition-transform hover:scale-110 hover:text-sky-500">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-2 transition-transform hover:scale-110 hover:text-sky-500">
            <Mail size={20} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Info Text */}
        <div className="flex flex-col gap-2">
          <p className="font-medium font-rounded">
            © {currentYear} SWater Home. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1 text-xs">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> by SWater
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
