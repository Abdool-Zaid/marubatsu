<script setup>
import {  onMounted } from "vue";
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  // Math.floor(Math.random()*0xffffff).toString(16)
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let MoveSet=[]
function fieldAction(id){
 let coor=id.split('').pop()
 let target= document.getElementById(id)
 let Nextmove
if(target.innerHTML){
  alert('already made that move')
}else{
  // check field
  if(!MoveSet.length || MoveSet.pop()=='O'){
    Nextmove='X'
  }
  else{
    Nextmove='O'
  }
  MoveSet.push(Nextmove)
  target.innerHTML=Nextmove
}
  }
onMounted(() => {
  let position1=document.querySelector('#position1')
  let position2=document.querySelector('#position2')
  let position3=document.querySelector('#position3')
  let position4=document.querySelector('#position4')
  let position5=document.querySelector('#position5')
  let position6=document.querySelector('#position6')
  let position7=document.querySelector('#position7')
  let position8=document.querySelector('#position8')
  let position9=document.querySelector('#position9')
document.querySelector('body').style=`
background-color:${generateRandomColor()} ;
`
document.querySelector('.field').style=`
background-color:${generateRandomColor()} ;
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
<div class="definedPosition text-center" @click="fieldAction('position1')" id="position1"></div>
<div class="definedPosition text-center" @click="fieldAction('position2')" id="position2"></div>
<div class="definedPosition text-center" @click="fieldAction('position3')" id="position3"></div>
<div class="definedPosition text-center" @click="fieldAction('position4')" id="position4"></div>
<div class="definedPosition text-center" @click="fieldAction('position5')" id="position5"></div>
<div class="definedPosition text-center" @click="fieldAction('position6')" id="position6"></div>
<div class="definedPosition text-center" @click="fieldAction('position7')" id="position7"></div>
<div class="definedPosition text-center" @click="fieldAction('position8')" id="position8"></div>
<div class="definedPosition text-center" @click="fieldAction('position9')" id="position9"></div>
</div>
</template>

<style >
*{
margin: 0;
padding: 0;
box-sizing: border-box;
color: antiquewhite;
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
