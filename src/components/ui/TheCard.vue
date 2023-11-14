<template>
  <div class="card">
    <div class="card__body">
      <div class="card__img">
        <img :src="data.url" alt="art" />
      </div>
      <div class="card__rating-panel rating-panel">
        <span class="rating-panel__item rating-panel__comments">
          <MessageOutlined />
          <span class="comments-count">{{ data.comments }}</span>
        </span>

        <span class="rating-panel__item rating-panel__likes">
          <LikeFilled />
          <span class="likes-count">{{ data.likes }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { MessageOutlined, LikeFilled } from "@ant-design/icons-vue";

defineProps({
  data: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  // border-radius: 12px;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 250px;

  &__img {
    border-radius: 12px;
    overflow: hidden;
    width: 250px;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & .rating-panel {
    display: flex;
    width: 100%;
    position: absolute;
    width: 100%;
    justify-content: space-between;
    color: #fff;
    background: rgba(26, 26, 26, 0.6);
    backdrop-filter: blur(2px);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
    @include adaptiv-font(14, 12);
    @include adaptiv-line-height(22, 18);
    @include adaptiv-padding(5, 5, 10, 7, 1);
    left: 0;
    bottom: -50%;
    transition: all 0.4s ease 0s;

    &__item {
      display: flex;
      align-items: center;
      @include adaptiv-value(column-gap, 8, 4, 1);

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: $colorBlue;
        }
      }
    }
  }

  @media (any-hover: hover) {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      & .rating-panel {
        bottom: -1px;
      }
    }
  }

  @media only screen and (hover: none) {
    & .rating-panel {
      bottom: -1px;
    }
  }
}
</style>