/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5964E0",
        dark_blue: "#19202D",
        midnight: "#121721",
        dark_gray: "#6E8098",
        light_primary: "#939BF4",
        light_bg: "#F4F6F8;",
      },
      backgroundImage: {
        header_image: "url('/public/assets/desktop/bg-pattern-header.svg')",
        header_image_mobile:
          "url('/public/assets/mobile/bg-pattern-header.svg')",
      },
    },
  },
  plugins: [],
};
