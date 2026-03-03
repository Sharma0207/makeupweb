import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-black text-white relative">
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-6 lg:px-16 py-24 lg:py-32 text-center"
      >
        {/* Header Label */}
        <motion.p
          variants={itemVariants}
          className="font-body text-xs md:text-sm tracking-[0.35em] uppercase mb-8 text-white/70"
        >
          Get In Touch
        </motion.p>

        {/* Email Link - Large & Prominent */}
        <motion.a
          variants={itemVariants}
          href="mailto:anchala@example.com"
          className="inline-block mb-12 group"
        >
          <span className="font-display text-3xl md:text-5xl tracking-tight uppercase text-white border-b-2 border-white pb-3 md:pb-4 transition-all duration-300 group-hover:border-white/70">
            anchala@makeup.com
          </span>
        </motion.a>

        {/* Phone Number */}
        <motion.div variants={itemVariants} className="mb-12">
          <a
            href="tel:+919876543210"
            className="font-body text-sm md:text-base tracking-wide text-white/80 hover:text-white transition-colors duration-300"
          >
            +91 98765 43210
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 md:gap-8 justify-center items-center mb-16"
        >
          <motion.a
            href="https://instagram.com/makeupbyanchla"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white transition-all duration-300"
          >
            Instagram
          </motion.a>

          <div className="w-px h-6 bg-white/30" />

          <motion.a
            href="https://pinterest.com/makeupbyanchla"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white transition-all duration-300"
          >
            Pinterest
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-16 py-6 text-center"
      >
        <p className="font-body text-xs text-white/50 uppercase tracking-[0.2em]">
          © {currentYear} Makeup by Anchla &nbsp;
          <span className="text-white/30">·</span>&nbsp;
          Site by{" "}
          <a
            href="https://www.flexirl.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white/70 transition-colors duration-300 border-b border-white/30 hover:border-white/70"
          >
            Flexirl
          </a>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
