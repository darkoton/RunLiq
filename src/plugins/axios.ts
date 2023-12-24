import axios from "@/axios/base"

export default {
    get: async (path: string, config: any = {}) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return await axios.get(process.env.VUE_APP_BACKEND_URL +`${path}`, config)
    },

    getUserImages: async (offset:number = 0) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return await axios.get(process.env.VUE_APP_BACKEND_URL +`user/images?limit=25&offset=${offset}`, {
        headers:{
          Authorization: "Bearer " + localStorage.authToken
        }
      })
    },
    getAllPosts: async (offset:number = 0) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return await axios.get(process.env.VUE_APP_BACKEND_URL +`posts?limit=12&offset=0=${offset}`, {
        headers:{
          Authorization: "Bearer " + localStorage.authToken
        }
      })
    },
    getUserPosts: async (offset:number = 0, user:any) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      
      return await axios.get(process.env.VUE_APP_BACKEND_URL +`posts?limit=8&offset=${offset}&by_user=${user.nickname}`, {
        headers:{
          Authorization: "Bearer " + localStorage.authToken
        }
      })
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