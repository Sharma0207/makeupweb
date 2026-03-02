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
    </PageLayout>
  );
};

export default Portfolio;
