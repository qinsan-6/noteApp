<template>
    <div class="container">
        <input type="text" placeholder="账户名" class="input" v-model="loginfrom.username"

        >
        <input type="password" placeholder="密码" class="input" v-model="loginfrom.password">
        <div class="radio">
            <div class="myradio">
                <input type="checkbox" v-model="loginfrom.freelogin">
                30天免登录
            </div>
            
            <span>忘记密码?</span>
        </div>
        <el-button class="login" type="primary" size="small" @click="tologin">登录</el-button>
        <el-button class="register"  size="small">使用其他登录</el-button>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {userlogin} from '../../../axios/user'
import {UserStore} from '../../../store'
import {router}from '../../../route'
import {useRouter}from 'vue-router'

const userouter = useRouter()
// 验证是否通过检测数据
const isLoginOk = {
    username:true,
    password:true,
} 
const uerstore = UserStore();
// 登录数据
const loginfrom:LoginData =reactive<LoginData>({
    username:'',
    password:'',
    freelogin:false,
})
const tologin=()=>{
    // 判断是否输入用户名
    if(loginfrom.username === '') 
        return console.log("请输入账户名")
    if(loginfrom.password === '')
        return console.log("请输入密码")
    // 判断是否通过检测
    if(isLoginOk.username && loginfrom.password){
        
        userlogin(loginfrom).then(
            (req)=>{
                // 判断是否登录成功
                if(req.data.status ===200){
                    // 登录成功
                    const {token} = req.data
                    uerstore.setUser(loginfrom.username,token)
                    router.push('/index')
                    alert('登录成功')
                }
                else{
                    //网络正常,但是服务器返回不是理想值
                    alert('登录失败')
                }
            }
        )
        return true
    }
    console.log("请输入正确的账号和密码")
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    text-align: center;
    flex-direction: column;
    width:100%;
    height: 142px;
    margin: 2px;
    margin-left: 15%;
}
.name{
    display: flex;
    flex-direction: row;
}
.input{
    width: 60%;
    border-style:none none solid  none;
    margin-bottom: 10px;
    padding: 2%;
    height: 5px;
    font-size: 8px;
}
.radio{
    position: relative;
    width: 60%;
    height: 15px;
    .myradio{
        position: absolute;
        left: 0;
        font-size: 8px;
        input{
            height: 8px;
        }
    }
    span{
        font-size: 8px;
        position: absolute;
        right: 0;
    }
}
.login{
    font-size: 8px;
    height: 10%;
    width: 65%;
}
.register{
    margin-top:5px;
    font-size: 8px;
    height: 10%;
    width: 65%;
    margin-left: 0;
}
</style>