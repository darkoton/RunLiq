<template>
  <section class="main">
    <div class="main__wrapper">
      <div class="main__container _container">
        <div class="main__body">
          <h1 class="main__title">
            Make Your Babe with <span class="red">AI</span>
          </h1>

          <div class="main__buttons">
            <a-button type="dashed" class="main__discord" size="large">
              <template #icon><WechatOutlined /></template>
              Discord
            </a-button>
            <a-button type="primary" size="large">
              <template #icon><RocketOutlined /></template>
              Run Now</a-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RocketOutlined, WechatOutlined } from "@ant-design/icons-vue";
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
      @include adaptiv-font(16, 13);
      @include adaptiv-line-height(24, 18);
      display: flex;
      align-items: center;
      border-radius: 12px;
    }
  }
  &__discord {
    color: $colorBlue;
    border-color: $colorBlue;

    &:active {
      color: #096dd9;
      border-color: #096dd9;
    }
  }
}
</style>