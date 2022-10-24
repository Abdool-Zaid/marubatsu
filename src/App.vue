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
function checkGameState(){
  let position1 = Math.random()
      document.querySelector('#position1').innerHTML?position1=document.querySelector('#position1').innerHTML:Math.random()
  let position2 = Math.random()
      document.querySelector('#position2').innerHTML?position2=document.querySelector('#position2').innerHTML :Math.random()
  let position3 = Math.random()
      document.querySelector('#position3').innerHTML?position3=document.querySelector('#position3').innerHTML :Math.random()
  let position4 = Math.random()
      document.querySelector('#position4').innerHTML?position4=document.querySelector('#position4').innerHTML :Math.random()
  let position5 = Math.random()
      document.querySelector('#position5').innerHTML?position5=document.querySelector('#position5').innerHTML:Math.random()
  let position6 = Math.random()
      document.querySelector('#position6').innerHTML?position6=document.querySelector('#position6').innerHTML:Math.random()
  let position7 = Math.random()
      document.querySelector('#position7').innerHTML?position7=document.querySelector('#position7').innerHTML :Math.random()
  let position8 = Math.random()
      document.querySelector('#position8').innerHTML?position8=document.querySelector('#position8').innerHTML:Math.random()
  let position9 = Math.random()
      document.querySelector('#position9').innerHTML?position9=document.querySelector('#position9').innerHTML:Math.random()
  
   if (MoveSet.length>2) {
    // check field
    if (position1==position2 && position1==position3) {
      alert(position1 + ' won')
    } 
    else if (position4==position5 && position4==position6) {
      alert(position4 + ' won')
    }
    else if (position7==position8 && position7==position9) {
      alert(position7 + ' won')
    }
    else if (position1==position4 && position1==position7) {
      alert(position1 + ' won')
    }
    else if (position2==position5 && position2==position8) {
      alert(position2 + ' won')
    }
    else if (position3==position6 && position3==position9) {
      alert(position3 + ' won')
    }
    else if (position1==position5 && position1==position9) {
      alert(position1 + ' won')
    }
    else if (position3==position5 && position3==position7) {
      alert(position3 + ' won')
    } else if (MoveSet.length== 9){
      alert('game ended in a draw')

    }
  }
  }

function fieldAction(id){
 let coor=id.split('').pop()
 let target= document.getElementById(id)
 let Nextmove
if(target.innerHTML){
  alert('already made that move')
}else{
    if(!MoveSet.length || MoveSet[MoveSet.length-1]=='O'){
      Nextmove='X'
    }
    else{
      Nextmove='O'
    }
    MoveSet.push(Nextmove)
    target.innerHTML=Nextmove
    checkGameState()
  }
  }
onMounted(() => {document.querySelector('body').style=`
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
  color: antiquewhite;
  font-size: 3em;
}
</style>
