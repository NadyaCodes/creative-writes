/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppons",
      },
    },
  },
  plugins: [],
};

// or possibly in content:
// "./pages/**/*.{js, ts, jsx, tsx}",
// "./components/**/*.{js, ts, jsx, tsx}"
