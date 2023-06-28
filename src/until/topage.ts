//页面跳转函数

import { router } from "../route";

export default function topage(src:string){
    console.log(router)
    router.push(src)
}