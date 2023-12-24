<template>
  <section class="profile">
    <div class="profile__wrapper">
      <div class="profile__container _container">
        <div class="profile__body">
          <Side />
          <div class="profile__feeds" v-if="userStore.user">
            <a-menu v-model:selectedKeys="current" mode="horizontal">
              <a-menu-item v-for="item in menu" :key="item.title" @click="item.event()">
                <template #icon>
                  <component :is="item.icon"></component>
                </template>
                <span>
                  {{ item.title }}
                </span>
              </a-menu-item>
            </a-menu>

            <Feed :type="'rating'" :fn-data="getPosts" v-if="select == 'posts'" :sizes="{ width: 215, height: 250 }"
              :menu="true" class="profile__feed" :routerLink="true" />

            <Feed :type="'rating'" :fn-data="getImages" v-else-if="select == 'history'"
              :sizes="{ width: 215, height: 250 }" :menu="true" class="profile__feed" />
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
import axios from "@/plugins/axios"
import { useUser } from "@/stores/user";

const userStore = useUser()

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

async function getPosts(offset = 0) {
  const res = await axios.getUserPosts(offset, userStore.user)

  return res.data.data
}

async function getImages(offset = 0) {

  const res = await axios.getUserImages(offset)

  return res.data.images
}

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