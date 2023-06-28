// login路由守卫
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import {UserStore} from '../../store'
import {tokenlogin}from '../../axios/user'
export function loginguard(to:RouteLocationNormalized,from:RouteLocationNormalized,next:NavigationGuardNext):void{
    // 判断是否拥有免登录
    const userStore = UserStore();
    if(userStore.token){
        // 存在token,判断是否在有效期
        tokenlogin().then((res) => {
            if (res.data.status === 200) {
                alert("您已登录，点击跳转")
                return next({
                    replace: true,
                    name: 'index',
                })
            }
             // 放行
            next();
        },
        (err)=>{
            next()
        }
        )
    }else
    next()
}