<template>
  <header class="bg-white h-16 shadow flex justify-between items-center">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 text-orange-500 font-bold">
      Home
    </router-link>

    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full hover:bg-orange-500 hover:text-white transition-colors"
      >
        Search meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full hover:bg-orange-500 hover:text-white transition-colors"
      >
        Meals By Letters
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full hover:bg-orange-500 hover:text-white transition-colors"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
