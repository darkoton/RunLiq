<template>
  <li class="comment">
    <img :src="comment.avatar" alt="avatar" class="comment__avatar" />
    <div class="comment__info">
      <p class="comment__username">{{ comment.username }}</p>
      <p class="comment__text">{{ comment.message }}</p>
      <div class="comment__bottom">
        <div class="comment__likes"><LikeOutlined /><span>0</span></div>
        <button class="comment__reply-button">Reply to</button>
      </div>
      <Comment
        v-if="comment.reply"
        :comment="comment.reply"
        class="comment__reply"
      />
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";
import Comment from "@/components/post/TheComment.vue";
import { LikeOutlined } from "@ant-design/icons-vue";

defineProps(["comment"]);
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  align-items: flex-start;
  @include adaptiv-value(column-gap, 15, 7.5, 1);
  &__avatar {
    width: 100%;
    height: 100%;
    max-width: 34px;
    max-height: 34px;
    object-fit: cover;
  }

  &__username {
    color: var(--gray);
    @include adaptiv-font(12, 10);
    @include adaptiv-line-height(20, 18);
    margin-bottom: 2px;
  }

  &__text {
    color: var(--black);
    @include adaptiv-font(13, 10);
    @include adaptiv-line-height(18, 14);
    margin-bottom: 5px;
  }
  &__bottom {
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 10, 5, 1);
  }
  &__likes {
    display: flex;
    @include adaptiv-value(column-gap, 8, 4, 1);
    align-items: center;
  }
  &__reply-button,
  &__likes {
    color: var(--gray);
    @include adaptiv-font(12, 10);
    @include adaptiv-line-height(20, 16);
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: $colorBlue;
      }
    }
  }
  &__reply {
    margin-top: 16px;
  }
}
</style>