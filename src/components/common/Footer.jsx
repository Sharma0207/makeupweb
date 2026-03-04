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
          href="mailto:anchalas133@gmail.com"
          className="inline-block mb-12 group"
        >
          <span className="font-display text-3xl md:text-5xl tracking-tight uppercase text-white border-b-2 border-white pb-3 md:pb-4 transition-all duration-300 group-hover:border-white/70">
            anchalas133@gmail.com
          </span>
        </motion.a>

        {/* Phone Number */}
        <motion.div variants={itemVariants} className="mb-8">
          <a
            href="tel:+919110939727"
            className="font-body text-sm md:text-base tracking-wide text-white/80 hover:text-white transition-colors duration-300"
          >
            +91 9110939727
          </a>
        </motion.div>

        {/* Address */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="font-body text-sm md:text-base tracking-wide text-white/80">
            Patna, Bihar, India
          </p>
        </motion.div>

        {/* Social Links - Instagram Only */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="https://www.instagram.com/makeupbyanchla/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g>
                <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"></path>
                <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"></path>
                <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"></path>
              </g>
            </svg>
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
