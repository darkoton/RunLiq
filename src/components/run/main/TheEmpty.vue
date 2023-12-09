<template>
  <section class="empty">
    <div class="empty__wrapper">
      <div class="empty__body">
        <p class="empty__text">
          Write a character description to promt and Run
        </p>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.empty {
  border-radius: 5px;
  flex: 1 1 auto;
  border: 2px dashed var(--blackGray);
  max-height: 593px;
  min-height: 300px;
  &__body {
    @include adaptiv-padding(27, 15, 15, 10, 1);
  }
  &__text {
    @include adaptiv-font(16, 13);
    @include adaptiv-line-height(24, 20);
    text-align: center;
    color: var(--black);
    margin: 0;
  }
}
</style>