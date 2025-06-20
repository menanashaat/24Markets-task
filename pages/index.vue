<script setup>
definePageMeta({
  layout: 'default' // optional
})
</script>
<template>
  <div>
    <h1>Welcome to My App</h1>
    <p>This is the homepage.</p>
    <h1>{{ $t('welcome') }}</h1>
    <h1 class="main__title">{{ $t('sign_in') }}</h1>
<p class="main__subtitle">{{ $t('enter_details') }}</p>

<!-- In form -->
<label class="form-box__label">{{ $t('email') }}</label>
<label class="form-box__label">{{ $t('password') }}</label>
<button class="form-box__button">{{ $t('continue') }}</button>
<p class="form-box__link">{{ $t('forgot_password') }}</p>

<!-- Register section -->
<p>{{ $t('no_account') }}</p>
<a class="register__button">{{ $t('register') }}</a>
  </div>
</template>
