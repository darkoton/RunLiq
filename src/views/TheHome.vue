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
            :sizes="{ width: 250, height: 300 }"
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
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295235/Runliq/photo_2023-09-27_15-24-37_vmyejl.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295241/Runliq/red_itnfst.jpg",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295240/Runliq/rage_hjh8c1.png",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295220/Runliq/batman_my1que.png",
    likesCount: 141,
    commentsCount: 46,
  },
  {
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295244/Runliq/woman_ojmkxi.png",
    likesCount: 141,
    commentsCount: 46,
  },
]);
</script>