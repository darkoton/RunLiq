<template>
  <section class="post">
    <div class="post__wrapper">
      <div class="post__container _container">
        <div class="post__body">
          <div class="post__left">
            <div class="post__title">
              <span class="post__back" @click="router.back()"
                ><DoubleLeftOutlined
              /></span>
              {{ post.title }} <span>#</span>
            </div>

            <Slider :data="post.urls" />
          </div>

          <div class="post__right">
            <Info :data="post" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { DoubleLeftOutlined } from "@ant-design/icons-vue";
import Slider from "@/components/post/TheSlider.vue";
import Info from "@/components/post/TheInfo.vue";

const router = useRouter();

const post = ref({
  urls: [
    "/test-arts/photo_2023-09-27_15-24-37.jpg",
    "/test-arts/rage.jpg",
    "/test-arts/photo_2021-08-15_12-17-20.jpg",
    "/test-arts/saitama.jpg",
  ],
  likesCount: 141,
  commentsCount: 46,
  user: { avatar: "/avatar.png", name: "Aleksandr Schastlivyi" },
  title: "Post title",
  description:
    "Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Текст",
  comments: [
    {
      username: "Aleksandr Schastlivyi",
      avatar: "/avatar.png",
      message: "We supply a series of design principles",
      reply: {
        username: "Aleksandr Schastlivyi",
        avatar: "/avatar.png",
        message: "reply We supply a series of design principles",
      },
    },
    {
      username: "Aleksandr Schastlivyi",
      avatar: "/avatar.png",
      message: "We supply a series of design principles",
      reply: {
        username: "Aleksandr Schastlivyi",
        avatar: "/avatar.png",
        message: "reply We supply a series of design principles",
      },
    },
    {
      username: "Aleksandr Schastlivyi",
      avatar: "/avatar.png",
      message: "We supply a series of design principles",
      reply: {
        username: "Aleksandr Schastlivyi",
        avatar: "/avatar.png",
        message: "reply We supply a series of design principles",
      },
    },
  ],
});
</script>

<style lang='scss' scoped>
.post {
  &__body {
    display: flex;
    @include adaptiv-value(column-gap, 30, 15, 1);
  }
  &__left {
    width: 100%;
    max-width: 544px;
  }
  &__title {
    @include adaptiv-font(20, 16);
    @include adaptiv-line-height(28, 20);
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 10, 1, 1);
    color: var(--fullBlack);
    span {
      color: $colorBlue;
    }
    margin-bottom: 15px;
  }
  &__back {
    @include adaptiv-font(30, 20);

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        transform: translateX(-5px);
      }
    }
  }

  @media (max-width: 1000px) {
    &__body {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
    }
  }
}
</style>