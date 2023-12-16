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
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295235/Runliq/photo_2023-09-27_15-24-37_vmyejl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
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
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295238/Runliq/rage_mmcnyp.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295240/Runliq/rage_hjh8c1.png",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295220/Runliq/batman_my1que.png",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295244/Runliq/woman_ojmkxi.png",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295228/Runliq/final_bhjlfq.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295229/Runliq/fire_jyhezm.png",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295241/Runliq/red_itnfst.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295231/Runliq/knight_epic_riljt0.png",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295232/Runliq/knight_qhfm4i.png",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295221/Runliq/cropped-1920-1080-957926_vvu9nn.png",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295225/Runliq/dream_TradingCard_3_jnxj0a.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },

    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295222/Runliq/dream_TradingCard_1_rmuciv.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295222/Runliq/dream_TradingCard_1_rmuciv.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
    {
      urls: [
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295226/Runliq/dream_TradingCard_ylscqp.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      ],
      likesCount: 141,
      commentsCount: 46,
    },
  ],
  history: [
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295235/Runliq/photo_2023-09-27_15-24-37_vmyejl.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295241/Runliq/red_itnfst.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295240/Runliq/rage_hjh8c1.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295220/Runliq/batman_my1que.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295244/Runliq/woman_ojmkxi.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295236/Runliq/photo_2023-09-27_15-35-25_roreco.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295235/Runliq/photo_2023-09-27_15-24-37_vmyejl.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295233/Runliq/photo_2021-08-15_12-17-20_xg86gl.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295241/Runliq/red_itnfst.jpg",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295240/Runliq/rage_hjh8c1.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295220/Runliq/batman_my1que.png",
      likesCount: 141,
      commentsCount: 46,
    },
    {
      url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295244/Runliq/woman_ojmkxi.png",
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