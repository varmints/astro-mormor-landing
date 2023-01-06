import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    tailwind(),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
