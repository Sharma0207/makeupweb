import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-20">
        <span className="editorial-subheading text-center">WELCOME</span>
        <h1 className="editorial-heading text-center">The Art of<br/>Natural Beauty</h1>
        <p className="editorial-body text-center text-secondary">Ultra-minimalist editorial approach to makeup and aesthetics.</p>
      </div>
    </PageLayout>
  );
};

export default Home;
