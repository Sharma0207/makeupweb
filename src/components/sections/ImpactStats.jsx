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
    <div className="bg-black rounded-lg px-6 md:px-8 py-8 md:py-12 mb-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3"
      >
        {impactStats.map((stat, index) => (
          <motion.div
            key={`stat-${index}`}
            variants={itemVariants}
            className="group"
          >
            <div className="relative p-3 md:p-4 border-b border-white/20 transition-all duration-300 group-hover:border-white/40">
              {/* Number - minimal */}
              <p className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white mb-1">
                {stat.number}
              </p>

              {/* Label - compact */}
              <p className="font-body text-xs md:text-sm tracking-wide text-white/60 group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImpactStats;
