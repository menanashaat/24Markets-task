// middleware/redirect-by-ip.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  // Only run on server-side (first load)
  if (process.client || to.path !== '/') return;
 
  const arabicCountries = ['EG', 'SA', 'AE', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'QA', 'SD', 'SY', 'TN', 'YE', 'BH', 'DZ', 'PS'];

  try {
    const c = await $fetch('https://ipinfo.io/json?token=9e0b308dd002b3'); // use your token
    console.log("c", c)
    const isArabic = arabicCountries.includes(ipData.country);
 
    return navigateTo(`/${isArabic ? 'ar' : 'en'}`, { redirectCode: 302 });
  } catch (error) {
    console.error('IP detection failed:', error);
    return navigateTo('/en', { redirectCode: 302 }); // default fallback
  }
});
 




