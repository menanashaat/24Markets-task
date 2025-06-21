<script setup lang="ts">
import BasePageHeader from "../components/common/BasePageHeader.vue";
import Card from "../components/common/Card.vue";
const { t } = useI18n() 

useHead({
  title: t('meta.home_title'),
  meta: [
    { name: 'description', content: t('meta.home_description') },
    { property: 'og:title', content: t('meta.home_title') },
    { property: 'og:description', content: t('meta.home_description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/og/home.jpg' },
    { property: 'og:url', content: 'https://24markets.com/home' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template>
  <div class="container"> 
    <BasePageHeader
      :title="$t('home.page_title')"
      :subtitle="$t('home.page_subtitle')"
    />
    <div class="home">
      <Card>
        <div class="home__prompt">
          <h2 class="home_prompt-title">{{ $t('home.page_title') }}</h2>
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
