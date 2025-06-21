<script setup lang="ts">
import BasePageHeader from "../components/common/BasePageHeader.vue";
import Card from "../components/common/Card.vue";

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSSOLogin } from "~/composables/useSSOLogin";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const errorMessage = ref("");
const loading = ref(false);

const router = useRouter();

const handleLogin = async () => {
  errorMessage.value = "";
  loading.value = true;

  const result = await useSSOLogin(email.value, password.value);

  loading.value = false;

  if (result) {
    // Optional: Store token or session
    router.push("/home"); 
  } else {
    errorMessage.value = "Invalid credentials or server error.";
  }
};

</script>

<template>
  <div class="container">
    <BasePageHeader
      :title="$t('login.page_title')"
      :subtitle="$t('login.page_subtitle')"
    />
    <div class="login">
      <!-- login -->
      <Card>
        <h2 class="login__title">{{ $t("login.title") }}</h2>
        <form class="login__form" @submit.prevent="handleLogin">
          <div class="login__field">
            <div class="login__group">
              <label for="email" class="login__label">{{
                $t("login.email_label")
              }}</label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                required
                class="login__input"
                :placeholder="$t('login.email_placeholder')"
              />
            </div>
          </div>

          <div class="login__field">
            <div class="login__group">
              <span class="login__label">{{ $t("login.password_label") }}</span>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                required
                class="login__input"
                :placeholder="$t('login.password_placeholder')"
              />
              <button
                type="button"
                class="login__toggle-password"
                @click="showPassword = !showPassword"
              >
                <i
                  :class="
                    showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'
                  "
                ></i>
              </button>
            </div>
          </div>

          <div class="login__actions">
            <button type="submit" class="login__submit" :disabled="loading">
              <span class="login__submit-text">
                {{
                  loading ? $t("login.loading") : $t("login.continue_button")
                }}
              </span>
              <i class="fa-solid fa-arrow-right login__submit-icon"></i>
            </button>
          </div>

          <div class="login__forgot">
            <NuxtLink class="login__forgot-link">
              {{ $t("login.forgot_password") }}
            </NuxtLink> 
          </div>
          <p v-if="errorMessage" class="login__error">{{ errorMessage }}</p>
        </form>
      </Card>

      <!-- register -->
      <Card>
        <div class="login__prompt">
          <h2 class="login__prompt-title">
            {{ $t("login.no_account_title") }}
          </h2>
          <div class="login__prompt-action">
            <NuxtLink to="" class="login__register-link">
              {{ $t("login.register_link") }}
            </NuxtLink>
            <i class="fa-solid fa-arrow-right login__register-icon"></i>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/colors";
@import "../assets/scss/mixins";
// SCSS for Login Form using BEM

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  flex-direction: column;
  gap: 20px;
  margin: 1rem;

  &__error{ 
    text-align: center;
    color: red;
    font-weight: bold;
  }

  &__title {
    font-size: 2.25rem;
    font-weight: bold;
    letter-spacing: -0.015em;
    color: $color-white;
    text-align: center;
    margin-bottom: 2rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__field {
    position: relative;
  }

  &__group {
    display: flex;
    background-color: #0c0d0f;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    padding: 0.5rem;
    border: 1px solid rgba(107, 114, 128, 0.3);
  }

  &__label {
    display: flex;
    align-items: center;
    padding: 0.55rem 1.25rem;
    width: 120px;
    font-size: 0.875rem;
    font-weight: 500;
    color: $color-white;
    background-color: #0c0d0f;
    border-right: 1px solid rgba(66, 66, 66, 0.5);
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: relative;
  }

  &__input {
    flex: 1;
    background-color: #0c0d0f;
    border: none;
    border-left: none;
    color: $color-white;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    outline: none;

    &::placeholder {
      color: #6b7280; // Tailwind gray-500
    }
  }

  &__toggle-password {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      color: #d1d5db; // hover:text-gray-300
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
  }

  &__submit {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: $color-white;
    background-color: #53216e42;
    border: 1px solid #8000ff;
    border-radius: 1.25rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 30px -5px #8b5cf61a, 0 0 15px -3px #a855f71a,
      inset 0 0 40px #8000ff1a, inset 0 0 20px #8b5cf61a,
      inset 0 0 60px #8000ff1a;

    &:hover {
      background-color: #a64dff45;
      border-color: #a64dff;
    }
  }

  &__submit-text {
    font-weight: bold;
    font-size: 1.25rem;
  }

  &__submit-icon {
    @include icon-position;
  }

  &__forgot {
    text-align: center;
    margin-top: 1rem;
  }

  &__forgot-link {
    font-size: 0.875rem;
    color: $color-white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #d1d5db;
    }
  }
  //  register
  &__prompt {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;

    @media (min-width: 640px) {
      flex-direction: row;
      justify-content: center;
    }
  }

  &__prompt-title {
    color: $color-white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__prompt-action {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid rgba(107, 114, 128, 0.3);
    border-radius: 1rem;
    padding: 0.75rem 2.5rem;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: rgba(31, 41, 55, 0.3);
      border-color: rgba(156, 163, 175, 0.5);
    }
  }

  &__register-link {
    color: $color-white;
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
  }

  &__register-icon {
    @include icon-position;
  }
}
</style>
