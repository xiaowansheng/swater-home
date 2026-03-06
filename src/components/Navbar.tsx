import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

import { NAV_ITEMS } from '@constants';

const Navbar: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case '/':
        return <Home size={20} />;
      case '/about':
        return <User size={20} />;
      case '/websites':
        return <Globe size={20} />;
      default:
        return <BookOpen size={20} />;
    }
  };

  const navItems = NAV_ITEMS.map((item) => ({
    ...item,
    icon: getIcon(item.id),
  }));

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-panel px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-xl pointer-events-auto border border-white/80"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id}
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive ? 'text-white' : 'text-slate-600 hover:bg-white/45 hover:text-pink-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-pink-400 rounded-full shadow-md shadow-pink-200/60"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                <span className={`relative z-10 text-sm font-bold font-rounded ${isActive ? 'block' : 'hidden md:block'}`}>
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
