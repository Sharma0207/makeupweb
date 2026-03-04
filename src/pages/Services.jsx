import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceList, { services } from "../components/ServiceList";

const Services = () => {
  const [currentImage, setCurrentImage] = useState(services[0].image);
  const [displayedImage, setDisplayedImage] = useState(services[0].image);
  const [fading, setFading] = useState(false);

  // Animate image transition
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
        <div className="w-full lg:w-[48%] h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-black/5">
          <motion.img
            src={displayedImage}
            alt="Beauty service"
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
        <div className="w-full lg:w-[52%] pt-12 pb-16 md:pt-16 lg:pt-12 lg:pb-24 px-6 md:px-10 lg:px-12 lg:pr-16 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12 md:mb-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-black/60 font-body mb-4">
                Our Services
              </p>
              <h1
                className="font-display text-foreground leading-[1.1] mb-4"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                Beauty <span className="block">Treatments</span>
              </h1>
              <p className="font-body text-black/70 text-sm md:text-base leading-relaxed max-w-sm">
                Discover our comprehensive range of premium beauty and lash services designed to enhance your natural beauty.
              </p>
            </div>

            {/* Services List */}
            <ServiceList onHover={setCurrentImage} />
          </motion.div>
        </div>
      </main>

      {/* Pricing Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-black/10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="font-display text-foreground tracking-[0.15em] text-lg md:text-xl uppercase">
                Pricing
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 space-y-4"
            >
              <p className="font-body text-black/70 text-sm md:text-base leading-relaxed">
                Each service is customized to your unique needs and preferences. Pricing varies based on service type, duration, and complexity.
              </p>
              <p className="font-body text-black/70 text-sm md:text-base leading-relaxed">
                Contact us for a personalized consultation and detailed quote for your desired services.
              </p>
              <a
                href="/contact"
                className="inline-block mt-6 px-6 py-2 bg-foreground text-white rounded-full font-body text-xs tracking-widest uppercase hover:bg-black/90 transition-all duration-300"
              >
                Get Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-black/10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="font-display text-foreground tracking-[0.15em] text-lg md:text-xl uppercase">
                Our Process
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 space-y-6"
            >
              <div>
                <h3 className="font-display text-foreground text-lg mb-2">1. Consultation</h3>
                <p className="font-body text-black/70 text-sm md:text-base">
                  We discuss your beauty goals, preferences, and any specific requirements. Understanding your vision is our priority.
                </p>
              </div>
              <div>
                <h3 className="font-display text-foreground text-lg mb-2">2. Planning</h3>
                <p className="font-body text-black/70 text-sm md:text-base">
                  We create a customized treatment plan tailored to your features, preferences, and desired results.
                </p>
              </div>
              <div>
                <h3 className="font-display text-foreground text-lg mb-2">3. Application</h3>
                <p className="font-body text-black/70 text-sm md:text-base">
                  Using premium products and expert techniques, we apply treatments with precision and care for maximum comfort.
                </p>
              </div>
              <div>
                <h3 className="font-display text-foreground text-lg mb-2">4. Perfection</h3>
                <p className="font-body text-black/70 text-sm md:text-base">
                  Final touches ensure you look radiant and feel confident with results that exceed expectations.
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
            Ready to Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-black/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 mb-8"
          >
            Book your appointment today and discover the transformation our services can bring to your beauty routine.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="/contact"
            className="inline-block px-8 py-3 bg-foreground text-white rounded-full font-body text-xs tracking-widest uppercase hover:bg-black/90 transition-all duration-300"
          >
            Book Now
          </motion.a>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-24" />
    </div>
  );
};

export default Services;
