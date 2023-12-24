<template>
  <div class="alerts">
    <a-alert :message="alert.message" :type="alert.type" class="alert" :class="{ active: alert.active }"
      v-for="(alert, index) in alertStore.activeAlerts" :key="index" :style="{
        transform: `translateY(calc(${(alertStore.activeAlerts.length - index - 1) * 100}% + ${(alertStore.activeAlerts.length - index - 1) * 15}px))`
      }">
      <template #action>
        <CloseOutlined class="alert__close"
          @click="alertStore.activeAlerts[index].active = false; alertStore.closeAlert()" />
      </template>
    </a-alert>
  </div>
</template>

<script setup>
import { useAlert } from "@/stores/alert";
import { CloseOutlined } from '@ant-design/icons-vue';

const alertStore = useAlert()
</script>

<style lang='scss' scoped>
.alerts {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  width: 100%;
  @include adaptiv-value(right, 27, 10, 1);
  @include adaptiv-value(top, 80, 60, 1);
}

.alert {
  position: absolute;
  transition: transform 0.3s ease 0s;

  &.active {
    animation: fadein 0.5s ease 1 normal running 0s both;

  }

  &__close {
    margin-left: 10px;
    cursor: pointer;
  }
}

@keyframes fadein {
  from {
    right: -100%;
  }

  to {
    right: 0;
  }
}
</style>