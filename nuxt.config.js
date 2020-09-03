export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.SITE_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/dotenv'],
  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/style-resources'],
  axios: {},
  content: {},
  build: {},
  styleResources: {
    scss: ['~/assets/scss/variables.scss'],
  },
}
