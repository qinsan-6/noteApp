import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useContantStore = defineStore('contant', {
    state:()=> {
        return {
            index:'1'
        }
    },
    getters:{
        getIndex:(state):string=>state.index
    },
    actions:{
        setIndex(index:string):boolean{
            this.index = index;
            return true;
        }
    },

})
