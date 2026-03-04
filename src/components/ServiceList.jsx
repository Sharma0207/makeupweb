import { useState } from "react";

// Import all 21 service images from src/assets/services
import service1 from "../assets/services/1.jpg";
import service2 from "../assets/services/2service.jpg";
import service3 from "../assets/services/3service.webp";
import service4 from "../assets/services/4.jpg";
import service5 from "../assets/services/5.jpg";
import service6 from "../assets/services/6.jpg";
import service7 from "../assets/services/7.jpg";
import service8 from "../assets/services/8.jpg";
import service9 from "../assets/services/9.jpg";
import service10 from "../assets/services/10.jpg";
import service11 from "../assets/services/11.jpg";
import service12 from "../assets/services/12.JPG";
import service13 from "../assets/services/13.jpg";
import service14 from "../assets/services/14.jpg";
import service15 from "../assets/services/15.jpg";
import service16 from "../assets/services/16.jpg";
import service17 from "../assets/services/17.jpg";
import service18 from "../assets/services/18.jpg";
import service19 from "../assets/services/19.jpg";
import service20 from "../assets/services/20.jpg";
import service21 from "../assets/services/21.webp";

export const services = [
  // Party Makeup Services
  {
    number: "001",
    name: "Party Makeup - Basic",
    category: "MAKEUP",
    image: service1,
  },
  {
    number: "002",
    name: "Party Makeup - HD",
    category: "MAKEUP",
    image: service2,
  },
  {
    number: "003",
    name: "Party Makeup - Airbrush",
    category: "MAKEUP",
    image: service3,
  },

  // Engagement Look Services
  {
    number: "004",
    name: "Engagement Look - Basic",
    category: "MAKEUP",
    image: service4,
  },
  {
    number: "005",
    name: "Engagement Look - HD",
    category: "MAKEUP PREMIUM",
    image: service5,
  },
  {
    number: "006",
    name: "Engagement Look - Airbrush",
    category: "MAKEUP PREMIUM",
    image: service6,
  },

  // Bridal Makeup Services
  {
    number: "007",
    name: "Bridal Makeup - Basic",
    category: "BRIDAL",
    image: service7,
  },
  {
    number: "008",
    name: "Bridal Makeup - HD",
    category: "BRIDAL",
    image: service8,
  },
  {
    number: "009",
    name: "Bridal Makeup - Airbrush",
    category: "BRIDAL",
    image: service9,
  },

  // Reception Bride Makeover Services
  {
    number: "010",
    name: "Reception Bridal Makeover - Basic",
    category: "BRIDAL",
    image: service10,
  },
  {
    number: "011",
    name: "Reception Bridal Makeover - HD",
    category: "BRIDAL PREMIUM",
    image: service11,
  },
  {
    number: "012",
    name: "Reception Bridal Makeover - Airbrush",
    category: "BRIDAL PREMIUM",
    image: service12,
  },

  // Editorial & Creative Services
  {
    number: "013",
    name: "Editorial Makeup",
    category: "EDITORIAL",
    image: service13,
  },
  {
    number: "014",
    name: "Editorial Makeup - High Fashion",
    category: "EDITORIAL",
    image: service14,
  },

  // Makeup Tuition & Training
  {
    number: "015",
    name: "Makeup Tuition - One-on-One",
    category: "EDUCATION",
    image: service15,
  },
  {
    number: "016",
    name: "Makeup Tuition - Group Sessions",
    category: "EDUCATION",
    image: service16,
  },
  {
    number: "017",
    name: "Makeup Tuition - Bridal Training",
    category: "EDUCATION",
    image: service17,
  },

  // Additional Services
  {
    number: "018",
    name: "Trial Makeup Session",
    category: "CONSULTATION",
    image: service18,
  },
  {
    number: "019",
    name: "Makeup Touch-Up Service",
    category: "SERVICES",
    image: service19,
  },
  {
    number: "020",
    name: "Special Effects Makeup",
    category: "CREATIVE",
    image: service20,
  },
  {
    number: "021",
    name: "Bridal Party Makeup",
    category: "BRIDAL",
    image: service21,
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
