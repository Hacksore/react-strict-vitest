import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    setupFiles: "./setup.ts"
  },
  // NOTE: this affects the prod build in preview tho
  // define: {
  //   "process.env.NODE_ENV": JSON.stringify("development"),
  // },
});
