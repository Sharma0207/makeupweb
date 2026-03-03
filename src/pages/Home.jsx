import React from 'react';
import HeroSection2 from '../components/sections/HeroSection2';
import QuoteSection from '../components/sections/QuoteSection';
import SliderSection from '../components/sections/SliderSection';
import MarqueeSection from '../components/sections/MarqueeSection';
import InteractiveMakeupSection from '../components/sections/InteractiveMakeupSection';
import UnderstatedBeautySection from '../components/sections/UnderstatedBeautySection';
import CTASection from '../components/sections/CTASection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProductMarqueeSection from '../components/sections/ProductMarqueeSection';
import InstagramFeedSection from '../components/sections/InstagramFeedSection';
import BeforeAfterSection from '../components/sections/BeforeAfterSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/common/Footer';

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

      {/* Call To Action Section */}
      <CTASection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Product Marquee Section */}
      <ProductMarqueeSection />

      {/* Instagram Feed Section */}
      <InstagramFeedSection />

      {/* Before & After Section */}
      <BeforeAfterSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
