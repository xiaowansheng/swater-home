import React, { useState } from 'react';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import About from '@components/About';
import Websites from '@components/Websites';
import ChatWidget from '@components/ChatWidget';
import Footer from '@components/Footer';
import { ViewState } from '@types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Hero key="hero" />;
      case ViewState.ABOUT:
        return <About key="about" />;
      case ViewState.WEBSITES:
        return <Websites key="websites" />;
      default:
        return <Hero key="default" />;
    }
  };

  return (
    <div className="min-h-screen relative text-gray-700 selection:bg-sky-200 selection:text-sky-900 pb-20 md:pb-0">
      
      {/* Navbar is now fixed at bottom */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(5px)' }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <ChatWidget />
    </div>
  );
};

export default App;