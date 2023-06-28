import axios from 'axios'
import {UserStore}from '../store'
// 如果请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 5000;
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false;
// axios.defaults.headers.common['token'] =  AUTH_TOKEN
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*';


export const axiosinstance = axios.create({
})
// 通用请求拦截器
axiosinstance.interceptors.request.use((config)=>{
    const Userstore = UserStore() 
    const token = Userstore.token
    token && (config.headers!.Authorization = token)
    return config
})