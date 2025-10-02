import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    eslint({
      cache: false, // always lint freshly (optional)
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: ["node_modules"],
    }),
  ],
});
