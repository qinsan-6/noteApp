import {axiosinstance} from './index'

export async function  note(data:any){
    return await axiosinstance.post('/api/data/write',{
        note: data
    })
}

//保存单个日记请求
export async function saveOne(data:string){
    return await axiosinstance.post('/api/data/save',{
        note: data
    })
}

export async function searchRequest(data:string){
    return await axiosinstance.post('/api/data/searech',{
        note: data
    })
}