<template>
    <div>
        <h5 v-show="ishistory">
            历史搜索
        </h5>
        <div class="history">
            <template v-for="item in history.data">
                <div class="history-item">
                    <div class="history-text">{{ item }}</div>
                </div>
            </template>
        </div>
        <h5 class="hot">
            热门搜索
        </h5>
        <div class="hot-search">
            <template v-for="item in hotSearch">
                <div class="hot-search-item">
                    <div class="hot-search-text">{{ item }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script  lang="ts" setup>
import { reactive} from 'vue';

let staticHistory = gethistory()//静态搜索数据

let history = reactive({data:staticHistory}) //动态历史数据


let hotSearch: Array<string> = [
    "竹笛",
    "不能给我的请完整给他"
]

let ishistory = staticHistory.length


//获取本地搜索历史数据方法
function gethistory(): Array<string> {
    //从本地储存中获取历史搜索记录
    //获取字符串
    let historyStr = localStorage.getItem("history")
    if (historyStr) {
        //将字符串转为数组,并保存在页面
        return JSON.parse(historyStr)
    }
    return []
}
//保存本地数据 同时修改页面数据
function savethistory(value:any) {
    history.data=staticHistory
    localStorage.setItem("history",JSON.stringify(value))
}
//修改静态数据 同时修改本地储存
function sethistory(type: string, value: string) {
    switch (type) {
        case "add":
            //去重
            staticHistory = staticHistory.filter(item => { 
                if(item !== value )    
                return item
            });
            staticHistory.push(value);
            savethistory(staticHistory);
            return;
        case "remove":
            staticHistory = staticHistory.filter(item => { item !== value });
            savethistory(staticHistory);
            return
    }
    
}

//
defineExpose({
    sethistory
})
</script>

<style lang="scss" scoped>
@mixin item {}

.history {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    .history-item {
        margin-left: 2px;
        width: auto;
        height: 10px;
        background-color: rgb(222, 212, 212);
        max-width: 50px;
        cursor: pointer;

        &:hover {
            color: aqua;
        }

        .history-text {
            font-size: 5px;
            margin: 1.5px 2px 0px 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

.hot {
    margin-top: 6px;
}

.hot-search {
    display: flex;
    flex-direction: column;

    .hot-search-item {
        width: auto;
        height: auto;
        cursor: pointer;
        padding-top: 2px;
        padding-bottom: 2px;

        &:hover {
            background-color: rgb(222, 212, 212);
        }

        .hot-search-text {
            font-size: 8px;
        }
    }
}</style>