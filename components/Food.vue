<template>
  <h1>{{ page?.generic_name }}</h1>
</template>

<script setup lang="ts">
const { page } = storeToRefs(usePageStore())
</script>
