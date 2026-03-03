import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative bg-primary text-white py-32 lg:py-48 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-6 text-white/80"
        >
          Ready to Transform
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-display text-white tracking-widest uppercase mb-8"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", transformOrigin: "center center" }}
        >
          Your Look
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12 font-body text-white/90"
        >
          Book a consultation or special occasion makeup session with me. Let's create a look that makes you feel confident and beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-body text-xs tracking-widest uppercase hover:bg-white/90 transition-all duration-300 font-semibold"
          >
            Book Now
          </a>
          <a
            href="/portfolio"
            className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-body text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
