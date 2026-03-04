import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { generateBuilderSrcSet, getResponsiveSizes } from "../../utils/imageOptimization";

const ArtOfMakeupSection = () => {
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2F1d5f396cd5d94da5a9854672ddeec6b7?format=webp&width=800&height=1200"
          alt="Art of Makeup"
          className="w-full h-full object-cover"
          loading="lazy"
          srcSet={generateBuilderSrcSet("https://cdn.builder.io/api/v1/image/assets%2F37ad2b39330a492489c1a509e5a35af1%2F1d5f396cd5d94da5a9854672ddeec6b7", [400, 800, 1200, 1600])}
          sizes={getResponsiveSizes({ mobile: '100vw', tablet: '100vw', desktop: '100vw' })}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          style={{
            opacity: textOpacity,
            scale: textScale,
          }}
          className="font-display text-5xl md:text-7xl tracking-widest text-white leading-tight"
        >
          <span className="block">THE ART OF</span>
          <span className="block">MAKEUP</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default ArtOfMakeupSection;
