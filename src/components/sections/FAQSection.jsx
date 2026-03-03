import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What is your booking process?",
    answer:
      "To book a session, visit our contact page and fill out the form with your event details. I'll get back to you within 24 hours to confirm availability, discuss your vision, and finalize the booking.",
  },
  {
    id: 2,
    question: "Do you offer trial sessions before the event?",
    answer:
      "Yes! I highly recommend trial sessions for special occasions. This allows us to test looks, discuss preferences, and ensure you feel completely confident on your big day.",
  },
  {
    id: 3,
    question: "How long does a makeup session typically take?",
    answer:
      "A regular makeup session takes 30-45 minutes, while bridal makeup with trial usually takes 1.5-2 hours. The time may vary based on the complexity of the look requested.",
  },
  {
    id: 4,
    question: "What if I'm unsure about what makeup style I want?",
    answer:
      "Don't worry! I'll help guide you based on your face shape, skin tone, and personal style. Bring inspiration photos and let me know your preferences, and I'll create the perfect look for you.",
  },
  {
    id: 5,
    question: "Do you travel for events outside the city?",
    answer:
      "Yes, I do travel for special occasions like weddings and major events. Travel charges may apply depending on the distance. Please mention your location when booking.",
  },
  {
    id: 6,
    question: "Are your products hypoallergenic and cruelty-free?",
    answer:
      "I use only high-quality, professional-grade products from reputable brands. Many of the products I use are hypoallergenic and cruelty-free. Please inform me of any allergies or sensitivities beforehand.",
  },
];

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-primary text-white py-32 lg:py-44">
      <div className="mx-auto max-w-4xl px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase font-body mb-4 text-white/70"
          >
            Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            Frequently Asked
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
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
                whileHover={{ x: 10 }}
              >
                <div
                  className={`flex items-center justify-between p-6 border-b border-white/20 hover:border-white/40 transition-all duration-300 ${
                    expandedId === faq.id ? "border-white/40" : ""
                  }`}
                >
                  <h3 className="font-display text-lg md:text-xl tracking-wide uppercase flex-1">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-6 text-2xl"
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
                    <div className="p-6 bg-white/5 border-b border-white/20">
                      <p className="font-body text-base leading-relaxed text-white/90">
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
          className="text-center mt-16 pt-12 border-t border-white/20"
        >
          <p className="font-body text-white/80 mb-6">
            Can't find the answer? Reach out to me directly!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-body text-xs tracking-widest uppercase hover:bg-white/90 transition-all duration-300 font-semibold"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
