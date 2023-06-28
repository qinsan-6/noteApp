<!-- 主页组件 -->

<template>
    <el-row class="head">
            <headVue></headVue>
    </el-row>
    <el-row class="middle">
           <middleVue></middleVue>
    </el-row>
    <el-row class="bottom">
           <bottomVue></bottomVue>
    </el-row>

</template>

<script lang="ts" setup>

import headVue from './compoment/head.vue';
import middleVue from './compoment/middleVue.vue';
import bottomVue from './compoment/bottomVue.vue';
</script>

<style lang="scss" scoped>

.el-row {
    width: 100%;  
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
}

.head {
    width: 100%;
    height: 22%;
    overflow: hidden;
}

.middle {
    width: 680px;
    height: 14%;
    margin-left: auto;
    margin-right: auto;
}

.bottom {
    width: 680px;
    min-height: 58%;
}

</style>