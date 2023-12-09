<template>
  <div
    class="card"
    :style="{
      width: sizes.width + 'px',
      height: sizes.height + 'px',
    }"
    @mouseover="slider ? startSwiper() : ''"
    @mouseleave="slider ? stopSwiper() : ''"
  >
    <div class="card__body">
      <slot />
      <div class="card__img">
        <a-dropdown
          :trigger="['click']"
          placement="bottomRight"
          class="card__menu"
          v-if="menu"
        >
          <a class="card__menu-button" @click.prevent>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <a :href="data.url" download class="ant-dropdown-link"
                  >Download</a
                >
              </a-menu-item>
              <a-menu-item key="1">
                <a href="#">Report</a>
              </a-menu-item>
              <a-menu-item key="2">
                <a href="#">Remove</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <img :src="data.url" alt="art" @click="preview" v-if="!slider" />

        <swiper
          :modules="[EffectFade, Autoplay]"
          :effect="'fade'"
          :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
          }"
          :disableOnInteraction="false"
          class="card__slider"
          @swiper="onSwiper"
          v-else
        >
          <swiper-slide v-for="img in data.urls" :key="img">
            <img :src="img" alt="" class="card__slider-img"
          /></swiper-slide>
        </swiper>
      </div>

      <div class="card__rating-panel rating-panel" v-if="type == 'rating'">
        <span class="rating-panel__item rating-panel__comments">
          <MessageOutlined />
          <span class="comments-count">{{ data.comments }}</span>
        </span>

        <span class="rating-panel__item rating-panel__likes">
          <LikeFilled />
          <span class="likes-count">{{ data.likes }}</span>
        </span>
      </div>

      <div class="card__rate-panel rate-panel" v-if="type == 'rate'">
        <button class="rate-panel__like"><LikeOutlined /></button>
        <button class="rate-panel__dislike"><DislikeOutlined /></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import {
  MessageOutlined,
  LikeFilled,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons-vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

defineProps({
  data: {
    type: Object,
    default: () => {
      return {};
    },
  },
  type: {
    type: String,
    default: "default",
  },
  sizes: {
    type: Object,
    default: () => {
      return { width: 250, height: 250 };
    },
  },
  menu: {
    type: Boolean,
    default: false,
  },
  slider: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["preview"]);

function preview(event) {
  emit("preview", event.target);
}

const swiperSlider = ref();

function onSwiper(swiper) {
  swiper.autoplay.stop();
  swiperSlider.value = swiper;
}

function stopSwiper() {
  if (swiperSlider.value.autoplay.running) {
    swiperSlider.value.autoplay.stop();
  }
}
function startSwiper() {
  if (!swiperSlider.value.autoplay.running) {
    swiperSlider.value.autoplay.start();
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  // border-radius: 12px;
  position: relative;
  overflow: hidden;
  width: 100%;
  // max-width: 250px;
  height: 100%;
  // max-height: 300px;
  &__body,
  &__img {
    height: 100%;
    width: 100%;
  }

  &__img {
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .rating-panel {
    display: flex;
    // width: 100%;
    position: absolute;
    justify-content: space-between;
    color: #fff;
    background: rgba(26, 26, 26, 0.6);
    backdrop-filter: blur(2px);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
    @include adaptiv-font(14, 12);
    @include adaptiv-line-height(22, 18);
    @include adaptiv-padding(3, 1, 8, 4, 1);
    @include adaptiv-value(column-gap, 12, 6, 1);
    right: 10px;
    bottom: -50%;
    z-index: 2;
    transition: all 0.4s ease 0s;
    border-radius: 15px;
    backdrop-filter: blur(2px);
    &__item {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 8, 4, 1);

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: $colorBlue;
        }
      }
    }
  }

  @media (any-hover: hover) {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      & .rating-panel {
        bottom: 10px;
      }
    }
  }

  @media only screen and (hover: none) {
    & .rating-panel {
      bottom: 10px;
    }
  }

  //rating panel variant 2

  & .rate-panel {
    display: flex;
    justify-content: space-between;
    @include adaptiv-padding(11, 8, 40, 20, 1);
    font-size: 23px;
    color: $colorBlue;

    &__like,
    &__dislike {
      background-color: transparent;

      span {
        background-color: transparent;
      }
    }

    &__like {
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          transform: translateY(-2px);
        }
      }

      &:active {
        color: rgb(16, 197, 16);
      }
    }

    &__dislike {
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          transform: translateY(2px);
        }
      }

      &:active {
        color: rgb(197, 16, 16);
      }
    }
  }

  //dots menu
  &__menu-button {
    z-index: -1;
    opacity: 0;
    position: absolute;
    padding: 0 10px;
    top: 10px;
    right: 8px;
    display: flex;
    flex-direction: column;
    row-gap: 3.5px;
    transition: all 0.3s ease 0s;

    &.ant-dropdown-open {
      z-index: 5;
      opacity: 1;
    }

    span {
      width: 3px;
      height: 3px;
      background-color: #fff;
    }
  }

  @media (any-hover: hover) {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      & .card__menu-button {
        z-index: 5;
        opacity: 1;
      }
    }
  }

  @media only screen and (hover: none) {
    &__menu-button {
      opacity: 1;
      z-index: 5;
    }
  }
  &__slider {
    height: 100%;
  }

  &.select {
    & .card__img {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        border: 1px solid #1890ff;
        z-index: 10;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
          ),
          rgba(25, 145, 255, 0.25);
      }
    }
  }
}
</style>