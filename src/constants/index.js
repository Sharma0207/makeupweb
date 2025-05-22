import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  makeup9,
  makeup14,
  makeup15,
  makeup12,
  makeup4,
  makeup6,
  makeup7,
  makeup10,
  makeup3,
  makeup5,
  makeup16,
  makeup17,
  dazlogo,
  lakmelogo,
} from "../assets";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Bridal Makeup",
    icon: makeup9,
  },
  {
    title: "Bridal Makeup",
    icon: makeup4,
  },
  {
    title: "Bridal Makeup",
    icon: makeup6,
  },
  {
    title: "Bridal Makeup",
    icon: makeup17,
  },
  {
    title: "Party Makeup",
    icon: makeup7,
  },
  {
    title: "Party Makeup",
    icon: makeup14,
  },
  {
    title: "Engagement Look",
    icon: makeup15,
  },
  {
    title: "Walima Bride",
    icon: makeup12,
  },
  {
    title: "south Indian Bride",
    icon: makeup10,
  },
  {
    title: "25th Anniversary Look",
    icon: makeup3,
  },
  {
    title: "Cocktail makeup",
    icon: makeup5,
  },
  {
    title: "corporate Look",
    icon: makeup16,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Skin & Makeup Tutor",
    company_name: "Dazzling world",
    icon: dazlogo,
    iconBg: "#383E56",
    date: "Jan 2025 - present",
    points: [
      "Trained aspiring makeup artists through hands-on sessions, skin analysis, and in-depth beauty theory, with a focus on bridal, party, and editorial looks.",
    ],
  },
  {
    title: "Certified Makeup & Skin Artist",
    company_name: "Lakmé Academy",
    icon: lakmelogo,
    iconBg: "#383E56",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Completed professional training in makeup and skin care at Lakmé Academy, gaining expertise in beauty techniques and product knowledge.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "📚 StudyNotion",
    description:
      "StudyNotion is a full-stack EdTech platform enabling users to create, enroll in, and rate courses. It integrates secure authentication, dynamic UI, and payment processing to offer a modern, scalable learning experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Balmukund02/FullStack_EdTechProject",
    live_link: "https://studynotion-edtech.vercel.app/",
  },
  // {
  //   name: "📚 StudyNotion",
  //   description:
  //     "StudyNotion is a full-stack EdTech platform enabling users to create, enroll in, and rate courses. It integrates secure authentication, dynamic UI, and payment processing to offer a modern, scalable learning experience.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },

  //     {
  //       name: "node",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "cloudinary",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: project2,
  //   source_code_link: "https://github.com/",
  // },

  {
    name: "🌐 Personal Portfolio Website",
    description:
      "A fully responsive React portfolio featuring interactive cards, filtering, animations, and a modern UI to showcase my skills and projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: project11,
    source_code_link: "https://github.com/Balmukund02/reactPortfolio",
  },

  {
    name: "💸 Razorpay Clone",
    description:
      "A front-end replica of Razorpay, capturing 90% of the UI and layout components to demonstrate precision in modern design using Tailwind CSS and responsive web development.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Balmukund02/Razorpay-clone",
  },
  {
    name: "💬 Discord Clone",
    description:
      "A UI clone of the Discord platform, designed using HTML and CSS to mimic Discord's layout and structure, focusing on frontend replication and styling.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Balmukund02/DISCORD_CLONE",
  },

  {
    name: "🕵️‍♂️ DevDetective",
    description:
      "DevDetective is a sleek GitHub profile finder that uses the GitHub API to fetch and display user data dynamically. It features a clean UI, responsive design, and instant lookup functionality for GitHub developers.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Balmukund02/developerDetective",
    live_link: "https://developer-detective-findgithub.netlify.app/",
  },
  {
    name: "🔐 Password Generator",
    description:
      "Password Generator is a customizable tool that creates strong, secure passwords based on user-selected criteria like length, symbols, and numbers—ideal for boosting personal and professional cybersecurity.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "security",
        color: "blue-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Balmukund02/PasswordGenerator",
  },
  {
    name: "⛅ Weather App",
    description:
      "Weather App provides real-time weather updates by fetching data from public APIs. It features a responsive UI that displays temperature, location, weather conditions, and more with a clean, modern design.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Balmukund02/Weather_app",
  },
  {
    name: "❌⭕ Tic Tac Toe",
    description:
      "Tic Tac Toe is a classic turn-based game with dynamic winner detection logic and an interactive, styled interface. It’s a fun way to showcase JavaScript logic and responsive UI design.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "game",
        color: "blue-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/Balmukund02/-Tic-Tac-Toe",
    live_link: "https://tictactoe-gameby-balmukund.netlify.app/",
  },
  {
    name: "🔄 Share Modal",
    description:
      "Share Modal is a sleek, responsive user profile card with glowing gradient effects, social interaction buttons, and modern UI aesthetics. Designed for profile sharing with smooth animations.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "glassmorphism",
        color: "green-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://github.com/Balmukund02/share-modal",
  },
  {
    name: "📝 Blog Context",
    description:
      "Blog Context is a simple blog platform where React’s Context API is used to manage global state, demonstrating structured routing, data rendering, and reusable components.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "contextapi",
        color: "white-text-gradient",
      },
      {
        name: "blog",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://github.com/Balmukund02/Blog-Context",
  },
  {
    name: "💖 PlanWithLove",
    description:
      "PlanWithLove is an event planning assistant UI, crafted to help users plan events or special occasions. It features elegant components, responsive design, and clean organization.",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },

      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "uiux",
        color: "blue-text-gradient",
      },
      {
        name: "planner",
        color: "green-text-gradient",
      },
    ],
    image: project10,
    source_code_link: "https://github.com/Balmukund02/Plan-with-LOVE",
  },
];

export { services, technologies, experiences, testimonials, projects };
