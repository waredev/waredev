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
        'hero-pattern': "url('~assets/images/bg-pattern.webp')",
        'wave-group': "url('~assets/images/wave-group.png')",
        'vision-pattern': "url('~assets/images/asset-purple-rounded.png')",
        'cooperation': "url('~assets/images/business-partners-handshake-international-business-concept.png')",
        // 'texture': "url('/img/footer-texture.png')",
      }

    },
    colors: {
      transparent: 'transparent',
      primary: '#3843D0',
      white: '#FFFFFF',
      'light-blue': '#F8F8FF',
      word: '#0a1060',
      purple: '#58409D',
      light: '#999bb0',
      black: '#000000',
      gray: '#edf2f7',
      orange: '#FF914D',
      red: '#d40000'
    }
  },
  plugins: [],
}

