<template>
  <div
    class="header__backward"
    :class="{ active: modelValue }"
    @click="$emit('close')"
  ></div>
  <div class="header__body-mob" :class="{ active: modelValue }">
    <div class="header__close" @click="$emit('close')">
      <span></span><span></span>
    </div>

    <a-menu
      v-model:selectedKeys="current"
      mode="vertical"
      class="header__nav-mob"
    >
      <a-menu-item
        v-for="item in menu"
        :key="item.key"
        @click="
          item.to();
          burger = false;
        "
      >
        <template #icon>
          <component
            :is="item.icon"
            :style="{ color: item.iconColor }"
          ></component>
        </template>
        {{ item.key }}

        {{ item.title }}
      </a-menu-item>
    </a-menu>
    <span class="header__nav-link header__nav-token header__nav-item">
      <span>LC: 235</span>
    </span>
    <a-button type="dashed" class="header__login" v-if="!isAuth">
      <template #icon><UserOutlined /></template>
      Login
    </a-button>
    <button class="header__google-auth" v-if="!isAuth">
      <img src="@/assets/img/header/google-logo.svg" alt="" />
      <span>Continue with Google account</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
defineProps(["modelValue", "menu", "isAuth"]);
defineEmits(["close"]);

const route = useRoute();

const current = ref([route.name ? route.name : ""]);

watch(
  () => route.name,
  () => {
    current.value = [
      route.matched.length > 1
        ? route.matched[route.matched.length - 2].name
        : route.name,
    ];
    console.log(current.value);
  }
);
</script>

<style lang="scss" scoped>
.header {
  &__nav {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

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
    }
  }
  &__nav-mob {
    border-right: 0;
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
    border-radius: 12px;
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
    transition: all 0.5s ease 0s;
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
    display: none;

    &.active {
      z-index: 10;
      opacity: 1;
    }
  }

  @media screen and (max-width: 770px) {
    &__body-mob {
      display: flex;
    }
    &__backward {
      display: block;
    }
  }
}
</style>