<template>
  <div class="create__main">
    <TheSlider />
    <TheForm />
  </div>
</template>


<script setup>
import TheSlider from "@/components/create-post/main/TheSlider.vue";
import TheForm from "@/components/create-post/main/TheForm.vue";
</script>

<style lang='scss' scoped>
.create {
  &__main {
    @include adaptiv-value(row-gap, 30, 15, 1);
  }
}
</style>