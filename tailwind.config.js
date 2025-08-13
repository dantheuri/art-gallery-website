/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-black": "var(--almost-black)",
        gold: "var(--gold)",
        "dark-grey": "var(--dark-grey)",
      },
      fontFamily: {
        bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1680px",
      // => @media (min-width: 1680px) { ... }
    },
  },
  plugins: [],
};
