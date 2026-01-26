import React from 'react';
import { NavItem, ViewState } from '@types';
import { NAV_ITEMS } from '@constants';
import { Home, User, Image as ImageIcon, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  
  const getIcon = (id: string) => {
    switch(id) {
      case ViewState.HOME: return <Home size={20} />;
      case ViewState.ABOUT: return <User size={20} />;
      case ViewState.GALLERY: return <ImageIcon size={20} />;
      case ViewState.BLOG: return <BookOpen size={20} />;
      default: return <Home size={20} />;
    }
  };

  return (
    <div className="fixed bottom-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-panel px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl pointer-events-auto"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as ViewState)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'text-white' 
                  : 'text-gray-500 hover:bg-sky-50 hover:text-sky-500'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full shadow-lg shadow-sky-200"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{getIcon(item.id)}</span>
              <span className={`relative z-10 text-sm font-bold font-rounded ${isActive ? 'block' : 'hidden md:block'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;