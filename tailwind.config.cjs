/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Gotham SSm A, sans-serif"],
    },
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
