<template>
    <div class="container">
        
        <div class="name">
            <input type="text" placeholder="姓氏" style="width:25%;margin-right: 6%;" class="input" v-model="register.surname">
            <input type="text" placeholder="名字" style="width:25%" class="input" v-model="register.appellation">
        </div>
        <input type="text" placeholder="账户名" class="input" v-model="register.username">
        <input type="text" placeholder="密码" class="input" v-model="register.password">
        <el-button class="login" type="primary" size="small" @click="toRegister">注册并登录</el-button>
    </div>
</template>

<script setup lang="ts">
import {userregister}from '../../../axios/user'
import {useRouter}from'vue-router'
let register:RegisterData={
    username: "",
    password: "",
    surname: "",
    appellation: "",
}

const toRegister=()=>{
    const router = useRouter()
    // 判断数据是否为空
    if(register.username=="" || register.password=="" || register.surname=="" || register.appellation==""){
        return 
    }
    // 不为空发送请求
    userregister(register).then(res=>{
        if(res.data.status==200){
            alert("注册成功")
            router.push('/index')
        }
        if(res.data.status==201){
            alert("账户名已存在")
        }
        else{
            alert("注册失败")
        }
    })
    
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