<template>
  <div class="page-header">
    <h1 class="page-header__title">{{ title }}</h1>
    <p v-if="subtitle" class="page-header__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<style  lang="scss">
@import "../../assets/scss/variables";
@import "../../assets/scss/colors";
.page-header {
  text-align: center;
  margin-bottom: 2rem;

  &__title {
    font-size: 3rem;
    font-weight: bold;
    color: $color-white;
    letter-spacing: -0.015em;
  }

  &__subtitle {
    font-size: 0.875rem;
    color: #9ca3af; 
    margin-top: 0.5rem;
  }
}

</style>
