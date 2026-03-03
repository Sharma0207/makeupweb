import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"],
  });

  // First image opacity - smooth fade out as you scroll
  const firstImageOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const firstImageScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.02]);

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

        {/* Desktop stacked images with scroll reveal effect */}
        <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden bg-white">
          {/* Lower image - base layer (underneath) */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2F00a5aa60b44b44e9bc7dc7a2060c35b8?format=webp&width=800&height=1200"
            alt="Art of Makeup - Lower"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Upper image - fades away on scroll to reveal lower image */}
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2F86d6e4ea527e42f2be1181ccbaa784e1?format=webp&width=800&height=1200"
            alt="Art of Makeup - Upper"
            className="absolute inset-0 w-full h-full object-cover z-20"
            style={{
              opacity: firstImageOpacity,
              scale: firstImageScale,
            }}
          />
        </div>

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
