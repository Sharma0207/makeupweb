import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const QuoteSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const line1ScaleY = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);
  const line1Opacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);
  const line2ScaleY = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const line2Opacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-background h-full  py-32 lg:py-44 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="font-display text-[18px] tracking-wide md:text-[1.800rem] md:tracking-widest leading-snug text-primary">
          <motion.span
            style={{
              scaleY: line1ScaleY,
              opacity: line1Opacity,
              display: "inline-block",
              width: "100%",
              transformOrigin: "center center",
            }}
          >
            " Every face tells a story, and
          </motion.span>
          <motion.span
            style={{
              scaleY: line2ScaleY,
              opacity: line2Opacity,
              display: "inline-block",
              width: "100%",
              transformOrigin: "center center",
            }}
          >
            makeup is my brush to paint it. "
          </motion.span>
        </div>
      </div>
    </motion.section>
  );
};

export default QuoteSection;
