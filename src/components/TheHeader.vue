<template>
  <header class="header">
    <div
      class="header__backward"
      :class="{ active: burger }"
      @click="burger = false"
    ></div>
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <div class="header__left">
            <div class="header__burger" @click="burger = true">
              <span></span><span></span><span></span>
            </div>
            <div class="header__logo">
              <span class="header__logo-icon">
                <img src="@/assets/img/header/logo.svg" alt="" />
              </span>
              <span class="header__logo-text">RunLiq.com</span>
            </div>
          </div>
          <div class="header__right">
            <nav class="header__nav">
              <router-link
                to="#"
                class="header__nav-link header__nav-item header__run"
              >
                <RocketOutlined class="header__icon" />
                <span>New Run</span>
              </router-link>
              <router-link to="#" class="header__nav-link header__nav-item">
                <HomeOutlined class="header__icon" />
                <span>Home</span>
              </router-link>
              <router-link to="#" class="header__nav-link header__nav-item">
                <FolderOpenOutlined class="header__icon" />
                <span>Gallery</span>
              </router-link>
              <span class="header__nav-token header__nav-item">
                <span>LC: 235</span>
              </span>
              <TheButton
                type="dashed"
                :icon="UserOutlined"
                border-color="#096dd9"
                class="header__login"
                >Login</TheButton
              >
            </nav>

            <button class="header__google-auth">
              <img src="@/assets/img/header/google-logo.svg" alt="" />
              <span>Continue with Google account</span>
            </button>
          </div>
        </div>

        <div class="header__body-mob" :class="{ active: burger }">
          <div class="header__close" @click="burger = false">
            <span></span><span></span>
          </div>

          <router-link
            to="#"
            class="header__nav-link header__nav-item header__run"
          >
            <RocketOutlined class="header__icon" />
            <span>New Run</span>
          </router-link>
          <router-link to="#" class="header__nav-link header__nav-item">
            <HomeOutlined class="header__icon" />
            <span>Home</span>
          </router-link>
          <router-link to="#" class="header__nav-link header__nav-item">
            <FolderOpenOutlined class="header__icon" />
            <span>Gallery</span>
          </router-link>
          <span class="header__nav-link header__nav-token header__nav-item">
            <span>LC: 235</span>
          </span>
          <TheButton
            type="dashed"
            :icon="UserOutlined"
            border-color="#096dd9"
            class="header__login"
            >Login</TheButton
          >
          <button class="header__google-auth">
            <img src="@/assets/img/header/google-logo.svg" alt="" />
            <span>Continue with Google account</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  RocketOutlined,
  HomeOutlined,
  FolderOpenOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

import TheButton from "@/components/ui/TheButton.vue";
import { ref } from "vue";

const burger = ref(false);
</script>

<style lang="scss" scoped>
.header {
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include adaptiv-padding(14, 7, 0, 0, 1);
  }

  &__left {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  &__burger {
    display: none;
    flex-direction: column;
    width: 25px;
    height: 25px;
    row-gap: 6px;

    span {
      width: 100%;
      height: 2.5px;
      border-radius: 1px;
      background-color: #000;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 8, 4, 1);
    color: #313e5a;
    font-family: Geometria;
    font-size: 22px;
  }
  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &__nav {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    &-link {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 10, 5, 1);
      color: var(--character-title-85, rgba(0, 0, 0, 0.85));
      font-size: 14px;
      position: relative;
      line-height: 22px;
      @include adaptiv-padding(12, 6, 0, 0, 1);

      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background: #1890ff;
        left: 0;
        bottom: 0;
        transition: all 0.3s ease 0s;
      }
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;

        &:hover {
          color: #1890ff;

          &:after {
            width: 100%;
          }
        }
      }
    }

    &-item {
      @include adaptiv-margin(0, 0, 15, 7.5, 1);
    }
  }

  &__run {
    & .header__icon {
      color: #1890ff;
    }
  }
  &__login {
    padding: 4px 15px;
    @include adaptiv-font(14, 11);
    @include adaptiv-line-height(22, 18);
    border-radius: 12px;
    color: #096dd9;
  }
  &__google-auth {
    display: flex;
    align-items: center;
    column-gap: 5px;
    background-color: transparent;
    font-size: 12px;
    box-shadow: 0 1px 3px 1px #ccc;
    @include adaptiv-padding(5, 2.5, 40, 20, 1);
    border-radius: 5px;
    transition: all 0.3s ease 0s;
    img {
      width: 100%;
      height: 100%;
      max-width: 20px;
      max-height: 20px;
    }

    @media (any-hover: hover) {
      cursor: pointer;
    }

    &:active {
      transform: translateY(3px);
    }
  }

  &__body-mob {
    display: none;
    flex-direction: column;
    width: 300px;
    position: absolute;
    top: 0;
    left: -100vw;
    background-color: #fff;
    @include adaptiv-padding(20, 10, 20, 10, 1);
    z-index: 10;
    height: 100%;
    transition: all 0.3s ease 0s;
    box-shadow: 0px 0 3px 1px #ccc;
    border-radius: 0 5px 5px 0;

    &.active {
      left: 0;
    }

    & .header__google-auth {
      @include adaptiv-value(margin-top, 20, 10, 1);
    }
  }
  &__close {
    width: 25px;
    height: 25px;
    position: relative;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: #000;
      border-radius: 10px;
      transform: translate(-50%, -50%);

      &:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  &__backward {
    position: fixed;
    z-index: -2;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease 0s;
    opacity: 0;

    &.active {
      z-index: 10;
      opacity: 1;
    }
  }

  @media screen and (max-width: 700px) {
    &__body-mob {
      display: flex;
    }
    &__burger {
      display: flex;
    }
    &__right {
      display: none;
    }
  }
}
</style>