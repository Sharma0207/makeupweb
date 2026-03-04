import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    "**/*.JPG",
    "**/*.jpg",
    "**/*.HEIC",
    "**/*.mp4",
    "**/*.webm",
    "**/*.mov",
    "**/*.m4v",
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "animation-vendor": ["framer-motion", "gsap"],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
});
