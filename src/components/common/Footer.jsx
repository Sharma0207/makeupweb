import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com", icon: "📸" },
    { name: "Facebook", url: "https://facebook.com", icon: "f" },
    { name: "Pinterest", url: "https://pinterest.com", icon: "P" },
    { name: "Email", url: "mailto:hello@example.com", icon: "✉️" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-2xl tracking-widest uppercase mb-4">
              Anchala Sharma
            </h2>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              Professional makeup artist dedicated to enhancing natural beauty and creating unforgettable looks for your special moments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-sm tracking-widest uppercase mb-6 font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-sm tracking-widest uppercase mb-6 font-semibold">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Bridal Makeup
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Special Events
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Photoshoots
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  Makeup Lessons
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-sm tracking-widest uppercase mb-6 font-semibold">
              Connect
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-white/50 mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  hello@anchalasharma.com
                </a>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-white/50 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+919876543210"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-sm hover:border-white hover:bg-white/10 transition-all duration-300"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="font-body text-xs text-white/50 uppercase tracking-widest">
              © {currentYear} Anchala Sharma. All rights reserved.
            </p>

            <div className="flex gap-8">
              <a
                href="#"
                className="font-body text-xs text-white/50 hover:text-white/70 uppercase tracking-widest transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-xs text-white/50 hover:text-white/70 uppercase tracking-widest transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-40"
        title="Back to top"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
