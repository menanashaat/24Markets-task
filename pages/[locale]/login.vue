<template>
  <main class="main">
   === <h1 class="main__title">{{ $t('sign_in') }}</h1>  ===
    <p class="main__subtitle">{{ $t('enter_details') }}</p>

    <div class="form-box">
      <h2 class="form-box__title">{{ $t('login') }}</h2>
      <form>
        <div class="form-box__group">
          <label class="form-box__label" for="email">{{ $t('email') }}</label>
          <input class="form-box__input" type="email" id="email" placeholder="example@email.com">
        </div>
        <div class="form-box__group">
          <label class="form-box__label" for="password">{{ $t('password') }}</label>
          <input class="form-box__input" type="password" id="password" placeholder="••••••••">
        </div>
        <button class="form-box__button" type="submit">{{ $t('continue') }} <i class="fas fa-arrow-right"></i></button>
        <p class="form-box__link">{{ $t('forgot_password') }}</p>
      </form>
    </div>

    <div class="register">
      <p>{{ $t('no_account') }}</p>
      <a class="register__button" href="#">{{ $t('register') }} <i class="fas fa-arrow-right"></i></a>
    </div>
  </main>
</template>
<script setup>
</script>
<style scoped>
/* Copy your login page CSS from the HTML file */
</style>