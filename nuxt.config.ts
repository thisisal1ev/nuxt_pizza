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
      title: 'Nuxt Pizza - вкусней уже некуда',
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
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@vee-validate/nuxt',
    'nuxt-auth-utils',
  ],

  veeValidate: {
    autoImports: true,
  },

  pinia: {
    storesDirs: ['./store/**'],
  },

  css: ['./assets/main.css', 'vue3-toastify/dist/index.css'],

  fonts: {
    families: [{ name: 'nunito', provider: 'google' }],
  },

  experimental: {
    componentIslands: true,
  },

  runtimeConfig: {
    oauth: {
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      },
      github: {
        clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
      },
      gitlab: {
        clientId: process.env.NUXT_OAUTH_GITLAB_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GITLAB_CLIENT_SECRET,
      }
    }
  },

  compatibilityDate: '2024-09-15',
})