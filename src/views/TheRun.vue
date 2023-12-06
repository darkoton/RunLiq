<template>
  <section class="run">
    <div class="run__wrapper">
      <div class="run__container _container">
        <div class="run__body">
          <h1 class="run__title">Anime AI Art Generator for Free</h1>
          <Main class="run__main" />
          <RateFeed />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Main from "@/components/run/TheMain.vue";
import RateFeed from "@/components/feeds/TheRate.vue";
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