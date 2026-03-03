import { motion } from "framer-motion";
import { impactStats } from "../../constants";

const ImpactStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20"
    >
      {impactStats.map((stat, index) => (
        <motion.div
          key={`stat-${index}`}
          variants={itemVariants}
          className="relative overflow-hidden rounded-lg group"
        >
          {/* Gradient background layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Main content container */}
          <div className="relative bg-white border border-primary/20 p-6 md:p-8 rounded-lg transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:-translate-y-2">
            {/* Emoji accent */}
            <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {stat.emoji}
            </div>

            {/* Number with creative styling */}
            <div className="mb-3">
              <p className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80">
                {stat.number}
              </p>
            </div>

            {/* Label with fun formatting */}
            <p className="font-body text-sm md:text-base tracking-wide uppercase font-semibold text-secondary/80 group-hover:text-secondary transition-colors duration-300">
              {stat.label}
            </p>

            {/* Decorative line */}
            <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary/40 to-transparent transition-all duration-300" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImpactStats;
