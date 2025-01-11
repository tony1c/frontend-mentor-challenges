// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(),
});
