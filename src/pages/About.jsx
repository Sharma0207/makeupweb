import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const About = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center py-20 text-center">
        <span className="editorial-subheading">IDENTITY</span>
        <h1 className="editorial-heading">ABOUT</h1>
        <p className="editorial-body text-secondary max-w-lg mx-auto">Ultra-minimalist editorial focus on philosophy and identity.</p>
      </div>
    </PageLayout>
  );
};

export default About;
