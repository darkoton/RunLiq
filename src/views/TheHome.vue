<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__container _container">
        <div class="home__body">
          <TheMain />
          <TheFeeds :title="'Top Creations'" :subtitle="'this week'" type="rating" :fn-data="getPosts"
            :sizes="{ width: 250, height: 300 }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMain from "@/components/home/TheMain.vue";
import TheFeeds from "@/components/feeds/TheFeeds.vue";
import axios from "@/plugins/axios";

async function getPosts(offset: number = 0) {

  const res = await axios.getAllPosts(offset)

  return res.data.data
}
</script>