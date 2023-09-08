/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./*/*.html'],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "2sm": "0 2px 4px 0 #5C469C",
        allcorners: "rgba(0, 0, 0, 0.35) 20px 20px 20px",
        allshadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        rb: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
        b: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
      },
      hover: {
        normal: "transform: scale(1.05)",
      },
      colors: {
        white: "#fff",
        black: "#000",
        primary: "#A4D0A4",
        secondary: "#F2F2F2",
        deep: "#5C469C",
        modal: "rgba(0, 0, 0, 0.5)",
        glass: "rgba(200,200,200,0.5)",
        faint: "#F6F1F1",
        xlBlue: "#ADC4CE",
        lBlue: "#D4FAFC",
        dBlue: "#213555",
        ldBlue: "#4F709C",
        lGreen: "#176B87",
        gray: "#F0F0F0",
        gold: "#FFD700",
        platinum: "#FF8400"
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
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
]
};
