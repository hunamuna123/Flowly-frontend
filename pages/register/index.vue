<template>

    <div class="flex justify-center items-center min-h-screen px-4">
      <div class="w-full max-w-md bg-neutral-700 shadow-lg rounded-xl p-6 border-neutral-700">
        <h2 class="text-2xl font-semibold text-center text-white mb-2">Регистрация</h2>
        <p class="  text-center text-sm text-gray-600 dark:text-neutral-400 mb-2">
          Уже зарегистрированы?
          <NuxtLink to="/login" class="text-teal-500 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="../examples/html/signup.html">
           Войти здесь
          </NuxtLink>
      </p>
        <form>
          <div class="space-y-4">
            <div>
              <label for="text" class="block text-sm font-medium text-white">Логин</label>
              <div class="relative mt-1">
                <input 
                    type="text" 
                    id="name" 
                    name="text" 
                    class="py-3 px-4 ps-12 w-full shadow-sm rounded-lg text-sm focus:border-teal-500  bg-flowlybg2 border-neutral-700 text-white placeholder-neutral-500 focus:ring-neutral-600"
                    placeholder="Введите логин"
                    required>
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
            </div>
            <div>
            <label for="text" class="block text-sm font-medium text-white">Почта</label>
              <div class="relative mt-1">
                <input 
                  type="email" 
                  id="mail" 
                  name="text" 
                  class="py-3 px-4 ps-12 w-full  shadow-sm rounded-lg text-sm focus:border-teal-500  bg-flowlybg2 border-neutral-700 text-white placeholder-neutral-500 focus:ring-neutral-600"
                  placeholder="Введите почту"
                  required>
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> 
       
                </div>
              </div>
            </div>
            <div>
              <label for="text" class="block text-sm font-medium text-white">Пароль</label>
              <div class="relative mt-1">
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    class="py-3 px-4 ps-12 w-full shadow-sm rounded-lg text-sm focus:border-teal-500  bg-flowlybg2 border-neutral-700 text-white placeholder-neutral-500 focus:ring-neutral-600"
                    placeholder="Введите пароль"
                    required>
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>   </div>
              </div>
            </div>
            <button 
              type="submit" 
              class="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-500 focus:outline-none transition">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  