<template>
  <section class="profile">
    <div class="profile__wrapper">
      <div class="profile__container _container">
        <div class="profile__body">
          <Side />
          <div class="profile__feeds">
            <a-menu v-model:selectedKeys="current" mode="horizontal">
              <a-menu-item
                v-for="item in menu"
                :key="item.title"
                @click="item.event()"
              >
                <template #icon>
                  <component :is="item.icon"></component>
                </template>
                <span>
                  {{ item.title }}
                </span>
              </a-menu-item>
            </a-menu>
            <Feed
              :type="'rating'"
              :data="arts[select]"
              :sizes="{ width: 215, height: 250 }"
              :menu="true"
              class="profile__feed"
              :slider="select == 'posts' ? true : false"
              :routerLink="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import Side from "@/components/profile/TheSide.vue";
import Feed from "@/components/feeds/TheFeeds.vue";
import { AntDesignOutlined } from "@ant-design/icons-vue";

const select = ref("posts");

const menu = ref([
  {
    title: "Posts",
    icon: AntDesignOutlined,
    event: () => {
      select.value = "posts";
    },
  },
  {
    title: "Art history",
    icon: AntDesignOutlined,
    event: () => {
      select.value = "history";
    },
  },
]);

const current = ref(["Posts"]);

const arts = ref({
  posts: [
    {
      urls: [
        "./test-arts/photo_2023-09-27_15-24-37.jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
      user: {
        avatar: "./avatar.png",
      },
      description:
        "Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Текст",
      comments: [
        {
          username: "Aleksandr Schastlivyi",
          avatar: "./avatar.png",
          message: "We supply a series of design principles",
          reply: [
            {
              username: "Aleksandr Schastlivyi",
              avatar: "./avatar.png",
              message: "reply We supply a series of design principles",
            },
          ],
        },
      ],
    },
    {
      urls: [
        "./test-arts/rage.jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "./test-arts/rage.png",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/batman.png",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "./test-arts/woman.png",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/final.jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "./test-arts/fire.png",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/red.jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "./test-arts/knight epic.png",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/knight.png",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "./test-arts/cropped-1920-1080-957926.png",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/dream_TradingCard (3).jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "./test-arts/dream_TradingCard (1).jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/dream_TradingCard (1).jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "./test-arts/dream_TradingCard.jpg",
        "./test-arts/photo_2023-09-27_15-35-25.jpg",
        "./test-arts/photo_2021-08-15_12-17-20.jpg",
        "./test-arts/saitama.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
  ],
  history: [
    {
      url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/saitama.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/red.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/rage.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/batman.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/woman.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/saitama.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/red.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/rage.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/batman.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "./test-arts/woman.png",
      likesCount: 141,
      commentsCount: 46,
    },
  ],
});
</script>

<style lang='scss' scoped>
.profile {
  &__body {
    display: flex;
  }
  &__feeds {
    flex: 1 1 auto;
    width: 100%;
  }

  @media (max-width: 700px) {
    &__body {
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>