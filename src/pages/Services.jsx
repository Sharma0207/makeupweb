import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const services = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    subtitle: "Custom Styling",
    description:
      "Your wedding day deserves flawless makeup that lasts through every moment. I create timeless, camera-ready looks that enhance your natural beauty while withstanding tears of joy and celebration.",
    details: ["Pre-bridal consultation", "Trial sessions", "Long-lasting formulas", "Touch-up kit included"],
  },
  {
    id: "party",
    title: "Party & Occasions",
    subtitle: "Glamour Focused",
    description:
      "From intimate gatherings to grand celebrations, I craft glamorous looks tailored to your personal style. Each design is customized to complement your outfit and boost your confidence.",
    details: ["Event preparation", "Customized looks", "Professional products", "Comfortable application"],
  },
  {
    id: "editorial",
    title: "Editorial & Shoots",
    subtitle: "Visionary Art",
    description:
      "For photographers and creatives, I bring artistic vision to life. Whether fashion editorial, portfolio shoots, or creative campaigns, my makeup enhances the visual narrative and stands out on camera.",
    details: ["Creative consultation", "High-definition makeup", "Fast turnaround", "Multi-look styling"],
  },
  {
    id: "bollywood",
    title: "Bollywood & Cultural",
    subtitle: "Heritage Beauty",
    description:
      "Celebrate your cultural heritage with makeup that honors traditions. From classic Indian bridal to contemporary ethnic fusion, I blend artistry with cultural authenticity.",
    details: ["Traditional techniques", "Ethnic color palettes", "Cultural sensitivity", "Detailed work"],
  },
  {
    id: "special",
    title: "Special FX & Creative",
    subtitle: "Imaginative Design",
    description:
      "Let imagination guide us. Whether fantasy, theatrical, or avant-garde looks, I create bold, artistic transformations that push creative boundaries.",
    details: ["Custom designs", "Prosthetics available", "Artistic consultation", "Unique concepts"],
  },
  {
    id: "personal",
    title: "Personal Consultation",
    subtitle: "Beauty Coaching",
    description:
      "Learn makeup techniques tailored to you. I offer personalized coaching to help you master looks, understand your features, and build confidence in your daily beauty routine.",
    details: ["One-on-one sessions", "Technique training", "Product recommendations", "Personalized tips"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Expertise
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-foreground leading-[1.1]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mt-6"
            >
              Comprehensive makeup artistry services designed to bring out your best self for every occasion.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className="group border border-primary/10 rounded-lg p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-lg"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-primary font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="font-body text-foreground/80 text-sm flex items-start gap-3"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">·</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="mt-8 px-6 py-2 border border-foreground/30 rounded-full font-body text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300 text-foreground">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-primary/10">
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
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                  Pricing varies based on service type, duration, and complexity. Each project is unique, and I'm happy to provide custom quotes based on your specific needs.
                </p>
                <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
                  Contact me for a consultation to discuss your vision and receive a personalized quote.
                </p>
                <a
                  href="/contact"
                  className="inline-block mt-6 px-6 py-2 bg-foreground text-background rounded-full font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-all duration-300"
                >
                  Get Quote
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-primary/10">
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
                  My Process
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
                  <p className="font-body text-muted-foreground text-sm md:text-base">
                    We discuss your vision, event details, and preferences. I understand your style and any specific requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-foreground text-lg mb-2">2. Planning</h3>
                  <p className="font-body text-muted-foreground text-sm md:text-base">
                    I create a customized makeup plan based on your features, outfit, and occasion. For bridal services, we schedule a trial.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-foreground text-lg mb-2">3. Application</h3>
                  <p className="font-body text-muted-foreground text-sm md:text-base">
                    Using professional-grade products and techniques, I apply makeup with precision, ensuring comfort and confidence.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-foreground text-lg mb-2">4. Perfection</h3>
                  <p className="font-body text-muted-foreground text-sm md:text-base">
                    Final touches and adjustments ensure you look and feel absolutely radiant for your moment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-foreground leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
            >
              Ready to Transform?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 mb-8"
            >
              Get in touch to book your service or schedule a consultation. I'm excited to work with you!
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              href="/contact"
              className="inline-block px-8 py-3 bg-foreground text-background rounded-full font-body text-xs tracking-widest uppercase hover:bg-foreground/90 transition-all duration-300"
            >
              Book Now
            </motion.a>
          </div>
        </section>

        {/* Footer spacer */}
        <div className="h-24" />
      </main>
    </div>
  );
};

export default Services;
