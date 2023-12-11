<template>
  <div class="error">
    <div class="error__wrapper">
      <div class="error__container _container">
        <div class="error__body">
          <img src="@/assets/img/404/img.png" alt="" class="error__img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.error {
  &__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__img {
    max-width: 100%;
  }
}
</style>