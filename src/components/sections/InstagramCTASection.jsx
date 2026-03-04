import { motion } from 'framer-motion';

const InstagramCTASection = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-black to-black/80 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        className="relative max-w-2xl mx-auto px-6 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white tracking-wide mb-4">
            Find Us On
          </h2>
          <p className="font-display text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
            Instagram
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base md:text-lg text-white/70 mb-8 md:mb-12 leading-relaxed"
        >
          Follow us on Instagram for daily makeup inspiration, behind-the-scenes moments, and exclusive transformations.
        </motion.p>

        {/* Instagram Button */}
        <motion.a
          href="https://www.instagram.com/makeupbyanchla/"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="inline-flex items-center justify-center group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
          <button className="relative px-8 md:px-12 py-4 md:py-5 bg-black rounded-full font-body font-semibold text-base md:text-lg text-white tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-3">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
            Follow Us
          </button>
        </motion.a>

        {/* Handle text */}
        <motion.p variants={itemVariants} className="font-body text-white/50 text-sm md:text-base mt-6">
          @makeupbyanchla
        </motion.p>
      </motion.div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default InstagramCTASection;
