/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"IBM Plex Serif"', "serif"], // Ensure fonts with spaces have " " surrounding it.
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      keyframes: {
        reveal: {
          "0%": { transform: "translateY(100%)", opacity: "0", blur: "10px" },
          "100%": { transform: "translateY(0)", opacity: "1", blur: "0px" },
        },
      },
      animation: {
        reveal: "reveal 0.75s ease-in-out",
      },
    },
  },
  plugins: [],
};
