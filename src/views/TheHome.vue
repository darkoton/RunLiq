<template>
  <div class="home">
    <div class="home__wrapper">
      <div class="home__body">
        <TheMain />
        <TheTopRaiting />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMain from "@/components/home/TheMain.vue";
import TheTopRaiting from "@/components/feeds/TheTopRating.vue";
</script>