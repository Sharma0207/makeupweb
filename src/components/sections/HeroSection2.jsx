import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth vertical offset - creates smooth scroll reveal between two images
  const imageY = useTransform(scrollYProgress, [0, 1], [0, "-100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] w-full bg-white"
    >
      {/* Sticky container for text and images */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-white">

        {/* Mobile image - single image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2Fcb32fcd9daa8419ba576338784d3f106?format=webp&width=800&height=1200"
          alt="Art of Makeup"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* Desktop stacked images - smooth continuous scroll */}
        <motion.div
          className="hidden md:flex flex-col absolute inset-0 w-full overflow-hidden bg-white"
          style={{ y: imageY }}
        >
          {/* Image 1 - scrolls up smoothly */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2F55d173f479f94d8d946eeb1508729e33?format=webp&width=800&height=1200"
            alt="Art of Makeup - Image 1"
            className="w-full h-full object-cover flex-shrink-0"
          />

          {/* Image 2 - appears as image 1 scrolls up */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2Fabfd6e744ce04588842d187fb63ae562?format=webp&width=800&height=1200"
            alt="Art of Makeup - Image 2"
            className="w-full h-full object-cover flex-shrink-0"
          />
        </motion.div>

        {/* Fixed text overlay - stays on both images */}
        <div className="relative z-10 text-center px-6">
          <motion.h1 className="font-display text-3xl md:text-4xl tracking-widest text-white leading-tight drop-shadow-lg">
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
            className="text-black text-xs md:text-sm tracking-widest font-body uppercase drop-shadow-lg"
          >
            Scroll to explore
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection2;
