<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo"><img src="/logo.svg" /></div>
      <input type="checkbox" id="nav-toggle" class="navbar__toggle-checkbox" />
      <label for="nav-toggle" class="navbar__burger"  @click="isMobileMenuOpen = !isMobileMenuOpen">
        <i class="fas fa-bars"></i>
      </label>
      <div class="navbar__links navbar__links--background" :class="{ 'is-open': isMobileMenuOpen }">
        <NuxtLink class="navbar__link" to="/home"
          >home</NuxtLink
        >
        <NuxtLink class="navbar__link"
          >Tearms of Use</NuxtLink
        >
        <NuxtLink class="navbar__link" 
          >About Us</NuxtLink
        >
        <NuxtLink class="navbar__link" 
          >Education</NuxtLink
        >
        <NuxtLink class="navbar__link" 
          >Partners</NuxtLink
        >
        <NuxtLink class="navbar__link" 
          >FAQ</NuxtLink
        >
      </div>
      <div class="navbar__links" :class="{ 'is-open': isMobileMenuOpen }">
        <div class="lang-dropdown">
          <button class="lang-dropdown__toggle" @click="toggleDropdown">
            <NuxtImg
              v-if="currentLabel"
              :src="currentLabel"
              class="flag"
              :alt="`flag ${currentLabel}`"
            />
            <i class="fas fa-chevron-down lang-dropdown__arrow"></i>
          </button>
          <ul v-show="isOpen" class="lang-dropdown__menu">
            <li
              v-for="lang in languages"
              :key="lang.code"
              @click="switchTo(lang.code)"
              class="lang-dropdown__item horizontal center-v gap-6"
            >
              <NuxtImg
                :src="lang.flag"
                class="flag"
                :alt="`flag ${lang.label}`"
              />
              <span>{{ lang.label }}</span>
            </li>
          </ul>
        </div>
        <NuxtLink 
          class="navbar__link btn btn--default"
          
          to="/"
          >Login</NuxtLink>
        <NuxtLink
          class="navbar__link btn btn--info"
          to="/"
          >Register</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { languages, type LanguageOption } from "@/utils/languages";

import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { locale } = useI18n();
const router = useRouter();
const switchLocalePath = useSwitchLocalePath();

// Use a ref for the current locale
const currentLocale = ref(locale.value);
const isMobileMenuOpen = ref(false)

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const isOpen = ref<boolean>(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchTo = (lang: string) => {
  isOpen.value = false;
  if (locale.value !== lang) {
    const path = switchLocalePath(lang);
    locale.value = lang;
    if (path) router.push(path);
  }
};

const currentLabel = computed<LanguageOption | undefined>(
  () => languages.find((l) => l.code === locale.value)?.flag || locale.value
);

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
<style lang="scss">
@import "../../assets/scss/variables";
@import "../../assets/scss/colors";

.navbar {
  background-color: $color-background;
  position: fixed;
      z-index: 2;
  width: 100%;
      padding: 20px 0;

  &__container {
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__logo {
    img {
      height: 32px;
    }

    span {
      color: $color-purple-main;
    }
  }

  &__toggle-checkbox {
    display: none;
  }

  &__burger {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: $color-white;
  }

  &__links {
    display: flex;
    gap: $gap-base;
    flex-wrap: wrap;
    align-items: center;
  }
  &__links--background {
    background-color: rgb(55 59 81 / 20%);
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    backdrop-filter: blur(40px);
    display: flex;
    gap: 2rem;
    margin-right: 3rem;
  }

  &__link {
    color: $color-white;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 0.875rem;
    transition: color 0.2s ease-in;
    &:hover {
      color: $color-purple-hover;
    }
  }

  &__register {
    background-color: $color-purple-main;
    padding: 6px 16px;
    border-radius: $radius-medium;
    text-decoration: none;
    color: $color-white;

    &:hover {
      background-color: $color-purple-hover;
    }
  }
 
  @media (max-width: 768px) {
   .navbar__burger {
    display: block;
    position: absolute;
    top: .5rem;
    right: 1rem;
    z-index: 20; // Make sure it's on top of the menu
  }

  .navbar__container {
    position: relative;
  }

  .navbar__container {
    flex-direction: column;
    align-items: stretch;
  }

  .navbar__links,
  .navbar__links--background {
    width: 100%;
    display: none; // 👈 Hide by default on mobile

    &.is-open {
      display: flex; // 👈 Show only when is-open is true
      flex-direction: column;
      gap: 10px;
      padding: 10px 0;
    }
  }
}
}
</style>
