<template>
  <section class="feed">
    <div class="feed__wrapper">
      <div class="feed__body">
        <ThePreview
          :urlImg="previewData.url"
          :open="previewData.open"
          @close="previewData.open = false"
          :img="previewData.img"
        />

        <h2 class="feed__title">
          {{ title }} <span>{{ subtitle }}</span>
        </h2>

        <ul class="feed__list">
          <TheCard
            v-for="art in data"
            :key="art"
            :data="art"
            :type="type"
            @preview="
              (img) => (
                (previewData.url = img.src),
                (previewData.img = img),
                (previewData.open = true)
              )
            "
          />
        </ul>

        <a-button type="dashed" class="feed__button">Load more</a-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import TheCard from "@/components/ui/TheCard.vue";
import ThePreview from "@/components/ui/ThePreview.vue";

defineProps({
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
  load: {
    type: Boolean,
    default: false,
  },
});

const previewData = ref({
  url: "",
  open: false,
  img: null,
});
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    grid-template-rows: repeat(auto-fit, minmax(250px, 300px));
    justify-content: center;
    @include adaptiv-value(gap, 25, 20, 1);
    max-height: 630px;
    overflow: auto;
    @include scrollbars(12px, #bfbfbf, var(--ant-border), 10px);

    &::-webkit-scrollbar-thumb {
      border: 3px solid var(--ant-border);
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
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
}
</style>