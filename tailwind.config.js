module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        heading: ["Roboto ", "sans-serif"],
        body: ["Fira Sans", "sans-serif"],
        display: ["Roboto Mono", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 15px 64px 0 rgb(44 75 184 / 10%)",
        "4xl": "0px 3px 10px 0px rgb(248 96 77 / 19%)",
        "5xl": "0px 6px 30px rgba(38, 78, 118, 0.1)",
        "6xl": "0px 4px 16px 0px rgb(248 96 77 / 11%)",
        "7xl": "0 10px 30px -15px rgba(2,12,27,0.7)",
        "8xl": "0px 2px 4px rgb(2 12 27 / 90%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          primary: "#64E1DA",
          secondary: "#112240",
          accent: "#A8B2D1",
          neutral: "#8892B0",
          info: "#0A192F",
          // success: "#71AFFF",
          success: "#112240",
          bordercolor: "#e5e7eb",
          card: "#333333",
          cards: "#f6f6f6",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
