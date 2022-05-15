module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    themes: [
      {
        DoctorTheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#37cdbe",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "garden",
    ],
  plugins: [require("daisyui")],
};