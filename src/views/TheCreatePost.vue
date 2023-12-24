<template>
  <section class="create">
    <div class="create__wrapper">
      <div class="create__container _container">
        <div class="create__body">
          <h2 class="create__title">Post Create</h2>
          <TheMain />

          <TheFeeds :title="'Art history'" type="select" :sizes="{ width: 250, height: 250 }" :fn-data="getImgs"
            :scroll="true" class="create__feed" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

import TheMain from "@/components/create-post/TheMain.vue";
import TheFeeds from "@/components/feeds/TheFeeds.vue";
import { usePostCreateStore } from "@/stores/create-post";
import axios from "@/plugins/axios";

const store = usePostCreateStore();

async function getImgs(offset = 0) {

  const res = await axios.get(`user/images?limit=25&offset=${offset}`, {
    headers: {
      Authorization: "Bearer " + localStorage.authToken
    }
  })

  return res.data.images
}


onMounted(() => {
  store.selectValue = []
})
</script>

<style lang='scss' scoped>
.create {
  &__title {
    text-align: center;
    color: $colorBlue;
    font-family: $fontMcLaren;
    @include adaptiv-font(28, 22);
    line-height: normal;
    @include adaptiv-value(margin-bottom, 63, 32, 1);
  }

  &__main {
    display: flex;
    justify-content: space-between;
    @include adaptiv-value(column-gap, 20, 10, 1);
  }

  &__feed {
    margin-top: 50px;
  }

  @media (max-width: 992px) {
    &__main {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>