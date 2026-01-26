import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    { id: '/', icon: <Home size={20} />, label: '首页' },
    { id: '/about', icon: <User size={20} />, label: '关于' },
    { id: '/websites', icon: <Globe size={20} />, label: '作品' },
  ];

  return (
    <div className="fixed bottom-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-panel px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl pointer-events-auto"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id}
            className={({ isActive }) => 
              `relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'text-white' 
                  : 'text-slate-500 hover:bg-white/40 hover:text-sky-500'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full shadow-lg shadow-sky-200"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.icon}</span>
                <span className={`relative z-10 text-sm font-bold font-rounded ${isActive ? 'block' : 'hidden md:block'}`}>
                  {item.label}
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