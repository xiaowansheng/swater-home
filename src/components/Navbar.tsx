import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Globe, BookOpen, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { NAV_ITEMS } from '@constants';
import { useTheme } from '@contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggle } = useTheme();

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
          background: 'var(--surface)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          border: '1px solid var(--surface-border)',
          boxShadow: 'var(--moe-shadow), var(--card-shadow)',
        }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id}
            className={({ isActive }) =>
              `relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-rounded font-bold text-sm ${isActive
                ? 'text-white'
                : 'text-gray-400/70 hover:text-pink-300 hover:bg-white/5'
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
                      background: 'var(--holo-border)',
                      backgroundSize: '200% 200%',
                      animation: 'holo-shift 3s linear infinite',
                      boxShadow: '0 0 16px var(--primary-glow), 0 0 32px var(--secondary-glow)',
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

        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggle}
          className="relative flex items-center justify-center gap-2 w-10 h-10 rounded-full transition-all duration-300 font-rounded font-bold text-sm"
          style={{ color: 'var(--text-sub)' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
