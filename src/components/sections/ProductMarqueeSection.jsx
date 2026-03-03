import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brands = [
  "MAC",
  "NARS",
  "Urban Decay",
  "Charlotte Tilbury",
  "Fenty Beauty",
  "Bobbi Brown",
  "Anastasia Beverly Hills",
  "Too Faced",
];

const ProductMarqueeSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section ref={sectionRef} className="bg-muted py-16 lg:py-24 border-t border-b border-primary/10">
      <div className="relative">
        {/* Section Label */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body text-secondary"
          >
            Professional Tools
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-primary text-2xl md:text-3xl"
            style={{ transformOrigin: "center center" }}
          >
            Brands I Work With
          </motion.h2>
        </div>

        {/* Marquee */}
        <motion.div
          className="flex whitespace-nowrap gap-12"
          style={{ x }}
        >
          {/* First set */}
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 font-display text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase font-light text-primary/60 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {brand}
            </motion.div>
          ))}

          {/* Duplicate set for seamless loop */}
          {brands.map((brand, i) => (
            <motion.div
              key={`dup-${i}`}
              className="flex-shrink-0 font-display text-2xl md:text-3xl lg:text-4xl tracking-widest uppercase font-light text-primary/60 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>

        {/* Info text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm md:text-base font-body text-secondary mt-16"
        >
          Using only the finest professional-grade makeup brands to ensure quality, longevity, and the best results for your special moments.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductMarqueeSection;
