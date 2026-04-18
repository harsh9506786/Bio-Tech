/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#007A3D",
        "green-dark": "#005C2E",
        "green-light": "#E8F5EE",
        "gold-accent": "#DAA520",
        "gold-light": "#D4B86A",
        "gold-dark": "#A68A3A",
        "biotech-green": "#007A3D",
        "biotech-gold": "#C5A24A",
        "light-bg": "#F5F7F6",
        forest: "#0B3D2E",
        "medical-blue": "#1B5E9E",
        "light-bg": "#F4F6F5",
        biotech: {
          green: "#007A3D",
          dark: "#005A2D",
          light: "#E6F2EC",
          gold: "#DAA520",
          "gold-light": "#F0E6C8",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],

        
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
