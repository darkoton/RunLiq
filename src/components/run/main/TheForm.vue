<template>
  <div class="form">
    <ul class="form__list">
      <li class="form__item item">
        <span class="item__title">Promt:</span>
        <div class="item__input-body">
          <a-textarea
            show-count
            :maxlength="100"
            placeholder="(masterpiece), best quality, expressive eyes, perfect face"
            class="item__textarea"
          />
          <button class="item__random">random</button>
        </div>
      </li>

      <!-- Select modal -->
      <li class="form__item item">
        <span class="item__title">Model:</span>
        <div class="item__models">
          <div
            class="item__model"
            :class="{ select: selectModals.includes(model.id) }"
            v-for="(model, index) in models"
            :key="model"
            @mouseover="startSwiper(swipers[index])"
            @mouseleave="stopSwiper(swipers[index])"
            @click="selectModal(model.id)"
          >
            <swiper
              :modules="[EffectFade, Autoplay]"
              :effect="'fade'"
              :autoplay="{
                delay: 1000,
                disableOnInteraction: false,
              }"
              :disableOnInteraction="false"
              class="item__model-img-body"
              @swiper="onSwiper"
            >
              <swiper-slide v-for="img in model.imgs" :key="img">
                <img :src="img" alt="" class="item__model-img"
              /></swiper-slide>
            </swiper>
            <h5 class="item__model-title">{{ model.title }}</h5>
          </div>
        </div>
      </li>
      <!-- /Select modal -->

      <!-- Advanced settinhs spoiler -->
      <div class="form__spoiler">
        <button
          class="form__spoiler-button"
          @click="advancedSetting = !advancedSetting"
        >
          advanced settings
          <DownOutlined
            class="form__spoiler-icon"
            :style="{ transform: advancedSetting ? 'rotate(-180deg)' : '' }"
          />
        </button>
        <my-spoiler class="form__spoiler-body" v-model="advancedSetting">
          <li class="form__item item">
            <span class="item__title">Negative:</span>
            <a-textarea
              show-count
              :maxlength="100"
              placeholder="BadDream"
              class="item__textarea"
            />
          </li>

          <li class="form__item item">
            <span class="item__title">Hi.Res:</span>
            <div class="item__body">
              <div class="item__top">
                <a-switch v-model:checked="switchValue" />
              </div>
              <p class="item__desc">
                Use it to add details. (x2 price of Liq Tokens)
              </p>
            </div>
          </li>
          <li class="form__item item">
            <span class="item__title">Steps:</span>
            <div class="item__body">
              <a-slider
                v-model:value="stepValue"
                :marks="marks"
                :step="1"
                range
                :tooltipVisible="false"
                class="item__slider"
                :max="22"
              >
                <template #mark="{ label, point }">
                  <template v-if="point === 100">
                    <strong>{{ label }}</strong>
                  </template>
                  <template v-else>{{ label }}</template>
                </template>
              </a-slider>
            </div>
          </li>

          <li class="form__item item">
            <span class="item__title">Scale:</span>
            <div class="item__body">
              <a-slider
                v-model:value="scaleValue"
                :marks="marks"
                :step="1"
                range
                :tooltipVisible="false"
                class="item__slider"
                :max="22"
              >
                <template #mark="{ label, point }">
                  <template v-if="point === 100">
                    <strong>{{ label }}</strong>
                  </template>
                  <template v-else>{{ label }}</template>
                </template>
              </a-slider>
            </div>
          </li>
          <li class="form__item item">
            <span class="item__title">Size:</span>
            <a-space class="item__body item__counters">
              <a-input-number
                v-model:value="widght"
                size="small"
                :min="1"
                :max="10000"
                class="item__counter"
              />

              <a-input-number
                v-model:value="height"
                size="small"
                :min="1"
                :max="10000"
                class="item__counter"
              />

              <a-select
                ref="select"
                v-model:value="selectValue"
                :options="options"
                class="item__select"
                :bordered="false"
                size="small"
                style="width: 102px"
              ></a-select>
            </a-space>
          </li>
        </my-spoiler>
      </div>
      <!-- /Advanced settinhs spoiler -->

      <a-button class="form__button" type="primary" @click="$emit('submit')"
        >Run Now 5 LC</a-button
      >
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

defineEmits(["submit"]);

const switchValue = ref<boolean>(false);
const widght = ref<number>(512);
const height = ref<number>(768);

const models = ref([
  {
    id: 1,
    imgs: [
      "./test-arts/fire.png",
      "./test-arts/saitama.jpg",
      "./test-arts/rage.jpg",
      "./test-arts/photo_2023-09-27_15-24-37.jpg",
    ],
    title: "Absolute Reality",
  },
  {
    id: 2,
    imgs: [
      "./test-arts/knight epic.png",
      "./test-arts/knight.png",
      "./test-arts/fire.png",
      "./test-arts/dream_TradingCard (2).jpg",
    ],
    title: "epiC Realism",
  },
  {
    id: 3,
    imgs: [
      "./test-arts/fire.png",
      "./test-arts/saitama.jpg",
      "./test-arts/rage.jpg",
      "./test-arts/photo_2023-09-27_15-24-37.jpg",
    ],
    title: "Flat 2D animerge",
  },
  {
    id: 4,
    imgs: [
      "./test-arts/knight epic.png",
      "./test-arts/knight.png",
      "./test-arts/fire.png",
      "./test-arts/dream_TradingCard (2).jpg",
    ],
    title: "Absolute Reality",
  },
  {
    id: 5,
    imgs: [
      "./test-arts/fire.png",
      "./test-arts/saitama.jpg",
      "./test-arts/rage.jpg",
      "./test-arts/photo_2023-09-27_15-24-37.jpg",
    ],

    title: "epiC Realism",
  },
  {
    id: 6,
    imgs: [
      "./test-arts/knight epic.png",
      "./test-arts/knight.png",
      "./test-arts/fire.png",
      "./test-arts/dream_TradingCard (2).jpg",
    ],
    title: "Flat 2D animerge",
  },
]);
const selectValue = ref("preset");
const options = [
  {
    value: "preset",
    label: "Preset",
  },
  {
    value: "test 1",
    label: "Test 1",
  },
  {
    value: "test 2",
    label: "Test 2",
  },
  {
    value: "test 3",
    label: "Test 3",
  },
];

