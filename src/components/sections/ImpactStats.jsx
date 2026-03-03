import { motion } from "framer-motion";
import { impactStats } from "../../constants";

const ImpactStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-12"
    >
      {impactStats.map((stat, index) => (
        <motion.div
          key={`stat-${index}`}
          variants={itemVariants}
          className="group"
        >
          <div className="relative bg-white/60 backdrop-blur-sm border border-primary/15 p-3 md:p-4 rounded-md transition-all duration-300 group-hover:border-primary/40 group-hover:bg-white/80 group-hover:shadow-md">
            {/* Emoji accent - doubled up */}
            <div className="text-2xl md:text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
              {stat.emoji}{stat.emoji}
            </div>

            {/* Number - minimal */}
            <p className="font-display text-2xl md:text-3xl font-bold tracking-tight text-primary mb-1">
              {stat.number}
            </p>

            {/* Label - compact */}
            <p className="font-body text-xs md:text-sm tracking-wide font-semibold text-secondary/70 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImpactStats;
