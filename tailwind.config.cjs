/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
