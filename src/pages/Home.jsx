import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection2 from "../components/sections/HeroSection2";
import QuoteSection from "../components/sections/QuoteSection";
import SliderSection from "../components/sections/SliderSection";
import MarqueeSection from "../components/sections/MarqueeSection";
import InteractiveMakeupSection from "../components/sections/InteractiveMakeupSection";
import UnderstatedBeautySection from "../components/sections/UnderstatedBeautySection";
import CTASection from "../components/sections/CTASection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProductMarqueeSection from "../components/sections/ProductMarqueeSection";
import BeforeAfterSection from "../components/sections/BeforeAfterSection";
import VideoGallerySection from "../components/sections/VideoGallerySection";
import InstagramCTASection from "../components/sections/InstagramCTASection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Anchala Sharma | Best Bridal Makeup Artist in Patna, Bihar | Makeup by
          Anchala
        </title>
        <meta
          name="description"
          content="Anchala Sharma is the best bridal makeup artist in Patna, Bihar. Professional makeup services for weddings, parties, and special occasions. Book now for stunning makeup by Anchala. Available 24/7 in Phulwari Sharif, Patna."
        />
        <meta
          name="keywords"
          content="makeup by anchala, anchala sharma, best makeup artist patna, best bridal makeup artist patna, makeup artist patna bihar, wedding makeup patna, professional makeup artist patna, bridal makeup patna"
        />
        <link rel="canonical" href="https://www.makeupbyanchala.in/" />
        <meta
          property="og:title"
          content="Anchala Sharma | Best Bridal Makeup Artist in Patna, Bihar"
        />
        <meta
          property="og:description"
          content="Professional bridal and party makeup services in Patna by Anchala Sharma. Book the best makeup artist in Bihar for your special day."
        />
        <meta property="og:url" content="https://www.makeupbyanchala.in/" />
        <meta
          property="og:image"
          content="https://www.makeupbyanchala.in/og-image.jpg"
        />
      </Helmet>

      {/* SEO: Visually hidden H1 for search engine ranking */}
      <h1 className="sr-only">Best Makeup Artist in Patna, Bihar – Bridal Makeup, Wedding Makeup & Party Makeup by Anchala Sharma</h1>

      {/* Hero Section 2 - with image and parallax effects */}
      <HeroSection2 />

      {/* Quote Section */}
      <QuoteSection />

      {/* Featured Work Slider */}
      <SliderSection />

      {/* Video Gallery Section */}
      <VideoGallerySection />

      {/* Instagram CTA Section */}
      <InstagramCTASection />

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
