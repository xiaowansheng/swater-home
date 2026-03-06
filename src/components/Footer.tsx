import React from 'react';
import { Github, Twitter, Mail, Heart } from 'lucide-react';
import { SITE_CONFIG, APP_NAME } from '@constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { socials } = SITE_CONFIG;

  return (
    <footer className="relative z-10 w-full py-8 mt-12 text-sm text-center text-slate-500">
      <div className="glass-panel mx-auto w-[90%] md:w-3/4 lg:w-1/2 rounded-2xl p-6 flex flex-col items-center gap-4 border border-white/80">
        <div className="anime-sticker">
          <span className="kira" />
          OTAKU MODE
        </div>

        <div className="flex items-center gap-6">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all duration-200 hover:-translate-y-px hover:text-pink-500"
          >
            <Github size={20} />
          </a>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all duration-200 hover:-translate-y-px hover:text-sky-500"
          >
            <Twitter size={20} />
          </a>
          <a href={socials.mail} className="p-2 transition-all duration-200 hover:-translate-y-px hover:text-rose-500">
            <Mail size={20} />
          </a>
        </div>

        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-pink-300/70 to-transparent" />

        <div className="flex flex-col gap-2">
          <p className="font-medium font-rounded">© {currentYear} {APP_NAME}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1 text-xs">
            Made with <Heart size={12} className="text-rose-400 fill-rose-400" /> by {APP_NAME.replace('Home', '').replace('Space', '')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
