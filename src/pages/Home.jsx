import React from 'react';
import HeroSection2 from '../components/sections/HeroSection2';
import QuoteSection from '../components/sections/QuoteSection';
import SliderSection from '../components/sections/SliderSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import InteractiveMakeupSection from '../components/sections/InteractiveMakeupSection';
import UnderstatedBeautySection from '../components/sections/UnderstatedBeautySection';

const Home = () => {
  return (
    <>
      {/* Hero Section 2 - with image and parallax effects */}
      <HeroSection2 />

      {/* Quote Section */}
      <QuoteSection />

      {/* Featured Work Slider */}
      <SliderSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Interactive Makeup Products Section */}
      <InteractiveMakeupSection />

      {/* Understated Beauty Section */}
      <UnderstatedBeautySection />
    </>
  );
};

export default Home;
