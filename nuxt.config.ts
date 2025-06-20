export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
   modules: [
    ['@nuxtjs/i18n', {
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'en',
      locales: [
        { code: 'en', file: 'en.json', name: 'English' },
        { code: 'ar', file: 'ar.json', name: 'Arabic', dir: 'rtl' }
      ]
    }]
  ],
  css: ["@/assets/scss/main.scss"], // if you're adding SCSS too
});
