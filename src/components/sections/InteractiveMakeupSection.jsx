import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const makeupProducts = [
  {
    id: "kajal",
    number: "01",
    title: "KAJAL",
    description:
      "Define your eyes with precision. Our kajal is crafted to deliver intense color without smudging, creating a bold and timeless look that lasts all day.",
    category: "Eye Makeup",
    emoji: "🖤",
    position: { top: "25%", left: "45%" },
  },
  {
    id: "lipstick",
    number: "02",
    title: "LIPSTICK",
    description:
      "Luxurious color that complements your natural beauty. From subtle to bold, each shade is designed to enhance your lips with lasting vibrancy and comfort.",
    category: "Lip Color",
    emoji: "💋",
    position: { top: "55%", left: "35%" },
  },
  {
    id: "foundation",
    number: "03",
    title: "FOUNDATION",
    description:
      "Flawless coverage that feels lightweight. Our foundation blends seamlessly for an even, radiant complexion that enhances rather than masks your natural beauty.",
    category: "Base",
    emoji: "✨",
    position: { top: "45%", left: "65%" },
  },
  {
    id: "eyeshadow",
    number: "04",
    title: "EYESHADOW",
    description:
      "Rich pigments that blend effortlessly. Create depth and dimension with our eyeshadow palette, designed for both subtle everyday looks and dramatic evening wear.",
    category: "Eye Color",
    emoji: "👁️",
    position: { top: "30%", left: "70%" },
  },
  {
    id: "blush",
    number: "05",
    title: "BLUSH",
    description:
      "Natural flush of color that brings life to your cheeks. Perfectly pigmented to blend seamlessly and give you that fresh, radiant glow all day long.",
    category: "Cheek Color",
    emoji: "🌸",
    position: { top: "60%", left: "55%" },
  },
  {
    id: "mascara",
    number: "06",
    title: "MASCARA",
    description:
      "Volumize and lengthen your lashes. Our mascara formula coats every lash for dramatic impact without clumping, creating bold, beautiful eyes.",
    category: "Lash Definition",
    emoji: "💫",
    position: { top: "28%", left: "58%" },
  },
];

const MarqueeBackground = () => {
  const text = "BEAUTY IN EVERY DETAIL · ";
  const repeats = 8;
  const fullText = text.repeat(repeats);

  return (
    <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none z-[1]">
      <div className="marquee-track whitespace-nowrap">
        <span className="font-display text-[12vw] font-light tracking-[0.15em] uppercase select-none text-foreground/15 leading-none">
          {fullText}
        </span>
        <span className="font-display text-[12vw] font-light tracking-[0.15em] uppercase select-none text-foreground/15 leading-none">
          {fullText}
        </span>
      </div>
    </div>
  );
};

const InteractiveMakeupSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = makeupProducts[activeIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Marquee text in background */}
      <MarqueeBackground />

      {/* Model image - foreground, centered */}
      <div className="absolute inset-0 flex items-center justify-center z-[2]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fdc819d960ee1422c813bf93b1234e855?format=webp&width=1200&height=1200"
          alt="Makeup Model"
          className="h-full w-auto max-w-none object-cover"
          loading="eager"
        />
      </div>

      {/* Scattered number circles with blur effect */}
      <div className="absolute inset-0 z-[3]">
        {makeupProducts.map((product, i) => (
          <motion.button
            key={product.id}
            onClick={() => setActiveIndex(i)}
            className={`absolute w-14 h-14 rounded-full flex items-center justify-center font-display text-xs tracking-wider cursor-pointer transition-all duration-500 ${
              i === activeIndex
                ? "bg-white/40 text-foreground backdrop-blur-lg border border-white/60 shadow-lg"
                : "bg-white/20 text-foreground/80 backdrop-blur-md border border-white/30 hover:bg-white/35"
            }`}
            style={{
              top: product.position.top,
              left: product.position.left,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-semibold">{product.number}</span>
          </motion.button>
        ))}
      </div>

      {/* Description card - bottom left */}
      <div className="absolute bottom-12 left-12 z-[4] max-w-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-white/50"
          >
            <div className="flex gap-0">
              {/* Product thumbnail */}
              <div className="w-32 h-40 flex-shrink-0 bg-gradient-to-br from-pink-50 to-amber-50 flex items-center justify-center border-r border-white/30">
                <span className="text-5xl">{active.emoji}</span>
              </div>

              {/* Product details */}
              <div className="p-6 flex flex-col justify-center flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-lg text-gray-400">
                    {active.number}
                  </span>
                  <h3 className="font-display text-2xl tracking-[0.15em] text-gray-900 font-semibold">
                    {active.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 font-body text-xs leading-relaxed mb-3">
                  {active.description}
                </p>

                {/* Category */}
                <span className="text-gray-500 font-body text-xs tracking-widest uppercase">
                  {active.category}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveMakeupSection;
