import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Services = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-start py-20">
        <span className="editorial-subheading">EXPERTISE</span>
        <h1 className="editorial-heading uppercase">Services</h1>
        <div className="w-full mt-12">
           <div className="flex justify-between items-baseline border-b border-primary/10 py-8">
              <span className="text-xl md:text-3xl font-display uppercase tracking-widest">Bridal Makeup</span>
              <span className="text-[10px] tracking-widest text-secondary uppercase italic font-display">Custom Styling</span>
           </div>
           <div className="flex justify-between items-baseline border-b border-primary/10 py-8">
              <span className="text-xl md:text-3xl font-display uppercase tracking-widest">Party & Occasion</span>
              <span className="text-[10px] tracking-widest text-secondary uppercase italic font-display">Glamour Focused</span>
           </div>
           <div className="flex justify-between items-baseline border-b border-primary/10 py-8">
              <span className="text-xl md:text-3xl font-display uppercase tracking-widest">Editorial & Shoot</span>
              <span className="text-[10px] tracking-widest text-secondary uppercase italic font-display">Visionary Art</span>
           </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
