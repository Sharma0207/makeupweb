import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CTASection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Phase 1: Image expands from 35% to 100%
  const imageWidth = useTransform(scrollYProgress, [0, 0.05, 0.28], ["35%", "35%", "100%"]);
  const imageHeight = useTransform(scrollYProgress, [0, 0.05, 0.28], ["50%", "50%", "100%"]);

  // Phase 2: Card fades in and slides up
  const cardOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.85, 1], [0, 1, 1, 0]);
  const cardY = useTransform(scrollYProgress, [0.25, 0.48], [60, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "320vh" }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Expanding background overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-primary/30"
          style={{
            width: imageWidth,
            height: imageHeight,
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
        />

        {/* Elegant card — centered, appears after expansion */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4 md:px-6"
          style={{ opacity: cardOpacity, y: cardY }}
        >
          <div
            className="relative flex flex-col items-center text-center w-full"
            style={{
              maxWidth: "640px",
              padding: "0",
            }}
          >
            {/* Content container */}
            <div className="px-6 md:px-12 py-10 md:py-16">
              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xs md:text-sm tracking-[0.4em] uppercase font-body mb-6 text-secondary/80"
              >
                Your Next Moment
              </motion.p>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-display text-primary tracking-wider uppercase mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  lineHeight: 1.2,
                  letterSpacing: "0.08em",
                }}
              >
                Ready to Glow?
              </motion.h2>

              {/* Body text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="font-body text-sm md:text-base leading-relaxed text-secondary/75 mb-10"
                style={{ maxWidth: "520px", margin: "0 auto 40px" }}
              >
                Let's create a look that makes you feel confident, beautiful, and absolutely radiant. Book a consultation or session today.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 md:px-12 py-3 md:py-4 font-body text-xs tracking-[0.3em] uppercase font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                >
                  Book Now
                </a>
                <a
                  href="/portfolio"
                  className="inline-block border border-primary/60 text-primary px-8 md:px-12 py-3 md:py-4 font-body text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:border-primary hover:bg-primary/5"
                >
                  View Portfolio
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
