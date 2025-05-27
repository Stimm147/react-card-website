import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "react-card-website";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
