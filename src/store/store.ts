// import axios from '@/axios/base'; // axios
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {}
  },
  actions: {
    offScroll() {
      document.body.classList.add('_lock-scroll')
    },
    onScroll() {
      document.body.classList.remove('_lock-scroll')
    },
  },
  getters: {},
  mutations: {
    dynamicDate(date: any) {
      return new Date().getTime() - 86400000 * 4 > new Date(date).getTime()
        ? new Date(date).toLocaleDateString()
        : new Date().getTime() - 86400000 * 3 > new Date(date).getTime()
          ? "3 days ago"
          : new Date().getTime() - 86400000 * 2 > new Date(date).getTime()
            ? "2 days ago"
            : new Date().getTime() - 86400000 > new Date(date).getTime()
              ? "1 day ago"
              : new Date(date).getHours() +
              ":" +
              (new Date(date).getMinutes() < 10
                ? "0" + new Date(date).getMinutes()
                : new Date(date).getMinutes());
    }
  }
})

export default store