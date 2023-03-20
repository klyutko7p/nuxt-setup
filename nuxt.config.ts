// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
  ],

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

  // pwa: {
  //   manifest: {
  //     name: "Your Name",
  //     short_name: "Your Short Name",
  //     description: "Your description!",
  //     icons: [
  //       {
  //         src: "icons/64.png",
  //         sizes: "64x64",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/144.png",
  //         sizes: "144x144",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: "/",
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: "module",
  //   },
  // },

  // nitro: {
  //   plugins: ["~/server/index.ts"],
  // },
  // runtimeConfig: {
  //   mongodbUrl: process.env.MONGODB_URL,
  // },
});
