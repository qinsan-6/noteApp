<template>
    <div class="index">
        <div class="biaoqian">
            <template v-for="item in bianqiandata" >
                <biaoqian :text="item"  />
            </template>
        </div>
      
       <div class="shiping">
    
       </div>
    </div>
</template>

<script lang="ts" setup>
//周期函数导入
// import {onBeforeMount} from "vue"
//功能函数导入
import {getone}from "@/until/sessionStorage"
//组件导入
import biaoqian from '../compoment/linjinshijie/biaoqian.vue';



let jihuo:string | null = getone('biaoqian')  //激活中的标签 数据储存在浏览器的sessionStorage中
let bianqiandata = ['竹笛篇',"围棋篇","生活篇"]
let id=0

// //周期函数模块
// onBeforeMount(()=>{

// })






</script>

<style lang="scss" scoped>
.index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .biaoqian{
        position: relative;
        top: 20px;
        left: 70px;

        width: auto;
        height: 50px;

        display: flex;
        flex-direction: row;
    }
    .shiping{
        position: relative;
        left: 50px;
        width: 80%;
        height: 80%;
        background-color: red;
    }
}
</style>