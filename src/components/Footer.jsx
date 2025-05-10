import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { DiGitBranch } from "react-icons/di";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex flex-col items-center gap-6">
      <div className="flex justify-center gap-6 mb-2">
      <a
        href="https://www.instagram.com/the_imperfectjourney/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={26} />
      </a>
      <a href="https://github.com/Balmukund02" target="_blank" rel="noopener noreferrer">
        <DiGitBranch size={26} />
      </a>
      <a
        href="https://www.linkedin.com/in/balmukund-kumar02/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={26} />
      </a>

      </div>
      
      <p className="text-sm text-white/70 ">
        © {new Date().getFullYear()} Developed with ❤️ by Balmukund
      </p>
    </footer>
  );
};

export default Footer;