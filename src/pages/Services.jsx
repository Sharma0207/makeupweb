import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceList, { services } from "../components/ServiceList";

const Services = () => {
  const [currentImage, setCurrentImage] = useState(services[0].image);
  const [displayedImage, setDisplayedImage] = useState(services[0].image);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (currentImage !== displayedImage) {
      setFading(true);
      const timeout = setTimeout(() => {
        setDisplayedImage(currentImage);
        setFading(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentImage, displayedImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Services Section */}
      <main className="flex flex-col lg:flex-row min-h-screen pt-20">
        {/* Left: Hero Image - Sticky */}
        <div className="w-full lg:w-[48%] h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-black/5">
          <motion.img
            src={displayedImage}
            alt="Makeup service"
            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              fading ? "opacity-0" : "opacity-100"
            }`}
            key={displayedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: fading ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Right: Service List */}
        <div className="w-full lg:w-[52%] pt-12 pb-16 md:pt-16 lg:pt-20 lg:pb-24 px-6 md:px-10 lg:px-12 lg:pr-16 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ServiceList onHover={setCurrentImage} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Services;
