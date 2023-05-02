/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        "2sm": "0px 5px 15px rgba(59,2,132, 0.35)",
      },
      hover: {
        normal: "transform: scale(1.05)",
      },
      colors: {
        white: "#fff",
        black: "#000",
        primary: "#A4D0A4",
        secondary: "#F2F2F2",
        deep: "#146C94",
        modal: "rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xxxs: "280px",
        xxs: "320px",
        xs: "480px",
        xsm: "600px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
