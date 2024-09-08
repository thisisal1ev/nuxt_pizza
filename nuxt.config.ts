export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/fonts'
  ],

  css: ['./app/main.css'],

  fonts: {
    families: [
      { name: 'nunito', provider: 'google' },
    ],
  },
})
