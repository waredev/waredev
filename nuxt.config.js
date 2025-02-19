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
  // head: {
  //   title: 'Waredev Digital Solution | Custom Software Development',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'title', name: 'og:title', content: 'Waredev Digital Solution | Custom Software Development' },
  //     { hid: 'description', name: 'og:description', content: 'Unlock your business`s full potential with our expert IT consultancy. Our team expertise to help your business stay ahead of the curve.' },
  //     { hid: 'image', name: 'og:image', content: '/assets/images/logo.png' },
  //     { name: 'format-detection', content: 'telephone=no' },
  //     { hid: 'keywords', name: 'keywords', content: 'waredev, waredev digital solution, waredev.co.id, waredev custom software development, custom software development, CV. Waredev Digital Solution' }
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  //   link: [{ rel: 'canonical', href: 'https://waredev.co.id' }],
  // },

  head: {
    title: 'Waredev Digital Solution | Custom Software Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Transforming Ideas into Powerful Digital Solutions.' },

      // ✅ Open Graph (Untuk Sosial Media & Google)
      { hid: 'og:title', property: 'og:title', content: 'Waredev Digital Solution | Custom Software Development' },
      { hid: 'og:description', property: 'og:description', content: 'Empowering Your Business with Innovative Software Solutions.' },
      { hid: 'og:image', property: 'og:image', content: 'https://waredev.co.id/assets/images/logo.png' },
      { hid: 'og:url', property: 'og:url', content: 'https://waredev.co.id' },
      { hid: 'og:type', property: 'og:type', content: 'website' },

      // ✅ Twitter Card (Untuk Twitter)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Waredev Digital Solution | Custom Software Development' },
      { name: 'twitter:description', content: 'Empowering Your Business with Innovative Software Solutions.' },
      { name: 'twitter:image', content: 'https://waredev.co.id/assets/images/logo.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://waredev.co.id' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' }
    ],
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
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    ['nuxt-content-git', {
      createdAtName : 'gitCreatedAt',
      updatedAtName : 'gitUpdatedAt',
    }],
    '@nuxt/content',
    '@nuxtjs/dayjs',
  ],
  content: {
    liveEdit: false
  },

  sitemap: {
    hostname: 'https://waredev.co.id',
    gzip: true,
    routes: async () => {
      const { $content } = require('@nuxt/content');
      const articles = await $content('articles').fetch();
      return articles.map(article => `/blog/${article.slug}`);
    }
  },

  // sitemap: {
  //   hostname: 'https://waredev.co.id',
  //   gzip: true,
  //   // exclude: [],
  //   routes: [
  //     '/',
  //   ]
  // },

  extends: [
    'nuxt-seo-kit'
  ],

  image: {
    dir: 'assets/images',
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://waredev.co.id',
      siteName: 'Waredev Digital Solution | Mobile App Development',
      siteDescription: 'Transforming Ideas into Powerful Digital Solutions.',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },

  dayjs: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    defaultTimeZone: 'Asia/Jakarta',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
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
  generate: {
    fallback: true
  },
  target: 'static'
}
