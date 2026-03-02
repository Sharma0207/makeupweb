import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax on background image - slow zoom on scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Fade out content on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fdc819d960ee1422c813bf93b1234e855?format=webp&width=1200&height=1200"
          alt="Anchala Sharma - Makeup Artist"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-screen flex-col items-center justify-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center center" }}
          className="text-center font-display text-5xl md:text-7xl tracking-[0.08em] text-white font-bold"
        >
          THE ART OF MAKEUP
        </motion.h1>
      </motion.div>

      {/* Scroll to explore */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-xs md:text-sm tracking-widest font-body uppercase"
        >
          Scroll to explore
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection2;
