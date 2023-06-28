<template>
  <div class="page-containter">
    <!-- 标题 -->
    <h1 class="title">白茶日记

    </h1>
    <!-- 书页 -->
    <bookvue class="index-book"></bookvue>
    <!-- 按钮区域
    <div class="button">
      <el-button>&lt;</el-button>
      <el-button>></el-button>
    </div> -->
  </div>
  
</template>

<script setup lang="ts">
import bookvue from'./compoment/book.vue'




// function notechange() {
//   console.log(textarea.value)
//   note(textarea.value).then((res)=>{
//       if(res.data.status === 200){
//         alert('保存成功')
//       }else{
//         alert('保存失败')
//       }
//   })
// }



</script>
<style lang="scss" scoped>
.page-containter{
  width: 100%;
  height: 100%;
  background-color:cadetblue;
  display: flex;
  flex-direction: row;
  .title{
    background-color: aqua;
    width: 50px;
    height: 150px;
    overflow: hidden;
    text-align: center;
    margin-top: 100px;
    margin-left: 50px;
  }
  .index-book{
    margin-top: 20px;
    margin-left: 20px;
  }
  .button{
    width: auto;
    height: 100%;
    background-color: blue;
  }
}





</style>