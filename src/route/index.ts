import {createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'

import {loginguard,indexguard,diaryguard} from './guard'
// 本地路由
const contantroutes:Array<RouteRecordRaw> =[
    {
        path: '/', 
        name: 'root', 
        redirect:'/login',
        children:[
            {
                path: '/index',
                name: 'index',
                component:()=> import('../view/index/indexview.vue'),
                // beforeEnter: indexguard
            },
            {
                path: '/login',
                name: 'login',
                component:()=> import('../view/login/longview.vue'),
                beforeEnter:loginguard
            },
            {
                path: '/diary',
                name: 'diary',
                component:()=> import('../view/diary/diaryview.vue'),
                beforeEnter:diaryguard
            },
            {  
                path: '/linjinshijie',
                name: 'linjinshijie',
                component:()=> import('../view/linjinshijie/index.vue'),
            }
        ]
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes:contantroutes
})


