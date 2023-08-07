/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkPrimaryBg: "#030712",
        darkSecondaryBg: "#111827",
        darkText: "#D1D5DB",
        lightPrimaryBg: "#FFF",
        lightSecondaryBg: "#F9FAFB",
        lightText: "#4B5563",
      },
      
    },
  },
  plugins: [],
};
