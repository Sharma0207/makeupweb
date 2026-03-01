import { motion } from "framer-motion";
import heroImage from "../assets/hero2.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 py-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="flex gap-8">
          <a href="#" className="nav-link text-black">
            Portfolio
          </a>
          <a href="#" className="nav-link text-black">
            About
          </a>
        </div>

        <div className="flex flex-col items-center">
          <span className="logo-text text-lg tracking-[0.06em] text-black">
            ANCHALA
          </span>
        </div>

        <div className="flex gap-8">
          <a href="#" className="nav-link text-black">
            Services
          </a>
          <a href="#" className="nav-link text-black">
            Contact
          </a>
        </div>
      </motion.nav>

      {/* Split layout */}
      <div className="flex-1 flex min-h-screen">
        {/* Left side - Image */}
        <motion.div
          className="hidden md:block w-1/2 relative bg-gray-100 overflow-hidden"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.3,
          }}
        >
          {/* Hero image */}
          <img
            src={heroImage}
            alt="Hero portrait"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Right side - Black with content */}
        <motion.div
          className="w-full md:w-1/2 relative bg-black flex items-center justify-center overflow-hidden"
          initial={{ clipPath: "inset(0 0 0 100%)" }}
          animate={{ clipPath: "inset(0 0 0 0%)" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.3,
          }}
        >
          {/* Center vertical line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-px bg-white/20"
            style={{ top: 0, bottom: 0 }}
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{
              duration: 1.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1,
            }}
          />

          {/* Main content */}
          <div className="flex flex-col items-center justify-center relative z-10 px-8">
            {/* Large name */}
            <motion.h2
              className="hero-title text-6xl md:text-7xl lg:text-8xl mb-8 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4,
              }}
            >
              Anchala
            </motion.h2>

            {/* Description */}
            <motion.p
              className="hero-description text-center max-w-md text-sm md:text-base text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.7,
              }}
            >
              Creative Director & Designer based in creative execution and visual storytelling
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button className="px-8 py-3 bg-white text-black text-sm tracking-widest uppercase font-semibold hover:bg-gray-200 transition-colors">
                View Work
              </button>
              <button className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="nav-link text-[0.65rem] tracking-[0.2em] text-white">
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-white/30"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>

          {/* Right side vertical nav */}
          <motion.div
            className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {["Works", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300"
                style={{ writingMode: "vertical-rl" }}
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
