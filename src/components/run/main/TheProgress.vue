  <template>
  <div class="progress">
    <h3 class="progress__title">Request received</h3>

    <p class="progress__desc">
      The image is in low-priority queue. It may take longer to generate it. urn
      on High Priority to generate images faster.
    </p>

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

    <p class="progress__tip">Tip: While in progress rate somebody’s work</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 420px;

  &__title {
    @include adaptiv-value(margin-bottom, 30, 15, 1);
  }

  &__title,
  &__desc {
    @include adaptiv-font(16, 14);
    @include adaptiv-line-height(24, 18);
    color: #262626;
  }

  &__desc {
    @include adaptiv-value(margin-bottom, 45, 25, 1);
  }
  &__circle {
    @include adaptiv-value(margin-bottom, 22, 11, 1);
  }
  &__line {
    width: 100%;
    max-width: 360px;
  }
  &__cancel {
    color: rgba(0, 0, 0, 0.85);
    @include adaptiv-font(14, 12);
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
}
</style>