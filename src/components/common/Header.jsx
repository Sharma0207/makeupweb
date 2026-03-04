import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="flex items-center justify-between px-6 md:px-12 max-w-[1800px] mx-auto">
        {/* Left - Language Toggle */}
        <div className="flex items-center gap-1 font-body text-[10px] tracking-widest text-muted-foreground">
          <span className="cursor-pointer hover:text-foreground transition-colors">ES</span>
          <span className="text-[8px]">/</span>
          <span className="cursor-pointer text-foreground font-bold">EN</span>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <Link to="/" className="group">
            <h1 className="font-display text-xl md:text-2xl tracking-[0.2em] transition-all duration-500 group-hover:tracking-[0.25em]">
              ANCHALA <span className="italic font-normal">S</span>HARMA
            </h1>
          </Link>
        </div>

        {/* Right - Main Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link 
            to="/portfolio" 
            className={`nav-link text-[10px] tracking-[0.25em] transition-all duration-300 ${currentPath === '/portfolio' ? 'nav-link-active' : 'opacity-60 hover:opacity-100'}`}
          >
            WORK
          </Link>
          <Link 
            to="/about" 
            className={`nav-link text-[10px] tracking-[0.25em] transition-all duration-300 ${currentPath === '/about' ? 'nav-link-active' : 'opacity-60 hover:opacity-100'}`}
          >
            ABOUT
          </Link>
        </nav>

        {/* Mobile menu trigger can go here if needed, but the design is ultra-minimalist */}
      </div>

      {/* Right side vertical nav strings - Contact */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-16 pointer-events-auto">
        <Link
          to="/contact"
          className={`nav-link vertical-text transition-all duration-500 hover:scale-110 ${currentPath === '/contact' ? 'nav-link-active' : 'opacity-40 hover:opacity-100'}`}
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
