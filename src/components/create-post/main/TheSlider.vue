<template>
  <div class="slider">
    <div class="slider__wrapper">
      <div class="slider__body">
        <div class="slider__empty" v-if="!slides.length">
          Select your jobs below
        </div>

        <div class="slider__swiper-body" v-else>
          <swiper
            :loop="true"
            :grabCursor="true"
            class="slider__swiper create-post"
            @swiper="onSwiper"
          >
            <span class="slider__prev" @click="swiperSlider.slidePrev()"
              ><LeftOutlined />
            </span>
            <span class="slider__next" @click="swiperSlider.slideNext()"
              ><RightOutlined
            /></span>
            <swiper-slide
              v-for="slide in slides"
              :key="slide"
              class="slider__slide"
              ><img :src="slide" alt=""
            /></swiper-slide>
          </swiper>
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
          <div class="slider__fraction">
            ({{ swiperSlider ? swiperSlider.realIndex + 1 : "" }}/{{
              swiperSlider ? swiperSlider.slides.length : ""
            }})
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
// Import Swiper styles
import "swiper/css";

let swiperSlider = ref({
  slides: [],
});

const slides = ref([
  "./test-arts/rage.png",
  "./test-arts/knight.png",
  "./test-arts/rage.jpg",
  "./test-arts/saitama.jpg",
]);

function onSwiper(swiper) {
  swiperSlider.value = swiper;
}
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;

  &__wrapper,
  &__body {
    height: 100%;
  }
  &__body {
    position: relative;
    display: flex;
    justify-content: center;
  }

  &__empty {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--gray);

    border-radius: 2px;
    border: 2px dashed var(--darkGray);
    background: var(--lightGray);
    padding: 20px;
  }
  &__swiper-body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 450px;
  }
  &__swiper {
    height: 100%;
    width: 100%;
    // overflow-x: hidden;
    // overflow-y: visible;
    // position: static;
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
    @include adaptiv-value(height, 450, 350, 1);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__pagination {
    display: flex;
    column-gap: 6px;
    justify-content: center;
    margin-top: 9px;

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
  &__fraction {
    color: var(--gray);
    @include adaptiv-font(12, 10);
    @include adaptiv-line-height(20, 18);
    align-self: flex-end;
    margin-top: -3px;
  }
}
</style>