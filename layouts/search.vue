<template>
  <div>
    <!-- Заголовок -->
    <div class="text-center">
      <h3 class="text-3xl font-semibold text-white">Поиск</h3>
    </div>
    <div class="overflow-hidden">
      <div class="max-w-[85rem] mx-auto sm:px-6 lg:px-8 py-20">
        <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
          <div class="text-center">
            <h1 class="text-3xl text-white font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
              Умный поиск <span class="text-teal-500">и подборка!</span>
            </h1>
          </div>

          <!-- Форма ввода ссылки -->
          <form @submit.prevent="handleSubmit">
            <div class="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-100">
              <PanelSocialselect />
              <div class="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s w-full">
                <label for="hs-hero-email-1" class="block text-sm font-medium">
                  <span class="sr-only">Вставьте ссылку</span>
                </label>
                <!-- Привязка через v-model -->
                <input
                  type="text"
                  id="hs-hero-email-1"
                  v-model="inputLink"
                  class="py-2.5 sm:py-3 px-4 block w-full border-transparent rounded-lg sm:text-sm focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Вставьте ссылку (например, https://vk.ru/ID)"
                />
              </div>
              <div class="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
                <!-- Кнопка отправки запроса -->
                <button
                  type="submit"
                  class="size-11 w-full sm:w-auto p-4 inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-lg border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-hidden focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    class="shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          
          <!-- Прочие элементы шаблона, например, SVG-элементы и карточки, оставлены без изменений -->
          <div class="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80" aria-hidden="true">
            <!-- SVG код -->
          </div>
          <div class="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80" aria-hidden="true">
            <!-- SVG код -->
          </div>
        </div>
      
        
        <h2 class="text-2xl font-bold text-white text-center">Похожие аккаунты</h2>
        <!-- Остальной шаблон карточек -->
      </div>
    </div>
    <p v-if="errorMessage" class="text-center text-red-500 mt-3">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { useApiStore } from '@/store/api.js';

export default {
  data() {
    return {
      inputLink: '', // Значение ссылки из инпута
      errorMessage: ''
    };
  },
  methods: {
    /**
     * Извлекает часть URL после домена.
     * Например, из "https://vk.ru/ID" вернет "ID".
     */
    extractId(url) {
      try {
        // Если протокол не указан, добавляем его для корректного парсинга
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          url = 'https://' + url;
        }
        const urlObj = new URL(url);
        // Удаляем ведущие слэши
        return urlObj.pathname.replace(/^\/+/g, '');
      } catch (err) {
        this.errorMessage = 'Неверный формат ссылки';
        return '';
      }
    },
    async handleSubmit() {
      this.errorMessage = '';
      const id = this.extractId(this.inputLink);
      if (!id) return;
      


      const apiUrl = useApiStore().url;
      try {
        // Если ваш API поддерживает GET-запрос с телом (необычный случай),
        // то можно отправить данные в теле запроса.
        // Если же API ожидает параметры через query, то лучше использовать URL-параметры.
        const response = await fetch(`${apiUrl}find/api/parserCommunities`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: id })
        });
        const result = await response.json();
        console.log('Результат запроса:', result);
      } catch (err) {
        this.errorMessage = 'Ошибка запроса: ' + err.message;
      }
    }
  }
};
</script>
