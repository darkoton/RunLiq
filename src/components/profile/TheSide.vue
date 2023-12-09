<template>
  <aside class="profile__user">
    <div class="profile__avatar">
      <img src="@/assets/img/profile/avatar.png" alt="" />
    </div>

    <div class="profile__items">
      <div class="profile__item">
        <h4 class="profile__title">@nickName</h4>
        <p class="profile__text">Joined Dec 24, 2022</p>
      </div>
      <div class="profile__item">
        <h4 class="profile__title"><EnvironmentOutlined /> Italy</h4>
      </div>

      <div class="profile__item">
        <h4 class="profile__title">Alexander Schastlivyi</h4>
        <p class="profile__text">
          Some desctiption is here to introduce myself ( max 255 ) The lazy lamp
          is shaking out
        </p>
      </div>

      <div class="profile__item">
        <p class="profile__text">
          <HeartOutlined class="heart" /> Likes: <span class="black">1.2k</span>
        </p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { EnvironmentOutlined, HeartOutlined } from "@ant-design/icons-vue";
</script>

<style lang='scss' scoped>
.profile {
  &__user {
    width: 100%;
    max-width: 166px;
    display: flex;
    flex-direction: column;
  }
  &__avatar {
    width: 100%;
    height: 100%;
    max-width: 64px;
    max-height: 64px;
    margin-bottom: 10px;
    align-self: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  &__item {
    display: flex;
    flex-direction: column;
  }
  &__title {
    @include adaptiv-font(14, 12);
    @include adaptiv-line-height(14, 12);
    color: var(--fullBlack);
    margin-bottom: 3px;
  }
  &__text {
    color: var(--darkGray);
    @include adaptiv-font(12, 10);
    @include adaptiv-line-height(20, 16);
    margin: 0;
  }
  & .heart {
    color: $colorRed;
  }
  & .black {
    color: var(--fullBlack);
  }
}
</style>