<template>
  <section class="info">
    <div class="info__wrapper">
      <div class="info__body">
        <div class="info__message message">
          <div class="message__user">
            <img
              :src="data.user.avatar"
              alt="avatar"
              class="message__user-avatar"
            />
            <div class="message__user-info">
              <span class="message__user-name">{{ data.user.name }}</span>
              <div class="message__user-date">Uploaded 7 months ago</div>
            </div>

            <div class="message__options">
              <span></span><span></span><span></span>
            </div>
          </div>

          <p class="message__text">
            {{ data.description }}
          </p>
        </div>

        <ul class="info__comments">
          <Comment
            :comment="comment"
            v-for="comment in data.comments"
            :key="comment"
          />
        </ul>

        <div class="info__form">
          <a-textarea
            placeholder="Autosize height based on content lines"
            :rows="2"
            class="info__form-input"
          />

          <a-button type="primary" ghost class="info__form-button"
            >Comment</a-button
          >

          <a-tabs v-model:activeKey="activeKey" class="info__form-tabs">
            <CopyOutlined class="info__form-copy" />

            <a-tab-pane key="1" tab="Prompt">
              <a-textarea
                placeholder="photorealistic, a beautiful girl, closed eyes, portrait, (((splash of paint))), (((colorful))), ((floating colorful paint)), goddess of death, Japanese mythology, (featuring mythical creatures), chubby girl, solar system, milky way,"
                :rows="4"
                class="info__form-input"
              />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Negative">
              <a-textarea
                placeholder="photorealistic, a beautiful girl, closed eyes, portrait, (((splash of paint))), (((colorful))), ((floating colorful paint)), goddess of death, Japanese mythology, (featuring mythical creatures), chubby girl, solar system, milky way,"
                :rows="4"
                class="info__form-input"
              />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Lora">
              <a-textarea
                placeholder="photorealistic, a beautiful girl, closed eyes, portrait, (((splash of paint))), (((colorful))), ((floating colorful paint)), goddess of death, Japanese mythology, (featuring mythical creatures), chubby girl, solar system, milky way,"
                :rows="4"
                class="info__form-input"
              />
            </a-tab-pane>
          </a-tabs>
          <a-form>
            <a-form-item :name="'model'" :label="'Model'">
              <a-input placeholder="Yamer's Realism V3"></a-input>
            </a-form-item>
            <a-row justify="space-between">
              <a-col>
                <a-form-item :name="'scale'" :label="'Scale'">
                  <a-input-number
                    placeholder="20"
                    class="info__form-input-number"
                  ></a-input-number>
                </a-form-item>
                <a-form-item :name="'sampler'" :label="'Sampler'">
                  <a-input
                    placeholder="DKM Karras 2M "
                    class="info__form-input-number"
                  ></a-input>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item :name="'steps'" :label="'Steps'">
                  <a-input-number
                    placeholder="20"
                    class="info__form-input-number"
                  ></a-input-number>
                </a-form-item>
                <a-form-item :name="'seed'" :label="'Seed'">
                  <a-input
                    placeholder="510735873"
                    class="info__form-input-number"
                  ></a-input>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref } from "vue";
import Comment from "@/components/post/TheComment.vue";
import { CopyOutlined } from "@ant-design/icons-vue";

defineProps(["data"]);

const activeKey = ref("1");
</script>

<style lang='scss' scoped>
.info {
  &__body {
  }

  & .message {
    display: flex;
    flex-direction: column;

    &__user {
      display: flex;
      @include adaptiv-value(column-gap, 15, 10, 1);
      @include adaptiv-value(margin-bottom, 17, 15, 1);
      position: relative;
      &-avatar {
        width: 44px;
        height: 44px;
        object-fit: cover;
      }
      &-info {
        display: flex;
        flex-direction: column;
        // row-gap: 0px;
      }
      &-name {
        color: var(--follBlack);
        @include adaptiv-font(14, 12);
        @include adaptiv-line-height(22, 18);
      }
      &-date {
        color: var(--darkGray);
        @include adaptiv-font(12, 10);
        @include adaptiv-line-height(20, 18);
      }
    }
    &__options {
      position: absolute;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      row-gap: 3px;
      right: 0;
      top: 0;
      cursor: pointer;

      span {
        width: 3px;
        height: 3px;
        background-color: #bfbfbf;
      }
    }
    &-text {
      @include adaptiv-font(14, 12);
      @include adaptiv-line-height(22, 18);
    }
  }
  &__comments {
    @include adaptiv-value(margin-top, 50, 25, 1);
    @include adaptiv-value(margin-bottom, 50, 25, 1);
    height: 100%;
    max-height: 345px;
    overflow: auto;
    @include scrollbars(12px, #bfbfbf, var(--ant-border), 10px);

    &::-webkit-scrollbar-thumb {
      border: 3px solid var(--ant-border);
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
  &__form {
    &-input,
    &-button {
      margin-bottom: 10px;
    }

    &-input-number {
      width: 100%;
    }
    &-tabs {
      position: relative;
    }
    &-copy {
      position: absolute;
      top: 12px;
      right: 0;
      color: var(--darkGray);
      font-size: 18px;

      @media (any-hover: hover) {
        cursor: pointer;
        transition: all 0.3s ease 0s;
        &:hover {
          color: $colorBlue;
        }
      }
    }
  }
}
</style>