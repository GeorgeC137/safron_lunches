<template>
  <div class="w-[800px] mx-auto p-8">
    <!-- <pre>{{ meal }}</pre> -->
    <h3 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h3>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong class="font-bold">Category: </strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area: </strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags: </strong> {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, index) in new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, index) in new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="mt-4">
        <YouTubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors hover:bg-indigo-700 hover:text-white"
        >
          View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const meal = ref({});
const route = useRoute();

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
