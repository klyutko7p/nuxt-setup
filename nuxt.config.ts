// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],

  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/scss/_variables.scss"',
        },
      },
    },
  },

  // nitro: {
  //   plugins: ["~/server/index.ts"],
  // },
  // runtimeConfig: {
  //   mongodbUrl: process.env.MONGODB_URL,
  // },
});
