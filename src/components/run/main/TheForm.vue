<template>
  <div class="form">
    <ul class="form__list">
      <li class="form__item item">
        <span class="item__title">Promt:</span>
        <a-textarea
          show-count
          :maxlength="100"
          placeholder="(masterpiece), best quality, expressive eyes, perfect face"
          class="item__textarea"
        />
      </li>

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

            <button class="item__settings">settings</button>
          </div>
          <p class="item__desc">
            Use it to add details. (x2 price of Liq Tokens)
          </p>
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

      <a-button class="form__button" type="primary">Run Now 5 LC</a-button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const switchValue = ref<boolean>(false);
const widght = ref<number>(512);
const height = ref<number>(768);

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

const selectValue = ref<number | string>("preset");
const stepValue = ref<[number, number]>([0, 22]);
const scaleValue = ref<[number, number]>([0, 22]);

const marks = ref<Record<number, any>>({
  0: "0",
  6: "6",
  12: "12",
  22: "22",
});
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
      color: rgba(0, 0, 0, 0.85);
      text-align: right;
      @include adaptiv-font(14, 12);
      @include adaptiv-line-height(22, 18);
      padding-top: 5px;
      min-width: 50px;
    }

    &__textarea,
    &__body {
      width: 100%;
      max-width: 350px;
    }
    &__textarea {
      margin-bottom: 15px;
    }

    &__top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    &__settings {
      color: $colorBlue;
      @include adaptiv-font(14, 12);
      @include adaptiv-line-height(22, 18);

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: #096dd9;
        }
      }
    }
    &__desc {
      color: rgba(0, 0, 0, 0.45);
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
  }
  &__button {
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    @include adaptiv-font(16, 14);
    @include adaptiv-line-height(24, 18);
    @include adaptiv-padding(18, 12, 0, 0, 1);
    width: 100%;
    max-width: 277px;
    height: 100%;
    max-height: 53px;
    border-radius: 12px;
  }
}
</style>