<template>
  <section class="main">
    <div class="main__wrapper">
      <div class="main__container _container">
        <div class="main__body">
          <h1 class="main__title">
            Make Your Babe with <span class="red">AI</span>
          </h1>

          <div class="main__buttons">
            <TheButton
              type="dashed"
              :icon="WechatOutlined"
              class="main__discord"
            >
              Discord
            </TheButton>
            <TheButton type="primary" :icon="RocketOutlined">Run Now</TheButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RocketOutlined, WechatOutlined } from "@ant-design/icons-vue";
import TheButton from "@/components/ui/TheButton.vue";
</script>

<style lang="scss" scoped>
.main {
  &__body {
    @include adaptiv-value(padding-bottom, 138, 30, 1);
  }
  &__title {
    color: #096dd9;
    font-family: $fontMcLaren;
    @include adaptiv-font(28, 20);
    line-height: normal;
    text-align: center;
    @include adaptiv-value(margin-top, 48, 30, 1);
    @include adaptiv-value(margin-bottom, 80, 40, 1);
    span {
      color: #fa541c;
    }
  }

  &__buttons {
    display: flex;
    justify-content: center;
    @include adaptiv-value(column-gap, 18, 9, 1);
    @include adaptiv-font(16, 14);

    button {
      padding: 6.4px 15px;
      // @include adaptiv-padding(6.4, 4, 15, 10, 1);
      font-size: 16px;
      @include adaptiv-font(16, 13);
      @include adaptiv-line-height(24, 18);
    }
  }
  &__discord {
    color: $colorBlue;
    border-color: $colorBlue !important;
  }
}
</style>