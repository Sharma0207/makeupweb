import React from 'react';
import PageLayout from '../components/layout/PageLayout';

const Contact = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center py-20">
        <span className="editorial-subheading">CONNECT</span>
        <h1 className="editorial-heading">CONTACT</h1>
        <div className="w-full max-w-md space-y-8 mt-12">
            <input type="text" placeholder="NAME" className="w-full border-b border-primary/20 bg-transparent py-4 text-xs tracking-widest outline-none focus:border-primary transition-colors font-body uppercase" />
            <input type="email" placeholder="EMAIL" className="w-full border-b border-primary/20 bg-transparent py-4 text-xs tracking-widest outline-none focus:border-primary transition-colors font-body uppercase" />
            <textarea placeholder="MESSAGE" rows="4" className="w-full border-b border-primary/20 bg-transparent py-4 text-xs tracking-widest outline-none focus:border-primary transition-colors font-body uppercase resize-none"></textarea>
            <button className="w-full bg-primary text-background py-6 text-[10px] tracking-widest uppercase hover:opacity-90 transition-opacity font-body font-medium mt-12">SEND INQUIRY</button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
