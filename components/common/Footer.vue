<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Download -->
      <div class="footer__top">
        <div class="footer__top-logo">
          <img src="/logo.svg" alt="24funded.com" />
        </div>
        <div class="footer__top-apps">
          <img src="/footer/web-trader.svg" alt="Web Trader" />
          <img src="/footer/app-store.svg" alt="App Store" />
          <img src="/footer/google-play.svg" alt="Google Play" />
        </div>
      </div>

      <!-- Social & Payment -->
      <div class="footer__social-payment">
        <div class="footer__social-payment-follow">
          <div class="footer__social-payment-follow-label">{{ $t('footer.follow_us') }}</div>
          <div class="footer__social-payment-follow-icons">
            <NuxtLink><i class="fa-brands fa-facebook-f"></i></NuxtLink>
            <NuxtLink><i class="fa-brands fa-instagram"></i></NuxtLink>
            <NuxtLink><i class="fa-brands fa-discord"></i></NuxtLink>
            <NuxtLink><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
            <NuxtLink><i class="fa-brands fa-whatsapp"></i></NuxtLink>
            <NuxtLink><i class="fa-brands fa-x-twitter"></i></NuxtLink>
          </div>
        </div>

        <div class="footer__social-payment-methods">
          <div class="footer__social-payment-methods-label">
            {{ $t('footer.payment_methods') }}
          </div>
          <div class="footer__social-payment-methods-icons">
            <img src="/footer/visa.svg" alt="Visa" />
            <img src="/footer/Mastercard.svg" alt="Mastercard" />
            <img src="/footer/Discover.svg" alt="Discover" />
            <img src="/footer/American.svg" alt="American Express" />
            <img src="/footer/Cash.svg" alt="Cash App" />
            <img src="/footer/Crypto.svg" alt="Crypto" />
            <img src="/footer/Bank.svg" alt="Bank Transfer" />
            <img src="/footer/SSL.svg" alt="SSL" />
          </div>
        </div>
      </div>

      <!-- Contact & Nav -->
      <div class="footer__contact-nav">
        <div class="footer__contact-nav-info">
          <div class="footer__contact-nav-info-label horizontal center-v gap-10">
            <span>{{ $t('footer.contact') }}</span>
            <div class="vertical gap-8">
              <span><i class="fa-brands fa-whatsapp"></i> WhatsApp</span>
              <span><i class="fa-solid fa-phone"></i> +20 2236266</span>
              <span><i class="fa-solid fa-headset"></i> support@24funded.com</span>
            </div>
          </div>
        </div>
        <div class="footer__contact-nav-links">
          <div><NuxtLink>{{ $t('footer.home') }}</NuxtLink></div>
          <div>
            <div>{{ $t('footer.terms_of_use') }}</div>
            <NuxtLink class="sublink">{{ $t('footer.trading_conditions') }}</NuxtLink>
            <NuxtLink class="sublink">{{ $t('footer.careers') }}</NuxtLink>
          </div>
          <div>
            <NuxtLink>{{ $t('footer.about_us') }}</NuxtLink>
            <NuxtLink class="sublink">{{ $t('footer.contact_link') }}</NuxtLink>
            <NuxtLink class="sublink">{{ $t('footer.blog') }}</NuxtLink>
          </div>
          <div>
            <div>{{ $t('footer.education') }}</div>
            <NuxtLink class="sublink">{{ $t('footer.trading_basics') }}</NuxtLink>
          </div>
          <div>
            <NuxtLink>{{ $t('footer.partners') }}</NuxtLink>
            <NuxtLink class="sublink">{{ $t('footer.affiliates') }}</NuxtLink>
          </div>
          <div>
            <div>{{ $t('footer.faq') }}</div>
            <NuxtLink class="sublink">{{ $t('footer.brand_kit') }}</NuxtLink>
          </div>
        </div>
      </div>
 
      <!-- Disclaimer -->
      <div class="footer__disclaimer">
        <p>{{ $t('footer.disclaimer_1') }}</p>
        <p>{{ $t('footer.disclaimer_2') }}</p>
      </div>

      <!-- Bottom -->
      <div class="footer__bottom">
        <div>&copy; 2025 - 24funded.com</div>
        <div class="footer__bottom-links">
          <NuxtLink target="_blank">{{ $t('footer.terms_conditions') }}</NuxtLink>
          <NuxtLink>{{ $t('footer.privacy_policy') }}</NuxtLink>
          <NuxtLink>{{ $t('footer.cookie_disclosure') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>


<script setup lang="ts">
// No special script logic needed for static footer
</script>

<style lang="scss">
@import "../../assets/scss/variables";
@import "../../assets/scss/colors";

.footer {
  background-color: $color-black;
  padding: 4rem 1.25rem; 

  &__container {
    max-width: 1200px;
    margin: 0 auto; 
    padding: 0 1rem;
  }

  .sublink {
        cursor: pointer;
    font-size: 0.7rem !important;
    line-height: 24px;
  }

  &__top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &-logo {
      img {
        height: 2rem;
      }
    }

    &-apps {
      display: flex;
      flex-wrap: wrap;
      gap: 0.625rem;

      img {
        height: 2rem;
      }
    }
  }

  &__social-payment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    padding: 1.25rem;
    margin-bottom: 2rem;

    @media (min-width: 640px) {
      flex-direction: row;
      align-items: center;
    }

    &-follow {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      &-label {
        color: $color-white;
        font-size: 0.875rem;
      }

      &-icons {
        display: flex;
        align-items: center;
        gap: 1rem;

        a {
          color: #ccc;
          font-size: 1.5rem;
          transition: color 0.3s ease;
          cursor:pointer;

          &:hover {
            color: $color-white;
          }
        }
      }
    }

    &-methods {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;

      &-label {
        color: $color-white;
        font-size: 0.875rem;
      }

      &-icons {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;

        img {
          height: 1.5rem;
          padding: 0.125rem;
          border-radius: 0.25rem;
        }
      }
    }
  }

  &__contact-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;

    &-info {
      color: $color-white;
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;

      span {
        color: $color-white;
      }
    }

    &-links {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 10px;
      margin-top: 1.5rem;
      flex: 3;

      a,
      div {
        color: $color-white;
        font-size: 0.875rem;
        text-decoration: none;
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__disclaimer {
    color: #818181;
    font-size: 0.75rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: $color-white;
    font-size: 0.75rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &-links {
      display: flex;
      gap: 1rem;

      a {
        color: $color-white;
        font-weight: 700;
        font-size: 0.75rem;
        transition: color 0.2s ease;

        &:hover {
          color: $color-white;
        }
      }
    }
  }
}
</style>
