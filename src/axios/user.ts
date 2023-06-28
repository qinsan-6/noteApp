import {axiosinstance} from './index'


export async function  userlogin(logindata: LoginData){
    return await axiosinstance.post('/api/login',{
        ...logindata
    })
}

export async function  tokenlogin(){
    return await axiosinstance.post('/api/tokenlogin',{
     
    })
}

export async function  userregister(registerdata: RegisterData){
    return await axiosinstance.post('/api/register',{
        ...registerdata  
    })
}

export async function  getnote(name: string){
    return await axiosinstance.get('/api/data/note',{
          params:{
            notename:name
          }
    })
}