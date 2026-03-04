import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceList, { services } from "../components/ServiceList";

const Services = () => {
  const [currentImage, setCurrentImage] = useState(services[0].image);
  const [displayedImage, setDisplayedImage] = useState(services[0].image);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (currentImage !== displayedImage) {
      setFading(true);
      const timeout = setTimeout(() => {
        setDisplayedImage(currentImage);
        setFading(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentImage, displayedImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Services Section */}
      <main className="flex flex-col lg:flex-row min-h-screen pt-20">
        {/* Left: Hero Image - Sticky */}
        <div className="w-full lg:w-[48%] h-[50vh] lg:h-screen sticky top-0 overflow-hidden bg-black/5">
          <motion.img
            src={displayedImage}
            alt="Makeup service"
            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              fading ? "opacity-0" : "opacity-100"
            }`}
            key={displayedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: fading ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Right: Service List */}
        <div className="w-full lg:w-[52%] pt-12 pb-16 md:pt-16 lg:pt-20 lg:pb-24 px-6 md:px-10 lg:px-12 lg:pr-16 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ServiceList onHover={setCurrentImage} />
          </motion.div>
        </div>
      </main>

      {/* My Approach Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="font-display text-white tracking-[0.15em] text-lg md:text-xl uppercase">
                My Approach
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 space-y-8"
            >
              <div>
                <h3 className="font-display text-white text-lg mb-3">1. Consultation</h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                  We discuss your vision, preferences, and event details. Understanding your style and requirements is the first step to creating the perfect look.
                </p>
              </div>
              <div>
                <h3 className="font-display text-white text-lg mb-3">2. Planning</h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                  I create a customized makeup plan tailored to your features, skin tone, and desired results. For special occasions, we schedule trial sessions.
                </p>
              </div>
              <div>
                <h3 className="font-display text-white text-lg mb-3">3. Application</h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                  Using premium products and professional techniques, I apply makeup with precision and care, ensuring your comfort throughout the process.
                </p>
              </div>
              <div>
                <h3 className="font-display text-white text-lg mb-3">4. Perfection</h3>
                <p className="font-body text-white/70 text-sm md:text-base leading-relaxed">
                  Final touches and adjustments ensure you look absolutely radiant and feel confident for your moment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-black/10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-foreground leading-[1.2]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
          >
            Ready to Book?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-black/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 mb-8"
          >
            Get in touch to book your service or schedule a consultation today.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="/contact"
            className="inline-block px-8 py-3 bg-foreground text-white rounded-full font-body text-xs tracking-widest uppercase hover:bg-black/90 transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-24" />
    </div>
  );
};

export default Services;
