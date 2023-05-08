export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   title: 'Waredev Digital Solution',
  //   htmlAttrs: {
  //     lang: 'id'
  //   },
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: 'Empowering Your Business with Innovative Software Solutions.' },
  //     { name: 'format-detection', content: 'telephone=6282193758418' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  //     // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap' },
  //   ]
  // },
  head: {
    title: 'Waredev Digital Solution | Custom Software Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Empowering Your Business with Innovative Software Solutions.' },
      { hid: 'og:title', name: 'og:title', content: 'Waredev Digital Solution | Custom Software Development' },
      { hid: 'og:description', name: 'og:description', content: 'Empowering Your Business with Innovative Software Solutions.' },
      { hid: 'og:image', name: 'og:image', content: '/assets/images/logo.png' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'waredev, waredev digital solution, waredev.co.id, waredev custom software development, custom software development, CV. Waredev Digital Solution' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://waredev.co.id',
    gzip: true,
    // exclude: [],
    routes: [
      '/',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  target: 'static'
}
