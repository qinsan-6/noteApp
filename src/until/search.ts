//搜索相关的工具函数

import { searchRequest } from "../axios/data";



export default function search(value:string,istest:boolean):any{
    //数据前端监测
    if(istest){
        if(!test(value)){
            return false;
        }
    }
    //发送请求
    searchRequest(value)
}
//检测数据是否合法
function test(target:string):boolean {

    return true
}