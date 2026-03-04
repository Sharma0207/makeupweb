import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

const WhatsAppButton = () => {
  const phoneNumber = "919110939727";
  const message = "Hi, I wanted to know more about makeup types and services";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      <FiMessageCircle className="w-7 h-7" />
    </motion.a>
  );
};

export default WhatsAppButton;
