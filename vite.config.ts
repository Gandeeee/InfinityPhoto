import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  root: path.resolve(import.meta.dirname, "client"),

  build: {
    // 2. 'outDir' TETAP 'dist' (ini sudah benar untuk Netlify)
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    // 3. Kita biarkan 'allowedHosts' untuk Ngrok, tidak masalah.
    allowedHosts: ['.ngrok-free.app'],
  },
});