import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const port = Number(process.env.PORT);
const basePath = process.env.BASE_PATH;
export default defineConfig({
  base: basePath,
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "src") },
    dedupe: ["react", "react-dom"],
  },
  server: { port, host: "0.0.0.0", allowedHosts: true },
  preview: { port, host: "0.0.0.0", allowedHosts: true },
});