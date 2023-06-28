import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import {tokenlogin}from '../../axios/user'
import {UserStore} from '../../store'
export function diaryguard(to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext):void{
    // 进入diary页面前先检查是否登录
    next()
}