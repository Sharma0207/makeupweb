import React from 'react';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      {/* Navigation (fixed, so no need to reserve space in flex) */}
      <Navigation />

      <main className="relative z-10 w-full flex-grow px-4 md:px-16 pt-32">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;
