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

export const categories = ["All", "Bridal", "Editorial", "Party", "Creative"];

export const experiences = [
  {
    title: "Skin & Makeup Tutor",
    company_name: "Dazzling world",
    icon: "🎨",
    iconBg: "#DA70D6",
    date: "Jan 2025 - present",
    points: [
      "Trained aspiring makeup artists through hands-on sessions, skin analysis, and in-depth beauty theory, with a focus on bridal, party, and editorial looks.",
    ],
  },
  {
    title: "Official Makeup Artist – Miss Universe Bihar 2024 & 2025",
    company_name: "Miss Universe Bihar",
    icon: "👑",
    iconBg: "#FFD700",
    date: "2024 & 2025",
    points: [
      "Worked as an official MUA for Miss Universe Bihar, creating stage-ready, camera-ready looks in collaboration with a professional styling team under tight event timelines.",
    ],
  },
  {
    title: "Certified Makeup & Skin Artist",
    company_name: "Lakmé Academy",
    icon: "🎓",
    iconBg: "#383E56",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Completed professional training in makeup and skin care at Lakmé Academy, gaining expertise in beauty techniques and product knowledge.",
    ],
  },
];

export const portfolioItems = [
  // Bridal Collection
  {
    id: 1,
    title: "Ethereal Bride",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fe80c961db7c84ec385e75f32294c73a3?format=webp&width=800&height=1200",
  },
  {
    id: 2,
    title: "Royal Nuptials",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F75a7d68bbbc3493f993fa3942769c6a0?format=webp&width=800&height=1200",
  },
  {
    id: 3,
    title: "Golden Bride",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fa544e5250f6e404b8e7887d239ab8bbd?format=webp&width=800&height=1200",
  },
  {
    id: 4,
    title: "Vintage Romance",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fa18c3b2976f74c2ab18f0c4f4445a6f8?format=webp&width=800&height=1200",
  },
  {
    id: 5,
    title: "Bridal Elegance",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fc2d7b200181840c69f73371e7197b89b?format=webp&width=800&height=1200",
  },
  {
    id: 6,
    title: "Royal Bride I",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F26318ad71d6e47f1b401f8d92e8acd34?format=webp&width=800&height=1200",
  },
  {
    id: 7,
    title: "Bride in Gold",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F14e92d74e15d4fbaa08c86fd8e1b9d1b?format=webp&width=800&height=1200",
  },
  {
    id: 8,
    title: "Ethereal Elegance",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fdfd24792d93d461d900e2aba46fda6ed?format=webp&width=800&height=1200",
  },
  {
    id: 9,
    title: "Regal Beauty",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fc10e7d72db51439cb9f3893a7b671942?format=webp&width=800&height=1200",
  },

  // Editorial Collection
  {
    id: 10,
    title: "Vogue Editorial",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F40e21f4c79254d1a9ad29e02af942dd3?format=webp&width=800&height=1200",
  },
  {
    id: 11,
    title: "Modern Editorial",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F9755293d269d472a843981addbee219d?format=webp&width=800&height=1200",
  },
  {
    id: 12,
    title: "Fashion Forward",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F434f5dafa97046d9aae337540cf7d166?format=webp&width=800&height=1200",
  },
  {
    id: 13,
    title: "High Fashion",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F14ce30b0569846fa903b5550bc1d1b03?format=webp&width=800&height=1200",
  },
  {
    id: 14,
    title: "Editorial Glam",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Ffa906080d10b483e983e453849f19d1b?format=webp&width=800&height=1200",
  },
  {
    id: 15,
    title: "Studio Shoot",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F43fa87bb9ca04d9c9217aa3717a67657?format=webp&width=800&height=1200",
  },

  // Party & Occasion Collection
  {
    id: 16,
    title: "Elegant Evening",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fce7379d7b22948ef847fa670e71769bc?format=webp&width=800&height=1200",
  },
  {
    id: 17,
    title: "Celebration Glow",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fe5ab4c8bf524420194bb974eacfbf1db?format=webp&width=800&height=1200",
  },
  {
    id: 18,
    title: "Party Glamour",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Faa8bf5467440405cb0890a3068f1d4a0?format=webp&width=800&height=1200",
  },
  {
    id: 19,
    title: "Night Out",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F72ac3eb65c5b421daf892897f41979b4?format=webp&width=800&height=1200",
  },
  {
    id: 20,
    title: "Occasion Ready",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F35a0e666f03a4a6db2b5b9dbf05c0469?format=webp&width=800&height=1200",
  },
  {
    id: 21,
    title: "Festive Look",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fb08a397317804039a65c0c052c617957?format=webp&width=800&height=1200",
  },

  // Creative & Artistic Collection
  {
    id: 22,
    title: "Artistic Vision",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F6f9a4cda2b0946c789882fe84a0224bc?format=webp&width=800&height=1200",
  },
  {
    id: 23,
    title: "Creative Expression",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F5a13c68f766e4f0a9a5d5b8f2662ae7a?format=webp&width=800&height=1200",
  },
  {
    id: 24,
    title: "Art Form",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F76f1275c090f4f51ae88004f1f75e5ca?format=webp&width=800&height=1200",
  },
  {
    id: 25,
    title: "Canvas Beauty",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F63a696ba5fa940a08e8427b53a7c91f7?format=webp&width=800&height=1200",
  },
  {
    id: 26,
    title: "Experimental Art",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F0789e950fe1041d6b3e5f02d3eba85dd?format=webp&width=800&height=1200",
  },
  {
    id: 27,
    title: "Bold Expression",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F2e376e12aeac488194ed72a6a61a2e57?format=webp&width=800&height=1200",
  },

  // Additional Premium Showcase
  {
    id: 28,
    title: "Radiant Bride",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Ff45c85f3a82a42118886d297889d7fa2?format=webp&width=800&height=1200",
  },
  {
    id: 29,
    title: "Masterpiece",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F63112ffd98f54736b66c61dadcd88f89?format=webp&width=800&height=1200",
  },
  {
    id: 30,
    title: "Perfect Finish",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F6a33ad4d30bd4fdf80589508eaf47d9b?format=webp&width=800&height=1200",
  },
  {
    id: 31,
    title: "Glamorous Night",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F4d7c59777ecf495589001356f2ab3007?format=webp&width=800&height=1200",
  },
  {
    id: 32,
    title: "Stunning Bride",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F595758c0ffc0446aa6cc6411d4cf7ec1?format=webp&width=800&height=1200",
  },
  {
    id: 33,
    title: "Modern Look",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F3e91dba5780446acad14b0ca8aaa2749?format=webp&width=800&height=1200",
  },
  {
    id: 34,
    title: "Artistic Beauty",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F2f86d8f3e9c94d54978c5de33a8cceee?format=webp&width=800&height=1200",
  },
  {
    id: 35,
    title: "Chic Occasion",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F991895310f79416d976e4979819e8a3c?format=webp&width=800&height=1200",
  },
  {
    id: 36,
    title: "Wedding Ready",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F8946a1fd67254cb0a65714fdd5e2d9d6?format=webp&width=800&height=1200",
  },
  {
    id: 37,
    title: "Fashion Editorial",
    category: "Editorial",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F26c5e5b8692148f1ad11841112ee9794?format=webp&width=800&height=1200",
  },
  {
    id: 38,
    title: "Creative Makeup",
    category: "Creative",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2F2b04f81d281c43b199b8a9c78c260d4c?format=webp&width=800&height=1200",
  },
  {
    id: 39,
    title: "Evening Elegance",
    category: "Party",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fd9dc8726783140ed935327ef87ed44a0?format=webp&width=800&height=1200",
  },
  {
    id: 40,
    title: "Bridal Perfection",
    category: "Bridal",
    image: "https://cdn.builder.io/api/v1/image/assets%2F05446b98d075402fa4c86116c3d88bca%2Fed2ba3e8c6bc44138e2b9ad9313f5a4b?format=webp&width=800&height=1200",
  },
];
