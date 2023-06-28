<template>
    <div class="carousel">
        <div class="carouserItem">
            <div class="item">
                <img style="height: 100%; width: 100%;" src="../../../assets/img/bilibili.webp" alt="">
            </div>
            <div class="item">
                <img style="height: 100%; width: 100%;" src="../../../assets/img/bilibili.webp" alt="">
            </div>
        </div>
        <div class="carouselTool">
            <div class="toolText">
                泥泞般的黑暗中,仍有救赎
            </div>
            <div class="icon">
                <img class="toolIcon" src="../../../assets/svg/arrowleft.svg" alt="">
                <img class="toolIcon" src="../../../assets/svg/arrowright.svg" alt="">
            </div>

            <ul class="indicator">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.carousel {
    width: 100%;
    height: 100%;
    .carouserItem {
        width: 100%;
        height: 100%;

        .item {
            width: 100%;
            height: 100%;
        }
    }

    .carouselTool {
        position: relative;
        top: -50px;
        width: 100%;
        height: 50px;
        display: grid;
        grid-template-columns: 220px 70px;
        grid-template-rows: 20px 20px;
        background-color:rgb(44,13,50);
        .toolText {
            margin-top: 10px;
            max-width: 220px;
            height: 20px;
            font-size: 10px;
            margin-left: 10px;
            color: white;
        }

        .icon {
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            
            .toolIcon {
                cursor: pointer;
                border-radius: 4px;
                background-color: rgba(255,255,255,.1);
                width: 10px;
                height: 10px;
                margin-left: 5px;
            }
        }

        .indicator {
            margin-top: 10px;
            height: 20px;
            display: flex;
            flex-direction: row;
            margin-left: 10px;

            li{
                cursor: pointer;
                margin-left: 5px;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: rgba(255,255,255,.4);
                list-style: none;
            }
        }
    }

    @keyframes Carousel {
        
    }
}
</style>