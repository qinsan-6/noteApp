<template>
    <div class="login-container">
        <div class="content">
          <h1 class="title">高效记录生活</h1>
          <h5>轻松收集，有效整理</h5>
        </div>
        <div class="from-container">
          <buttonVue :size="size" @click="changelogin"></buttonVue>
          <transition name="animate__animated animate__bounce"
            enter-active-class="animate__flipInY"
            leave-active-class="animate__flipOutY"
          >
            <loginVue v-if="islogin" style="position: absolute;"></loginVue>
            <registerVue v-else style="position: absolute;" ></registerVue>
          </transition>
         
          <div class="xieyi">
            <el-icon size="10px" :color="isread?'black':'red'"  style="margin-top:5px" ><WarningFilled /></el-icon>
            <div>
              我们更新了<a href="#" class="user" @click="isread=true">《用户协议》</a>
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import buttonVue from './components/buttonVue.vue'
import loginVue from './components/loginVue.vue'
import registerVue from './components/registerVue.vue'
import 'animate.css'
import {ref} from 'vue'

const isread=ref(false) //是否阅读协议标志
const size={
  width:"60px",
  height:"15px",
}
let islogin = ref(true)
function changelogin(){
  islogin.value = !islogin.value
}


</script>

<style lang="scss" scoped>
.login-container{
  height: 100%;
  width: 100%;
  position: relative;
  background-color: azure;
}
.content{
  position: absolute;
  top: 5%;
  left: 5%;
  height: 90%;
  width: 90%;
  background: url(../../assets/img/loginback.jpg);
  background-size: 100% 100%;
  border-radius: 15px;
  .title{
    margin-top: 5%;
    margin-left: 2%;
    color: rgba(47, 57, 78,100);
  }
  h5{
    margin-top: 2%;
    margin-left: 2%;
    color: rgba(110, 115, 111,100);
  }
}

.from-container{
  position: absolute;
  top: 10%;
  right: 10%;
  background-color: white;
  height: 70%;
  width: 30%;
  border-radius: 10px;
}
.xieyi{
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 22px;
  line-height: 22px;
  background-color: rgba(252,249,247,100);
  font-size:8px;
  display: flex;
  flex-direction: row;
}
.user{
  font-size: 5px;
}
</style>