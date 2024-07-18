export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-18',

  extends: ['..'],

  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            colors: {
              primary: 'blue',
            },
          },
        },
      },
    },
  },

  modules: [
    '@nuxt/eslint',
  ],

  eslint: {
    checker: true,
    config: {
      standalone: false,
    },
  },
})
