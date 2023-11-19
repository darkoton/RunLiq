<template>
  <section class="run">
    <div class="run__wrapper">
      <div class="run__container _container">
        <div class="run__body">
          <h1 class="run__title">Anime AI Art Generator for Free</h1>
          <Main class="run__main" />
          <RateFeed />

          <div class="run__select-model">
            <a-select
              show-search
              placeholder="Select a person"
              style="width: 200px"
              :options="options"
              :filter-option="filterOption"
              @focus="handleFocus"
              @blur="handleBlur"
              @change="handleChange"
              :showArrow="false"
            ></a-select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Main from "@/components/run/TheMain.vue";
import RateFeed from "@/components/feeds/TheRate.vue";
import type { SelectProps } from "ant-design-vue";

const options = ref<SelectProps["options"]>([
  { value: "meinaAnime", label: "MeinaAnime" },
  { value: "break Domain", label: "Break Domain" },
  { value: "c12", label: "c12" },
  { value: "d13", label: "d13" },
  { value: "e14", label: "e14" },
]);
function handleChange(value: string) {
  console.log(`selected ${value}`);
}
function handleBlur() {
  console.log("blur");
}
function handleFocus() {
  console.log("focus");
}
function filterOption(input: string, option: any) {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
}
</script>

<style lang="scss" scoped>
.run {
  @include adaptiv-value(margin-top, 20, 10, 1);
  &__title {
    @include adaptiv-value(margin-bottom, 40, 20, 1);
    text-align: center;
    @include adaptiv-font(28, 22);
    color: $colorBlue;
    font-family: $fontMcLaren;
  }
  &__main {
    @include adaptiv-value(margin-bottom, 28, 14, 1);
  }
  &__select-model {
    display: flex;
    justify-content: flex-end;
    @include adaptiv-value(margin-top, 40, 20, 1);
    @include adaptiv-value(margin-bottom, 250, 50, 1);
  }
}
</style>