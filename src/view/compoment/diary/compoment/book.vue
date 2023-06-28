<template>
    <div class="book">
        <div class="page1" :ref="divs">
            <div class="page1-back">
                <el-input
                    v-model="textarea"
                    :rows="16"
                    type="textarea"
                    placeholder="Please input"
                />
            </div>
            <div class="page1-font"  ref="rightref">
                <el-input
                    v-model="textarea"
                    :rows="16"
                    type="textarea"
                    placeholder="Please input"
                />
            </div>
        </div>
        <div class="page2">
            <template v-for="item in pagedata">
                <pagevue class="pagevue" :zIndex="item.zIndex" :data="item" @turnpage="adjustmentIndex"></pagevue>
            </template>
        </div>
        <pageofvue></pageofvue>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'animate.css';
import pagevue from'./page.vue'
import pageofvue from './pageofvue.vue'


// 页面数据
let pagedata =ref([{
    right:'这是第一页前页',
    left:'这是第一页后页',
    zIndex:'5'
},{
    right:'这是第二页前页',
    left:'这是第二页后页',
    zIndex:'4'
},{
    right:'这是第三页前页',
    left:'这是第三页后页',
    zIndex:'3'
},{
    right:'这是第四页前页',
    left:'这是第四页后页',
    zIndex:'2'
},{
    right:'这是第五页前页',
    left:'这是第五页后页',
    zIndex:'1'
}]) 

// 自定义调整页面index值事件
const adjustmentIndex =():void=>{
    // 获取数组最后一位值
    let temp:string = pagedata.value[pagedata.value.length-1].zIndex
    // 遍历数组
    for(let i=pagedata.value.length-1;i>0;i--){
        pagedata.value[i].zIndex = pagedata.value[i-1].zIndex
    }
    pagedata.value[0].zIndex=temp
}

const textarea = ref('')
const rightref=ref()

// 页面节点
const pages=ref([])
const divs=(el:HTMLElement)=>{
    (pages.value as Array<HTMLElement>).push(el)
    // 这里不加会报错： 不能将类型“(el: HTMLElement) => void”分配给类型“VNodeRef | undefined”。
    return undefined
}



</script>

<style lang="scss" scoped>

    .book{
        width: 600px;
        height: 87.5%;
        // perspective:1000px; /*  透视，达到3D效果  */
        transform-style: preserve-3d;
        .page1{
            width:300px;
            height: 100%;
            border: 2px solid green;
            z-index: 20;
        }
       
        .page1-font,.page1-back{
            position: absolute;
            width: 300px;
            height: 95%;
        }
       .page2{
            width:300px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 300px;
            border: 2px solid black;
            .pagevue{
                position: absolute;
                top: 0;
            }
       }
    }

</style>