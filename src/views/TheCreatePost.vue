<template>
  <section class="create">
    <div class="create__wrapper">
      <div class="create__container _container">
        <div class="create__body">
          <h2 class="create__title">Post Create</h2>
          <TheMain />

          <TheFeeds
            :title="'Art history'"
            type="select"
            :data="arts"
            :sizes="{ width: 250, height: 250 }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import TheMain from "@/components/create-post/TheMain.vue";
import TheFeeds from "@/components/feeds/TheFeeds.vue";

const arts = ref([
  {
    url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/saitama.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/red.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/rage.png",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/batman.png",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/woman.png",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/saitama.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/red.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/rage.png",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/batman.png",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "./test-arts/woman.png",
    likesCount: 141,
    commentsCount: 46,
  },
]);
</script>

<style lang='scss' scoped>
.create {
  &__title {
    text-align: center;
    color: $colorBlue;
    font-family: $fontMcLaren;
    @include adaptiv-font(28, 22);
    line-height: normal;
    @include adaptiv-value(margin-bottom, 63, 32, 1);
  }
  &__main {
    display: flex;
    justify-content: space-between;
    @include adaptiv-value(column-gap, 20, 10, 1);
  }

  @media (max-width: 992px) {
    &__main {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>