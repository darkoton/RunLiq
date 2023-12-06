import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router
import store from './store/store' // vuex
// import axios from './plugins/axios' //axios
// import i18n from "@/locales/i18n-config"; //i18n localization
import Ant from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import "@/assets/style/main.scss"
import MySpoiler from "@/components/ui/spoiler.vue";

const app = createApp(App);
app.component('MySpoiler', MySpoiler)


app.use(Ant);
app.use(router); // router
app.use(store); // vuex
// app.use(axios) //axios
// app.use(i18n); //i18n localization


app.mount('#app')
