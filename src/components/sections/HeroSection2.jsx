import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Parallax effect for image
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Text animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background image with parallax - responsive images */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        {/* Mobile image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2Fcb32fcd9daa8419ba576338784d3f106?format=webp&width=800&height=1200"
          alt="Art of Makeup"
          className="w-full h-full object-cover md:hidden"
        />
        {/* Desktop/Laptop image - larger screen */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2Fd85e01fed6414c6ab4e4feca50ca5ef2?format=webp&width=800&height=1200"
          alt="Art of Makeup"
          className="w-full h-full object-cover hidden md:block"
        />
      </motion.div>

      {/* Content overlay with text on image */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          style={{
            opacity: textOpacity,
            scale: textScale,
          }}
          className="font-display text-3xl md:text-4xl tracking-widest text-white leading-tight drop-shadow-lg"
        >
          THE ART OF MAKEUP
        </motion.h1>
      </div>

      {/* Scroll to explore - on image with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-black text-xs md:text-sm tracking-widest font-body uppercase drop-shadow-lg"
        >
          Scroll to explore
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection2;
