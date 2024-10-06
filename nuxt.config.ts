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
    'nuxt-lucide-icons',
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  prisma: {
    autoSetupPrisma: true,
  },

  css: ['./assets/main.scss'],

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