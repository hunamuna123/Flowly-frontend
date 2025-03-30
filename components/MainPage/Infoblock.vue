<template>
  <div class="max-w-[85rem] w-full mx-auto py-4 min-h-screen flex flex-col justify-center">
    <!-- Блок с фоном, фиксированная высота 600px -->
    <div class="flex flex-col items-center justify-center h-[600px] text-center rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 p-6 bg-[url(/infoblock/bg.png)] bg-cover bg-center">
      <div class="px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-[clamp(50px,15vw,250px)] text-white font-extrabold leading-none" style="font-family: fat;">Flowly</h1>
          <h2 class="text-[clamp(30px,5vw,100px)] text-white font-bold mt-4" style="font-family: fat;">АНАЛИЗ КОНКУРЕНТОВ</h2>
        </div>
      </div>
    </div>

    <!-- Блок с преимуществами -->
    <div class="flex flex-wrap gap-4 justify-center mt-6">
      <div v-for="(feature, index) in features" :key="index" class="flex items-center bg-flowlybg2 p-4 rounded-xl flex-[1_1_calc(50%-1rem)] min-w-[200px] md:flex-[1_1_calc(25%-1rem)]">
        <img :src="feature.img" class="max-w-[48px] md:max-w-[64px] max-h-[48px] md:max-h-[64px]" alt="">
        <p class="text-lg text-white ml-4">{{ feature.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { img: "/infoblock/4.png", text: "Распознает и генерирует голос" },
  { img: "/infoblock/3.png", text: "Работает 24/7" },
  { img: "/infoblock/3.png", text: "Обрабатывает текст" },
  { img: "/infoblock/4.png", text: "Анализирует данные" }
];
</script>
