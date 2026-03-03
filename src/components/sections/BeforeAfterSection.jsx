import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop",
    title: "Bridal Glow",
    description: "Radiant and elegant for the special day",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=500&h=500&fit=crop",
    title: "Editorial Look",
    description: "Bold and artistic for photoshoots",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    after: "https://images.unsplash.com/photo-1512207736139-c97394bf8c1e?w=500&h=500&fit=crop",
    title: "Party Ready",
    description: "Glamorous and fun for celebrations",
  },
];

const BeforeAfterSection = () => {
  const [sliderPositions, setSliderPositions] = useState(
    transformations.reduce((acc, t) => ({ ...acc, [t.id]: 50 }), {})
  );

  const handleSliderChange = (id, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPositions((prev) => ({ ...prev, [id]: Math.min(100, Math.max(0, newPosition)) }));
  };

  return (
    <section className="bg-black py-32 lg:py-44 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4 text-white/60"
          >
            Transformations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            Before & After
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 font-body text-sm md:text-base mt-6 max-w-xl mx-auto"
          >
            Drag the slider to see the incredible transformations I create. Each look is tailored to bring out your best.
          </motion.p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Before/After Slider */}
              <div className="mb-6 cursor-grab active:cursor-grabbing border border-white/10">
                <div
                  className="relative w-full aspect-square bg-muted"
                  onMouseMove={(e) => handleSliderChange(transformation.id, e)}
                  onTouchMove={(e) =>
                    handleSliderChange(
                      transformation.id,
                      Object.assign(e.touches[0], {
                        currentTarget: e.currentTarget,
                      })
                    )
                  }
                >
                  {/* After Image (Base) */}
                  <img
                    src={transformation.after}
                    alt="After"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Before Image (Overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPositions[transformation.id]}%` }}
                  >
                    <img
                      src={transformation.before}
                      alt="Before"
                      className="w-full h-full object-cover"
                      style={{ width: `${(100 / sliderPositions[transformation.id]) * 100}%` }}
                      loading="lazy"
                    />
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-primary/30"
                    style={{ left: `${sliderPositions[transformation.id]}%` }}
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-8 h-8 flex items-center justify-center shadow-lg border-2 border-primary/20">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-4 bg-primary"></div>
                        <div className="w-0.5 h-4 bg-primary"></div>
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 font-body text-xs font-semibold uppercase tracking-wider text-white bg-black/40 px-3 py-1 backdrop-blur">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 font-body text-xs font-semibold uppercase tracking-wider text-white bg-black/40 px-3 py-1 backdrop-blur">
                    After
                  </div>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="font-display text-lg tracking-wide uppercase text-white mb-2">
                {transformation.title}
              </h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                {transformation.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
