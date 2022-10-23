<script setup>
import {  onMounted } from "vue";
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color)
  return color;
}
onMounted(() => {
document.querySelector('body').style=`
background-color:#${Math.floor(Math.random()*0xffffff).toString(16)} ;
`
document.querySelector('.field').style=`
background-color:#${Math.floor(Math.random()*0xffffff).toString(16)} ;
`
document.querySelectorAll('.definedPosition').forEach((position)=>{
  position.style=`
  background-color:${ generateRandomColor()} ;
  `
})
})
</script>

<template>
<div class="field">
<div class="definedPosition" id="position1"></div>
<div class="definedPosition" id="position2"></div>
<div class="definedPosition" id="position3"></div>
<div class="definedPosition" id="position4"></div>
<div class="definedPosition" id="position5"></div>
<div class="definedPosition" id="position6"></div>
<div class="definedPosition" id="position7"></div>
<div class="definedPosition" id="position8"></div>
<div class="definedPosition" id="position9"></div>
</div>
</template>

<style >
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
  width: 100vw;
  height: 100vh;
}

.field{
  width: 30vw;
  aspect-ratio: 1;
  position:fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
display: flex;
flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
}
.definedPosition{
  width: 8vw;
  aspect-ratio: 1;
  
}
</style>
