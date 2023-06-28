<template>
    <div :style="style" class="container">
        <div :style="style"  :class="buttonclass1" @click="loginOrRegister()">
            登录
        </div>
        <div :style="style"  :class="buttonclass2" @click="loginOrRegister()">
            注册
        </div>
    </div>
    
</template>

<script setup lang="ts">
import {reactive} from 'vue'
const definesize =defineProps({
    size:Object,
})
const style={
    lineHeight:definesize.size?definesize.size.height:'40px',
    height:definesize.size?definesize.size.height:'40px',
    width:definesize.size?definesize.size.width:"150px"
}
const buttonclass1=reactive({
    activeclass:true,
    defalutclass:false
})
const buttonclass2=reactive({
    activeclass:false,
    defalutclass:true
})

function loginOrRegister(){
    buttonclass1.activeclass = !buttonclass1.activeclass;
    buttonclass1.defalutclass = !buttonclass1.defalutclass;
    buttonclass2.activeclass = !buttonclass2.activeclass;
    buttonclass2.defalutclass = !buttonclass2.defalutclass;
}
</script>

<style scoped>
.container{
    font-size: 8px;
    text-align: center;
    display: flex;
    flex-direction: row;
    border-radius: 100px;
    background-color: rgba(241, 235, 251, 100);
    margin-top: 15%;
    margin-left: 15%;
    margin-bottom: 10%;
}
.defalutclass{
    border-radius: 100px;
    background-color: rgba(241, 235, 251, 100);
}
.activeclass{
    border-radius: 100px;
    background-color: rgba(123, 61, 224, 100);
}

</style>