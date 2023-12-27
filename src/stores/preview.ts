import { defineStore } from 'pinia'

export const usePreviewStore = defineStore('preview img store', {
  state: () => {
    return {
      src: "",
      img: null,
      open: false,
    }
  },

  actions: {
  },
})

