<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <div class="header__left">
            <div class="header__logo">
              <span class="header__logo-icon">
                <img src="@/assets/img/header/logo.svg" alt="" />
              </span>
              <span class="header__logo-text">RunLiq.com</span>
            </div>
          </div>
          <div class="header__right">
            <nav class="header__nav">
              <span class="header__nav-link header__nav-item">
                <RocketOutlined class="header__icon" />
                <span>New Run</span>
              </span>
              <span class="header__nav-link header__nav-item">
                <HomeOutlined class="header__icon" />
                <span>Home</span>
              </span>
              <span class="header__nav-link header__nav-item">
                <FolderOpenOutlined class="header__icon" />
                <span>Gallery</span>
              </span>
              <span class="header__nav-token header__nav-item">
                <span>LC: 235</span>
              </span>
              <TheButton type="dashed" :icon="UserOutlined">Login</TheButton>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  RocketOutlined,
  HomeOutlined,
  FolderOpenOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

import TheButton from "@/components/ui/TheButton.vue";
</script>

<style lang="scss" scoped>
.header {
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include adaptiv-padding(14, 7, 0, 0, 1);
  }

  &__logo {
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 8, 4, 1);
    color: #313e5a;
    font-family: Geometria;
    font-size: 22px;
  }
  &__nav {
    display: flex;
    align-items: center;
    &-link {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 10, 5, 1);
      color: var(--character-title-85, rgba(0, 0, 0, 0.85));
      font-size: 14px;
      line-height: 22px;
    }

    &-item {
      @include adaptiv-margin(0, 0, 15, 7.5, 1);
    }
  }
  &__icon {
  }
  &__login {
    margin: 0;
    border-style: dashed;
    background-color: transparent;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        box-shadow: 0 0 5px 1px #096dd9;
      }
    }
  }
}
</style>