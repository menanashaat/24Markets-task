<script setup>
const { locale } = useI18n();
</script>

<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    ssssssssssssssssssssss
    <NuxtPage  />
  </div>
</template>