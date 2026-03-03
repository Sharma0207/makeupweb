import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * StackedWrapper applies a sticky stacking effect to its children.
 * As the user scrolls, the current section scales down slightly while the next one slides over it.
 * Only active on mobile devices (md breakpoint and below).
 */
const StackedWrapper = ({ children, index, totalSections }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale down slightly as it leaves (except for the last section)
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index === totalSections - 1 ? 1 : 0.9]
  );

  // Fade out slightly as it leaves (except for the last section)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, index === totalSections - 1 ? 1 : 0.7]
  );

  return (
    <div
      ref={containerRef}
      className="sticky top-0 w-full md:min-h-screen overflow-hidden md:static"
      style={{ zIndex: index + 10 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StackedWrapper;
