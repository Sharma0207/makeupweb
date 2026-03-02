import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isPortfolio = location.pathname === "/portfolio";
  const textColor = isPortfolio ? "text-black" : "text-white";
  const logoColor = isPortfolio ? "text-black" : "text-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-16 py-5 md:py-8 z-20 transition-all duration-300 ${
        isScrolled
          ? isPortfolio
            ? "bg-white/50 backdrop-blur-md"
            : "bg-black/30 backdrop-blur-md"
          : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="hidden md:flex gap-8">
        <Link
          to="/portfolio"
          className={`nav-link ${textColor} text-sm md:text-base font-body hover:opacity-70 transition-opacity`}
        >
          Portfolio
        </Link>
        <Link
          to="/about"
          className={`nav-link ${textColor} text-sm md:text-base font-body hover:opacity-70 transition-opacity`}
        >
          About
        </Link>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/" className="cursor-pointer hover:opacity-70 transition-opacity">
          <span className={`logo-text text-lg md:text-2xl tracking-[0.08em] ${logoColor} font-bold`}>
            MAKEUP
          </span>
          <span className={`${logoColor} text-xs md:text-sm tracking-[0.15em] font-body`}>
            <span className="font-display italic text-[1.05em] relative -top-[0.02em]">BY</span> ANCHALA
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-8">
        <Link
          to="/services"
          className={`nav-link ${textColor} text-sm md:text-base font-body hover:opacity-70 transition-opacity`}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${textColor} text-sm md:text-base font-body hover:opacity-70 transition-opacity`}
        >
          Contact
        </Link>
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
