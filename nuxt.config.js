export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  compatibilityDate: '2024-11-06',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wedding-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss','@nuxt/http'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  http: {
    // Configure your HTTP options here, e.g., baseURL, timeout, etc.
    baseURL: 'https://api.example.com'
  },
}
