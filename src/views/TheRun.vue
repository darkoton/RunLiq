<template>
  <section class="run">
    <div class="run__wrapper">
      <div class="run__container _container">
        <div class="run__body">
          <h1 class="run__title">Anime AI Art Generator for Free</h1>
          <Main class="run__main" />
          <TheFeeds
            :title="'Art history'"
            type="default"
            :data="arts"
            :load="true"
            :sizes="{ width: 250, height: 300 }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Main from "@/components/run/TheMain.vue";
import TheFeeds from "@/components/feeds/TheFeeds.vue";

const arts = ref([
  {
    url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/saitama.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/red.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/rage.png",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/batman.png",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/woman.png",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/saitama.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/red.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/rage.png",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/batman.png",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test-arts/woman.png",
    likes: 141,
    comments: 46,
  },
]);
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