<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>

  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      @change="searchMeals"
      class="w-full rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500"
      placeholder="Search for meals..."
    />

    <!-- <span v-if="!$v.keyword.required && !$v.keyword.minLength">Food Name is required and should be atleast 3 characters</span> -->
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
// import { useVuelidate } from '@vuelidate/core'
// import { required, minLength } from '@vuelidate/validators'
import Meals from "../components/Meals.vue";

const meals = computed(() => store.state.searchedMeals);
const keyword = ref("");
// const rules = { keyword: { required, minLength: minLength(3) } };
// const $v = useVuelidate(rules, { keyword });
const route = useRoute();

function searchMeals() {
  if(keyword.value)
  {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
