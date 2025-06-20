export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
   modules: [
    '@nuxtjs/i18n',
  ],
  
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json' },
      { code: 'ar', language: 'ar-AR', file: 'ar.json', dir: 'rtl' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',
    vueI18n: 'en',
    strategy: 'prefix',
  },
  srcDir: './',
  dir: {
    middleware: 'middleware'
  },
  
  css: ["@/assets/scss/main.scss"], // if you're adding SCSS too
});
