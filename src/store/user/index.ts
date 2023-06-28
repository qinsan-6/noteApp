import { defineStore } from 'pinia'

export const UserStore =defineStore('user',{
    // 开启数据持久化
    persist:true,
    state:()=> {
        return {
            username:'',
            token:''
        }
    },
    actions:{
        setUser(username:string,token:string){
            this.username = username;
            this.token = token;
        }
    }
})

 