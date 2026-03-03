import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop",
    tagline: "Brushes Create Magic",
    description: "Radiant and elegant transformations",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop",
    tagline: "Where Art Meets Beauty",
    description: "Bold artistic expressions come to life",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1512207736139-c97394bf8c1e?w=500&h=500&fit=crop",
    tagline: "Confidence In Every Stroke",
    description: "Celebrating your unique beauty",
  },
];

const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const current = transformations[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, newPosition)));
  };

  return (
    <section className="bg-black py-32 lg:py-44 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4 text-white/60"
          >
            Transformations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            Before & After
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 font-body text-sm md:text-base mt-6 max-w-xl mx-auto"
          >
            Drag the slider to see the incredible transformations I create. Each look is tailored to bring out your best.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Before/After Slider */}
              <div className="w-full lg:w-2/3 flex justify-center">
                <div
                  className="relative cursor-grab active:cursor-grabbing border border-white/10 rounded-lg overflow-hidden max-w-md w-full"
                  onMouseMove={handleSliderChange}
                  onTouchMove={(e) =>
                    handleSliderChange(
                      Object.assign(e.touches[0], {
                        currentTarget: e.currentTarget,
                      })
                    )
                  }
                >
                  {/* After Image (Base) */}
                  <img
                    src={current.after}
                    alt="After"
                    className="w-full h-auto object-cover aspect-square"
                    loading="lazy"
                  />

                  {/* Before Image (Overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={current.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                      style={{ width: `${(100 / sliderPosition) * 100}%` }}
                      loading="lazy"
                    />
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white/30"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-8 h-8 flex items-center justify-center shadow-lg border-2 border-white/40">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-black"></div>
                        <div className="w-0.5 h-4 bg-black"></div>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 font-body text-xs font-semibold uppercase tracking-wider text-white bg-black/60 px-3 py-1 backdrop-blur">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 font-body text-xs font-semibold uppercase tracking-wider text-white bg-black/60 px-3 py-1 backdrop-blur">
                    After
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-display text-2xl md:text-3xl tracking-wider uppercase text-white mb-4"
                >
                  {current.tagline}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-body text-white/60 leading-relaxed mb-6"
                >
                  {current.description}
                </motion.p>

                {/* Counter */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/40 text-sm font-body tracking-widest uppercase"
                >
                  {currentIndex + 1} / {transformations.length}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center lg:justify-between mt-12 gap-6">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 rounded-full group"
              aria-label="Previous transformation"
            >
              <FiChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to transformation ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 rounded-full group"
              aria-label="Next transformation"
            >
              <FiChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
