import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "../../constants";

const gridPattern = [
  { position: "left", widthClass: "w-[45%]", alignClass: "mr-auto" },
  { position: "right", widthClass: "w-[48%]", alignClass: "ml-auto -mt-[15%]" },
  { position: "center", widthClass: "w-[40%]", alignClass: "mx-auto" },
  {
    position: "full-right",
    widthClass: "w-[55%]",
    alignClass: "ml-auto -mt-[10%]",
  },
  {
    position: "full-left",
    widthClass: "w-[42%]",
    alignClass: "mr-auto -mt-[8%]",
  },
  { position: "right", widthClass: "w-[50%]", alignClass: "ml-auto" },
  { position: "left", widthClass: "w-[38%]", alignClass: "mr-auto -mt-[12%]" },
  { position: "center", widthClass: "w-[45%]", alignClass: "mx-auto" },
  {
    position: "full-left",
    widthClass: "w-[48%]",
    alignClass: "mr-auto -mt-[5%]",
  },
];

const defaultSlot = {
  position: "center",
  widthClass: "w-[45%]",
  alignClass: "mx-auto",
};

const PortfolioCard = React.forwardRef(({ item, index, slot }, ref) => {
  const safeSlot = slot || defaultSlot;
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`${safeSlot.widthClass} ${safeSlot.alignClass} mb-8`}
    >
      <div className="portfolio-item group relative overflow-hidden bg-gray-50">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="portfolio-overlay flex flex-col items-center justify-center bg-black/40 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-6">
          <span className="text-primary-foreground font-body text-xs tracking-[0.15em] uppercase mb-1">
            {item.category}
          </span>
          <h3 className="text-primary-foreground font-display text-2xl">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
});

PortfolioCard.displayName = "PortfolioCard";

const PortfolioGrid = ({ activeFilter }) => {
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="px-4 md:px-8 pb-32 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const slot = gridPattern[index % gridPattern.length];
            return (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                slot={slot}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioGrid;
