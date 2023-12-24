<template>
  <section class="run">
    <div class="run__wrapper">
      <div class="run__container _container">
        <div class="run__body">
          <h1 class="run__title">Anime AI Art Generator for Free</h1>
          <Main class="run__main" />
          <TheFeeds :title="'Art history'" :fn-data="getImgs" type="default" :load="true"
            :sizes="{ width: 250, height: 300 }" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Main from "@/components/run/TheMain.vue";
import TheFeeds from "@/components/feeds/TheFeeds.vue";
import axios from "@/plugins/axios";

async function getImgs(offset: number = 0) {

  const res = await axios.getUserImages(offset)

  return res.data.images
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