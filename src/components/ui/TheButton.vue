<template>
  <button
    class="button"
    :class="[type, { clickActive }]"
    :style="{ 'border-color': borderColor }"
    @click="click"
  >
    <component :is="icon" class="icon"></component><slot></slot>
  </button>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps({
  type: {
    type: String,
    default: "default",
  },
  borderColor: {
    type: String,
    default: "#ccc",
  },
  icon: {
    default: "",
  },
});

const clickActive = ref(false);

function click() {
  clickActive.value = true;

  setTimeout(() => {
    clickActive.value = false;
  }, 250);
}
</script>

<style scoped lang="scss">
.button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: transparent;
  transition: all 0.3s ease 0s;
  @media (any-hover: hover) {
    cursor: pointer;
    &:hover {
      color: #4096ff;
      border-color: #4096ff;
    }
  }

  &.clickActive {
    box-shadow: 0 0 0 5px rgba(64, 150, 255, 0.3);
  }

  .icon {
    @include adaptiv-value(margin-right, 10, 5, 1);
  }

  &.primary {
    background: #4096ff;
    border-width: 0;
    color: #ffff;
    @media (any-hover: hover) {
      cursor: pointer;
      &:hover {
        background-color: rgba(66, 151, 255, 0.8);
      }
    }
  }

  &.dashed {
    border-width: 1px;
    border-style: dashed;
    border-color: #ccc;
    @media (any-hover: hover) {
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>