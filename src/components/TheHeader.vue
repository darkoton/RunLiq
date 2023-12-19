<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <div class="header__left">
            <div class="header__burger" @click="burgerOpen">
              <span></span><span></span><span></span>
            </div>
            <router-link :to="'/'" class="header__logo">
              <span class="header__logo-icon">
                <img src="@/assets/img/header/logo.svg" alt="" />
              </span>
              <span class="header__logo-text">RunLiq.com</span>
            </router-link>
          </div>
          <div class="header__right">
            <nav class="header__nav">
              <a-menu v-model:selectedKeys="current" mode="horizontal" class="header__nav-menu">
                <a-menu-item v-for="item in menu" :key="item.key" @click="item.to">
                  <template #icon>
                    <component :is="item.icon" :style="{ color: item.iconColor }"></component>
                  </template>
                  {{ item.title }}
                </a-menu-item>
              </a-menu>

              <span class="header__nav-token header__nav-item">
                <span>LC: 235</span>
              </span>
              <a-button type="dashed" class="header__login" v-if="!userStore.user" @click="router.push('/login')">
                <template #icon>
                  <UserOutlined />
                </template>
                Login
              </a-button>

              <user-menu v-else @logOut="userStore.user = null" />
            </nav>

            <button class="header__google-auth" v-if="!userStore.user">
              <img src="@/assets/img/header/google-logo.svg" alt="" />
              <span>Continue with Google account</span>
            </button>
          </div>
        </div>

        <BurgerMenu :menu="menu" v-model="burger" :isAuth="userStore.user" @close="burgerOpen" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import {
  RocketOutlined,
  HomeOutlined,
  FolderOpenOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

import UserMenu from "@/components/header/TheUserMenu.vue";
import BurgerMenu from "@/components/header/TheBurgerMenu.vue";

import { useStore } from "@/stores/store.ts";
import { useUser } from "@/stores/user.ts";

const store = useStore();
const userStore = useUser()
const route = useRoute();
const router = useRouter();

const burger = ref(false);


const menu = ref([
  {
    title: "New Run",
    key: "make",
    icon: RocketOutlined,
    to: () => router.push("/make"),
    iconColor: "#1890FF",
  },
  {
    title: "Home",
    key: "home",
    icon: HomeOutlined,
    to: () => router.push("/"),
  },
  {
    title: "Gallery",
    key: "gallery",
    icon: FolderOpenOutlined,
    to: () => router.push("/gallery"),
  },
]);

const current = ref([route.name ? route.name : ""]);

watch(
  () => route.name,
  () => {
    current.value = [
      route.matched.length > 1
        ? route.matched[route.matched.length - 2].name
        : route.name,
    ];
  }
);

function burgerOpen() {
  burger.value = !burger.value;

  if (burger.value) {
    store.offScroll();
  } else {
    store.onScroll();
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
      background-color: var(--black);
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 8, 4, 1);
    color: var(--darkBlue);
    font-family: Geometria;
    @include adaptiv-font(22, 16);
    padding: 3px 0;
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__nav {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    &-link {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 10, 5, 1);
      color: var(--black);
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

      &.router-link-active {
        color: #1890ff;

        &:after {
          width: 100%;
        }
      }
    }

    &-item {
      @include adaptiv-margin(0, 0, 15, 7.5, 1);
    }

    &-menu {
      border: 0;
      background: var(--background);
      color: var(--black);
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
    color: $colorBlue;
    border-color: $colorBlue;
    background: transparent;
    border-radius: 12px;

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;

      &:hover {
        background: transparent;
      }
    }
  }

  &__google-auth {
    display: flex;
    align-items: center;
    column-gap: 5px;
    background-color: transparent;
    font-size: 12px;
    box-shadow: 0 1px 3px 1px #8d8d8d;
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

  @media screen and (max-width: 770px) {
    &__body-mob {
      display: flex;
    }

    &__burger {
      display: flex;
    }

    // &__right {
    //   display: none;
    // }
    &__nav-menu {
      display: none;
    }

    &__backward {
      display: block;
    }
  }

  @media (max-width: 480px) {
    &__body {
      align-items: center;

      .header__google-auth {
        display: none;
      }
    }

    &__nav {
      margin-bottom: 0;
    }
  }

  @media (max-width: 430px) {
    &__body {
      .header__nav-token {
        display: none;
      }
    }
  }
}
</style>