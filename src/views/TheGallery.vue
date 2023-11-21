<template>
  <section class="gallery">
    <div class="gallery__wrapper">
      <div class="gallery__container _container">
        <div class="gallery__body">
          <Categories
            class="gallery__categories"
            :categories="categoriesList"
          />
          <div class="gallery__sort">
            <a-menu
              v-model:selectedKeys="current"
              mode="horizontal"
              class="gallery__sort-body"
            >
              <a-menu-item
                v-for="item in menu"
                :key="item.title.toLowerCase()"
                @click="item.to"
              >
                <template #icon>
                  <component
                    :is="item.icon"
                    :style="{ color: item.iconColor }"
                  ></component>
                </template>
                {{ item.title }}
              </a-menu-item>
            </a-menu>
          </div>

          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Categories from "@/components/gallery/TheCategories.vue";
import { AntDesignOutlined, FireOutlined } from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute();

const categoriesList = ref<Array<any>>([
  {
    id: "1",
    title: "Shuten Douji",
  },
  {
    id: "2",
    title: "Fate",
  },
  {
    id: "3",
    title: "Kagamine Rin",
  },
  {
    id: "4",
    title: "Genshin Impact",
  },
  {
    id: "5",
    title: "Animals",
  },
  {
    id: "6",
    title: "Girls",
  },
  {
    id: "7",
    title: "Erotic",
  },
  {
    id: "8",
    title: "Post Punk",
  },
]);

const menu = ref([
  {
    title: "Daily Ranking",
    icon: AntDesignOutlined,
    to: () => router.push({ path: "/gallery/daily", query: route.query }),
  },
  {
    title: "Newest",
    icon: AntDesignOutlined,
    to: () => router.push({ path: "/gallery/newest", query: route.query }),
  },
  {
    title: "Most Reactions",
    icon: FireOutlined,
    to: () => router.push({ path: "/gallery/reactions", query: route.query }),
    iconColor: "#FA541C",
  },
]);

const current = ref<string[]>([
  route.params.sort ? route.params.sort.replace(/-/g, " ") : "",
]);
</script>

<style lang="scss" scoped>
.gallery {
  &__categories {
    @include adaptiv-value(margin-top, 20, 10, 1);
  }
  &__sort {
    @include adaptiv-value(margin-bottom, 24, 15, 1);
    // width: 100%;
    // max-width: 432px;

    @media (min-width: 600px){
     display: flex;
    }
  }
}
</style>