<template>
  <div
    class="sticky top-0 inset-x-0 z-62 bg-white border-y py-2 border-gray-200 px-4 sm:px-6 sm:px-8 sm:hidden dark:bg-neutral-800 dark:border-neutral-700"
  >
    <div class="flex justify-center items-center min-h-screen">
      <div
        class="w-full md:h-[80%] md:max-w-md h-auto bg-neutral-800 shadow-lg border-neutral-700 flex flex-col min-h-screen overflow-hidden"
      >
        <div class="flex-grow p-5 overflow-auto mb-12">
          <NuxtLayout :name="currentLayout" />
        </div>
        <div
          class="w-full bg-neutral-800 text-white py-3 px-4 border-t border-neutral-700 flex justify-around items-center fixed bottom-0 left-0 right-0 md:max-w-md mx-auto"
        >
          <button
            @click="changeLayout('home')"
            class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            
          </button>
          <button
            @click="changeLayout('search')"
            class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> 
          </button>
          <button
            @click="changeLayout('analytic')"
            class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-increasing-icon lucide-chart-column-increasing"><path d="M13 17V9"/><path d="M18 17V5"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17v-3"/></svg>
          </button>
          <button
            @click="changeLayout('chatai')"
            class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-message-square-icon lucide-bot-message-square"><path d="M12 6V2H8"/><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/><path d="M2 12h2"/><path d="M9 11v2"/><path d="M15 11v2"/><path d="M20 12h2"/></svg>
          </button>
          <button
            @click="changeLayout('profile')"
            class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition"
          >
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-pen-icon lucide-user-pen"
                >
                  <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
                  <path
                    d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  />
                  <circle cx="10" cy="7" r="4" />
                </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    id="hs-application-sidebar"
    class="hs-overlay [--auto-close:sm] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-65 h-full hidden fixed inset-y-0 start-0 z-60 bg-white border-e border-gray-200 sm:block sm:translate-x-0 sm:end-auto sm:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
    role="dialog"
    tabindex="-1"
    aria-label="Sidebar"
  >
    <div class="relative flex flex-col h-full max-h-full">
      <div class="px-6 pt-4 flex items-center">
        <NuxtLink
          class="flex-none rounded-xl text-2xl flex gap-3 items-center font-semibold focus:outline-none border-teal-200 focus:opacity-80"
          to="/#main"
          aria-label="Preline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-laptop-minimal-check text-teal-300"
          >
            <path d="M2 20h20" />
            <path d="m9 10 2 2 4-4" />
            <rect x="3" y="4" width="18" height="12" rx="2" />
          </svg>
          <p class="text-white">Flowly</p>
        </NuxtLink>

        <div class="hidden sm:block ms-2"></div>
      </div>
      <div
        class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <nav
          class="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul class="flex flex-col space-y-1">
            <li>
              <a
                 @click="changeLayout('home')"
                class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-white"
                href="#"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                Главная
              </a>
            </li>
            <li>
              <a
               @click="changeLayout('search')"
                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                href="#"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> Поиск
              </a>
            </li>
            <li>
              <a
               @click="changeLayout('analytic')"
                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                href="#"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column-increasing-icon lucide-chart-column-increasing"><path d="M13 17V9"/><path d="M18 17V5"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M8 17v-3"/></svg>   Аналитика
              </a>
            </li>
            <li>
              <a
              @click="changeLayout('chatai')"
                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                href="#"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-message-square-icon lucide-bot-message-square"><path d="M12 6V2H8"/><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"/><path d="M2 12h2"/><path d="M9 11v2"/><path d="M15 11v2"/><path d="M20 12h2"/></svg>Чат-бот   </a>
            </li>
            <li>
              <a
              @click="changeLayout('profile')"
                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:text-neutral-200"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-pen-icon lucide-user-pen"
                >
                  <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
                  <path
                    d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                  />
                  <circle cx="10" cy="7" r="4" />
                </svg>
                Профиль
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <div class="w-full pt-10 px-4 sm:px-6 sm:ps-72">
    <NuxtLayout :name="currentLayout" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLayout: "home",
    };
  },
  methods: {
    changeLayout(layoutName) {
      this.currentLayout = layoutName;
      console.log("Текущий макет:", this.currentLayout);
    },
  },
};
</script>
