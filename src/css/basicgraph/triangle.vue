<template>
    <div>

    </div>
</template>

<script setup lang="ts">

//接受来自外部的配置
const props = defineProps({
    color:{
        type:String,
        required: false, 
        default:'bule'
    },
})
console.log(props.color)
</script>

<style lang="scss" scoped>

</style>