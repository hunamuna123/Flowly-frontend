// nuxt.config.js
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://api-maps.yandex.ru/3.0/?apikey=03c899b1-9195-4863-a6ea-b44eb850ac3d&lang=ru_RU',
          async: true,
          defer: true,
        },
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@pinia/nuxt', 'vue-yandex-maps/nuxt'],
  yandexMaps: {
    apikey: '03c899b1-9195-4863-a6ea-b44eb850ac3d',
  },
});
