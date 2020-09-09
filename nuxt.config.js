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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/logo.png' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/dotenv'],
  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/proxy', '@nuxtjs/style-resources'],
  proxy: {
    '/api': {
      target: 'http://localhost/services',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  axios: {},
  content: {},
  build: {},
  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
  },
}
