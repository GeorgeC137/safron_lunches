<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>

  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="w-full rounded border-2 bg-white mb-3 border-gray-200 focus:ring-orange-500 focus:border-orange-500"
      placeholder="Search for Ingredients..."
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of searchedIngredient"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import store from "../store";
import { useRouter } from "vue-router";
import axiosClient from "../axiosClient";

const router = useRouter();
const ingredients = ref([]);
const keyword = ref('')
const searchedIngredient = computed(() => {
  if(!searchedIngredient) return ingredients
  return ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient)
  router.push({
    name: "byIngredient",
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
