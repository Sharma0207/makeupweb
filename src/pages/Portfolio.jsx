import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Portfolio = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-start py-20">
        <span className="editorial-subheading">WORKS</span>
        <h1 className="editorial-heading">PORTFOLIO</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
           {/* Placeholder for asymmetric grid */}
           <div className="aspect-[3/4] bg-secondary/5 flex items-center justify-center">IMAGE 01</div>
           <div className="aspect-[3/4] bg-secondary/5 flex items-center justify-center translate-y-20">IMAGE 02</div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Portfolio;
