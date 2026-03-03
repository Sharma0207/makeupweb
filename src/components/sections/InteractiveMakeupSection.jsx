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

      {/* Scattered number circles */}
      <div className="absolute inset-0 z-[3]">
        {makeupProducts.map((product, i) => (
          <motion.button
            key={product.id}
            onClick={() => setActiveIndex(i)}
            className={`absolute w-16 h-16 rounded-full flex items-center justify-center font-display text-sm tracking-wider cursor-pointer transition-all duration-500 ${
              i === activeIndex
                ? "bg-foreground/30 text-foreground backdrop-blur-md border border-foreground/50"
                : "bg-foreground/15 text-foreground/70 backdrop-blur-md border border-foreground/20 hover:bg-foreground/25 hover:text-foreground"
            }`}
            style={{
              top: product.position.top,
              left: product.position.left,
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">{product.emoji}</span>
          </motion.button>
        ))}
      </div>

      {/* White detail card - bottom left */}
      <div className="absolute bottom-8 left-8 z-[4] max-w-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card-surface rounded-lg p-8 shadow-2xl"
          >
            {/* Product number and title */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-display text-2xl text-card-text/50 font-light">
                {active.number}
              </span>
              <h3 className="font-display text-3xl tracking-[0.25em] text-card-text font-medium">
                {active.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-card-text/75 font-body text-sm leading-relaxed mb-6">
              {active.description}
            </p>

            {/* Category tag */}
            <div className="flex items-center gap-2">
              <span className="text-card-text/40 font-body text-xs tracking-[0.2em] uppercase">
                Category:
              </span>
              <span className="text-card-text/70 font-body text-sm font-medium">
                {active.category}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top nav bar */}
      <header className="absolute top-0 left-0 right-0 z-[5] flex items-center justify-between px-8 py-6">
        <button className="text-foreground">
          <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
            <line x1="0" y1="1" x2="28" y2="1" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="9" x2="28" y2="9" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="17" x2="28" y2="17" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <span className="font-display text-2xl tracking-[0.35em] text-foreground font-medium">
          EVER
        </span>
        <span className="font-body text-xs tracking-[0.2em] uppercase text-foreground">
          Makeup Products
        </span>
      </header>
    </section>
  );
};

export default InteractiveMakeupSection;
