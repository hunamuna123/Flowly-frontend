<template>
  <div
    class="max-w-[85rem] w-full mx-auto py-4 flex flex-col items-center text-left "
  >
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 ">
        <div class="text-center">
          <h2 class="text-4xl sm:text-6xl font-bold text-white">
            Попробуйте бесплатно
          </h2>
          <p class="mt-3 text-gray-300">
            Вы моожете сделать свой первый поиск прямо сейчас
          </p>
          <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative ">
            <form>
              <div
                class="relative z-10 flex gap-x-3 p-3 bg-white border  border-teal-200 rounded-lg shadow-lg shadow-teal-100"
              >
                <div class="w-full">
                  <input
                    type="text"
                    name="hs-search-article-1"
                    id="hs-search-article-1"
                    class="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-teal-500 focus:ring-teal-500 focus:outline-none"
                    placeholder="Введите то что хотите найти"
                  />
                </div>
                <div>
                  <a
                    class="size-11 inline-flex justify-center items-center gap-x-2 text-lg font-medium rounded-lg border border-transparent bg-teal-600  text-white hover:bg-teal-700 focus:outline-hidden focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
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
                  </a>
                </div>
              </div>
            </form>
            <div
              class="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20"
            >
              <svg
                class="w-16 h-auto text-teal-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div
              class="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32"
            >
              <svg
                class="w-40 h-auto text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="">
        <div class="px-4 xl:px-0 py-10 lg:pt-10 lg:pb-20 mx-auto">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center"
          >
            <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                class="w-full object-cover rounded-xl"
                src="/info2block/flowly.png"
                alt="Features Image"
              />
            </div>
            <div>
              <div class="flex gap-x-5 ms-1">
                <div
                  class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-teal-200"
                >
                  <div
                    class="relative z-10 size-8 flex justify-center items-center"
                  >
                    <span
                      class="flex shrink-0 justify-center items-center size-8 border border-teal-800 text-teal-500 font-semibold text-xs uppercase rounded-full"
                    >
                      1
                    </span>
                  </div>
                </div>
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="text-lg  text-neutral-400">
                    <span class="text-white">Сбор данных и анализ:</span>
                    Изучение публичных данных соцсетей (подписки, лайки,
                    просмотры) и анализ интересов пользователей.
                  </p>
                </div>
              </div>
              <div class="flex gap-x-5 ms-1">
                <div
                  class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-teal-200"
                >
                  <div
                    class="relative z-10 size-8 flex justify-center items-center"
                  >
                    <span
                      class="flex shrink-0 justify-center items-center size-8 border border-teal-800 text-teal-500 font-semibold text-xs uppercase rounded-full"
                    >
                      2
                    </span>
                  </div>
                </div>
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="text-lg  text-neutral-400">
                    <span class="text-white"
                      >Разработка алгоритмов рекомендаций:</span
                    >
                    Создание модели машинного обучения, которая определяет
                    похожие аккаунты и бренды.
                  </p>
                </div>
              </div>
              <div class="flex gap-x-5 ms-1">
                <div
                  class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-teal-200"
                >
                  <div
                    class="relative z-10 size-8 flex justify-center items-center"
                  >
                    <span
                      class="flex shrink-0 justify-center items-center size-8 border border-teal-800 text-teal-500 font-semibold text-xs uppercase rounded-full"
                    >
                      3
                    </span>
                  </div>
                </div>
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="text-lg  text-neutral-400">
                    <span class="text-white"
                      >Интеграция с разными соцсетями:</span
                    >
                    Подключение API популярных платформ для кроссплатформенного
                    анализа.
                  </p>
                </div>
              </div>
              <div class="flex gap-x-5 ms-1">
                <div
                  class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-teal-200"
                >
                  <div
                    class="relative z-10 size-8 flex justify-center items-center"
                  >
                    <span
                      class="flex shrink-0 justify-center items-center size-8 border border-teal-800 text-teal-500 font-semibold text-xs uppercase rounded-full"
                    >
                      4
                    </span>
                  </div>
                </div>
                <div class="grow pt-0.5 pb-8 sm:pb-12">
                  <p class="text-lg  text-neutral-400">
                    <span class="text-white"
                      >Генерация персонализированных рекомендаций:</span
                    >
                    Пользователь вводит ссылку на аккаунт и получает список
                    релевантных страниц.
                  </p>
                </div>
              </div>
              <a
                class="group inline-flex items-center gap-x-2 py-2 px-3 bg-teal-500 font-medium text-lg text-black rounded-full focus:outline-hidden"
                href="#"
              >
                <svg
                  class="shrink-0 size-4"
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
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                  <path
                    class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Начать
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
