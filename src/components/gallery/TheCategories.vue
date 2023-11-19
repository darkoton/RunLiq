<template>
  <ul class="categories" v-if="categories.length">
    <router-link
      :to="{ query: { filtred: category.title } }"
      v-for="category in categories"
      :key="category"
    >
      <a-button
        :type="route.query.filtred != category.title ? 'dashed' : 'primary'"
        class="categories__category"
        size="small"
      >
        {{ category.title }}
      </a-button>
    </router-link>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  @include adaptiv-value(gap, 15, 8, 1);
  flex-wrap: wrap;
  &__category {
    @include adaptiv-value(padding, 7, 4, 1);
    display: flex;
    align-items: center;

    &.ant-btn-dashed {
      border-color: $colorBlue;
      color: $colorBlue;
    }
  }
}
</style>
