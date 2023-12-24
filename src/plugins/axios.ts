import axios from "@/axios/base"

export default {
    get: async (path: string, config: any = {}) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return await axios.get(process.env.VUE_APP_BACKEND_URL +`${path}`, config)
    },

    post: async (path: string, data: any, config: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return await axios.post(process.env.VUE_APP_BACKEND_URL + `${path}`, data, config)
    },

    put: async (path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return await axios.put(`${path}`, data)
    },

    delete: async (path: string, data: any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return await axios.delete(`${path}`, data)
    },
}