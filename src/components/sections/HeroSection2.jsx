import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection2 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // First image opacity - fades out as you scroll
  const firstImageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const firstImageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] w-full bg-white"
    >
      {/* Sticky container for text and images */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Mobile image - single image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2Fcb32fcd9daa8419ba576338784d3f106?format=webp&width=800&height=1200"
          alt="Art of Makeup"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* Desktop stacked images with scroll reveal effect */}
        <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden">
          {/* Upper image - reveals second image on scroll */}
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2F3128e1c01faa456fbe01f10e2609141e?format=webp&width=800&height=1200"
            alt="Art of Makeup - Upper"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: firstImageOpacity,
              scale: firstImageScale,
            }}
          />

          {/* Lower image - revealed as you scroll */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2F00a5aa60b44b44e9bc7dc7a2060c35b8?format=webp&width=800&height=1200"
            alt="Art of Makeup - Lower"
            className="absolute inset-0 w-full h-full object-cover"
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
