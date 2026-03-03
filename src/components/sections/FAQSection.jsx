import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../constants";

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-muted py-32 lg:py-44 border-t border-b border-primary/10">
      <div className="mx-auto max-w-4xl px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4 text-secondary"
          >
            Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            Frequently Asked
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left"
                whileHover={{ x: 5 }}
              >
                <div
                  className={`flex items-center justify-between p-6 border-b border-primary/10 transition-all duration-300 ${
                    expandedId === faq.id ? "bg-white" : "bg-background hover:bg-white/50"
                  }`}
                >
                  <h3 className="font-display text-base md:text-lg tracking-wide uppercase flex-1 text-primary">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-6 text-xl text-primary"
                  >
                    ↓
                  </motion.span>
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedId === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-b border-primary/10">
                      <p className="font-body text-base leading-relaxed text-primary/80">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-primary/10"
        >
          <p className="font-body text-primary/70 mb-6">
            Can't find the answer? Reach out to me directly!
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 font-body text-xs tracking-widest uppercase hover:bg-primary/90 transition-all duration-300 font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
