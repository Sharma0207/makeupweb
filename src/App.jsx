import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen
        isVisible={isLoading}
        onComplete={() => setShowHero(true)}
      />
      {(!isLoading || showHero) && <HeroSection />}
    </>
  );
};

export default App;
