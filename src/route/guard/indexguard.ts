import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import {tokenlogin}from '../../axios/user'
import {UserStore} from '../../store'
export function indexguard(to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext):void{
    // 进入index页面前先检查是否登录
    
    const userStore = UserStore();
    if(userStore.token){
        // 存在token,判断是否在有效期
        tokenlogin().then((res) => {
            if (res.data.status === 200) {
                return next({
                    replace: true,
                    name: 'index',
                })
            }
             // 放行
            // next();
        },
        (err)=>{
            // next()
        }
        )
    }else
    next()
}