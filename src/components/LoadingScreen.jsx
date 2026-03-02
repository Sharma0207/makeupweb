import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isVisible, onComplete }) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Vertical line dropping from top */}
          <motion.div
            className="loading-line"
            initial={{ height: 0 }}
            animate={{ height: "45%" }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.3,
            }}
          />

          {/* Logo centered */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              className="text-4xl md:text-5xl font-display font-bold tracking-[0.04em] text-black"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.0,
              }}
            >
              MAKEUP
            </motion.div>

            <motion.span
              className="font-body font-400 tracking-[0.2em] uppercase text-black text-xs md:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.5,
              }}
            >
              B Y  A N C H A L A
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
