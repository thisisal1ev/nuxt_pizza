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
  ],

  css: ['./app/main.scss'],

  fonts: {
    families: [
      { name: 'nunito', provider: 'google' },
    ],
  },
})
