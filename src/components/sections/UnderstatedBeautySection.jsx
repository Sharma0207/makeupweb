import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const UnderstatedBeautySection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax on model image
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Full-width model image */}
      <div className="relative mx-auto max-w-6xl px-6 lg:px-16">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="overflow-hidden"
          style={{ scale: imageScale }}
        >
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fdc819d960ee1422c813bf93b1234e855?format=webp&width=1200&height=1200"
            alt="Understated Beauty - Anchala Sharma Makeup"
            className="w-full object-cover"
            loading="lazy"
            style={{ y: imageY }}
          />
        </motion.div>
      </div>

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
    </section>
  );
};

export default UnderstatedBeautySection;
