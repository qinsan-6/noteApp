<template>
    <div :style="pagestyle" ref="page">
            <div class="page-back" @click.stop="turnright" ref="backpage">
                <div class="page-div">
                    {{props.data.left}}
                </div>
            </div>
            <div class="page-font"  ref="fontpage" @click.stop="turnleft">
                <div class="page-div">
                    {{props.data.right}}
                </div>
            </div>
    </div>
</template>

<script lang="ts" setup>
import { ref , onBeforeMount, StyleValue} from 'vue'

//  定义自定义事件
const emit =defineEmits(['turnpage'])

const props=defineProps<{
    zIndex:string,
    data:{
        right:string,
        left:string,
    }
}>()

//页面样式
let zindex:string ='z-index:'+ props.zIndex
let pagestyle = ref(['height:100%',zindex])
// 页面节点
const backpage=ref()
const fontpage=ref()
const page=ref()
// 实现向右翻页函数
function turnright(){
    console.log("turnright")

    const pageturn = page.value.style
    const back = backpage.value.style
    const font = fontpage.value.style
    font.zIndex=20
    back.zIndex=10
    
    pageturn.transition='3s'
    pageturn.transform='rotateY(0deg)'

}
// 实现向左翻页函数
function turnleft(){
     // 触发自定义事件
     emit('turnpage')
    const pageturn = page.value.style
    const font = fontpage.value.style
    const back = backpage.value.style
    back.zIndex =20
    font.zIndex=10
    pageturn.transition='3s'
    pageturn.transform='rotateY(-180deg)'
}

// 挂载前操作
onBeforeMount(()=>{

})

// // 展示的页面
// let currentindex = 1
// function turnpage(){
//     // // 点击切换时,先判断是否翻到了最后一页
//     // if(currentindex===19){
//     //     // 到最后一页不能继续翻页了，弹出框提示
//     //     return
//     // }
//     // //增加翻页的zindex
   
//     // console.log(currentindex)
//     // // const page = pages.value[currentindex] as any 

//     // console.log(page.childNodes)
//     // page.style.transition='3s'
//     // page.style.transform='rotateY(-180deg)'
//     // page.childNodes[0].style.zIndex=100
//     // page.childNodes[1].style.zIndex=90
//     // // console.log(rightref.value)
//     // currentindex=currentindex+2
// }

</script>

<style lang="scss" scoped>
        .page-div{
            width: 100%;
            height: auto;
            background-color: red;
        }
        .page-font{
            background-color: yellow;
            z-index: 20;
            // backface-visibility: hidden;
        }
        .page-back{
            background-color: green;
            z-index: 10;
            transform: rotateY(180deg);
        }
        .page-font,.page-back{
            position: absolute;
            width: 300px;
            height: 100%;
        }
</style>