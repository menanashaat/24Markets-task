<script setup lang="ts">
import BasePageHeader from "../components/common/BasePageHeader.vue";
import Card from "../components/common/Card.vue";
</script>

<template>
  <div class="container">
    <BasePageHeader
      title="24 Markets provides trading in CFD"
      subtitle="24 Markets provides trading in CFDs by offering reliable platforms for web and mobile with up to 2000 assets."
    />
    <div class="home">
      <!-- Home -->
      <Card>
        <div class="home__prompt">
          <h2 class="home_prompt-title">24 Markets provides trading in CFD</h2>
        </div>
      </Card>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/colors";
@import "../assets/scss/mixins";

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  gap: 20px;
  margin: 1rem;

  //  register
  &__prompt {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;

    @media (min-width: 640px) {
      flex-direction: row;
      justify-content: center;
    }
  }

  &__prompt-title {
    color: $color-white;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
