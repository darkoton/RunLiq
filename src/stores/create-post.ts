import { defineStore } from 'pinia'

export const usePostCreateStore = defineStore('create post store', {
  state: () => {
    return {
      selectValue: [],
      selectError: false
    }
  },

  actions: {
  },
})

