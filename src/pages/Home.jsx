import React from 'react';
import HeroSection2 from '../components/sections/HeroSection2';
import ArtOfMakeupSection from '../components/sections/ArtOfMakeupSection';
import QuoteSection from '../components/sections/QuoteSection';
import SliderSection from '../components/sections/SliderSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import UnderstatedBeautySection from '../components/sections/UnderstatedBeautySection';

const Home = () => {
  return (
    <>
      {/* Hero Section 2 - Parallax */}
      <HeroSection2 />

      {/* Art of Makeup Section - with image and parallax */}
      <ArtOfMakeupSection />

      {/* Quote Section */}
      <QuoteSection />

      {/* Featured Work Slider */}
      <SliderSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Understated Beauty Section */}
      <UnderstatedBeautySection />
    </>
  );
};

export default Home;
