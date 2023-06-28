
import {axiosinstance} from './index'
export async function  getmiddleIcon(typeoficon:string){
    return await axiosinstance.get('/api/public/icons',{
        params:{
            type:typeoficon
        }
    })
}
export async function  getVideos(type:string){
    return await axiosinstance.get('/api/public/videos',{
        params:{
            type:type
        }
    })
}