// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['storeToRefs', 'defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxtjs/i18n',
  ],
  imports: {
    dirs: [
      './stores/**'
    ],
  },
  i18n: {
    baseUrl: 'http://localhost:3001',
    defaultLocale: 'en-eu',
    strategy: 'prefix',
    customRoutes: 'config',
    pages: {
      index: {
        'en-eu': '/',
        'nl-nl': '/'
      },
      quotation: {
        'en-eu': '/quotation',
        'nl-nl': '/offerte'
      }
    },
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    lazy: true,
    langDir: './locales/',
    locales: [
      {
        code: 'en-eu',
        iso: 'en-GB',
        lang: 'en',
        name: 'European',
        file: 'en.json',
        isCatchallLocale: true,
      },
      {
        code: 'nl-nl',
        iso: 'nl-NL',
        lang: 'nl',
        name: 'Dutch',
        file: 'nl.json',
      }
    ]
  },
})
