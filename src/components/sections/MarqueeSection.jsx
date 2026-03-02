import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MarqueeSection = () => {
  const text = "MAKEUP ARTISTRY • BRIDAL EXCELLENCE • CREATIVE VISION";
  const separator = " • ";
  const repeated = Array(15).fill(text + separator).join("");

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-driven horizontal shift for parallax marquee feel
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-background py-16 lg:py-24 border-y border-primary/10">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div className="flex whitespace-nowrap" style={{ x }}>
          <span className="text-primary text-lg lg:text-2xl tracking-widest font-display uppercase inline-block">
            {repeated}
          </span>
          <span className="text-primary text-lg lg:text-2xl tracking-widest font-display uppercase inline-block">
            {repeated}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MarqueeSection;
