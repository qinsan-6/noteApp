<template>
    <div class="bottom">
        <div class="bottomCarousel">
            <carouselVue />
        </div>
        <div class="bottomVideo">
            <template v-for="item in (videos.data as any).data">
                 <div class="VideoItem">
                <div class="VideoImg">
                    <img style="height: 100%;width: 100%;" :src="(item as any).headimg" alt="">

                </div>
                <div class="VideoText">
                    {{ (item as any).title }}
                </div>
                <a class="VideoAuthor ">
                    <img src="" alt="">
                    <span>
                        迷离
                    </span>
                    <span>
                        · 18小时前
                    </span>
                </a>
            </div> 
            </template>
           

        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import carouselVue from './carousel.vue'
import {getVideos} from '@/axios/public'



let videos=reactive({
    data:[]
})
getVideos('index').then(data=>{
    
    videos.data=data.data
    
})

</script>

<style lang="scss" scoped>
@mixin Horizontal {
    margin-left: auto;
    margin-right: auto;
}

.bottom {
    display: flex;
    flex-direction: row;

    .bottomCarousel {
        border-radius: 5px;
        overflow: hidden;
        margin-left: 15px;
        width: 280px;
        height: 180px;
    }

    .bottomVideo {
        width: 380px;
        height: 100%;
        margin-left: 10px;
        display: grid;
        grid-template-columns: 130px 130px 130px;
        grid-template-rows: 120px 120px;

        .VideoItem {
            height: 120px;
            .VideoImg {
                border-radius: 5px;
                overflow: hidden;
                width: 120px;
                height: 60px;
            }
            .VideoText{
                cursor: pointer;
                position: relative;
                width: 120px;
                height: 20px;
                line-height: 10px;
                overflow: hidden;
                white-space:pre-line;
                text-overflow: ellipsis;
                margin-top: 4px;
                font-size: 10px;
            }
    
            .VideoAuthor{
                cursor: pointer;
                span{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 8px;
                    color: inherit;
                    line-height: 17px;
                }
                
            }
        }

    }
}
</style>