<template>
  <div class="wrapper">
    <div class="content">
      <the-header></the-header>
      <router-view class="page" />
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { useDark } from "@vueuse/core";
import { useUser } from "./stores/user";
import axios from "@/plugins/axios"

const userStore = useUser()

useDark();

onMounted(async () => {
  if (localStorage.authToken) {
    const { data: user } = await axios.get("userinfo", {
      headers: {
        Authorization: "Bearer " + localStorage.authToken
      }
    })

    userStore.user = user
  }
})
</script>