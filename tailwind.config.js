/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'primary': '#97EAD2',
      'primary-dark': '#85e6ca',
      // 'secondary': '#816E94',
      'secondary': '#ef106d',
      'secondary-dark': '#6e5d7e',
      'background': '#e1e1e1',
      'focus': '#74226C'
    },
    extend: {},
  },
  plugins: [],
}

