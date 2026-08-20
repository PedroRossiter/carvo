/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F8FB",
        surface: "#FFFFFF",
        ink: "#1C2230",
        muted: "#6B7280",
        primary: {
          DEFAULT: "#0EA5E9",
          dark: "#0369A1",
          light: "#E0F2FE",
        },
        accent: {
          DEFAULT: "#FF7A59",
          dark: "#E5613F",
          light: "#FFEDE7",
        },
        pw: {
          combustao: "#9CA3AF",
          flex: "#4F63F0",
          mhev: "#38BDF8",
          hev: "#14B8A6",
          phev: "#A855F7",
          bev: "#22C55E",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 2px 10px rgba(28, 34, 48, 0.06)",
        cardHover: "0 8px 24px rgba(28, 34, 48, 0.10)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
