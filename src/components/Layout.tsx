import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import { ViewState } from '@types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative text-gray-700 selection:bg-sky-200 selection:text-sky-900 pb-24">
      {/* Navbar is fixed at bottom */}
      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

      <Footer />

      <ChatWidget />
    </div>
  );
};

export default Layout;
