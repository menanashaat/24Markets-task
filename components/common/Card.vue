<template>
  <div class="card-box">
    <slot />
  </div>
</template>

<script setup lang="ts"> 
</script>

<style scoped lang="scss">
@import "../../assets/scss/colors";
.card-box {
  max-width: 600px;
  width: 100%;
  background-color: $color-button-holder;
  border: 1px solid rgba(107, 114, 128, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.5s ease-out;
}
</style>
