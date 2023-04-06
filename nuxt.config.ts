// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],

  css: ["@/assets/css/global.css"],

  // nitro: {
  //   plugins: ["~/server/index.ts"],
  // },
  // runtimeConfig: {
  //   mongodbUrl: process.env.MONGODB_URL,
  // },
});
