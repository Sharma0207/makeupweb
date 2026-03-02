import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hero images from user uploads
const heroImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fdc819d960ee1422c813bf93b1234e855?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F00fa925426784b21849e1bb82e492e4a?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F250ddc55d1c441b98043e5c8748c5f2b?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F695302c53cb642dcb60eb3035ff28f3e?format=webp&width=800&height=1200",
];

const SLIDE_DURATION = 4000;

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-16 py-5 md:py-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="hidden md:flex gap-8">
          <a href="#" className="nav-link text-white text-sm md:text-base font-body">
            Portfolio
          </a>
          <a href="#" className="nav-link text-white text-sm md:text-base font-body">
            About
          </a>
        </div>

        <div className="flex flex-col items-center gap-1">
          <span className="logo-text text-lg md:text-2xl tracking-[0.08em] text-white font-bold">
            MAKEUP
          </span>
          <span className="text-white text-xs md:text-sm tracking-[0.15em] font-body">
            <span className="font-display italic text-[1.05em] relative -top-[0.02em]">BY</span> ANCHALA
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#" className="nav-link text-white text-sm md:text-base font-body">
            Services
          </a>
          <a href="#" className="nav-link text-white text-sm md:text-base font-body">
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex flex-col gap-[5px]">
          <span className="block w-5 h-[1.5px] bg-white" />
          <span className="block w-5 h-[1.5px] bg-white" />
          <span className="block w-3 h-[1.5px] bg-white" />
        </div>
      </motion.nav>

      {/* Split layout - stacked on mobile */}
      <div className="flex-1 flex flex-col md:flex-row min-h-screen">
        {/* Left side - Image carousel */}
        <motion.div
          className="w-full h-[50vh] md:h-auto md:w-1/2 relative bg-gray-100 overflow-hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.3,
          }}
        >
          {/* Image carousel with dissolve animation */}
          <AnimatePresence mode="sync">
            <motion.img
              key={currentIndex}
              src={heroImages[currentIndex]}
              alt="Hero portrait"
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Right side - Black with large A */}
        <motion.div
          className="w-full h-[50vh] md:h-auto md:w-1/2 relative bg-black flex items-center justify-center overflow-hidden"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.3,
          }}
        >
          {/* Large outlined A */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <svg
              viewBox="0 0 500 700"
              className="w-[60%] md:w-[80%] h-[80%] md:h-[90%] max-w-[500px]"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Large outlined letter A */}
              <motion.path
                d="M250 40 L60 660 L130 660 L175 520 L325 520 L370 660 L440 660 L250 40Z M250 120 L310 480 L190 480 L250 120Z"
                fill="none"
                stroke="white"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
              />
            </svg>
          </motion.div>

          {/* "Makeup artist" handwritten text */}
          <motion.div
            className="absolute z-10"
            style={{ bottom: '28%', left: '5%', right: '5%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.2 }}
          >
            <svg viewBox="0 0 480 180" className="w-full" preserveAspectRatio="xMidYMid meet">
              {/* Handwritten "Makeup artist" paths */}
              <g transform="translate(-15,-10)" opacity="1">
                {/* "M" */}
                <g opacity="1" transform="translate(62.05,141.67)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-40.71,-9 C-40.71,-9 -34.05,-23.33 -28.05,-21.67 C-22.05,-20 -30.71,35.33 -30.71,35.33 C-30.71,35.33 -0.04,-35.33 7.95,-30.33 C10.62,-28.67 4.95,3.66 -0.38,24.67 C-0.38,24.67 28.05,-29.92 37.71,-31.67 C40.71,-31.67 33.29,-12.34 30.29,5 C27.29,22.33 25.95,26.33 26.62,35.33"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                  />
                </g>
                {/* "a" */}
                <g opacity="1" transform="translate(106.32,146.67)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M10.49,-8.1 C10.49,-8.1 -2.32,-12.11 -8.11,5.05 C-10.49,12.11 7.02,1.57 10.49,-8.1z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                  />
                </g>
                {/* "k" */}
                <g opacity="1" transform="translate(142.49,134.56)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-15.65,11.58 C-15.65,11.58 8.22,-7.64 15.65,-11.58"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                  />
                </g>
                <g opacity="1" transform="translate(146.06,115.75)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-29.25,22.82 C-29.25,22.82 -32.94,31.92 -29.25,36.25 C-25.56,40.58 -15.39,26.25 -6.39,12.08 C2.61,-2.08 29.27,-36.58 32.94,-40.58"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 2.0 }}
                  />
                </g>
                {/* "e" */}
                <g opacity="1" transform="translate(206.73,141.92)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-67.27,-5.68 C-67.27,-5.68 -66.7,2.88 -60.53,4.23 C-57.19,4.96 -48.35,-1.1 -39.85,-5.42 C-32.68,-9.06 -26.92,-10.88 -25.4,-12.25 C-22.06,-15.25 -25.56,-16.92 -27.73,-17.08 C-29.9,-17.25 -38.73,-13.25 -32.23,-3.25 C-25.73,6.75 -5.9,-11.59 -5.06,-17.09 C-5.06,-17.09 -7.4,-10.75 -3.06,-9.08 C1.27,-7.42 12.44,-19.58 14.27,-23.92 C16.1,-28.25 9.27,-10.58 11.77,-8.75 C14.27,-6.92 29.44,-18.75 31.94,-23.25 C34.44,-27.75 7.6,32.58 7.6,32.58 C7.6,32.58 27.44,-11.75 41.94,-23.42 C53.94,-32.58 46.44,-17.42 46.44,-17.42 C46.44,-17.42 41.44,-5.19 67.27,-27.08"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 2.2 }}
                  />
                </g>
                {/* "u" */}
                <g opacity="1" transform="translate(305.52,111.35)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M7.23,-10.85 C7.23,-10.85 -8.52,-11.85 -10.52,4.16 C-11.48,11.85 11.48,-6.59 7.23,-10.85z"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 2.6 }}
                  />
                </g>
                {/* "p" */}
                <g opacity="1" transform="translate(361.58,74.83)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-48.83,25.67 C-48.83,25.67 -50.25,37.17 -47.08,40 C-43.92,42.83 -39.08,27.83 -29.42,24.83 C-29.42,24.83 -30.58,30.17 -30.75,37 C-30.92,43.83 -25.25,24.33 -19.75,21.33 C-19.75,21.33 -20.75,26.83 -13.92,28.5 C-7.08,30.17 1.97,25.26 5.3,21.76 C5.3,21.76 3.25,24.17 4.58,30.17 C4.58,30.17 1.92,25.17 10.42,11.17 C18.92,-2.83 38.92,-34.17 50.25,-43.83"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 2.8 }}
                  />
                </g>
                {/* connecting strokes */}
                <g opacity="1" transform="translate(385.1,60.26)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-38.6,8.41 C-38.6,8.41 -11.56,-8.24 38.6,-8.41"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 3.2 }}
                  />
                </g>
                {/* "artist" tail */}
                <g opacity="1" transform="translate(399.69,110.05)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-33.53,-5.05 C-33.53,-5.05 -12.82,-16.92 -10.94,-18.17 C-9.07,-19.42 -7.94,-23.05 -7.94,-23.05 C-7.94,-23.05 -12.82,-12.05 -11.19,-8.18 C-9.57,-4.3 -1.57,-18.3 7.06,-20.92 C12.93,-23.05 11.06,-26.05 11.06,-26.05 C11.06,-26.05 7.81,16.33 -6.19,21.08 C-20.85,26.05 0.9,-17.81 33.53,-24.06"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 3.4 }}
                  />
                </g>
                {/* "t" crossbar and dot */}
                <g opacity="1" transform="translate(451.83,48.58)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-38.33,8.75 C-38.33,8.75 -16.83,-7.75 38.33,-8.75"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 3.8 }}
                  />
                </g>
                <g opacity="1" transform="translate(454.25,56.81)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M2.91,22.52 C2.91,22.52 -16.17,34.35 -19.88,35.69 C-23.58,37.02 -22.58,28.69 -14.09,15.35 C-5.59,2.02 13.92,-29.69 23.58,-37.02"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 3.8 }}
                  />
                </g>
                {/* dot on i */}
                <g opacity="1" transform="translate(400.18,70.5)">
                  <motion.path
                    strokeLinecap="round" strokeLinejoin="round" fillOpacity="0"
                    stroke="white" strokeWidth="4"
                    d="M-2.59,3.53 C-2.59,3.53 -2.08,1.3 2.59,-3.53"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 4.0 }}
                  />
                </g>
              </g>
            </svg>
          </motion.div>

          {/* BARCELONA text */}
          <motion.h2
            className="absolute z-10 text-white font-body text-sm md:text-base tracking-[0.35em] uppercase"
            style={{ bottom: '18%' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Barcelona
          </motion.h2>

          {/* Down arrow */}
          <motion.div
            className="absolute z-10 bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.svg
              viewBox="0 0 30 18"
              className="w-5 h-3 md:w-7 md:h-4"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d="M27.81 2.84a1 1 0 0 0-1.32-.52c-.21.09-5 2.29-11.6 11.23C8.3 4.61 3.5 2.41 3.3 2.32a1 1 0 0 0-.81 1.83s5 2.3 11.59 11.67c0 0 .07 0 .1.08a.66.66 0 0 0 .14.15h.07l.11.06a1.1 1.1 0 0 0 .39.09 1.1 1.1 0 0 0 .39-.09l.1-.06h.08a1 1 0 0 0 .14-.15s.08-.05.1-.08C22.34 6.47 27.24 4.18 27.3 4.15a1 1 0 0 0 .51-1.31z"
                fill="white"
              />
            </motion.svg>
          </motion.div>

          {/* Right side vertical nav */}
          <motion.div
            className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {['Mood', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300"
                style={{ writingMode: 'vertical-rl' }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
