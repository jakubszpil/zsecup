export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'ZSE4CUP',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap' },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/bb5b654169.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  plugins: [],
  css: [],
  components: true,
  buildModules: ['@nuxtjs/dotenv'],
  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/proxy', '@nuxtjs/style-resources'],
  proxy: {
    '/api': {
      target: 'http://esportwzse.pl/services',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  axios: { proxy: true },
  content: {},
  build: {},
  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
  },
}
