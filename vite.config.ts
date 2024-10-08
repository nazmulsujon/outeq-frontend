import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

interface ProcessEnv {
  [key: string]: string;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const cherryPickedKeys = ["REACT_APP_BASE_API_URL"];
  const processEnv: ProcessEnv = {};

  cherryPickedKeys.forEach((key) => {
    processEnv[key] = env[key];
  });

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env": processEnv,
    },
  };
});
