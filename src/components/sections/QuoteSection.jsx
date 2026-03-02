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
    <section ref={sectionRef} className="bg-background py-32 lg:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="font-display text-3xl md:text-5xl tracking-widest leading-relaxed text-primary">
          <motion.span
            style={{
              scaleY: line1ScaleY,
              opacity: line1Opacity,
              display: "inline-block",
              width: "100%",
              transformOrigin: "center center",
            }}
          >
            " Every face tells a story,
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
            and makeup is my brush to paint it. "
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-secondary text-sm md:text-base tracking-widest uppercase font-body">
            — Anchala Sharma
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
