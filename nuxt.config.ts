export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/image"],

  i18n: {
    locales: [
      { code: "en", language: "en-US", file: "en.json" },
      { code: "ar", language: "ar-AR", file: "ar.json", dir: "rtl" },
       { code: "it", language: "it-IT", file: "it.json" },
        { code: "es", language: "se-IT", file: "es.json" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
    // vueI18n: "en",
    strategy: "prefix",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
  },

  srcDir: "./",
  dir: {
    middleware: "middleware",
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Wix+Madefor+Display:wght@400;500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },

  css: [
    "@fortawesome/fontawesome-free/css/all.min.css",
    "@/assets/scss/main.scss",
  ],
});
