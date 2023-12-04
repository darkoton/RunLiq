  <template>
  <div class="progress">
    <h3 class="progress__title">Processing your creation...</h3>

    <p class="progress__desc">You’re queue number is 10</p>

    <a-progress
      class="progress__circle"
      stroke-linecap="square"
      :percent="75"
      type="circle"
    />
    <a-progress
      class="progress__line"
      stroke-linecap="square"
      :percent="75"
      :show-info="false"
    />

    <a-button class="progress__cancel" type="dashed">Cancel</a-button>

    <p class="progress__tip">Tip: Rate somebody’s work</p>

    <div class="progress__recommends">
      <div class="progress__recommend" v-for="item in likes" :key="item">
        <img :src="item" alt="" />
        <LikeOutlined class="progress__recommend-like" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LikeOutlined } from "@ant-design/icons-vue";

const likes = ref<Array<any>>([
  "./test arts/fire.png",
  "./test arts/rage.png",
  "./test arts/saitama.jpg",
]);
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 420px;

  &__title,
  &__desc {
    color: var(--run-black);
  }

  &__title {
    @include adaptiv-value(margin-bottom, 30, 15, 1);
    @include adaptiv-font(16, 14);
    @include adaptiv-line-height(24, 18);
  }

  &__desc {
    @include adaptiv-value(margin-bottom, 45, 25, 1);
    @include adaptiv-font(14, 12);
    @include adaptiv-line-height(22, 16);
  }
  &__circle {
    @include adaptiv-value(margin-bottom, 22, 11, 1);
  }
  &__line {
    width: 100%;
    max-width: 360px;
  }
  &__cancel {
    color: var(--black);
    @include adaptiv-font(14, 12);
    background-color: transparent;
    @include adaptiv-line-height(22, 18);
    border-radius: 2px;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
    padding: 4px 15px;
    @include adaptiv-value(margin-bottom, 20, 10, 1);
  }
  &__tip {
    color: #595959;
    @include adaptiv-font(14, 12);
    @include adaptiv-line-height(22, 18);
  }
  &__recommends {
    display: flex;
    column-gap: 10px;
  }

  &__recommend {
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
      width: 100%;
      max-width: 170px;
      height: 100%;
      max-height: 220px;
      border-radius: 12px;
      margin-bottom: 8px;
      object-fit: cover;
    }

    &-like {
      color: $colorBlue;
      font-size: 23px;
      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          transform: translateY(-2px);
        }
      }

      &:active {
        color: rgb(16, 197, 16);
      }
    }
  }
}
</style>