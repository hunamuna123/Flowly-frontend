<template>
  <header
    class="flex flex-wrap xl:justify-start xl:flex-nowrap w-full py-2 z-100 absolute backdrop-blur-xl px-4 fixed"
  >
    <nav
      class="relative max-w-[85rem] w-full flex flex-wrap xl:grid xl:grid-cols-12 basis-full items-center px-4 mx-auto"
    >
      <div class="xl:col-span-3 flex justify-between items-center">
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
      </div>

      <div
        id="hs-navbar"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xl:block xl:w-auto xl:basis-auto xl:order-2 xl:col-span-6"
        aria-labelledby="hs-navbar-collapse"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 xl:flex-row xl:justify-center xl:items-center xl:gap-y-0 xl:gap-x-7 xl:mt-0"
        >
          <div>
            <NuxtLink
              to="/"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
              >Главная</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="/panel"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
            >
              Панель
            </NuxtLink>
          </div>
          <div>
            <NuxtLink
              to="/"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
              >О нас</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="/"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
              >Отзывы</NuxtLink
            >
          </div>
        </div>
        <div class="xl:hidden mt-4 flex flex-col gap-y-2">
          <div v-if="!authtoken">
            <NuxtLink
              to="/login"
              class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-transparent border border-teal-500 text-neutral-300 hover:text-gray-200"
            >
              Войти
            </NuxtLink>
          </div>
          <div v-else>
            <MainPageProfile />
          </div>
        </div>
      </div>

      <div
        class="flex items-center gap-x-3 xl:gap-x-2 ms-auto py-1 xl:ps-6 xl:order-3 z-10 xl:col-span-3"
      >
        <div
          class="xl:ms-auto mt-2 xl:mt-0 flex flex-wrap items-center gap-x-1.5 hidden xl:flex"
        >
          <div v-if="!authtoken">
            <NuxtLink
              to="/login"
              class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-transparent border border-teal-500 text-neutral-300 hover:text-gray-200"
            >
              Войти
            </NuxtLink>
          </div>
          <div v-else>
            <MainPageProfile />
          </div>
        </div>
        <button
          type="button"
          class="hs-collapse-toggle xl:hidden relative flex justify-center items-center size-[46px] text-sm font-semibold rounded-xl border border-teal-200 text-teal-400 shadow-sm hover:bg-teal-700 focus:outline-none focus:bg-teal-800"
          id="hs-navbar-collapse"
          aria-expanded="false"
          aria-controls="hs-navbar"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-navbar"
        >
          <svg
            class="hs-collapse-open:hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            class="hs-collapse-open:block hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
const authtoken = useCookie("authtoken").value;
</script>
