<template>
  <section class="main">
    <div class="main__wrapper">
      <div class="main__body">
        <Empty class="main__empty" v-if="!progressActive" />
        <Progess class="main__left" v-else />
        <Form class="main__right" @submit="progressActive = true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Empty from "@/components/run/main/TheEmpty.vue";
import Progess from "@/components/run/main/TheProgress.vue";
import Form from "@/components/run/main/TheForm.vue";

const progressActive = ref(false);
</script>

<style lang="scss" scoped>
.main {
  &__body {
    @include adaptiv-value(padding-top, 20, 10, 1);
    display: flex;
    justify-content: center;
    @include adaptiv-value(gap, 65, 25, 1);
    flex-wrap: wrap;
  }
}
</style>