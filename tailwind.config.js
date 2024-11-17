/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('/src/assets/background.png')",
      },
      fontFamily: {
        dmSans: "var(--font-face-primary-font)",
      },
      colors: {
        primary: "var(--color-primary)",
        fade: "var(--color-fade)",
        baseText: "var(--color-base-text)",
        solid: "var(--color-solid-white)",
        lightYellow: "var( --color-light-yellow)",
        border: "var(--color-border)",
      },
      screens:{
        sm375:'375px'
      }
    },
  },
  plugins: [],
};
