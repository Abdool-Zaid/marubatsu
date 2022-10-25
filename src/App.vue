<script setup>
import { onMounted } from "vue";
import gameInstance from "./components/gameInstance.vue";
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  // Math.floor(Math.random()*0xffffff).toString(16)
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let MoveSet = [];
function clearField() {
  document.querySelectorAll(".definedPosition").forEach((component) => {
    component.innerHTML = null;
  });
  MoveSet = [];
}
function checkGameState() {
  let position1 = "this";
  document.querySelector("#position1").innerHTML
    ? (position1 = document.querySelector("#position1").innerHTML)
    : "this";
  let position2 = "needs";
  document.querySelector("#position2").innerHTML
    ? (position2 = document.querySelector("#position2").innerHTML)
    : "needs";
  let position3 = "to";
  document.querySelector("#position3").innerHTML
    ? (position3 = document.querySelector("#position3").innerHTML)
    : "to";
  let position4 = "be";
  document.querySelector("#position4").innerHTML
    ? (position4 = document.querySelector("#position4").innerHTML)
    : "be";
  let position5 = "a";
  document.querySelector("#position5").innerHTML
    ? (position5 = document.querySelector("#position5").innerHTML)
    : "a";
  let position6 = "sentance";
  document.querySelector("#position6").innerHTML
    ? (position6 = document.querySelector("#position6").innerHTML)
    : "sentance";
  let position7 = "with";
  document.querySelector("#position7").innerHTML
    ? (position7 = document.querySelector("#position7").innerHTML)
    : "with";
  let position8 = "unique";
  document.querySelector("#position8").innerHTML
    ? (position8 = document.querySelector("#position8").innerHTML)
    : "unique";
  let position9 = "words";
  document.querySelector("#position9").innerHTML
    ? (position9 = document.querySelector("#position9").innerHTML)
    : "words";

  if (MoveSet.length > 2) {
    // check field
    if (position1 == position2 && position1 == position3) {
      alert(position1 + " won");
      clearField();
    } else if (position4 == position5 && position4 == position6) {
      alert(position4 + " won");
      clearField();
    } else if (position7 == position8 && position7 == position9) {
      alert(position7 + " won");
      clearField();
    } else if (position1 == position4 && position1 == position7) {
      alert(position1 + " won");
      clearField();
    } else if (position2 == position5 && position2 == position8) {
      alert(position2 + " won");
      clearField();
    } else if (position3 == position6 && position3 == position9) {
      alert(position3 + " won");
      clearField();
    } else if (position1 == position5 && position1 == position9) {
      alert(position1 + " won");
      clearField();
    } else if (position3 == position5 && position3 == position7) {
      alert(position3 + " won");
      clearField();
    } else if (MoveSet.length == 9) {
      alert("game ended in a draw");
      clearField();
    }
  }
}

function fieldAction(id) {
  let coor = id.split("").pop();
  let target = document.getElementById(id);
  let Nextmove;
  if (target.innerHTML) {
    alert("already made that move");
  } else {
    if (!MoveSet.length || MoveSet[MoveSet.length - 1].move == "O") {
      Nextmove = "X";
    } else {
      Nextmove = "O";
    }
    MoveSet.push({ move: Nextmove, position: id });
    localStorage.setItem('MoveSet',JSON.stringify(MoveSet))
    
    target.innerHTML = Nextmove;
    checkGameState();
  }
}
onMounted(() => {
  // document.querySelectorAll('*').forEach((component) => {
  //   component.style = `
  // background-color:${generateRandomColor()} !important ;
  // `;
  // });
  function styling(){
    console.log(`running ${Math.random()}`)
    document.querySelectorAll('.definedPosition').forEach((move)=>{
      move.animate([
  // keyframes
  {  color:generateRandomColor() },
  {  color:generateRandomColor() }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
    })
setTimeout(styling(), 10000)
}
// styling()
  document.querySelector("body").style = `
  background-color:${generateRandomColor()} ;
`;
  document.querySelector(".field").style = `
background-color:${generateRandomColor()} ;
`;
  document.querySelectorAll(".definedPosition").forEach((position) => {
    position.style = `
  background-color:${generateRandomColor()} ;
  `;
  });
  document.querySelectorAll(".fade").forEach((fade) => {
    fade.style = `
  background-color:${generateRandomColor()} !important ;
  `;
  });
  navigator.mediaDevices
    .getUserMedia({
      audio: true,
    })
    .then((stream) => {
      document.querySelector("#OreNo").srcObject = stream;
    });
});
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#gameSettings"
            >
              Game Settings
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#audioSettings"
            >
              Audio Settings
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="field">
    <div
      class="definedPosition text-center"
      @click="fieldAction('position1')"
      id="position1"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position2')"
      id="position2"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position3')"
      id="position3"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position4')"
      id="position4"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position5')"
      id="position5"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position6')"
      id="position6"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position7')"
      id="position7"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position8')"
      id="position8"
    ></div>
    <div
      class="definedPosition text-center"
      @click="fieldAction('position9')"
      id="position9"
    ></div>
  </div>

  <!-- Modals -->
  <div
    class="modal fade"
    id="gameSettings"
    tabindex="-1"
    aria-labelledby="gameSettingsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="gameSettingsLabel">Game Settings</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <gameInstance></gameInstance>
        </div>
        <div class="modal-footer">
          <button id="endInstance"   class="btn" >
            end current game
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="audioSettings"
    tabindex="-1"
    aria-labelledby="audioSettingsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="audioSettingsLabel">Audio Settings</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div id="chatBox" class="d-flex flex-column">
            <audio controls autoplay></audio>
            <label for="OreNo">my audio</label>
            <audio controls autoplay id="OreNo"></audio>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="fade"></div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
  height: 100vh;
}
.navbar {
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: #45454500 !important;
}
.field {
  width: 30vw;
  aspect-ratio: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
}
.definedPosition {
  width: 8vw;
  aspect-ratio: 1;
  animation: animatename 1s linear infinite;
  font-size: 3em;
}
.modal-content {
  background-color: #45454500;
  border: 0px;
}


</style>
