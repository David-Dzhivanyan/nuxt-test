// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;'
        }
      }
    }
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "supportPage",
        path: "/supportPage/:title",
        file: "~/pages/supportPage.vue"
      });
    },
  },
})
