// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  // Re-enable the baseURL setting for GitHub Pages:
  app: {
    baseURL: '/wedding-app/'
  },
})