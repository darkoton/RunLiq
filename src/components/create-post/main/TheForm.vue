<template>
  <div class="create__form form">
    <a-form
      :model="data"
      name="basic"
      :label-col="{ span: 4 }"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="form__body"
      ref="formRef"
    >
      <a-form-item
        label="Title"
        name="title"
        :rules="[{ required: true, message: 'Please input your title!' }]"
        class="form__item"
      >
        <a-input v-model:value="data.title" placeholder="Naruto Attack" />
      </a-form-item>

      <a-form-item label="Description" name="description" class="form__item">
        <a-textarea
          v-model:value="data.description"
          placeholder="A design system for enterprise-level products. Create an efficient and enjoyable work experience."
          show-count
          :maxlength="1000"
          :rows="4"
        />
      </a-form-item>

      <a-form-item label="Tags" name="tags" class="form__item">
        <a-select
          v-model:value="tags"
          :options="options"
          mode="multiple"
          placeholder="Please select"
          @popupScroll="popupScroll"
        ></a-select>
      </a-form-item>

      <a-form-item label="Adult(18+):" name="18" class="form__item">
        <a-switch v-model:checked="data.adult18" />
      </a-form-item>

      <a-form-item
        :wrapper-col="{ offset: 0, span: 20 }"
        class="form__item form__item-buttons"
      >
        <div class="form__buttons">
          <a-button type="primary" html-type="submit" class="form__button"
            >Create Post</a-button
          >
          <a-button type="dashed" @click="resetForm" class="form__button"
            >Clear</a-button
          >
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const data = ref({
  title: "",
  description: "",
  tags: [],
  adult18: false,
});
const tags = ref([]);
const formRef = ref();

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const resetForm = () => {
  formRef.value.resetFields();
};

const popupScroll = () => {
  // console.log("popupScroll");
};
const options = [
  {
    value: "test",
  },
  {
    value: "magic",
  },
  {
    value: "fantasy",
  },
  {
    value: "woman",
  },
];
</script>

<style lang='scss' scoped>
.form {
  width: 100%;
  max-width: 530px;
  &__item {
    justify-content: flex-end;
    // max-width: 445px;
  }
  &__item-buttons {
    @include adaptiv-value(margin-top, 100, 40, 1);
  }
  &__buttons {
    display: flex;
    @include adaptiv-value(column-gap, 15, 10, 1);
  }
  &__button {
    border-radius: 5px;
  }
}
</style>