<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo"><span>24</span>funded.com</div>
      <h1>{{ $t("welcome") }}</h1>
      <NuxtLink :to="switchLocalePath('ar')"> ar </NuxtLink>
      <NuxtLink :to="switchLocalePath('en')"> en </NuxtLink>
      <input type="checkbox" id="nav-toggle" class="navbar__toggle-checkbox" />
      <label for="nav-toggle" class="navbar__burger">
        <i class="fas fa-bars"></i>
      </label>
      <div class="navbar__links">
        <NuxtLink class="navbar__link" to="/">{{ $t("home") }}</NuxtLink>
        <a class="navbar__link" href="#">{{ $t("terms") }}</a>
        <a class="navbar__link" href="#">{{ $t("about") }}</a>
        <a class="navbar__link" href="#">{{ $t("education") }}</a>
        <a class="navbar__link" href="#">{{ $t("partners") }}</a>
        <a class="navbar__link" href="#">{{ $t("faq") }}</a>
        <a class="navbar__link" href="#">{{ $t("login") }}</a>
        <a class="navbar__register" href="#">{{ $t("register") }}</a>
      </div>
      <div class="language-switcher">
        <select v-model="currentLocale" @change="updateLanguage">
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
        </select>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { locale } = useI18n();
const router = useRouter();
const switchLocalePath = useSwitchLocalePath();

// Use a ref for the current locale
const currentLocale = ref(locale.value);

// Watch for external locale changes (like from middleware)
watch(
  () => locale.value,
  (newVal) => {
    currentLocale.value = newVal;
  }
);

const updateLanguage = async () => {
  // Only update if locale actually changed
  if (currentLocale.value === locale.value) return;

  const path = switchLocalePath(locale.value);
  if (path) router.push(path);

  // Set the new locale
  locale.value = currentLocale.value;

  // Wait for DOM update
  await nextTick();

  // Navigate to login page with new locale
  router.push({
    path: `/${currentLocale.value}`,
    // Prevent full page reload
    force: false,
  });
};
</script>
<style>
.language-switcher {
  margin: 15px 0;
  text-align: center;
}

.language-switcher select {
  background: #1f1f2e;
  color: white;
  border: 1px solid #333;
  padding: 8px;
  border-radius: 4px;
}
</style>
