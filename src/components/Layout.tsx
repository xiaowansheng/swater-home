import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const runes = [
  { text: 'キラ', className: 'top-16 left-[6vw] text-lg sm:text-2xl', delay: '0s' },
  { text: 'モエ', className: 'top-[35vh] right-[8vw] text-xl sm:text-3xl', delay: '0.6s' },
  { text: 'ヲタ', className: 'bottom-28 left-[12vw] text-base sm:text-2xl', delay: '1.2s' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative text-slate-700 selection:bg-pink-200 selection:text-pink-900 overflow-hidden">
      <div className="anime-grid" />
      <div className="anime-aura anime-aura-cyan" />
      <div className="anime-aura anime-aura-rose" />

      <div className="fixed inset-0 pointer-events-none z-[1]">
        {runes.map((rune) => (
          <span key={rune.text} className={`float-rune ${rune.className}`} style={{ animationDelay: rune.delay }}>
            {rune.text}
          </span>
        ))}
      </div>

      <Navbar />

      <main className="relative z-10">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
