<template>
  <section class="feed">
    <div class="feed__wrapper">
      <div class="feed__body">
        <TheMasonry
          :items="items"
          :columns="3"
          :columns-width="320"
          :gap="16"
          class="feed__list"
        >
          <template #default="{ item }">
            <article class="feed__post post">
              <div class="post__info">
                <div class="post__info-left">
                  <div class="post__avatar">
                    <img :src="item.user.avatar" alt="" />
                  </div>
                </div>
                <div class="post__info-right">
                  <div class="post__info-top">
                    <div class="post__username">{{ item.user.name }}</div>
                    <div class="post__date">{{ dynamicDate(item.date) }}</div>
                  </div>

                  <div class="post__info-bottom">
                    <span class="post__title">{{ item.title }}</span>
                  </div>
                </div>
              </div>

              <div class="post__img">
                <img :src="item.url" alt="" />

                <div class="post__counters">
                  <span class="post__likes post__counter"
                    ><LikeOutlined class="post__counter-icon" />
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
import TheMasonry from "@/components/ui/TheMasonry.vue";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons-vue";
const items = [
  {
    title: "test 1",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar: "/avatar.png",
    },
    date: new Date("2023-11-13"),
    url: "/test arts/dream_TradingCard (1).jpg",
  },
  {
    title: "test 2",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar: "/avatar.png",
    },
    date: new Date("2023-11-16"),
    url: "/test arts/dream_TradingCard.jpg",
  },
  {
    title: "test 3",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar: "/avatar.png",
    },
    date: new Date("2023-11-16"),
    url: "/test arts/final.jpg",
  },
  {
    title: "test 4",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar: "/avatar.png",
    },
    date: new Date("2023-11-16"),
    url: "/test arts/saitama.jpg",
  },
  {
    title: "test 5",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar: "/avatar.png",
    },
    date: new Date("2023-11-16"),
    url: "/test arts/185as7578879094j5hjsy6a674ajd897.jpg",
  },
  {
    title: "test 7",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar: "/avatar.png",
    },
    date: new Date("2023-11-16"),
    url: "/test arts/cropped-1920-1080-957926.png",
  },
  {
    title: "test 6",
    comments: 314,
    likes: 143,
    user: {
      name: "Mister German",
      avatar: "/avatar.png",
    },
    date: new Date("2023-11-16"),
    url: "/test arts/dream_TradingCard (3).jpg",
  },
];

function dynamicDate(date: any) {
  return new Date().getTime() - 86400000 * 4 > new Date(date).getTime()
    ? new Date(date).toLocaleDateString()
    : new Date().getTime() - 86400000 * 3 > new Date(date).getTime()
    ? "3 days ago"
    : new Date().getTime() - 86400000 * 2 > new Date(date).getTime()
    ? "2 days ago"
    : new Date().getTime() - 86400000 > new Date(date).getTime()
    ? "1 day ago"
    : new Date(date).getHours() +
      ":" +
      (new Date(date).getMinutes() < 10
        ? "0" + new Date(date).getMinutes()
        : new Date(date).getMinutes());
}
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
      @include adaptiv-value(column-gap, 8, 4, 1);
      @include adaptiv-value(padding-bottom, 11, 5, 1);
      align-items: center;
      max-width: 100%;

      &-right {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        width: 100%;
        max-width: 88%;
      }
      &-top {
        display: flex;
        align-items: center;
        @include adaptiv-value(column-gap, 8, 4, 1);
      }
      &-bottom {
        width: 100%;
      }
    }

    &__username {
      color: rgba(0, 0, 0, 0.45);
      @include adaptiv-font(12, 10);
      @include adaptiv-line-height(20, 16);
    }
    &__date {
      color: #bfbfbf;
      @include adaptiv-font(12, 10);
      @include adaptiv-line-height(20, 16);
    }
    &__title {
      display: block;
      color: rgba(0, 0, 0, 0.85);
      @include adaptiv-font(14, 12);
      @include adaptiv-line-height(14, 12);
      white-space: nowrap;
      // width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
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
      @include adaptiv-padding(7, 3.5, 15, 8.5, 1);
      @include adaptiv-value(column-gap, 20, 8, 1);
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
      @include adaptiv-font(14, 10);
      line-height: 18px;
    }
  }
}
</style>