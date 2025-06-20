<template>
  <footer class="footer">
    <div class="footer__container">
      <div>
        <div class="footer__brand">24funded.com</div>
        <div class="footer__social">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-telegram"></i>
        </div>
        <p class="footer__contact">support@24funded.com<br>+44 7983 138844</p>
      </div>
      <div>
        <div class="footer__title">{{ $t('payment_methods') }}</div>
        <div class="footer__payments">
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-amex"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="fas fa-university"></i>
          <i class="fas fa-shield-alt"></i>
        </div>
      </div>
      <div>
        <div class="footer__title">{{ $t('explore') }}</div>
        <ul class="footer__list">
          <li><a href="#">{{ $t('terms') }}</a></li>
          <li><a href="#">{{ $t('trading_conditions') }}</a></li>
          <li><a href="#">{{ $t('careers') }}</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__title">{{ $t('platforms') }}</div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png" alt="App Store" style="height: 40px;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style="height: 40px; margin-top: 10px;">
      </div>
    </div>
    <div class="footer__legal">
      <p>{{ $t('legal_notice') }}</p>
      <p style="margin-top: 10px;">© 2025 - 24funded.com • <a href="#">{{ $t('terms') }}</a> • <a href="#">{{ $t('privacy') }}</a> • <a href="#">{{ $t('cookie') }}</a></p>
    </div>
  </footer>
</template>

<style scoped>
/* Copy your footer CSS from the HTML file */
</style>