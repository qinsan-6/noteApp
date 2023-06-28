<template>
  <div ref="threeRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {AxesHelper, BoxGeometry, Color, Mesh, MeshLambertMaterial, PerspectiveCamera, Scene, SpotLight, WebGLRenderer} from 'three'
import{ OrbitControls}from 'three/examples/jsm/controls/OrbitControls'
const threeRef=ref()

function init(){
    const scene =new Scene()

    // 场景添加物
    // 添加坐标轴
    let axes = new AxesHelper(80);
    scene.add(axes)
    // 添加光纤
    let  spotlight = new SpotLight(0xffffff)
    spotlight.position.set(40,50,0)
    spotlight.castShadow = true
    scene.add(spotlight)
    // 添加正方体
    let cubeGeometry =new BoxGeometry(4,4,4)
    let cubeMaterial = new MeshLambertMaterial({color:0xff0000})
    const cube = new Mesh(cubeGeometry,cubeMaterial)
    cube.position.set(10,10,20)
    scene.add(cube)
    

    //场景渲染 
    const rander = new WebGLRenderer({antialias: true});
    rander.setClearColor(new Color(0xfeaeff))
    rander.setSize(window.innerWidth, window.innerHeight);
    // 相机设置
    const camera =new PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000)
    camera.position.x=40;
    camera.position.y=40;
    camera.position.z=40; 
    camera.lookAt(scene.position)
    console.log(camera.matrixWorldInverse)
    // 添加控制器
    const control= new OrbitControls(camera,rander.domElement)

    threeRef.value.appendChild(rander.domElement);
    function randers(){
      rander.render(scene,camera);
      requestAnimationFrame(randers);
    }
    randers()
}

onMounted(()=>{
  init();
})

</script>
<style lang="scss" scoped>

</style>