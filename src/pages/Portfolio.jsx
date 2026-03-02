import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PortfolioHero from '../components/sections/PortfolioHero';
import PortfolioGrid from '../components/sections/PortfolioGrid';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        <PortfolioHero 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
        <PortfolioGrid 
          activeFilter={activeFilter} 
        />
      </div>
      
      {/* Right side vertical nav - specific to portfolio layout */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-12 pointer-events-auto">
        <a href="#mood" className="nav-link vertical-text opacity-40 hover:opacity-100">Mood</a>
        <a href="#contact" className="nav-link vertical-text opacity-40 hover:opacity-100">Contact</a>
      </div>
    </PageLayout>
  );
};

export default Portfolio;
