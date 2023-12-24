<template>
  <article class="feed__post post">
    <div class="post__info">
      <span class="post__avatar">
        <img :src="data.owner.avatar" alt="" />
      </span>
      <span class="post__username">{{ data.owner.name }}</span>
    </div>

    <div class="post__img">
      <a-dropdown :trigger="['click']" placement="bottomRight" class="post__menu">
        <a class="post__menu-button" @click.prevent>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-data key="0">
              <a :href="data.images[0].file" download class="ant-dropdown-link">Download</a>
            </a-menu-data>
            <a-menu-data key="1">
              <a href="#">Report</a>
            </a-menu-data>
          </a-menu>
        </template>
      </a-dropdown>

      <img :src="data.images[0].file" alt="" @click="preview" v-if="data.images.length == 1" />

      <swiper :modules="[EffectFade, Autoplay]" :effect="'fade'" :autoplay="{
        delay: 1000,
        disableOnInteraction: false,
      }" :disableOnInteraction="false" class="card__slider" @swiper="onSwiper" v-else>
        <!-- <swiper-slide v-for="img in data.images" :key="img">
                    <img :src="img.file" alt="" class="card__slider-img" /></swiper-slide> -->
      </swiper>

      <div class="post__counters">
        <span class="post__likes post__counter">
          <LikeOutlined class="post__counter-icon" />
          <span class="post__counter-value">{{ data.likes ? data.likes : 0 }}</span>
        </span>
        <span class="post__comments post__counter">
          <MessageOutlined class="post__counter-icon" />
          <span class="post__counter-value">{{ data.comments ? data.comments : 0 }}</span>
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from "vue"
import { LikeOutlined, MessageOutlined } from "@ant-design/icons-vue";

defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
</script>