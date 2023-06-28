<template>
    <div class="diary-containter">
        <div class="diary">
            <div class="diary-time">
                {{ `${timer.year} ${timer.month}.${timer.day} | ${timer.hour}:${timer.minute}` }}
            </div>
            <div class="diary-show">
                <el-input
                    v-model="textarea2"
                    type="textarea"
                    input-style="height:100%;border-radius:0"
                />
            </div>
            <div class="pageturning">
                <el-pagination
                small
                background
                :page-count="7"
                layout="prev, pager, next"
                class="mt-4"
                :current-page="curpage"
                @update:current-page="changepage"
            />
            </div>
        </div>
        <div class="button">
            <el-button type="primary" v-on:click="login" :loading="loading">
                <template #loading>
                <div class="custom-loading">
                    <svg class="circular" viewBox="-10, -10, 50, 50">
                    <path
                        class="path"
                        d="
                        M 30 15
                        L 28 17
                        M 25.61 25.61
                        A 15 15, 0, 0, 1, 15 30
                        A 15 15, 0, 1, 1, 27.99 7.5
                        L 15 15
                    "
                        style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
                    />
                    </svg>
                </div>
                </template>
                保存
            </el-button>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import {onwMoment} from '../../until/moment'
import { Eleme } from '@element-plus/icons-vue'
import { saveOne } from '../../axios/data';
let loading =ref(false)
let timer=reactive({...onwMoment()})
const textarea2 = ref('')
let curpage = ref(1)
setInterval(()=>{
    const time = onwMoment()
    timer.minute = time.minute
    timer.day = time.day
    timer.year = time.year
    timer.month = time.month
    timer.hour = time.hour
},1)
function login(){
    loading.value=true;

    //数据加密
    
    //发送请求
    const res = saveOne(textarea2.value)
    
    loading.value=false
}
function changepage(value:number){
    curpage.value = value
}

</script>

<style scoped lang="scss">
    .diary-containter{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        background-color: aqua;
        .diary{
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 70%;
            height: 100%;
            .diary-time{
            height: 15px;
            font-size: 13px;
            margin: 5% 0 0;
            }
            .diary-show{
                width: 60%;
                height: 75%;
                background-color: white;
                margin: 0  auto 0;
                display: flex;
                flex-direction: column;          
            }
            .pageturning{
                margin: auto;
                height: 10% ;
                width: 60%;
            }
        }
       .button{
        height: 100%;
        width: 30%;
        background-color: yellow;
        
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}

       }
    }
</style>
 