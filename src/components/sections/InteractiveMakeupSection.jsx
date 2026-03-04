import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to get position based on screen size
const getPosition = (positionObj, isDesktop) => {
  if (!positionObj) return { top: "50%", left: "50%" };
  // Use lg (desktop) position if screen is >= 900px, otherwise use base (mobile)
  return isDesktop && positionObj.lg ? positionObj.lg : positionObj.base;
};

const makeupProducts = [
  {
    id: "kajal",
    number: "01",
    title: "KAJAL",
    description:
      "I enhance the eyes using deep kajal to define the waterline and create a bold, expressive look. It adds depth to the eyes and completes traditional as well as modern makeup styles while staying long-lasting and smudge resistant.",
    category: "Eye Makeup",
    emoji: "🖤",
    position: {
      base: { top: "32%", left: "45%" }, // mobile (< 900px)
      lg: { top: "32%", left: "47%" }, // desktop (>= 900px)
    },
  },
  {
    id: "lipstick",
    number: "02",
    title: "LIPSTICK",
    description:
      "I carefully select lipstick shades that complement the skin tone, outfit, and overall makeup style. From soft nude tones to bold bridal reds, I ensure the lip color enhances the face and stays fresh throughout the event.",
    category: "Lip Makeup",
    emoji: "💋",
    position: {
      base: { top: "49%", left: "48%" }, // mobile
      lg: { top: "49%", left: "50%" }, // desktop
    },
  },
  {
    id: "foundation",
    number: "03",
    title: "FOUNDATION",
    description:
      "I apply professional HD foundation techniques to create a smooth and flawless base. Using high-quality products suited to the client's skin type, I blend the foundation seamlessly for a natural, radiant, and long-lasting finish.",
    category: "Base Makeup",
    emoji: "✨",
    position: {
      base: { top: "42%", left: "20%" }, // mobile
      lg: { top: "43%", left: "56%" }, // desktop
    },
  },
  {
    id: "eyeshadow",
    number: "04",
    title: "EYESHADOW",
    description:
      "I design custom eyeshadow looks that match the outfit and occasion, from soft bridal shimmer to bold glam styles. By blending premium pigments and textures, I create depth, dimension, and beautifully defined eyes.",
    category: "Eye Makeup",
    emoji: "👁️",
    position: {
      base: { top: "31%", left: "85%" }, // mobile
      lg: { top: "32%", left: "55%" }, // desktop
    },
  },
  {
    id: "blush",
    number: "05",
    title: "BLUSH",
    description:
      "I apply blush to bring warmth and natural glow to the face. The shade and placement are chosen carefully to enhance facial features and give a healthy, radiant finish that looks beautiful both in person and on camera.",
    category: "Face Makeup",
    emoji: "🌸",
    position: {
      base: { top: "35%", left: "30%" }, // mobile
      lg: { top: "40%", left: "42%" }, // desktop
    },
  },
  {
    id: "mascara",
    number: "06",
    title: "MASCARA",
    description:
      "I finish the eye makeup by applying mascara to lift, lengthen, and volumize the lashes. This step opens up the eyes and adds the final touch of drama and elegance to the complete makeup look.",
    category: "Lash Enhancement",
    emoji: "💫",
    position: {
      base: { top: "26%", left: "22%" }, // mobile
      lg: { top: "25%", left: "59%" }, // desktop
    },
  },
];

const MarqueeBackground = () => {
  const text = "ANCHMAHALA";
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const active = makeupProducts[activeIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Marquee text in background */}
      <MarqueeBackground />

      {/* Model image - foreground, centered */}
      <div className="absolute inset-0 flex items-center justify-center z-[2]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fd555ff5d715946eea839700686a8452e%2F5afe148e7955446c981b8ef1e6be66e5?format=webp&width=800&height=1200"
          alt="Makeup Model"
          className="h-full w-auto max-w-none object-cover"
          style={{ transform: "rotate(-90deg)" }}
          loading="eager"
        />
      </div>

      {/* Scattered number circles with blur effect */}
      <div className="absolute inset-0 z-[3]">
        {makeupProducts.map((product, i) => {
          const pos = getPosition(product.position, isDesktop);
          return (
            <motion.button
              key={product.id}
              onClick={() => setActiveIndex(i)}
              className={`absolute w-14 h-14 rounded-full flex items-center justify-center font-display text-xs tracking-wider cursor-pointer transition-all duration-500 ${
                i === activeIndex
                  ? "bg-white/40 text-foreground backdrop-blur-lg border border-white/60 shadow-lg"
                  : "bg-white/20 text-foreground/80 backdrop-blur-md border border-white/30 hover:bg-white/35"
              }`}
              style={{
                top: pos.top,
                left: pos.left,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">{product.number}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Description card - bottom left */}
      <div className="absolute bottom-12 left-12 z-[4] max-w-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-white/50 p-6"
          >
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-display text-lg text-gray-400">
                {active.number}
              </span>
              <h3 className="font-display text-2xl tracking-[0.15em] text-gray-900 font-semibold">
                {active.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-700 font-body text-xs leading-relaxed mb-4">
              {active.description}
            </p>

            {/* Category */}
            <span className="text-gray-500 font-body text-xs tracking-widest uppercase mb-4 block">
              {active.category}
            </span>

            {/* Services CTA Button */}
            <a
              href="/services"
              className="inline-block bg-foreground text-white px-6 py-2 rounded-full font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveMakeupSection;
