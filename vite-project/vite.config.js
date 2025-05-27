import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "react-card-website";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  // build: {
  //   outDir: "../dist",
  // },
});
