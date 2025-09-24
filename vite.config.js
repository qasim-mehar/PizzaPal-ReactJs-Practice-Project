import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false, // always lint freshly (optional)
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: ["node_modules"],
    }),
  ],
});
