import { defineStore } from 'pinia'

export const usePreview = defineStore('preview img store', {
  state: () => {
    return {
      url: "",
      img: null,
      open: false,
    }
  },

  actions: {
  },
})

