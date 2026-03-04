import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/common/Navigation";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import HeroSection from "./components/HeroSection";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <LoadingScreen
        isVisible={isLoading}
        onComplete={() => setShowContent(true)}
      />
      <Navigation />
      <ScrollToTop />

      {(!isLoading || showContent) && (
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

// Wrapper for Home to include HeroSection before the Home page content
const HomeWrapper = () => (
  <>
    <HeroSection />
    <Home />
  </>
);

export default App;
