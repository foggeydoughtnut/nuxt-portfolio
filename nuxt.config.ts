// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    customRoutes: 'config',
    pages: {
      index: {
        en: '/',
      },
      about: {
        en: '/about',
      },
      projects: {
        en: '/projects'
      }
    }
  }
})
