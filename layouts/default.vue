<script setup>
import Header from "../components/common/Header.vue";
import Footer from "../components/common/Footer.vue";
const { locale } = useI18n();
</script>

<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <Header />
        <NuxtPage />
    <Footer /> 
  </div>
</template>
<style>
/* Add RTL support */
[dir="rtl"] .form-box__button i,
[dir="rtl"] .register__button i {
  transform: rotate(180deg);
  margin-right: 8px;
  margin-left: 0 !important;
}

[dir="rtl"] .navbar__container,
[dir="rtl"] .footer__container {
  direction: rtl;
}
</style>
