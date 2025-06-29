// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--tw-primary)",
        secondary: "var(--tw-secondary)",
        accent: "var(--tw-accent)",
        dark: "var(--tw-dark)",
        light: "var(--tw-light)",
        success: "var(--tw-success)",
        warning: "var(--tw-warning)",
        danger: "var(--tw-danger)",
        info: "var(--tw-info)",
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
