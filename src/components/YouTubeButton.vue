<template>
  <a :href="href" class="px-3 py-2 rounded" target="_blank"
    ><font-awesome-icon
      class="text-3xl text-red-500 hover:text-red-600"
      icon="fa-brands fa-youtube"
  /></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
