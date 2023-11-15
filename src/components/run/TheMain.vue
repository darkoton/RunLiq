<template>
  <section class="main">
    <div class="main__wrapper">
      <div class="main__body">
        <Progess class="main__left" />
        <Form class="main__right" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Progess from "@/components/run/main/TheProgress.vue";
import Form from "@/components/run/main/TheForm.vue";
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