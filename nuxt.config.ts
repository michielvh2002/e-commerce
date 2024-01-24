// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
});
