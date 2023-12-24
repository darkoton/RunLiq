<template>
  <section class='login'>
    <div class='login__wrapper'>
      <div class='login__container _container'>
        <div class='login__body'>
          <h3 class="login__title">Login</h3>

          <span class="login__error" v-if="error.state">{{ error.message }}</span>

          <a-form class="login__form" ref="formRef" name="custom-validation" :model="formState" :rules="rules"
            v-bind="layout" @finish="handleFinish" @validate="handleValidate" @finishFailed="handleFinishFailed">
            <a-form-item has-feedback label="Email" name="email">
              <a-input v-model:value="formState.email" autocomplete="off" />
            </a-form-item>
            <a-form-item has-feedback label="Password" name="password">
              <a-input v-model:value="formState.password" type="password" autocomplete="off" />
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
              <a-button type="primary" html-type="submit">Login</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Rule } from 'ant-design-vue/es/form';
import { reactive, ref, onMounted } from 'vue';
import type { FormInstance } from 'ant-design-vue';
import axios from "@/plugins/axios"
import { useUser } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUser()
const router = useRouter()

interface FormState {
  email: string;
  password: string;
}

const error = ref({
  state: false,
  message: ""
})

const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  email: '',
  password: '',
});

let validatePass = async (_rule: Rule, value: string) => {

  if (value === '') {
    return Promise.reject('Please enter a password');
  } else if (value.length < 8) {
    return Promise.reject('Minimum password length 8');
  } else {

    if (formState.checkPass !== '') {
      formRef.value.validateFields('checkPass');
    }
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  email: [{ type: 'email', required: true, trigger: 'change', message: "Please enter an email" }],
  password: [{ required: true, validator: validatePass, trigger: 'change' }],
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
const handleFinish = async (values: FormState) => {
  try {

    const { token } = (await axios.post("login", values)).data
    error.value.state = false
    localStorage.setItem("authToken", token);

    const { data: user } = await axios.get("user/info", {
      headers: {
        Authorization: "Bearer " + token
      }
    })

    userStore.user = user
    router.push('/')
  } catch (e) {
    error.value.state = true
    error.value.message = "User does not exist"
  }

};
const handleFinishFailed = () => {
  // console.log(errors);

};

const handleValidate = () => {
  // console.log(args);
};

onMounted(() => {
  if (userStore.user) {
    router.push('/')
  }
})
</script>

<style lang='scss' scoped>
.login {

  &__wrapper,
  &__container {
    display: flex;
    width: 100%;
  }

  &__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include adaptiv-padding(40, 20, 0, 0, 1);
  }

  &__title {
    @include adaptiv-font(24, 20);
    color: var(--black);
    margin-bottom: 30px;
  }

  &__error {
    @include adaptiv-value(margin-bottom, 15, 7.5, 1);
    color: $colorRed;
    @include adaptiv-font(20, 16);
  }

  &__form {
    width: 100%;
    max-width: 500px;
  }
}
</style>