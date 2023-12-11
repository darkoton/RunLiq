<template>
  <div class="slider">
    <div class="slider__wrapper">
      <div class="slider__body">
        <Preview
          :urlImg="previewData.url"
          :open="previewData.open"
          @close="previewData.open = false"
          :img="previewData.img"
        />
        <div class="slider__swiper-body">
          <a-dropdown
            :trigger="['click']"
            placement="bottomRight"
            class="slider__menu"
          >
            <a class="slider__menu-button" @click.prevent>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item key="0">
                  <a href="#" class="ant-dropdown-link">Download</a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a href="#">Report</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <swiper
            :loop="true"
            :grabCursor="true"
            class="slider__swiper post"
            @swiper="onSwiper"
            v-if="data.length"
          >
            <span class="slider__prev" @click="swiperSlider.slidePrev()">
              <LeftOutlined />
            </span>
            <span class="slider__next" @click="swiperSlider.slideNext()">
              <RightOutlined />
            </span>
            <swiper-slide
              v-for="slide in data"
              :key="slide"
              class="slider__slide"
            >
              <img :src="slide" alt="" @click="preview" />
            </swiper-slide>
          </swiper>
          <div
            class="slider__paginations"
            v-if="swiperSlider.slides && swiperSlider.slides.length"
          >
            <div class="slider__pagination">
              <span
                class="slider__pagination-bullet"
                v-for="bullet in swiperSlider.slides.length"
                :key="bullet"
                :class="{
                  'slider__pagination-bullet-active':
                    bullet == swiperSlider.realIndex + 1,
                }"
              ></span>
            </div>
          </div>

          <div class="slider__activity">
            <div class="slider__views slider__activity-item">
              <EyeOutlined />192
            </div>
            <div class="slider__likes slider__activity-item">
              <LikeFilled />1.2k
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  LeftOutlined,
  RightOutlined,
  EyeOutlined,
  LikeFilled,
} from "@ant-design/icons-vue";
import "swiper/css";
import Preview from "@/components/ui/ThePreview.vue";

defineProps(["data"]);

let swiperSlider = ref({
  slides: [],
});

const previewData = ref({
  url: "",
  open: false,
  img: null,
});

function preview(event) {
  previewData.value.url = event.target.src;
  previewData.value.img = event.target;
  previewData.value.open = true;
}

function onSwiper(swiper) {
  swiperSlider.value = swiper;
}
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  // height: 100%;
  &__wrapper,
  &__body {
    height: 100%;
  }
  &__body {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__swiper-body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 544px;
  }
  &__swiper {
    height: 100%;
    width: 100%;
    // overflow-x: hidden;
    // overflow-y: visible;
    // position: static;
  }
  .swiper-wrapper {
    align-items: center;
  }
  &__prev,
  &__next {
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 10;
    @include adaptiv-font(36, 26);

    color: #40a9ff;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: rgba(217, 217, 217, 0.2);
        color: $colorBlue;
      }
    }
  }
  &__prev {
    left: 0;
  }
  &__next {
    right: 0;
  }
  &__slide {
    @include adaptiv-value(max-height, 860, 500, 1);
    display: flex;
    height: 100%;
    flex: 1 0 auto;
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  &__paginations {
    display: flex;
    flex-direction: column;
  }
  &__pagination {
    display: flex;
    column-gap: 6px;
    justify-content: center;
    margin-top: 9px;
    margin-bottom: 5px;

    span {
      display: inline-block;
      height: 3px;
      width: 16px;
      transition: all 0.3s ease 0s;
      border-radius: 1px;
      opacity: 0.3;
      background: #40a9ff;
      &.slider__pagination-bullet-active {
        opacity: 1;
        width: 24px;
      }
    }
  }
  &__menu-button {
    z-index: 20;
    position: absolute;
    padding: 0 10px;
    top: 10px;
    right: 8px;
    display: flex;
    flex-direction: column;
    row-gap: 3.5px;
    transition: all 0.3s ease 0s;

    span {
      width: 3px;
      height: 3px;
      background-color: var(--fullBlack);
    }
  }

  &__activity {
    display: flex;
    @include adaptiv-value(column-gap, 15, 7.5, 1);
    color: var(--fullBlack);
    @include adaptiv-font(14, 12);

    &-item {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 6, 3, 1);
    }

    span {
      font-size: 18px;
    }
  }
  &__likes {
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: $colorBlue;
      }
    }
  }
}
</style>