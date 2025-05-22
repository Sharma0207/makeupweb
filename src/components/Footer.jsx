import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { DiGitBranch } from "react-icons/di";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex flex-col items-center gap-6">
      <div className="flex justify-center gap-6 mb-2">
      <a
        href="https://www.instagram.com/makeupbyanchla?igsh=NGpjbG1hc2w5MXR0&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={26} />
      </a>
      

      </div>
      
      <p className="text-sm text-white/70 ">
        © {new Date().getFullYear()} MAKEUP BY ANCHALA. All rights reserved 
       
      </p>
      <p className="text-xs text-black  text-center">
         Developed with ❤️ by Balmukund sharma
          </p>
    </footer>
  );
};

export default Footer;