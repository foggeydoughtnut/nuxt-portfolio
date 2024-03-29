// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/robots'
  ],
  image: {
    format: ['webp'],
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    customRoutes: 'config',
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'ja',
        name: '日本語'
      },
    ],
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
  },
  robots: {
    configPath: './robots.config'
  }
})
