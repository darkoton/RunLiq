<template>
  <a-dropdown class="header__dropdown" v-model:visible="userMenu">
    <a class="header__user ant-dropdown-link" @click.prevent
      ><UserOutlined />
      <span class="header__username">Aleksandr Schastlivyi</span>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="profile" @click="router.push('/profile')">
          <span>Your Profile</span>
        </a-menu-item>
        <a-menu-item key="adult">
          <span>Adult (18+)</span>
          <a-switch
            class="header__menu-user-switch"
            v-model:checked="userSettings.active18"
            size="small"
          />
        </a-menu-item>
        <a-menu-item key="credits" @click="router.push('/liq-credits')">
          <span class="red">Liq Credits</span>
        </a-menu-item>
        <a-menu-item key="likes" @click="router.push('/likes')">
          <span>Your Likes</span>
        </a-menu-item>
        <a-menu-item key="make" @click="router.push('/post-create')">
          <span>Create Post</span>
        </a-menu-item>
        <a-menu-item key="adult">
          <span>Darkmode</span>
          <a-switch
            class="header__menu-user-switch"
            v-model:checked="isDark"
            size="small"
          />
        </a-menu-item>
        <a-menu-item key="make" @click="$emit('logOut')">
          <span>Log Out</span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { UserOutlined } from "@ant-design/icons-vue";
import { useDark } from "@vueuse/core";

const isDark = useDark();

defineEmits(["logOut"]);
const userMenu = ref(false);

const router = useRouter();

const userSettings = ref({
  active18: false,
});
</script>

<style lang='scss' scoped>
.header {
  &__user {
    display: flex;
    align-items: center;
    @include adaptiv-value(column-gap, 10, 5, 1);
    background: transparent;
    color: var(--black);
    padding: 12px 0;
    border-bottom: 2px solid transparent;
    @media (any-hover: hover) {
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        color: #1890ff;
        border-color: #1890ff;
      }
    }

    &.ant-dropdown-open {
      color: #1890ff;
      border-color: #1890ff;
    }
  }
  &__menu-user-switch {
    @include adaptiv-value(margin-left, 15, 10, 1);
  }

  @media (max-width: 400px) {
    &__username {
      display: none;
    }
    &__user {
      font-size: 20px;
    }
  }
}
</style>