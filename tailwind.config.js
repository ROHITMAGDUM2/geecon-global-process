/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
      },
      backgroundImage: {
        "heading-with-arrow":
          "linear-gradient(135deg, #3260b2, #3260b2 32%, #3260b296)",
      },
      colors: {
        bodyColor: "#F5F5F5",
        customGray: "#e9ecef",
        darkGray: "#212529",
      },
    },
  },
  plugins: [],
};
