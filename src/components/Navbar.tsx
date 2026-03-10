import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

import { NAV_ITEMS } from '@constants';

const Navbar: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case '/':
        return <Home size={18} />;
      case '/websites':
        return <Globe size={18} />;
      default:
        return <BookOpen size={18} />;
    }
  };

  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    icon: getIcon(item.id),
  }));

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pointer-events-auto px-2 py-2 rounded-full flex items-center gap-1"
        style={{
          background: 'rgba(15, 10, 35, 0.85)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          border: '1px solid rgba(244, 114, 182, 0.28)',
          boxShadow: '0 0 20px rgba(244, 114, 182, 0.2), 0 0 40px rgba(129, 140, 248, 0.1), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id}
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-rounded font-bold text-sm ${isActive
                ? 'text-white'
                : 'text-purple-300/70 hover:text-pink-300 hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #f472b6, #818cf8, #22d3ee)',
                      backgroundSize: '200% 200%',
                      animation: 'holo-shift 3s linear infinite',
                      boxShadow: '0 0 16px rgba(244, 114, 182, 0.45), 0 0 32px rgba(129, 140, 248, 0.25)',
                    }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.55 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                <span className={`relative z-10 ${isActive ? 'block' : 'hidden md:block'}`}>
                  {isActive ? `✦ ${item.label}` : item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;
