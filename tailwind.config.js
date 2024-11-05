/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // theme: {
  //   extend: {
  //     fontFamily: {
  //      'mono': ['ui-monospace', 'SFMono-Regular'],
  //     },
  //   }
  // },

  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require('daisyui'),
  ],
}
