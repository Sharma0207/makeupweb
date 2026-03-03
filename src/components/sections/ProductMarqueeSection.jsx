import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const brands = [
  {
    id: 1,
    name: "Cetaphil",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0f3d8ce9c1c24823a40f1821b771e9ad%2F3c3b2858d1bc4844986d592d0b2fd624?format=webp&width=800&height=1200",
  },
  {
    id: 2,
    name: "Forever 52",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0f3d8ce9c1c24823a40f1821b771e9ad%2F8f0345b719bf4f6891f66374b3d58491?format=webp&width=800&height=1200",
  },
  {
    id: 3,
    name: "Huda Beauty",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0f3d8ce9c1c24823a40f1821b771e9ad%2Fef5417fd41234211aa2596fc601981f6?format=webp&width=800&height=1200",
  },
  {
    id: 4,
    name: "Kay Beauty",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0f3d8ce9c1c24823a40f1821b771e9ad%2F67d8ea7fcb5246f5b59ec3bb0e927e64?format=webp&width=800&height=1200",
  },
  {
    id: 5,
    name: "NARS",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0f3d8ce9c1c24823a40f1821b771e9ad%2Fa39b4c0e7331470991ecc48ae49b0cbd?format=webp&width=800&height=1200",
  },
  {
    id: 6,
    name: "Recode",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0f3d8ce9c1c24823a40f1821b771e9ad%2Fa5562756d45544efa832403f44684c55?format=webp&width=800&height=1200",
  },
  {
    id: 7,
    name: "Sugar",
    logo: "https://cdn.builder.io/api/v1/image/assets%2F0f3d8ce9c1c24823a40f1821b771e9ad%2F406a0ba06ce84cff8405fddd6499092f?format=webp&width=800&height=1200",
  },
];

const ProductMarqueeSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone the marquee content for seamless loop
    const marqueeContent = marquee.querySelector(".marquee-content");
    if (marqueeContent) {
      const clone = marqueeContent.cloneNode(true);
      marquee.appendChild(clone);
    }
  }, []);

  return (
    <section className="bg-muted py-16 lg:py-24 border-t border-b border-primary/10">
      <div className="relative">
        {/* Section Label */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body text-secondary"
          >
            Professional Brands
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

        {/* Marquee Container */}
        <div className="relative overflow-hidden bg-white/50 py-12">
          <div
            ref={marqueeRef}
            className="flex"
            style={{
              animation: "scroll-marquee 30s linear infinite",
            }}
          >
            {/* First set of logos */}
            <div className="marquee-content flex gap-12 flex-shrink-0 pr-12">
              {brands.map((brand) => (
                <motion.div
                  key={`${brand.id}-1`}
                  className="flex items-center justify-center flex-shrink-0 h-20"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full object-contain max-w-[150px] filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Info text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-sm md:text-base font-body text-secondary mt-12"
        >
          Using only the finest professional-grade makeup brands to ensure quality, longevity, and the best results for your special moments.
        </motion.p>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes scroll-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [ref="marqueeRef"] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductMarqueeSection;
