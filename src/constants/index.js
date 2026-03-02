import {
  logo,
  menu,
  close,
  makeup9,
  makeup4,
  makeup6,
  makeup17,
  makeup20,
  makeup7,
  makeup14,
  makeup18,
  makeup15,
  makeup12,
  makeup19,
  makeup10,
  makeup3,
  makeup5,
  makeup16,
  makeup21,
  makeup23,
  makeup25,
  makeup24,
  makeup26,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
  },
  {
    id: "services",
    title: "Services",
    path: "/services",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];

const services = [
  {
    title: "Bridal Makeup",
    description: "Exquisite bridal transformations tailored to your unique style and heritage.",
    category: "BRIDAL",
  },
  {
    title: "Editorial & Shoot",
    description: "Visionary makeup for high-fashion, commercial, and creative photography.",
    category: "EDITORIAL",
  },
  {
    title: "Party & Occasion",
    description: "Sophisticated glam for celebrations that demand a flawless presence.",
    category: "GLAMOUR",
  },
];

const portfolio = [
  {
    title: "Ethereal Bride",
    category: "BRIDAL",
    image: makeup9,
  },
  {
    title: "High Fashion",
    category: "EDITORIAL",
    image: makeup23,
  },
  {
    title: "Evening Glam",
    category: "PARTY",
    image: makeup7,
  },
];

export { services, portfolio };
