<template>
  <section class="feed">
    <div class="feed__wrapper">
      <div class="feed__body">
        <TheMasonry :items="items" :columns="4" :columns-width="260" :gap="20" class="feed__list">
          <template #default="{ item }">
            <article class="feed__post post">
              <div class="post__info">
                <span class="post__avatar">
                  <img :src="item.user.avatar" alt="" />
                </span>
                <span class="post__username">{{ item.user.name }}</span>
              </div>

              <div class="post__img">
                <a-dropdown :trigger="['click']" placement="bottomRight" class="post__menu">
                  <a class="post__menu-button" @click.prevent>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item key="0">
                        <a :href="item.url" download class="ant-dropdown-link">Download</a>
                      </a-menu-item>
                      <a-menu-item key="1">
                        <a href="#">Report</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>

                <img :src="item.url" alt="" @click="preview" />

                <div class="post__counters">
                  <span class="post__likes post__counter">
                    <LikeOutlined class="post__counter-icon" />
                    <span class="post__counter-value">{{ item.likes }}</span>
                  </span>
                  <span class="post__comments post__counter">
                    <MessageOutlined class="post__counter-icon" />
                    <span class="post__counter-value">{{ item.comments }}</span>
                  </span>
                </div>
              </div>
            </article>
          </template>
        </TheMasonry>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheMasonry from "@/components/ui/TheMasonry.vue";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons-vue";

const items = ref([
  {
    title: "test 1",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-13"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295222/Runliq/dream_TradingCard_1_rmuciv.jpg",
  },
  {
    title: "test 2",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295226/Runliq/dream_TradingCard_ylscqp.jpg",
  },
  {
    title: "test 3",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295228/Runliq/final_bhjlfq.jpg",
  },
  {
    title: "test 4",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295242/Runliq/saitama_lmwyoh.jpg",
  },
  {
    title: "test 5",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295218/Runliq/185as7578879094j5hjsy6a674ajd897_juwkie.jpg",
  },
  {
    title: "test 7",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295221/Runliq/cropped-1920-1080-957926_vvu9nn.png",
  },
  {
    title: "test 6",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295225/Runliq/dream_TradingCard_3_jnxj0a.jpg",
  },
  {
    title: "knight epic",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295231/Runliq/knight_epic_riljt0.png",
  },
  {
    title: "knight",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295232/Runliq/knight_qhfm4i.png",
  },
  {
    title: "rage",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar:
        "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295263/Runliq/avatar_umno8v.png",
    },
    date: new Date("2023-11-16"),
    url: "https://res.cloudinary.com/dk0jh3jqa/image/upload/v1702295238/Runliq/rage_mmcnyp.jpg",
  },
])


</script>


<style lang="scss" scoped>
.feed {
  width: 100%;

  &__wrapper,
  &__body {
    width: 100%;
  }

  &__list {
    @include adaptiv-value(margin-top, 50, 25, 1);
  }

  & .post {
    &__info {
      display: flex;
      @include adaptiv-value(column-gap, 6, 3, 1);
      // @include adaptiv-value(padding-bottom, 11, 5, 1);
      padding-bottom: 4px;
      align-items: center;
      max-width: 100%;
    }

    &__username {
      color: var(--gray);
      @include adaptiv-font(12, 10);
      @include adaptiv-line-height(20, 16);
    }

    &__img {
      border-radius: 12px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
      }
    }

    &__counters {
      position: absolute;
      bottom: 10px;
      right: 10px;
      border-radius: 12px;
      border: 0px solid #e1e1e1;
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      backdrop-filter: blur(2px);
      color: #fff;
      // @include adaptiv-padding(7, 3.5, 15, 8.5, 1);
      padding: 4px 10px;
      @include adaptiv-value(column-gap, 16, 8, 1);
      display: flex;
    }

    &__counter {
      display: flex;
      align-items: center;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;

        &:hover {
          color: $colorBlue;
        }
      }
    }

    &__counter-icon {
      margin-right: 9px;
      @include adaptiv-font(18, 15);
    }

    &__counter-value {
      font-size: 12px;
      line-height: 18px;
    }

    &__menu-button {
      z-index: -1;
      opacity: 0;
      position: absolute;
      padding: 0 10px;
      top: 10px;
      right: 8px;
      display: flex;
      flex-direction: column;
      row-gap: 3.5px;
      transition: all 0.3s ease 0s;

      &.ant-dropdown-open {
        z-index: 0;
        opacity: 1;
      }

      span {
        width: 3px;
        height: 3px;
        background-color: #fff;
      }
    }

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;

      &:hover {
        & .post__menu-button {
          z-index: 0;
          opacity: 1;
        }
      }
    }

    @media only screen and (hover: none) {
      &__menu-button {
        opacity: 1;
        z-index: 0;
      }
    }
  }
}
</style>