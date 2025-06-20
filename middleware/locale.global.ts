export default defineNuxtRouteMiddleware(async (to) => {
  const cookie = useCookie('i18n_redirected');
  const supportedLocales = ['en', 'ar', 'es', 'it'];
  
  // Get locale from URL if already set
  const routeLocale = to.params.locale as string;
  if (routeLocale && supportedLocales.includes(routeLocale)) {
    cookie.value = routeLocale;
    return;
  }
  
  // Client-side: use existing cookie if valid
  if (process.client && cookie.value && supportedLocales.includes(cookie.value)) {
    return;
  }
  
  // Server-side detection
  if (process.server) {
    try {
      const { country } = await $fetch('https://ipapi.co/json/');
      const localeMap: Record<string, string> = {
        IT: 'it', VA: 'it', SM: 'it', CH: 'it',
        ES: 'es', MX: 'es', AR: 'es', CO: 'es',
        SA: 'ar', EG: 'ar', DZ: 'ar', IQ: 'ar'
      };
      
      const newLocale = localeMap[country] || 'en';
      cookie.value = newLocale;
      
      // Redirect to locale-prefixed path
      if (to.path === '/') {
        return navigateTo(`/${newLocale}/login`, { redirectCode: 302 });
      } else if (!supportedLocales.some(loc => to.path.startsWith(`/${loc}/`))) {
        return navigateTo(`/${newLocale}${to.path}`, { redirectCode: 302 });
      }
    } catch (error) {
      cookie.value = 'en';
    }
  }
  
  // Fallback to English if no locale detected
  if (!cookie.value) {
    cookie.value = 'en';
  }
});