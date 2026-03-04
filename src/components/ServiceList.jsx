import { useState } from "react";

// Import service images
import serviceImage1 from "../assets/beforeafter/after1.jpeg";
import serviceImage2 from "../assets/beforeafter/after2.jpg";
import serviceImage3 from "../assets/beforeafter/after3.jpeg";

export const services = [
  // Party Makeup Services
  {
    number: "001",
    name: "Party Makeup - Basic",
    category: "MAKEUP",
    image: serviceImage1,
  },
  {
    number: "002",
    name: "Party Makeup - HD",
    category: "MAKEUP",
    image: serviceImage2,
  },
  {
    number: "003",
    name: "Party Makeup - Airbrush",
    category: "MAKEUP",
    image: serviceImage3,
  },

  // Engagement Look Services
  {
    number: "004",
    name: "Engagement Look - Basic",
    category: "MAKEUP",
    image: serviceImage1,
  },
  {
    number: "005",
    name: "Engagement Look - HD",
    category: "MAKEUP PREMIUM",
    image: serviceImage2,
  },
  {
    number: "006",
    name: "Engagement Look - Airbrush",
    category: "MAKEUP PREMIUM",
    image: serviceImage3,
  },

  // Bridal Makeup Services
  {
    number: "007",
    name: "Bridal Makeup - Basic",
    category: "BRIDAL",
    image: serviceImage1,
  },
  {
    number: "008",
    name: "Bridal Makeup - HD",
    category: "BRIDAL",
    image: serviceImage2,
  },
  {
    number: "009",
    name: "Bridal Makeup - Airbrush",
    category: "BRIDAL",
    image: serviceImage3,
  },

  // Reception Bride Makeover Services
  {
    number: "010",
    name: "Reception Bridal Makeover - Basic",
    category: "BRIDAL",
    image: serviceImage1,
  },
  {
    number: "011",
    name: "Reception Bridal Makeover - HD",
    category: "BRIDAL PREMIUM",
    image: serviceImage2,
  },
  {
    number: "012",
    name: "Reception Bridal Makeover - Airbrush",
    category: "BRIDAL PREMIUM",
    image: serviceImage3,
  },

  // Editorial & Creative Services
  {
    number: "013",
    name: "Editorial Makeup",
    category: "EDITORIAL",
    image: serviceImage1,
  },
  {
    number: "014",
    name: "Editorial Makeup - High Fashion",
    category: "EDITORIAL",
    image: serviceImage2,
  },

  // Makeup Tuition & Training
  {
    number: "015",
    name: "Makeup Tuition - One-on-One",
    category: "EDUCATION",
    image: serviceImage3,
  },
  {
    number: "016",
    name: "Makeup Tuition - Group Sessions",
    category: "EDUCATION",
    image: serviceImage1,
  },
  {
    number: "017",
    name: "Makeup Tuition - Bridal Training",
    category: "EDUCATION",
    image: serviceImage2,
  },

  // Additional Services
  {
    number: "018",
    name: "Trial Makeup Session",
    category: "CONSULTATION",
    image: serviceImage3,
  },
  {
    number: "019",
    name: "Makeup Touch-Up Service",
    category: "SERVICES",
    image: serviceImage1,
  },
  {
    number: "020",
    name: "Special Effects Makeup",
    category: "CREATIVE",
    image: serviceImage2,
  },
  {
    number: "021",
    name: "Bridal Party Makeup",
    category: "BRIDAL",
    image: serviceImage3,
  },
  {
    number: "022",
    name: "Personal Makeup Consultation",
    category: "CONSULTATION",
    image: serviceImage1,
  },
];

const ServiceList = ({ onHover }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col">
      {services.map((service, index) => (
        <button
          key={service.number}
          onClick={() => onHover?.(service.image)}
          onMouseEnter={() => {
            setHoveredIndex(index);
            onHover?.(service.image);
          }}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group flex items-center justify-between border-b border-black/10 py-4 md:py-5 px-0 transition-all cursor-pointer hover:bg-black/2"
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="text-black/50 text-xs md:text-sm font-light tracking-wider transition-transform duration-300 group-hover:scale-110 origin-left">
              {service.number}
            </span>
            <span className="text-black text-xs md:text-sm font-light tracking-wide transition-transform duration-300 group-hover:scale-105 origin-left">
              {service.name}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-black text-xs md:text-sm font-light tracking-widest hidden sm:block transition-transform duration-300 group-hover:scale-105 origin-right">
              {service.category}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ServiceList;
