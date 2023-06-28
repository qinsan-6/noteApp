<template>
    <div class="mouth" @pointerleave="leave" @pointermove="out($event)">
        <img src="../../../assets/img/bilibiliHead.webp" alt="" class="headBack" draggable="true" ref="backimg">

        <div class="input">
            <input type="text" 
            class="search" ref="buttonRef" v-click-outside="onClickOutside">
            <img class="icon" src="../../../assets/svg/reach.svg" alt="" v-on:click="search">

            <el-popover ref="popoverRef" :virtual-ref="buttonRef" trigger="click" virtual-triggering>
                <popoverVue ref="propove"/>

            </el-popover>

            <div class="imgbackground">
                <div class="headimg">
                    <img class="img" src="../../../assets/img/chaotuo.jpg" alt="">
                </div>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import {  ref, unref } from 'vue';
import { ClickOutside as vClickOutside } from 'element-plus'
import popoverVue from './popover.vue'
import { HoverChangePosition, MouthMove } from "../../../until/mouth"


//全局变量声明
let searchValue = ''
let mouth = new MouthMove(3, 0, 0, 0) //记录鼠标移动数据

//ref数据声明
const backimg = ref()
const buttonRef = ref()
const popoverRef = ref()
const propove = ref()

const onClickOutside = () => {
    unref(popoverRef).popperRef?.delayHide?.()
}
//背景照片


//搜索方法
function search() {
    //读取搜索值
    if(typeof buttonRef.value.value === undefined){
        return
    }
    let searchValue = buttonRef.value.value;
    if(!searchValue){
        console.log("请输入搜索内容")
        return
    }
    propove.value.sethistory("add",searchValue)
}

//









function out(e: any) {

    HoverChangePosition(backimg, e, mouth)
}

function leave() {

    mouth.pointx = 0

    backimg.value.style.transform = `translate(-10px,0px)`

}

</script>

<style lang="scss" scoped>
.mouth {
    z-index: 100;
    position: absolute;
    width: 100%;
    height: 100%;

    .headBack {
        position: absolute;
        transform: translate(-10px, 0);
        width: 110%;
        height: 100%;

    }

    .input {
        position: absolute;
        left: 38%;
        width: 25%;
        height: 50%;
        display: flex;
        align-items: center;

        .search {
            margin: 0 2% 0 2%;
            border: none;
            width: 90%;
            height: 69%;
            background-color: white;
            border-radius: 5px;
            opacity: 0.9;
        }

        .icon {
            position: relative;
            right: 28px;
        }

        .icon:hover {
            background-color: rgb(212, 195, 195)
        }

        .imgbackground {
            display: flex;
            position: relative;
            flex-shrink: 0;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: white;


            .headimg {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                width: 90%;
                height: 90%;
                border-radius: 50%;
                overflow: hidden;

                .img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>