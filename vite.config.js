import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Resolve directly to the stable CJS build used successfully in this repo.
      "framer-motion": path.resolve(
        __dirname,
        "./node_modules/framer-motion/dist/cjs/index.js"
      ),
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "motion-vendor": ["framer-motion"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    sourcemap: false,
  },

  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
