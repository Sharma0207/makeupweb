import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isPortfolio = location.pathname === "/portfolio";
  const textColor = isPortfolio ? "text-black" : "text-white";
  const logoColor = isPortfolio ? "text-black" : "text-white";

  return (
    <motion.nav
      className={`absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-16 py-5 md:py-8 z-20`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="hidden md:flex gap-8">
        <a
          href="/portfolio"
          className={`nav-link ${textColor} text-sm md:text-base font-body`}
        >
          Portfolio
        </a>
        <a
          href="/about"
          className={`nav-link ${textColor} text-sm md:text-base font-body`}
        >
          About
        </a>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className={`logo-text text-lg md:text-2xl tracking-[0.08em] ${logoColor} font-bold`}>
          MAKEUP
        </span>
        <span className={`${logoColor} text-xs md:text-sm tracking-[0.15em] font-body`}>
          <span className="font-display italic text-[1.05em] relative -top-[0.02em]">BY</span> ANCHALA
        </span>
      </div>

      <div className="hidden md:flex gap-8">
        <a
          href="/services"
          className={`nav-link ${textColor} text-sm md:text-base font-body`}
        >
          Services
        </a>
        <a
          href="/contact"
          className={`nav-link ${textColor} text-sm md:text-base font-body`}
        >
          Contact
        </a>
      </div>

      {/* Mobile hamburger */}
      <div className={`md:hidden flex flex-col gap-[5px]`}>
        <span className={`block w-5 h-[1.5px] ${isPortfolio ? 'bg-black' : 'bg-white'}`} />
        <span className={`block w-5 h-[1.5px] ${isPortfolio ? 'bg-black' : 'bg-white'}`} />
        <span className={`block w-3 h-[1.5px] ${isPortfolio ? 'bg-black' : 'bg-white'}`} />
      </div>
    </motion.nav>
  );
};

export default Navigation;
