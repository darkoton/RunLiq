<template>
  <div class="preview" :class="[classEl]">
    <div class="preview__bg" @click="previewStore.open = false"></div>
    <div class="preview__actions">
      <a :href="previewStore.src" download="">
        <DownloadOutlined />
      </a>
      <button>
        <CloseOutlined @click="previewStore.open = false" />
      </button>
    </div>

    <div class="preview__img-body">
      <img :src="previewStore.src" alt="" class="previews__img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { DownloadOutlined, CloseOutlined } from "@ant-design/icons-vue";
import { useStore } from "@/stores/store";
import { usePreviewStore } from "@/stores/preview";

const store = useStore();
const previewStore = usePreviewStore();


const classEl = ref("");

watch(
  () => previewStore.open,
  (val) => {
    val ? open() : close();
  }
);

function close() {
  store.onScroll();
  classEl.value = "close";

  setTimeout(() => {
    classEl.value = "";
  }, 400);
}

function open() {
  store.offScroll();
  classEl.value = "active";
}
</script>

<style lang='scss' scoped>
.preview {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  opacity: 0;
  left: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease 0s;

  &.active {
    z-index: 50;
    opacity: 1;
  }

  &.close {
    z-index: 50;
    opacity: 0;
  }

  &__bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.83);
    transition: all 0.5s ease 0.3s;
  }

  &__img-body {
    width: 100%;
    height: 100%;
    max-width: 60vw;
    max-height: 86vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__actions {
    position: absolute;
    @include adaptiv-value(top, 30, 15, 1);
    @include adaptiv-value(right, 40, 20, 1);
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 20, 10, 1);
    @include adaptiv-font(35, 25);

    & a,
    & button {
      color: #8c8c8c;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;

        &:hover {
          color: $colorBlue;
        }
      }
    }
  }

  &.open-animation .preview__actions {
    opacity: 1;
  }
}
</style>