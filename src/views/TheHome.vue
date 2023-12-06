<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__container _container">
        <div class="home__body">
          <TheMain />
          <TheFeeds
            :title="'Top Creations'"
            :subtitle="'this week'"
            type="rating"
            :data="arts"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheMain from "@/components/home/TheMain.vue";
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
]);
</script>