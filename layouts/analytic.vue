<template>
    <div class="min-h-screen  p-8">
      <div class="text-center mb-8">
        <h3 class="text-4xl font-bold text-white drop-shadow-lg">
          Аналитика данных
        </h3>
      </div>
      <PanelParsSocial/>
  
      <!-- Card Section -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card -->
          <div class="flex flex-col bg-white border border-teal-200 shadow-xl rounded-xl dark:bg-neutral-800 dark:border-teal-700">
            <div class="p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase text-teal-600 dark:text-teal-400">
                  Total users
                </p>
                <div class="hs-tooltip relative">
                  <div class="hs-tooltip-toggle">
                    <svg class="shrink-0 w-4 h-4 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <path d="M12 17h.01"/>
                    </svg>
                    <span class="hs-tooltip-content opacity-0 transition-opacity duration-300 absolute invisible z-10 py-1 px-2 bg-teal-700 text-xs font-medium text-white rounded-md shadow-lg dark:bg-teal-900">The number of daily users</span>
                  </div>
                </div>
              </div>
  
              <div class="mt-2 flex items-center gap-x-2">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                  72,540
                </h3>
                <span class="flex items-center gap-x-1 text-green-600">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                    <polyline points="16 7 22 7 22 13"/>
                  </svg>
                  <span class="text-sm">1.7%</span>
                </span>
              </div>
            </div>
          </div>
          <!-- End Card -->
  
          <!-- Card -->
          <div class="flex flex-col bg-white border border-teal-200 shadow-xl rounded-xl dark:bg-neutral-800 dark:border-teal-700">
            <div class="p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase text-teal-600 dark:text-teal-400">
                  Sessions
                </p>
              </div>
  
              <div class="mt-2 flex items-center gap-x-2">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                  29.4%
                </h3>
              </div>
            </div>
          </div>
          <!-- End Card -->
  
          <!-- Card -->
          <div class="flex flex-col bg-white border border-teal-200 shadow-xl rounded-xl dark:bg-neutral-800 dark:border-teal-700">
            <div class="p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase text-teal-600 dark:text-teal-400">
                  Avg. Click Rate
                </p>
              </div>
  
              <div class="mt-2 flex items-center gap-x-2">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                  56.8%
                </h3>
                <span class="flex items-center gap-x-1 text-red-600">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/>
                    <polyline points="16 17 22 17 22 11"/>
                  </svg>
                  <span class="text-sm">1.7%</span>
                </span>
              </div>
            </div>
          </div>
          <!-- End Card -->
  
          <!-- Card -->
          <div class="flex flex-col bg-white border border-teal-200 shadow-xl rounded-xl dark:bg-neutral-800 dark:border-teal-700">
            <div class="p-5">
              <div class="flex items-center gap-x-2">
                <p class="text-xs uppercase text-teal-600 dark:text-teal-400">
                  Pageviews
                </p>
              </div>
  
              <div class="mt-2 flex items-center gap-x-2">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                  92,913
                </h3>
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Card Section -->
  

      <!-- End Select Component -->
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit()
    }
  })
  </script>
  