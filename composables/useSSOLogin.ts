export const useSSOLogin = async (email: string, password: string) => {
  try {
    const response = await $fetch('https://app.theneo.io/match-trade/platform-api/login', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`, //  // TODO: Confirm API key is loaded securely from .env
        'Content-Type': 'application/json',
      },
      body: {
        username: email,
        password: password,
      },
    });

    return response;
  } catch (err) {
    console.error('SSO login failed:', err);
    return null;
  }
};
