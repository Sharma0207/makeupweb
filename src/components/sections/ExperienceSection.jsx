import { motion } from "framer-motion";

const experiences = [
  {
    number: "500+",
    label: "Happy Clients",
    description: "Served makeup for weddings, events, and photoshoots",
  },
  {
    number: "10+",
    label: "Years Experience",
    description: "Professional makeup artistry and beauty expertise",
  },
  {
    number: "100+",
    label: "Events Completed",
    description: "Bridal, corporate, editorial, and special occasions",
  },
  {
    number: "24/7",
    label: "Availability",
    description: "Ready to work on your special day anytime",
  },
];

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
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
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-display tracking-widest uppercase text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)", transformOrigin: "center center" }}
          >
            Why Choose Me
          </motion.h2>
        </div>

        {/* Experience Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white border border-primary/10 rounded-lg p-8 text-center hover:border-primary/30 transition-all duration-500 h-full flex flex-col justify-center">
                {/* Number */}
                <div className="font-display text-4xl md:text-5xl text-primary mb-3 font-semibold">
                  {exp.number}
                </div>

                {/* Label */}
                <h3 className="font-display text-lg tracking-wide text-primary mb-3 uppercase">
                  {exp.label}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-secondary leading-relaxed">
                  {exp.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
