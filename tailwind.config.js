/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'nunito'
      },
      backgroundImage: {
        'hero-pattern': "url('~assets/images/bg-pattern.png')",
        // 'texture': "url('/img/footer-texture.png')",
      }

    },
    colors: {
      transparent: 'transparent',
      primary: '#3843D0',
      white: '#FFFFFF',
      'light-blue': '#F8F8FF'
    }
  },
  plugins: [],
}

