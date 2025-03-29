<template>
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-4xl sm:text-6xl font-bold text-white">
            Доступные тарифы</h2>
    <p class="mt-2 text-gray-300">Мы предлагаем своим пользователям различные тарифные планы для более точной аналитики.</p>
  </div>
  <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
    <div class="flex flex-col border bg-teal-500 border-teal-600 text-center rounded-xl p-8">
      <h4 class="font-medium text-lg text-gray-800">Бесплатно</h4>
      <span class="mt-7 font-bold text-5xl text-gray-800">Бесплатно</span>
      <p class="mt-2 text-sm text-gray-500">Для обычных пользователей</p>
      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Можно добавить до 1 бизнеса
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Ограничения поиска
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Стандартные рекомендации
          </span>
        </li>
      </ul>
      <a  class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-600 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50" href="#">
        Войти
      </a>
    </div>
    <div class="flex flex-col border bg-teal-500 border-teal-600 text-center rounded-xl p-8">
      <h4 class="font-medium text-lg text-gray-800">Стандартный план</h4>
      <span class="mt-7 font-bold text-5xl text-gray-800">$30/месяц</span>
      <p class="mt-2 text-sm text-gray-500">Для продвинутых пользователей</p>
      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Можно добавить до 3 бизнесов
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Минимальные ограничения
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Расширенные реко
          </span>
        </li>
      </ul>
      <a  class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-600 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50" href="#">
        Войти
      </a>
    </div>
    <div class="flex flex-col border bg-teal-500 border-teal-600 text-center rounded-xl p-8">
      <h4 class="font-medium text-lg text-gray-800">Расширенный план</h4>
      <span class="mt-7 font-bold text-5xl text-gray-800">$47/месяц</span>
      <p class="mt-2 text-sm text-gray-500">Для опытных пользователей</p>
      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Можно добавить ∞ бизнесов
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Нет ограничений поиска
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Мощные алгоритмы 
          </span>
        </li>
      </ul>
      <a  class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-600 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50" href="#">
        Войти
      </a>
    </div>
    <div class="flex flex-col border bg-teal-500 border-teal-600 text-center rounded-xl p-8">
      <h4 class="font-medium text-lg text-gray-800">Максимальный тариф</h4>
      <span class="mt-7 font-bold text-5xl text-gray-800">$99/месяц</span>
      <p class="mt-2 text-sm text-gray-500">Для экспертов</p>
      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Можно добавить ∞ бизнесов
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            Нет ограничений поиска
          </span>
        </li>
        <li class="flex gap-x-2">
          <svg class="shrink-0 mt-0.5 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="text-gray-800">
            И многое другое...
          </span>
        </li>
      </ul>
      <a  class="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-teal-600 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50" href="#">
        Войти
      </a>
    </div>
  </div>
</div>
</template>