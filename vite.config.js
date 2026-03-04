import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.HEIC", "**/*.mp4", "**/*.webm", "**/*.mov", "**/*.m4v"],
});
