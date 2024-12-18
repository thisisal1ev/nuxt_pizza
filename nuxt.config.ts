export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Nuxt Pizza',
      htmlAttrs: {
        lang: 'ru'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Nuxt Pizza' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
    },
  },

  modules: [
    '@nuxt/fonts',
    '@pinia/nuxt',
    "@prisma/nuxt",
    '@vueuse/nuxt',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  prisma: {
    autoSetupPrisma: true,
  },

  css: ['./assets/main.css'],

  fonts: {
    families: [
      { name: 'nunito', provider: 'google' },
    ],
  },

  experimental: {
    componentIslands: true,
  },

  compatibilityDate: '2024-09-15',
})