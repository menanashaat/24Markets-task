<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} - 24 Markets` : "24 Markets"),
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
