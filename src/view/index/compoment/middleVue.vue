<template>
    <div class="middleIcon">
        <template v-for="item in icons.data">
            <div class="icon">
                <div class='iconPopular' :style="'background-color:' + (item as any).color">
                    <img class="iconImg" :src='(item as any).src' alt="">
                </div>
                <span class="iconTitle">{{ (item as any).titile }}</span>
            </div>
        </template>
        <div class="switch" @click="change">
            <div class="switchBox">
                <img class="switchIcon" :src="(switchIcon.data[isretract] as any).src" alt="">
                <div class="switchTitle">{{ (switchIcon.data[isretract] as any).text }}</div>
            </div>

        </div>
    </div>
    <div class="middleClassify">
        <template v-for="item in classify">
            <div class="classifyItem">
                {{ item }}
            </div>
        </template>
        <div class="classifyItem">
            更多
        </div>
    </div>
    <div class="middleChannel">
        <template v-for="item in channelIcon.data">
            <div class="channelItem">
                <img :src="(item as any).src" alt="" class="channelIcon">
                <div class="channelText">{{(item as any).text}}</div>
            </div>
        </template>

    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { getmiddleIcon } from '../../../axios/public'

getmiddleIcon('middle').then((rep) => {
    icons.data = rep.data.data
})
getmiddleIcon('switch').then((rep) => {
    switchIcon.data = rep.data.data
})
getmiddleIcon('channel').then((rep) => {
    channelIcon.data = rep.data.data
})
let isretract = ref(0)

function change() {
    if (isretract.value === 0) {
        isretract.value = 1;
    } else
        isretract.value = 0
}

//全局变量定义
let icons = reactive({
    data: []
})
let switchIcon = reactive({
    data: [{ "src": '', text: '' }]
})
let channelIcon = reactive({
    data: []
})
let classify: Array<string> = ['番剧', '国创', '动画',
    '舞蹈', '娱乐', '科技', '美食', '汽车', '运动', '电影',
    '电视剧', '纪录片', '游戏', '音乐', '影视', '知识', '生活']



</script>

<style lang="scss" scoped>
@mixin Horizontal {
    margin-left: auto;
    margin-right: auto;
}

@mixin Icon {
    width: 20px;
    height: 30px;
    margin-top: auto;
    margin-bottom: auto;
}

@mixin center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.middleIcon {
    width: 120px;
    height: 100%;
    display: flex;
    flex-direction: row;
    @include Horizontal;

    .icon {
        @include Icon;
        margin-right: 16px;
        display: flex;
        flex-direction: column;

        .iconPopular {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            @include center;
        }

        .iconTitle {
            font-size: 7px;
            margin-top: 3px;
            @include Horizontal;
        }
    }

    .switch {
        width: 20px;
        height: 35px;
        margin-top: auto;
        margin-bottom: auto;
        background-color: #F1F2F3;
        border-radius: 5px;
        @include center;
        cursor: pointer;

        .switchBox {
            margin-top: -5px;
            width: 25px;
            height: 30px;

            .switchIcon {
                width: 100%;
                height: 8px;
            }

            .switchTitle {
                width: 10px;
                height: 15px;
                font-size: 6px;
                font-weight: 400;
                margin-left: 7px;
            }
        }

    }


    .iconImg {
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
}

.middleClassify {
    width: 400px;
    height: 100%;
    display: grid;
    grid-template-columns: 44px 44px 44px 44px 44px 44px 44px 44px 44px;
    grid-template-rows: 20px 20px;

    .classifyItem {
        display: inline-grid;
        margin-top: 5px;
        margin-left: 5px;
        font-size: 8px;
        background-color: #F1F2F3;
        width: 40px;
        height: 15px;
        border-radius: 3px;
        @include center
    }
}

.middleChannel {
    width: 150px;
    height: 100%;
    display: grid;
    grid-template-columns: 44px 44px 44px;
    grid-template-rows: 20px 20px;
    .channelItem {
        @include center;
        width: auto;
        height: 15px;
        display: flex;
        flex-direction: row;
        margin-top: 5PX;
        .channelIcon {
            width: 8px;
            height: 8px;
            margin-right: 2px;
        }

        .channelText {
            font-size: 8px;
        }
    }
}</style>