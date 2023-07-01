import { defineConfig } from "vite";
import dotenv from "dotenv";
import reactPlugin from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env =
    dotenv.config({
      path: `.env.${mode}`,
    }).parsed || {};

  return {
    define: {
      "process.env": Object.keys(env).reduce((prev, key) => {
        prev[key] = JSON.stringify(env[key]);
        return prev;
      }, {}),
    },
    plugins: [reactPlugin()],
  };
});
