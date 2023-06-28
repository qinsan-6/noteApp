<template>
    <div class="contair">
        <img src="../../../assets/svg/biaoqian.svg" alt="" srcset="">
        <span>
            {{ text }}
        </span>
    </div>
</template>

<script lang="ts" setup>
defineProps(["text"])

</script>

<style lang="scss" scoped>
.contair{    
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    span{
        position: relative;
        top: -60%;
        left: 12px;
        font-size: 8px;
    }
}
</style>