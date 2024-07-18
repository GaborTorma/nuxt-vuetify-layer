import { md3 } from 'vuetify/blueprints'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-18',

  modules: [
    ['vuetify-nuxt-module', {
      vuetifyOptions: {
        blueprint: md3,
        icons: {
          defaultSet: 'mdi-svg',
        },
        /* theme: {
          themes: {
            light: {
              colors: {
              // primary: appConfig.themeColor,
              },
            },
          },
        }, */
      },
    }],

    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: {
          // all weights are needed for Vuetify
          wght: [100, 300, 400, 500, 700, 900],
          ital: [100, 300, 400, 500, 700, 900],
        },
      },
      subsets: ['latin', 'latin-ext'],
    }],
  ],

  imports: {
    dirs: [
      'node_modules/@mdi/js',
    ],
  },

  devtools: { enabled: true },
})
