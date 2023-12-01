<template>
  <section class="feed">
    <div class="feed__wrapper">
      <div class="feed__container _container">
        <div class="feed__body">
          <h2 class="feed__title">Top Creations <span>this week</span></h2>

          <ul class="feed__list">
            <TheCard v-for="art in arts" :key="art" :data="art" type="rating" />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheCard from "@/components/ui/TheCard.vue";

const arts = ref([
  {
    url: "./test arts/photo_2023-09-27_15-35-25.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test arts/photo_2023-09-27_15-24-37.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test arts/saitama.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test arts/photo_2021-08-15_12-17-20.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test arts/red.jpg",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test arts/rage.png",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test arts/batman.png",
    likes: 141,
    comments: 46,
  },
  {
    url: "./test arts/woman.png",
    likes: 141,
    comments: 46,
  },
]);
</script>

<style lang="scss" scoped>
.feed {
  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    color: $colorBlue;
    @include adaptiv-font(18, 15);
    @include adaptiv-line-height(28, 20);
    display: flex;
    align-items: flex-start;
    @include adaptiv-value(column-gap, 10, 6, 1);
    @include adaptiv-value(margin-bottom, 6, 3, 1);

    span {
      color: #bfbfbf;
      font-size: 12px;
      @include adaptiv-font(12, 10);
      @include adaptiv-line-height(20, 16);
    }
  }

  &__list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    grid-template-rows: repeat(auto-fit, minmax(250px, 300px));
    justify-content: center;
    @include adaptiv-value(gap, 30, 20, 1);
  }
}
</style>