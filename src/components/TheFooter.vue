<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__container _container">
        <div class="footer__body">
          <div class="footer__rights">
            Copyright © 2023 RunLiq. All rights reserved.
            <div class="footer__links">
              <router-link :to="'/privacy-policy'">Privacy Policy</router-link>
              | <router-link :to="'#'">Cookie Policy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer {
  &__body {
    @include adaptiv-padding(12, 8, 0, 0, 1);
  }

  &__rights {
    font-family: $fontGeometria;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #8c8c8c;
    @include adaptiv-font(12, 11);
  }
  &__links {
    a {
      color: #8c8c8c;
    }
  }
}
</style>