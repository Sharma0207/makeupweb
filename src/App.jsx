import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
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
