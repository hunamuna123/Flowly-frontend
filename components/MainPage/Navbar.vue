<template>
  <header
    class="flex flex-wrap md:justify-start md:flex-nowrap w-full py-2 z-50 absolute backdrop-blur-xl fixed"
  >
    <nav
      class="relative max-w-[85rem] w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4  mx-auto"
    >
      <div class="md:col-span-3 flex justify-between items-center">
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
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        aria-labelledby="hs-navbar-collapse"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0"
        >
          <div>
            <NuxtLink
              to="/#main"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
              >Главная</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="/#product"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
            >
              Товары
            </NuxtLink>
          </div>
          <div>
            <NuxtLink
              to="/#about"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
              >О нас</NuxtLink>
          </div>
          <div>
            <NuxtLink
              to="/#reviews"
              class="inline-block text-white hover:text-gray-200 focus:outline-none focus:text-gray-300"
              >Отзывы</NuxtLink>
          </div>
        </div>
        <div class="md:hidden mt-4 flex flex-col gap-y-2 ">

          <div v-if="!authtoken">
            <NuxtLink to="/login" class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-transparent border border-teal-500 text-neutral-300 hover:text-gray-200 ">
              Войти
            </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink
              to="/profile"
              class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-transparent border border-teal-500 text-neutral-300 hover:text-gray-200"
            >
              Профиль
            </NuxtLink>
          </div>
        </div>


      </div>

      <div
        class="flex items-center gap-x-3 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 z-10 md:col-span-3"
      >
        <div class="md:ms-auto mt-2 md:mt-0 flex flex-wrap items-center gap-x-1.5 hidden md:flex">
          <div v-if="authtoken">
            <NuxtLink
              to="/profile"
              class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-transparent border border-teal-500 text-neutral-300 hover:text-gray-200"
            >
              Профиль
            </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink
              to="/login"
              class="py-[7px] px-2.5  inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-transparent border border-teal-500 text-neutral-300 hover:text-gray-200"
            >
              Войти
            </NuxtLink>
          </div>
        </div>
        <button
          type="button"
          class="hs-collapse-toggle md:hidden relative flex justify-center items-center size-[46px] text-sm font-semibold rounded-xl border border-teal-200 text-teal-400 shadow-sm hover:bg-teal-700 focus:outline-none focus:bg-teal-800"
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
const authtoken = useCookie('authtoken').value;
</script>
