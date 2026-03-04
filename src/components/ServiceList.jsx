import { useState } from "react";
import { motion } from "framer-motion";

// Import service images
import serviceImage1 from "../assets/beforeafter/after1.jpeg";
import serviceImage2 from "../assets/beforeafter/after2.jpg";
import serviceImage3 from "../assets/beforeafter/after3.jpeg";

export const services = [
  {
    id: 1,
    number: "001",
    name: "Lash Extension",
    category: "EVERLASH",
    image: serviceImage1,
    description: "Premium lash extensions for a glamorous look",
  },
  {
    id: 2,
    number: "002",
    name: "Keratine Filler Lift",
    category: "EVERLASH",
    image: serviceImage2,
    description: "Nourishing lash treatment with lifting effect",
  },
  {
    id: 3,
    number: "003",
    name: "Stem Cell Lash Regrowth",
    category: "EVERLASH",
    image: serviceImage3,
    description: "Advanced lash growth and repair treatment",
  },
  {
    id: 4,
    number: "004",
    name: "Brow Bomber",
    category: "EYEBROW",
    image: serviceImage1,
    description: "Bold and defined eyebrow styling",
  },
  {
    id: 5,
    number: "005",
    name: "Brow & Face Threading",
    category: "EYEBROW",
    image: serviceImage2,
    description: "Precise threading for facial hair removal",
  },
  {
    id: 6,
    number: "006",
    name: "Manicure",
    category: "EVERNAILS",
    image: serviceImage3,
    description: "Complete nail care and styling",
  },
];

const ServiceList = ({ onHover }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleHover = (service) => {
    setHoveredId(service.id);
    onHover?.(service.image);
  };

  const handleHoverEnd = () => {
    setHoveredId(null);
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          onMouseEnter={() => handleHover(service)}
          onMouseLeave={handleHoverEnd}
          className="group cursor-pointer border-b border-black/10 pb-6 md:pb-8 last:border-b-0"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[10px] md:text-xs font-body tracking-[0.2em] uppercase text-black/60">
                  {service.number}
                </span>
                <h3 className="font-display text-lg md:text-xl text-foreground tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {service.name}
                </h3>
              </div>
              <p className="text-xs md:text-sm font-body tracking-[0.15em] uppercase text-black/50 group-hover:text-black/70 transition-colors duration-300">
                {service.category}
              </p>
            </div>
            <motion.div
              animate={{ x: hoveredId === service.id ? 4 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-black/40 group-hover:text-black/70 transition-colors duration-300"
            >
              <span className="text-lg md:text-xl">→</span>
            </motion.div>
          </div>
          <p className="text-xs md:text-sm font-body text-black/60 mt-3 group-hover:text-black/80 transition-colors duration-300">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceList;
