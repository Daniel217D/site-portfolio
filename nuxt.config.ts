import { projects } from './src/entities/project/model/projects'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      demoApiUrl: process.env.NUXT_PUBLIC_DEMO_API_URL || '',
      demoApiKey: process.env.NUXT_PUBLIC_DEMO_API_KEY || ''
    }
  },
  nitro: {
    prerender: {
      routes: projects.map((project) => `/p/${project.project_name}`)
    }
  }
})

