<template>
  <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-flowlybg border-neutral-700 mt-2">
    <nav class="relative  max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2">
      <div class="flex justify-between items-center gap-x-1">
        <NuxtLink to="/" class="flex-none font-semibold text-xl focus:outline-hidden focus:opacity-80 text-white" href="#" aria-label="Brand">Flowly</NuxtLink>

        <button type="button" class="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none text-white border-neutral-700 hover:bg-neutral-700 focus:bg-neutral-700" id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base" aria-label="Toggle navigation" data-hs-collapse="#hs-header-base">
          <svg class="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" x2="21" y1="6" y2="6"/>
            <line x1="3" x2="21" y1="12" y2="12"/>
            <line x1="3" x2="21" y1="18" y2="18"/>
          </svg>
          <svg class="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
          <span class="sr-only">Toggle navigation</span>
        </button>
      </div>

      <div id="hs-header-base" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-header-base-collapse">
        <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div class="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
            <div class="grow">
              <div class="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">

                <div class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--adaptive:adaptive] [--is-collapse:true] md:[--is-collapse:false]">
                  <button id="hs-header-base-dropdown" type="button" class="hs-dropdown-toggle w-full p-2 flex items-center text-sm rounded-lg focus:outline-hidden text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3 10 2.5-2.5L3 5"/>
                      <path d="m3 19 2.5-2.5L3 14"/>
                      <path d="M10 6h11"/>
                      <path d="M10 12h11"/>
                      <path d="M10 18h11"/>
                    </svg>
                    Функционал
                    <svg class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </button>

                  <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-flowlybg after:bg-neutral-700 md:rounded-lg">
                    <div class="py-1 md:px-1 space-y-0.5">
                      <a class="p-2 md:px-3 flex items-center text-sm rounded-lg text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-700 focus:text-neutral-300" href="#">
                        Поиск
                      </a>

                      <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                        <button id="hs-header-base-dropdown-sub" type="button" class="hs-dropdown-toggle w-full flex justify-between items-center text-sm rounded-lg p-2 md:px-3 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-700 focus:text-neutral-300">
                          Анализ
                          <svg class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                        </button>

                        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:mx-2.5! md:top-0 md:start-full ps-7 md:ps-0 bg-flowlybg divide-neutral-700 md:bg-flowlybg after:bg-neutral-700 md:rounded-lg" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-base-dropdown-sub">
                          <div class="p-1 space-y-1">
                            <a class="p-2 md:px-3 flex items-center text-sm rounded-lg text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-700 focus:text-neutral-300" href="#">
                              Соц сети
                            </a>

                            <a class="p-2 md:px-3 flex items-center text-sm rounded-lg text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-700 focus:text-neutral-300" href="#">
                              Аккаунты
                            </a>

                            <a class="p-2 md:px-3 flex items-center text-sm rounded-lg text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-700 focus:text-neutral-300" href="#">
                              Компании
                            </a>
                          </div>
                        </div>
                      </div>

                      <a class="p-2 md:px-3 flex items-center text-sm rounded-lg text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-700 focus:text-neutral-300" href="#">
                        Говно
                      </a>

                      <a class="p-2 md:px-3 flex items-center text-sm rounded-lg text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300 focus:bg-neutral-700 focus:text-neutral-300" href="#">
                        Жопа
                      </a>
                    </div>
                  </div>
                </div>

                <a class="p-2 flex items-center text-sm rounded-lg text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700" href="#">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  О нас
                </a>

                <a class="p-2 flex items-center text-sm rounded-lg text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700" href="#">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 12h.01"/>
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
                    <rect width="20" height="14" x="2" y="6" rx="2"/>
                  </svg>
                  Новости
                </a>

                <a class="p-2 flex items-center text-sm rounded-lg text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700" href="#">
                  <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                    <path d="M18 14h-8"/>
                    <path d="M15 18h-5"/>
                    <path d="M10 6h8v4h-8V6Z"/>
                  </svg>
                  Жопа
                </a>
              </div>
            </div>
            <div class="md:ms-auto mt-2 md:mt-0 flex flex-wrap items-center gap-x-1.5">
              <NuxtLink to="/login" class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-flowlybg border border-teal-500 text-neutral-300 hover:bg-neutral-700 focus:bg-neutral-700" href="#">
                Войти
              </NuxtLink>
              <NuxtLink to="/register" class="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none bg-flowlybg border border-teal-500 text-neutral-300 hover:bg-neutral-700 focus:bg-neutral-700" href="#">
                Зарегистрироваться
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
