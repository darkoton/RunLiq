<template>
  <section class="create">
    <div class="create__wrapper">
      <div class="create__container _container">
        <div class="create__body">
          <h2 class="create__title">Post Create</h2>
          <TheMain />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TheMain from "@/components/create-post/TheMain.vue";
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