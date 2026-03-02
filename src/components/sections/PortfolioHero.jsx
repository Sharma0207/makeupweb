import React from "react";
import { motion } from "framer-motion";
import { categories } from "../../constants";

const PortfolioHero = ({ activeFilter, onFilterChange }) => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-[50vh] relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center z-10"
        >
          <h2 className="hero-title-bold">ALL</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center z-10 -mt-6"
        >
          <h2 className="hero-title-serif">WORK</h2>
        </motion.div>
      </div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center gap-6 md:gap-12 mt-12 flex-wrap px-4"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`nav-link text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase transition-all duration-300 ${
              activeFilter === cat ? "nav-link-active" : "text-secondary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioHero;
