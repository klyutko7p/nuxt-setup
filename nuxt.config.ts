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

  pwa: {
    manifest: {
      name: "Optimization Budget App",
      short_name: "OBA",
      description: "We save your money!",
      icons: [
        {
          src: "icons/64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/144.png",
          sizes: "144x144",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
