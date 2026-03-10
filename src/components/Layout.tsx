import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const runes = [
  { text: 'キラ', className: 'top-14 left-[5vw] text-xl sm:text-3xl', delay: '0s' },
  { text: 'モエ', className: 'top-[32vh] right-[6vw] text-2xl sm:text-4xl', delay: '0.8s' },
  { text: 'ヲタ', className: 'bottom-32 left-[10vw] text-lg sm:text-2xl', delay: '1.6s' },
  { text: '✦', className: 'top-[60vh] left-[3vw] text-2xl', delay: '2.4s' },
  { text: 'アニメ', className: 'top-[18vh] right-[3vw] text-sm sm:text-base opacity-50', delay: '0.4s' },
];

const sakuraCount = 12;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const sakuraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sakuraRef.current;
    if (!container) return;

    const petals: HTMLDivElement[] = [];

    for (let i = 0; i < sakuraCount; i++) {
      const petal = document.createElement('div');
      const size = 6 + Math.random() * 10;
      const left = Math.random() * 100;
      const duration = 8 + Math.random() * 12;
      const delay = Math.random() * 15;

      petal.className = 'sakura';
      petal.style.cssText = `
        width:${size}px; height:${size}px;
        left:${left}%;
        animation-duration:${duration}s;
        animation-delay:${delay}s;
        opacity:0;
      `;
      container.appendChild(petal);
      petals.push(petal);
    }

    return () => {
      petals.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ color: '#e2d9f3', userSelect: 'text' }}>
      {/* Background layers */}
      <div className="anime-grid" />
      <div className="anime-aura anime-aura-cyan" />
      <div className="anime-aura anime-aura-rose" />
      <div className="anime-aura anime-aura-mint" />

      {/* Sakura petals */}
      <div ref={sakuraRef} className="sakura-container" />

      {/* Floating katakana runes */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {runes.map((rune) => (
          <span
            key={rune.text}
            className={`float-rune ${rune.className}`}
            style={{ animationDelay: rune.delay }}
          >
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
