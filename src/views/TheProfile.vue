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
      url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
      likes: 141,
      comments: 46,
    },

    {
      url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/saitama.jpg",
      likes: 141,
      comments: 46,
    },

    {
      url: "./test-arts/rage.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/batman.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/red.jpg",
      likes: 141,
      comments: 46,
    },

    {
      url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/woman.png",
      likes: 141,
      comments: 46,
    },

    {
      url: "./test-arts/saitama.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
      likes: 141,
      comments: 46,
    },

    {
      url: "./test-arts/red.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
      likes: 141,
      comments: 46,
    },

    {
      url: "./test-arts/batman.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/rage.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/woman.png",
      likes: 141,
      comments: 46,
    },
  ],
  history: [
    {
      url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/saitama.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/red.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/rage.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/batman.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/woman.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-35-25.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2023-09-27_15-24-37.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/saitama.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/photo_2021-08-15_12-17-20.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/red.jpg",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/rage.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/batman.png",
      likes: 141,
      comments: 46,
    },
    {
      url: "./test-arts/woman.png",
      likes: 141,
      comments: 46,
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