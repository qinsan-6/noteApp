import { createApp } from 'vue'
import App from './App.vue'
import pinia  from './pinia'

import {router} from './route'

import { createSW } from './packges'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app=createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(pinia)
app.use(createSW())
app.use(ElementPlus)

console.log(app)
app.mount('#app')


// import {test}from './until/vertify'

// let proxy = test()
// console .log(proxy.data)
// proxy.data="012345678"
// proxy.data="01234567"
// proxy.data="0123456"
// proxy.data="0123456789"