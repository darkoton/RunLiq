<template>
  <div class="create__form form">
    <a-form ref="formRef" :rules="rules" :model="data" name="basic" :label-col="{ span: 4 }" @finish="onFinish"
      @finishFailed="onFinishFailed" class="form__body">
      <a-form-item label="Title" has-feedback name="title" class="form__item">
        <a-input v-model:value="data.title" placeholder="Naruto Attack" />
      </a-form-item>

      <a-form-item label="Description" name="description" class="form__item">
        <a-textarea v-model:value="data.description"
          placeholder="A design system for enterprise-level products. Create an efficient and enjoyable work experience."
          show-count :maxlength="1000" :rows="4" />
      </a-form-item>

      <a-form-item label="Tags" name="tags" class="form__item">
        <a-select v-model:value="data.tags" :options="tags" mode="multiple" placeholder="Please select"
          @popupScroll="popupScroll"></a-select>
      </a-form-item>

      <a-form-item label="Adult(18+):" name="is_adult" class="form__item">
        <a-switch v-model:checked="data.is_adult" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 0, span: 20 }" class="form__item form__item-buttons">
        <div class="form__buttons">
          <a-button type="primary" html-type="submit" class="form__button">Create Post</a-button>
          <a-button type="dashed" @click="resetForm" class="form__button">Clear</a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "@/plugins/axios"
import { useAlert } from "@/stores/alert";
import { usePostCreateStore } from "@/stores/create-post"
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';

const alertStore = useAlert()
const postCreateStore = usePostCreateStore()

interface FormState {
  title: string,
  description: string,
  tags: Array<string>,
  is_adult: boolean,
  images: Array<string | number>,
}

const tags = ref()

const formRef = ref<FormInstance>();
const data = ref<FormState>({
  title: "",
  description: "",
  tags: [],
  is_adult: false,
  images: []
});

const rules: Record<string, Rule[]> = {
  title: [{ required: true, trigger: 'change', validator: validateTitle }],
};

function validateTitle(_rule: Rule, value: string) {

  if (value === '') {
    return Promise.reject('Please enter a title');
  } else if (value.length < 5) {
    return Promise.reject('Minimum title length 5');
  } else {
    if (data.value.checkTitle !== '') {
      formRef.value.validateFields('checkTitle');
    }
    return Promise.resolve();
  }
}

const onFinish = async () => {
  try {
    data.value.images = postCreateStore.selectValue.map(el => el.id)

    if (!data.value.images.length) {
      postCreateStore.selectError = true;
      return
    }
    postCreateStore.selectError = false;
    await axios.post("posts", data.value,
      {
        headers: {
          Authorization: "Bearer " + localStorage.authToken
        }
      })
    alertStore.setAlert("success", "Post created!")
    resetForm()
  } catch {
    alertStore.setAlert("error", "Oops, something went wrong!")

  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const resetForm = () => {
  formRef.value.resetFields();
  postCreateStore.selectValue = []
};

const popupScroll = () => {
  // console.log("popupScroll");
};


onMounted(async () => {
  tags.value = (await axios.get("tags?limit=8&offset=0")).data.data.map((el: any) => {
    el.value = el.slug;
    el.label = el.name
    return el
  })
})
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