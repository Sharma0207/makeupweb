import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const UnderstatedBeautySection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scaleAnimation = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacityAnimation = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const yAnimation = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative bg-background"
      style={{
        scale: scaleAnimation,
        opacity: opacityAnimation,
        y: yAnimation
      }}
    >
      {/* Section title */}
      <div className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-secondary text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-6"
          >
            The Art of
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-primary font-display tracking-widest uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            Natural Beauty
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-8 font-body"
          >
            Every person has their own unique beauty. My approach is to enhance and celebrate your natural features, 
            not mask them. Through precise techniques and high-quality products, I create looks that make you feel 
            confident and beautiful.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default UnderstatedBeautySection;
