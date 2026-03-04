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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 pt-6 md:pt-8 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <h1 className="font-display text-lg md:text-xl tracking-[0.2em]">
            ANCHALA <span className="italic font-normal">S</span>HARMA
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 md:pt-40 px-6 md:px-12 pb-24">
        <div className="max-w-[1800px] mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mb-16 md:mb-24 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Oh, hey there
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
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-secondary">
                  CALL US
                </h3>
                <div className="space-y-2 font-body text-sm md:text-base">
                  <p className="text-foreground">
                    <span className="block">0403 191 129</span>
                    <span className="text-muted-foreground text-xs">Lisa</span>
                  </p>
                  <p className="text-foreground mt-2">
                    <span className="block">0438 055 133</span>
                    <span className="text-muted-foreground text-xs">Robyn</span>
                  </p>
                </div>
              </motion.div>

              {/* Write Us */}
              <motion.div custom={1} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-secondary">
                  WRITE US
                </h3>
                <a
                  href="mailto:hello@lettuceandco.com.au"
                  className="text-foreground hover:text-secondary transition-colors duration-300 font-body text-sm md:text-base"
                >
                  hello@lettuceandco.com.au
                </a>
              </motion.div>

              {/* Mail Us */}
              <motion.div custom={2} variants={fadeUp}>
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-3 text-secondary">
                  MAIL US
                </h3>
                <p className="text-foreground font-body text-sm md:text-base">
                  146 Cotham Road
                  <br />
                  Kew 3101
                  <br />
                  Australia
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
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-secondary">
                    Let's start with your name –{" "}
                    <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 py-4 text-sm font-body outline-none focus:border-foreground transition-colors duration-300"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div custom={1} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-secondary">
                    And perhaps your email? <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 py-4 text-sm font-body outline-none focus:border-foreground transition-colors duration-300"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div custom={2} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-secondary">
                    Wanna flick us your digits too?
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-foreground/20 py-4 text-sm font-body outline-none focus:border-foreground transition-colors duration-300"
                  />
                </motion.div>

                {/* Service Dropdown */}
                <motion.div custom={3} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-secondary">
                    How can we help?
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-foreground/20 py-4 text-sm font-body outline-none focus:border-foreground transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="event-design">Event Design & Styling</option>
                    <option value="planning">Planning</option>
                    <option value="everything">Everything</option>
                    <option value="other">Other</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </motion.div>

                {/* Referral Dropdown */}
                <motion.div custom={4} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-secondary">
                    Just heard of us on the grapevine?
                  </label>
                  <select
                    name="referral"
                    value={formData.referral}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-foreground/20 py-4 text-sm font-body outline-none focus:border-foreground transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">How did you find us?</option>
                    <option value="friend">Through A Friend</option>
                    <option value="google">Web / Google Search</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="blog">Blog / Directory</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div custom={5} variants={fadeUp}>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-secondary">
                    Leave us a note – <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-foreground/20 py-4 text-sm font-body outline-none focus:border-foreground transition-colors duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div custom={6} variants={fadeUp}>
                  <button
                    type="submit"
                    disabled={!isFormValid || submitted}
                    className={`mt-8 px-8 py-4 text-xs font-bold tracking-widest uppercase font-body border border-foreground transition-all duration-300 ${
                      submitted
                        ? "bg-foreground text-background"
                        : "hover:bg-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed"
                    }`}
                  >
                    {submitted ? "Message Sent!" : "Shoot it through!"}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 px-6 md:px-12 py-12">
        <div className="max-w-[1800px] mx-auto text-center">
          <p className="text-muted-foreground text-xs font-body tracking-wider">
            Follow us on{" "}
            <a href="#" className="text-foreground hover:text-secondary transition-colors">
              Instagram
            </a>
            {" · "}
            <a href="#" className="text-foreground hover:text-secondary transition-colors">
              Facebook
            </a>
            {" · "}
            <a href="#" className="text-foreground hover:text-secondary transition-colors">
              Pinterest
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
