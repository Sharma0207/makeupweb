import React from 'react';
import Navigation from '../common/Navigation';

const PageLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      {/* Navigation (fixed, so no need to reserve space in flex) */}
      <Navigation />

      {/* Vertical center line design anchor */}
      <div className="vertical-line-anchor" />

      <main className="relative z-10 w-full flex-grow px-4 md:px-16 pt-32">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 py-12 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-secondary">
        <div>© {new Date().getFullYear()} ANCHALA SHARMA</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
