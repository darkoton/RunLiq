<template>
  <button class="button" :class="[type]">
    <component :is="icon" class="icon"></component><slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  type: {
    type: String,
    default: "default",
  },
  icon: {
    default: "",
  },
});
</script>

<style scoped lang="scss">
.button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media (any-hover: hover) {
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      color: #4096ff;
      border-color: #4096ff;
    }
  }

  .icon {
    margin-right: 5px;
  }

  &.primary {
    background: #4096ff;
    border-width: 0;
    color: #ffff;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background-color: rgba(66, 151, 255, 0.8);
      }
    }
  }

  &.dashed {
    border: 1px dashed #ccc;

    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        border-color: rgba(66, 151, 255, 0.8);
      }
    }
  }
}
</style>