// nuxt.config.js
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(), // Подключаем плагин Tailwind CSS для Vite
    ],
  },
  modules: ['@pinia/nuxt'],
  router: {
    middleware: ['auth'], // Подключаем middleware
  },
});
