import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../constants";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-background py-32 lg:py-44 border-t border-primary/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4 text-secondary"
          >
            Social Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            What Clients Say
          </motion.h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIndex].id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-primary/10 p-8 md:p-10"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-base leading-relaxed text-primary mb-8">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover border border-primary/10"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-display text-sm tracking-wide uppercase text-primary font-semibold">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="font-body text-xs text-secondary uppercase tracking-widest">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonials Grid (Desktop) */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 border transition-all duration-300 text-left ${
                    activeIndex === index
                      ? "border-primary bg-primary/5"
                      : "border-primary/20 hover:border-primary/40"
                  }`}
                >
                  <p className="font-display text-xs tracking-wide uppercase font-semibold text-primary line-clamp-2">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-secondary mt-1">
                    {testimonial.role}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Navigation Arrows (Mobile) */}
          <div className="flex lg:hidden justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
              →
            </motion.button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
                }`}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
