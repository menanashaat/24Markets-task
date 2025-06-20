export default defineNuxtRouteMiddleware(async (to) => {
  if (process.client) return; // Only run on server-side

  const locale = useCookie('i18n_redirected');
  const supportedLocales = ['en', 'ar', 'es', 'it'];

  // Skip if locale already set
  if (locale.value && supportedLocales.includes(locale.value)) return;

  try {
    // Define the expected shape of the API response
    const { country } = await $fetch<{ country: string }>('https://ipapi.co/json/');

    const localeMap: Record<string, string> = {
      IT: 'it', VA: 'it', SM: 'it',  // Italian
      ES: 'es', MX: 'es', AR: 'es',  // Spanish
      SA: 'ar', EG: 'ar', DZ: 'ar',  // Arabic
    };

    const newLocale = localeMap[country] || 'en';

    // Set cookie for future requests
    locale.value = newLocale;

    // Redirect to locale-prefixed route
    return navigateTo(`/${newLocale}${to.fullPath}`, { redirectCode: 302 });
  } catch (error) {
    console.error('IP detection failed, using default locale');
    locale.value = 'en';
  }
});
