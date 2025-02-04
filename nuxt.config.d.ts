declare module '@nuxt/schema' {
  interface NuxtConfig {
    theme?: {
      dark: boolean
      colors: Record<string, string>
    } | string
  }
}