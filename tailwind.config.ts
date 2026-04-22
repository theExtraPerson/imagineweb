// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        // These keys 'bebas', 'libre', 'mono' become 'font-bebas', etc.
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        libre: ["var(--font-libre-baskerville)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  // ... rest of your config
};
export default config;