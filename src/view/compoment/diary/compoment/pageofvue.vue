<template>
    <!-- 翻页动画 -->
    <div :class="turnPageswitch" class="page" 
    
     >

    </div>
    <div class="test"
    @click="turnpage"
    :class="teststyle"
     >

    </div>
</template>

<script lang="ts" setup>
//效果：点击时播放页面反转动画，同时更新页面数据

import { reactive,ref } from 'vue';

// 页面翻转动画开关
let turnPageswitch = ref({
    right: false,
    left:false,    
})
let teststyle = ref('')
function turnpage(){
    teststyle.value = 'turnpagetest'
    console.log('正在翻页')
}
</script>


<style lang="scss" scoped>
.page{
    position: absolute;
    top: 10%;
    right: 50%;
    width: 100px;
    height: 100px;
    background-color: yellow;
    transform-style: preserve-3d;
}


// 页面翻转页面动画 rihgt
.right{
    background-color: red;
}
// 页面翻转页面动画 left
.left{
    background-color: blue;
}

.test{
    position: absolute;
    left: 20%;
    right: 20%;
    width: 100px;
    height: 100px;
    background-color: red;
    transform-style: preserve-3d;
}
.test:active{
    animation: turn linear 3s;
}
// .turnpagetest{
//     animation: turn linear 3s;
// }
@keyframes turn{
    0%{
        opacity:0;
        transform: rotateY(2deg);
    }
    50%{
        transform: rotateY(90deg);
        opacity:0.5;
    }
    99%{
        transform: rotateY(180deg);
    }
    100%{
        opacity:0;
    }
}
</style>