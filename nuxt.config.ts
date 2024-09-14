export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/fonts',
    '@pinia/nuxt',
    "@prisma/nuxt",
    'nuxt-lucide-icons',
  ],

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
})