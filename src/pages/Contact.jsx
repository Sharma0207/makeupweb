import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    referral: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        referral: "",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="pt-20 md:pt-32 px-6 md:px-12 pb-24">
        <div className="max-w-[1800px] mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-16 md:mb-24 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Information - Left */}
            <motion.div
              className="space-y-12 md:space-y-16"
              initial="hidden"
              animate="visible"
            >
              {/* Call Us */}
              <motion.div custom={0} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-gray-400">
                  CALL US
                </h3>
                <div className="space-y-2 font-body text-sm md:text-base">
                  <p className="text-white">
                    <span className="block">+61 4XX XXX XXX</span>
                    <span className="text-gray-400 text-xs">Primary Contact</span>
                  </p>
                  <p className="text-white mt-3">
                    <span className="block">+61 4XX XXX XXX</span>
                    <span className="text-gray-400 text-xs">Booking Assistant</span>
                  </p>
                </div>
              </motion.div>

              {/* Write Us */}
              <motion.div custom={1} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-gray-400">
                  EMAIL US
                </h3>
                <a
                  href="mailto:anchala@makeup.com"
                  className="text-white hover:text-gray-300 transition-colors duration-300 font-body text-sm md:text-base"
                >
                  anchala@makeup.com
                </a>
              </motion.div>

              {/* Location */}
              <motion.div custom={2} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-gray-400">
                  VISIT US
                </h3>
                <p className="text-white font-body text-sm md:text-base leading-relaxed">
                  Mumbai, India
                  <br />
                  Available for destination makeup artistry
                  <br />
                  Wedding • Events • Photoshoots
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right */}
            <motion.div
              initial="hidden"
              animate="visible"
            >
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Name Field */}
                <motion.div custom={0} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
                    Your Name –{" "}
                    <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-sm font-body outline-none text-white placeholder:text-gray-600 focus:border-white transition-colors duration-300"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div custom={1} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
                    Your Email –{" "}
                    <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-sm font-body outline-none text-white placeholder:text-gray-600 focus:border-white transition-colors duration-300"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div custom={2} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98xxx xxxxx"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-sm font-body outline-none text-white placeholder:text-gray-600 focus:border-white transition-colors duration-300"
                  />
                </motion.div>

                {/* Service Dropdown */}
                <motion.div custom={3} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-sm font-body outline-none text-white focus:border-white transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black text-white">Select a service</option>
                    <option value="bridal" className="bg-black text-white">Bridal Makeup</option>
                    <option value="party" className="bg-black text-white">Party & Event Makeup</option>
                    <option value="editorial" className="bg-black text-white">Editorial & Photoshoot</option>
                    <option value="training" className="bg-black text-white">Makeup Training & Workshops</option>
                    <option value="personal" className="bg-black text-white">Personal Makeup Session</option>
                    <option value="other" className="bg-black text-white">Other</option>
                  </select>
                </motion.div>

                {/* Referral Dropdown */}
                <motion.div custom={4} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
                    How did you find us?
                  </label>
                  <select
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-sm font-body outline-none text-white focus:border-white transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black text-white">Select an option</option>
                    <option value="friend" className="bg-black text-white">Through A Friend</option>
                    <option value="instagram" className="bg-black text-white">Instagram</option>
                    <option value="google" className="bg-black text-white">Google Search</option>
                    <option value="facebook" className="bg-black text-white">Facebook</option>
                    <option value="portfolio" className="bg-black text-white">Portfolio Website</option>
                    <option value="other" className="bg-black text-white">Other</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div custom={5} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
                    Tell us more – <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Event details, date, theme, and any special requests..."
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-sm font-body outline-none text-white placeholder:text-gray-600 focus:border-white transition-colors duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div custom={6} variants={fadeUp}>
                  <button
                    type="submit"
                    disabled={!isFormValid || submitted}
                    className={`mt-8 px-8 py-4 text-xs font-bold tracking-widest uppercase font-body border transition-all duration-300 ${
                      submitted
                        ? "bg-pink-500 border-pink-500 text-white"
                        : "border-white text-white hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-600"
                    }`}
                  >
                    {submitted ? "Message Sent!" : "Send Inquiry"}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 md:px-12 py-12">
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-gray-400 text-xs font-body tracking-wider">
            Follow us on{" "}
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              Instagram
            </a>
            {" · "}
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              Facebook
            </a>
            {" · "}
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              Pinterest
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
