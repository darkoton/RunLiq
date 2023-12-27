<template>
  <section class="feed">
    <div class="feed__wrapper">
      <div class="feed__body">
        <ThePreview />

        <h2 class="feed__title">
          {{ title }} <span>{{ subtitle }}</span>
        </h2>

        <ul class="feed__list" :style="{
          'grid-template-columns': `repeat(auto-fit, minmax(${sizes.width - 50 + 'px'
            }, ${sizes.width + 'px'}))`,
          'grid-template-rows': `repeat(auto-fit, minmax(${sizes.height - 50 + 'px'
            }, ${sizes.height + 'px'}))`,
        }" :class="{ scroll: scroll }">

          <TheCard v-for="(art) in feedData" :key="art" :data="art" :type="type == 'select' ? 'default' : type"
            :sizes="sizes" @preview="preview" :link="routerLink" @click="
              type == 'select'
                ? select(art)
                : ''
              " :class="{
    select: store.selectValue.findIndex((el) => el.id == art.id) > -1,
  }" :menu="menu">
            <span class="select-order">{{
              store.selectValue.findIndex(el => el.id == art.id) + 1
            }}</span>
          </TheCard>

        </ul>


        <a-button type="dashed" class="feed__button" v-if="load">Load more</a-button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import TheCard from "@/components/ui/TheCard.vue";
import ThePreview from "@/components/ui/ThePreview.vue";
import { usePostCreateStore } from "@/stores/create-post";
import { usePreviewStore } from "@/stores/preview";

const previewStore = usePreviewStore()
const store = usePostCreateStore();
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "default",
  },
  data: {
    type: Array,
    default: () => [],
  },
  fnData: {
    type: Function,
    default: () => []
  },
  load: {
    type: Boolean,
    default: false,
  },
  sizes: {
    type: Object,
    default: () => {
      return { width: 250, height: 250 };
    },
  },
  menu: {
    type: Boolean,
    default: false,
  },
  routerLink: {
    type: Boolean,
    default: false,
  },
  scroll: {
    type: Boolean,
    default: false,
  },
});

const feedData = ref([])
let offset = 0

function preview(img) {
  if (props.type == "select") {
    return;
  }

  previewStore.src = img.src
  previewStore.open = true;
}

function select(data) {
  if (store.selectValue.findIndex((el) => el.id == data.id) > -1) {
    store.selectValue.splice(
      store.selectValue.findIndex((el) => el.id == data.id),
      1
    );
    if (store.selectError) {
      store.selectError = false
    }
    return;
  }
  store.selectValue.push(data);
}


onMounted(async () => {
  feedData.value = await props.fnData(offset)
  offset = feedData.value.length
})
</script>

<style lang="scss" scoped>
.feed {
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    color: $colorBlue;
    @include adaptiv-font(18, 15);
    @include adaptiv-line-height(28, 20);
    display: flex;
    align-items: flex-start;
    align-self: flex-start;
    @include adaptiv-value(column-gap, 10, 6, 1);
    @include adaptiv-value(margin-bottom, 6, 3, 1);

    span {
      color: #bfbfbf;
      font-size: 12px;
      @include adaptiv-font(12, 10);
      @include adaptiv-line-height(20, 16);
    }
  }

  &__list {
    width: 100%;
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    // grid-template-rows: repeat(auto-fit, minmax(250px, 300px));
    justify-content: center;
    @include adaptiv-value(gap, 15, 5, 1);
    @include scrollbars(12px, #bfbfbf, var(--ant-border), 10px);

    &::-webkit-scrollbar-thumb {
      border: 3px solid var(--ant-border);
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    &.scroll {
      max-height: 630px;
      overflow: auto;
    }
  }

  &__button {
    width: 100%;
    max-width: 323px;
    background: transparent;
    color: $colorBlue;
    border-color: $colorBlue;
    transition: all 0.3s ease 0s;

    &:active {
      color: #096dd9;
      border-color: #096dd9;
    }
  }

  & .select-order {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background: #fff;
    color: $colorBlue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 20px;
  }

  & .select .select-order {
    z-index: 9;
  }
}
</style>