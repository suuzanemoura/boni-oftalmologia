/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        title: ["var(--font-source-serif)"],
        text: ["var(--font-source-sans)"],
      },
      colors: {
        "boni-blue-100": "#044678",
        "boni-blue-200": "#022b54",
        "boni-blue-300": "#011c36",
      },
      screens: {
        xs: "480px",
        "2xs": "360px",
      },
    },
    plugins: [],
  },
};