const advancedSetting = ref(false);
const selectModals = ref([]);

const stepValue = ref<[number, number]>([0, 22]);
const scaleValue = ref<[number, number]>([0, 22]);

const marks = ref<Record<number, any>>({
  0: "0",
  6: "6",
  12: "12",
  22: "22",
});

const swipers = ref([]);
function onSwiper(swiper) {
  swiper.autoplay.stop();
  swipers.value.push(swiper);
}
function stopSwiper(swiper) {
  if (swiper.autoplay.running) {
    swiper.autoplay.stop();
  }
}
function startSwiper(swiper) {
  if (!swiper.autoplay.running) {
    swiper.autoplay.start();
  }
}

function selectModal(id) {
  if (selectModals.value.indexOf(id) > -1) {
    selectModals.value.splice(selectModals.value.indexOf(id), 1);
    return;
  }
  selectModals.value.push(id);
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 420px;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @include adaptiv-value(row-gap, 15, 5, 1);
  }
  & .item {
    display: flex;
    @include adaptiv-value(column-gap, 8, 4, 1);
    width: 100%;
    justify-content: flex-end;

    &__title {
      color: var(--black);
      text-align: right;
      @include adaptiv-font(14, 12);
      @include adaptiv-line-height(22, 18);
      min-width: 50px;
      padding-top: 5px;
    }
    &__input-body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      max-width: 325px;
    }
    &__random {
      color: $colorBlue;
      margin-top: -14px;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #096dd9;
        }
      }
    }
    &__body {
      width: 100%;
      max-width: 325px;
    }
    &__textarea {
      margin-bottom: 15px;
      width: 100%;
      max-width: 325px;
    }
    textarea {
      background-color: red;
    }
    &__top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    &__desc {
      color: var(--gray);
      @include adaptiv-font(14, 12);
      @include adaptiv-line-height(22, 18);
    }
    &__counters {
      display: flex;
      @include adaptiv-value(padding-left, 36, 15, 1);
      @include adaptiv-padding(5, 5, 12, 8, 1);
    }
    &__select {
      width: 100%;
      max-width: 109px;
      border: 1px dashed #d9d9d9;
      border-radius: 2px;
    }
    &__counter {
      width: 100%;
      max-width: 50px;
      font-size: 12px;
      line-height: 20px;
    }
    &__slider {
      width: 100%;
      max-width: 240px;
      @include adaptiv-value(max-width, 240, 223, 1);
    }
    &__models {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      max-width: 325px;
      @include adaptiv-value(column-gap, 10, 5, 1);
      @include adaptiv-value(row-gap, 5, 2.5, 1);
    }
    &__model {
      display: flex;
      flex-direction: column;
      cursor: pointer;

      &-img-body {
        width: 100px;
        height: 135px;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid transparent;
        transition: all 0.3s ease 0s;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.2) 100%
            ),
            linear-gradient(
              0deg,
              rgba(25, 145, 255, 0.25) 0%,
              rgba(25, 145, 255, 0.25) 100%
            ),
            lightgray 50% / cover no-repeat;
          opacity: 0;
          // opacity: 0.4;
          z-index: 2;
        }
      }
      &-img {
        width: 100%;
        height: 100%;
        max-height: 135px;
        object-fit: cover;
        position: absolute;
        transition: all 0.3s ease 0s;
        top: 0;
        left: 0;
        opacity: 0;

        &:first-child {
          opacity: 1;
        }
        z-index: 9;
        &.active {
          opacity: 1;
          z-index: 10;
        }
      }
      &-title {
        color: var(--gray);
        font-size: 12px;
        text-align: center;
        line-height: 13px;
        margin-top: 4px;
      }

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          & .item__model-img:not(:first-child) {
            animation: fade 6s infinite ease-in-out both;
          }
        }
      }
      &.select .item__model-img-body {
        border-color: $colorBlue;

        &:before {
          opacity: 0.4;
        }
      }
    }
  }
  &__spoiler {
    display: flex;
    flex-direction: column;
    width: 100%;
    &-button {
      align-self: flex-end;
      text-align: left;
      width: 100%;
      max-width: 325px;
      color: $colorBlue;
      @include adaptiv-font(14, 12);
      @include adaptiv-line-height(22, 18);
    }
    &-icon {
      transition: all 0.3s ease 0s;
    }
  }
  &__button {
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    @include adaptiv-font(16, 14);
    @include adaptiv-line-height(24, 18);
    // @include adaptiv-padding(18, 12, 0, 0, 1);
    width: 100%;
    max-width: 173px;
    height: 100%;
    max-height: 53px;
    border-radius: 5px;
  }
}
</style>