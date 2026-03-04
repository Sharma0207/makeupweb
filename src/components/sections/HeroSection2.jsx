import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const mobileImage = "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=800&fit=crop";
const desktopImage1 = "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&h=800&fit=crop";
const desktopImage2 = "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&h=800&fit=crop";

const HeroSection2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Smooth opacity transition between images
  const image1Opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const image2Opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  // Entrance transition - fade in from bottom
  const sectionOpacity = useTransform(scrollYProgress, [-0.5, 0], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [-0.5, 0], [50, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative md:min-h-[200vh] min-h-[100vh] w-full bg-black"
    >
      {/* Sticky container for text and images - with entrance transition */}
      <motion.div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
        }}
      >
        {/* Mobile image - single image */}
        <img
          src={mobileImage}
          alt="Art of Makeup"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* Desktop images - smooth cross-fade */}
        <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden bg-black">
          {/* Image 1 - fades out */}
          <motion.img
            src={desktopImage1}
            alt="Art of Makeup - Image 1"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: image1Opacity }}
          />

          {/* Image 2 - fades in */}
          <motion.img
            src={desktopImage2}
            alt="Art of Makeup - Image 2"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: image2Opacity }}
          />
        </div>

        {/* Fixed text overlay - stays on both images */}
        <div className="relative z-10 text-center px-6">
          <motion.h1 className="font-display text-2xl md:text-4xl tracking-widest text-white leading-tight drop-shadow-lg">
            THE ART OF MAKEUP
          </motion.h1>
        </div>

        {/* Scroll to explore - fixed on image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white text-xs md:text-sm tracking-widest font-body uppercase drop-shadow-lg"
          >
            Scroll to explore
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection2;
