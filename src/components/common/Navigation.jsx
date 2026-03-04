import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
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

        <Link
          to="/"
          className="cursor-pointer hover:opacity-70 transition-opacity"
        >
          <div className="flex flex-col items-center gap-1">
            <span
              className={`logo-text text-lg md:text-2xl tracking-[0.08em] ${logoColor} font-bold`}
            >
              MAKEUP
            </span>
            <span
              className={`${logoColor} text-xs md:text-sm tracking-[0.15em] font-body`}
            >
              <span className="font-display italic text-[1.05em] relative -top-[0.02em]">
                BY
              </span>{" "}
              ANCHALA
            </span>
          </div>
        </Link>

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
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-[5px] cursor-pointer z-50"
        >
          <span
            className={`block w-5 h-[1.5px] transition-all duration-300 ${isPortfolio ? "bg-black" : "bg-white"} ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] transition-all duration-300 ${isPortfolio ? "bg-black" : "bg-white"} ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-3 h-[1.5px] transition-all duration-300 ${isPortfolio ? "bg-black" : "bg-white"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-40 pt-20 ${isPortfolio ? "bg-white" : "bg-black"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-4 z-50 text-3xl"
            >
              <span
                className={`${isPortfolio ? "text-black" : "text-white"} hover:opacity-60 transition-opacity`}
              >
                ✕
              </span>
            </button>

            <div className="flex flex-col gap-8 px-6 py-8">
              <Link
                to="/portfolio"
                className={`text-lg font-body tracking-widest ${isPortfolio ? "text-black" : "text-white"} hover:opacity-60 transition-opacity`}
              >
                PORTFOLIO
              </Link>
              <Link
                to="/about"
                className={`text-lg font-body tracking-widest ${isPortfolio ? "text-black" : "text-white"} hover:opacity-60 transition-opacity`}
              >
                ABOUT
              </Link>
              <Link
                to="/services"
                className={`text-lg font-body tracking-widest ${isPortfolio ? "text-black" : "text-white"} hover:opacity-60 transition-opacity`}
              >
                SERVICES
              </Link>
              <Link
                to="/contact"
                className={`text-lg font-body tracking-widest ${isPortfolio ? "text-black" : "text-white"} hover:opacity-60 transition-opacity`}
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
