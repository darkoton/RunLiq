import { defineStore } from 'pinia'


interface Alert {
  message: string;
  type: string;
  active: boolean;
}

export const useAlert = defineStore('alert', {
  state: () => {
    return {
      alerts: [] as Alert[],
    }
  },

  getters:{
    activeAlerts:(state)=>{
     return state.alerts.filter((el:any) => el.active)
    }
  },

  actions: {
    setAlert(type:string, message:string) {
      this.alerts.push({
        type,
        message,
        active: true
      })

    
      // setTimeout(() => {
      //   this.closeAlerts()
      // }, 6000);
    },

    closeAlert(){
      this.alerts.forEach((el:any, index:number)=>{
        if (!el.active) {
          this.alerts.splice(index, 1)
        }
      })
    },
    closeAlerts(){
      this.alerts = []
    }
  }
})

