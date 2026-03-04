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
              className="space-y-6 md:space-y-8"
              initial="hidden"
              animate="visible"
            >
              {/* Call Us */}
              <motion.div custom={0} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-gray-400">
                  CALL US
                </h3>
                <div className="space-y-3 font-body text-sm md:text-base">
                  <p className="text-white">
                    <span className="block font-semibold">+91 9110939727</span>
                    <span className="text-gray-400 text-xs">Primary Contact</span>
                  </p>
                  <p className="text-white border-t border-gray-700 pt-3">
                    <span className="block font-semibold">+91 9934242539</span>
                    <span className="text-gray-400 text-xs">Booking Assistant</span>
                  </p>
                </div>
              </motion.div>

              {/* Write Us */}
              <motion.div custom={1} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-gray-400">
                  EMAIL US
                </h3>
                <div>
                  <a
                    href="mailto:Ssha@GMAIL.COM"
                    className="text-white hover:text-pink-400 transition-colors duration-300 font-body text-sm md:text-base font-semibold break-all"
                  >
                    Ssha@GMAIL.COM
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div custom={2} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-gray-400">
                  VISIT US
                </h3>
                <div>
                  <p className="text-white font-body text-sm md:text-base leading-relaxed font-semibold">
                    Patna, Bihar, India
                    <br />
                    <span className="text-gray-400 font-normal text-xs mt-2 block">Available for destination makeup artistry</span>
                    <span className="text-gray-400 font-normal text-xs block">Wedding • Events • Photoshoots</span>
                  </p>
                </div>
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
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-white">
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
                    className="w-full bg-white border-none py-3 px-4 text-sm font-body outline-none text-black placeholder:text-gray-500 focus:ring-2 focus:ring-pink-400 transition-all duration-300 rounded"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div custom={1} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-white">
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
                    className="w-full bg-white border-none py-3 px-4 text-sm font-body outline-none text-black placeholder:text-gray-500 focus:ring-2 focus:ring-pink-400 transition-all duration-300 rounded"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div custom={2} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-white">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98xxx xxxxx"
                    className="w-full bg-white border-none py-3 px-4 text-sm font-body outline-none text-black placeholder:text-gray-500 focus:ring-2 focus:ring-pink-400 transition-all duration-300 rounded"
                  />
                </motion.div>

                {/* Service Dropdown */}
                <motion.div custom={3} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-white">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white border-none py-3 px-4 text-sm font-body outline-none text-black focus:ring-2 focus:ring-pink-400 transition-all duration-300 rounded appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="party">Party & Event Makeup</option>
                    <option value="editorial">Editorial & Photoshoot</option>
                    <option value="training">Makeup Training & Workshops</option>
                    <option value="personal">Personal Makeup Session</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Referral Dropdown */}
                <motion.div custom={4} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-white">
                    How did you find us?
                  </label>
                  <select
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    className="w-full bg-white border-none py-3 px-4 text-sm font-body outline-none text-black focus:ring-2 focus:ring-pink-400 transition-all duration-300 rounded appearance-none cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="friend">Through A Friend</option>
                    <option value="instagram">Instagram</option>
                    <option value="google">Google Search</option>
                    <option value="facebook">Facebook</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div custom={5} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-white">
                    Tell us more – <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Event details, date, theme, and any special requests..."
                    required
                    rows={5}
                    className="w-full bg-white border-none py-3 px-4 text-sm font-body outline-none text-black placeholder:text-gray-500 focus:ring-2 focus:ring-pink-400 transition-all duration-300 rounded resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div custom={6} variants={fadeUp}>
                  <button
                    type="submit"
                    disabled={!isFormValid || submitted}
                    className={`mt-8 px-8 py-4 text-xs font-bold tracking-widest uppercase font-body rounded transition-all duration-300 ${
                      submitted
                        ? "bg-pink-500 text-white"
                        : "bg-white text-black hover:bg-pink-500 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
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
        <div className="max-w-[1800px] mx-auto text-center space-y-6">
          {/* Phone & Email */}
          <div className="text-xs font-body tracking-wider space-y-2">
            <p className="text-white">
              <span className="font-bold">Call:</span> +91 9110939727
            </p>
            <p className="text-white">
              <span className="font-bold">Email:</span> Ssha@GMAIL.COM
            </p>
          </div>

          {/* Social Links */}
          <p className="text-gray-400 text-xs font-body tracking-wider">
            Follow us on{" "}
            <a
              href="https://www.instagram.com/makeupbyanchla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors font-semibold"
            >
              Instagram
            </a>
            {" · "}
            <a
              href="https://www.facebook.com/profile.php?id=61558218356668"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors font-semibold"
            >
              Facebook
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
