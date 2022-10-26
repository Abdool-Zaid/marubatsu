<script setup>
function togglePassword(id){
  let toggledPassword =document.querySelector(`#${id}`)
  toggledPassword.type=="password"?toggledPassword.type="text":toggledPassword.type="password"
}
let initiateGame=()=>{
  localStorage.setItem('gamePassword',JSON.stringify( existingGamePassword.value))
  localStorage.setItem('gameID',JSON.stringify(gameID.value))
  localStorage.setItem('initiateGame','true')
}  
</script>

<template>
  <div id="enterInstance">
    <form>
      <div class="mb-3">
        <label for="gameID" class="form-label">Game ID</label>
        <input
          type="text"
          class="form-control"
          id="gameID"
          aria-describedby="emailHelp"
          v-model="GameID"
        />
        <div id="emailHelp" class="form-text">enter an existing game ID</div>
      </div>
      <div class="mb-3">
        <label for="existingGamePassword" class="form-label">Password</label>
        <input
          type="password"
          class="form-control togglePassword"
          id="existingGamePassword"
          v-model="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary" id="initiateGame"  @click.prevent="initiateGame()">Submit</button>
    </form>
  </div>
  <form id="addInstance">
    <label for="inputPassword5" class="form-label">Password</label>
    <i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>
    <input
      type="password"
      id="inputPassword5"
      class="form-control Newpassword togglePassword"
      aria-describedby="passwordHelpBlock"
      v-model="Newpassword"
    />
    <div id="passwordHelpBlock" class="form-text">
      share this with whom ever you wish to do battle with alongside the game ID
    </div>
    <button type="submit" class="btn">
      start new game
    </button>
  </form>
</template>
<style scoped>
input::after{
  display: inline-block;
  content: "";
  vertical-align: -.125em;
  background-image: url("data:image/svg+xml,<svg viewBox='0 0 16 16' fill='%23333' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' clip-rule='evenodd'/></svg>");
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
}
</style>
