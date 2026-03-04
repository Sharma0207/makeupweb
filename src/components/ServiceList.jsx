import { useState } from "react";
import { motion } from "framer-motion";

// Import service images
import serviceImage1 from "../assets/beforeafter/after1.jpeg";
import serviceImage2 from "../assets/beforeafter/after2.jpg";
import serviceImage3 from "../assets/beforeafter/after3.jpeg";

export const services = [
  // Party Makeup Services
  {
    id: 1,
    number: "001",
    name: "Party Makeup - Basic",
    category: "MAKEUP",
    image: serviceImage1,
    description: "Professional party makeup for everyday glamour",
  },
  {
    id: 2,
    number: "002",
    name: "Party Makeup - HD",
    category: "MAKEUP",
    image: serviceImage2,
    description: "High-definition party makeup with premium products",
  },
  {
    id: 3,
    number: "003",
    name: "Party Makeup - Airbrush",
    category: "MAKEUP",
    image: serviceImage3,
    description: "Flawless airbrush makeup for long-lasting coverage",
  },

  // Engagement Look Services
  {
    id: 4,
    number: "004",
    name: "Engagement Look - Basic",
    category: "MAKEUP",
    image: serviceImage1,
    description: "Beautiful makeup for your engagement celebration",
  },
  {
    id: 5,
    number: "005",
    name: "Engagement Look - HD",
    category: "MAKEUP PREMIUM",
    image: serviceImage2,
    description: "High-definition engagement makeup with camera-ready finish",
  },
  {
    id: 6,
    number: "006",
    name: "Engagement Look - Airbrush",
    category: "MAKEUP PREMIUM",
    image: serviceImage3,
    description: "Premium airbrush engagement makeup for perfection",
  },

  // Bridal Makeup Services
  {
    id: 7,
    number: "007",
    name: "Bridal Makeup - Basic",
    category: "BRIDAL",
    image: serviceImage1,
    description: "Timeless bridal makeup for your special day",
  },
  {
    id: 8,
    number: "008",
    name: "Bridal Makeup - HD",
    category: "BRIDAL",
    image: serviceImage2,
    description: "High-definition bridal makeup with premium finishes",
  },
  {
    id: 9,
    number: "009",
    name: "Bridal Makeup - Airbrush",
    category: "BRIDAL",
    image: serviceImage3,
    description: "Flawless airbrush bridal makeup for your big moment",
  },

  // Reception Bride Makeover Services
  {
    id: 10,
    number: "010",
    name: "Reception Bridal Makeover - Basic",
    category: "BRIDAL",
    image: serviceImage1,
    description: "Fresh makeup touch-up for reception celebrations",
  },
  {
    id: 11,
    number: "011",
    name: "Reception Bridal Makeover - HD",
    category: "BRIDAL PREMIUM",
    image: serviceImage2,
    description: "Complete reception makeover with HD finishing",
  },
  {
    id: 12,
    number: "012",
    name: "Reception Bridal Makeover - Airbrush",
    category: "BRIDAL PREMIUM",
    image: serviceImage3,
    description: "Premium airbrush reception makeover for radiance",
  },

  // Editorial & Creative Services
  {
    id: 13,
    number: "013",
    name: "Editorial Makeup",
    category: "EDITORIAL",
    image: serviceImage1,
    description: "Creative makeup for photoshoots, fashion editorials, and portfolios",
  },
  {
    id: 14,
    number: "014",
    name: "Editorial Makeup - High Fashion",
    category: "EDITORIAL",
    image: serviceImage2,
    description: "Artistic makeup for high-fashion and creative campaigns",
  },

  // Makeup Tuition & Training
  {
    id: 15,
    number: "015",
    name: "Makeup Tuition - One-on-One",
    category: "EDUCATION",
    image: serviceImage3,
    description: "Personal makeup lessons tailored to your skill level and goals",
  },
  {
    id: 16,
    number: "016",
    name: "Makeup Tuition - Group Sessions",
    category: "EDUCATION",
    image: serviceImage1,
    description: "Group makeup workshops and training sessions",
  },
  {
    id: 17,
    number: "017",
    name: "Makeup Tuition - Bridal Training",
    category: "EDUCATION",
    image: serviceImage2,
    description: "Specialized training for bridal makeup application",
  },

  // Additional Services
  {
    id: 18,
    number: "018",
    name: "Trial Makeup Session",
    category: "CONSULTATION",
    image: serviceImage3,
    description: "Pre-event trial session to perfect your makeup look",
  },
  {
    id: 19,
    number: "019",
    name: "Makeup Touch-Up Service",
    category: "SERVICES",
    image: serviceImage1,
    description: "Professional makeup touch-ups during your event",
  },
  {
    id: 20,
    number: "020",
    name: "Special Effects Makeup",
    category: "CREATIVE",
    image: serviceImage2,
    description: "Creative and artistic special effects makeup",
  },
  {
    id: 21,
    number: "021",
    name: "Bridal Party Makeup",
    category: "BRIDAL",
    image: serviceImage3,
    description: "Coordinated makeup for bridesmaids and wedding party",
  },
  {
    id: 22,
    number: "022",
    name: "Personal Makeup Consultation",
    category: "CONSULTATION",
    image: serviceImage1,
    description: "Expert consultation for personalized makeup recommendations",
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
          transition={{ duration: 0.6, delay: index * 0.05 }}
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
