import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@/*": "./src/*", // Alias dinámico para todo dentro de src
      },
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});
