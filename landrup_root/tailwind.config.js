/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeDark: "#000000",
        themeBright: "#EAEAEA",
        themeBg: "#5E2E53",
        themeBgBright: "#E1A1E9",
      }
    },
  },
  plugins: [],
};

