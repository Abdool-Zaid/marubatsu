<script setup>
function returnGameID(){
    navigator.clipboard.writeText('mlem');
alert(`${'gameID'} has been copied to clipboard` )
}

</script>

<template>
    <div id="enterInstance">
        <form>
  <div class="mb-3">
    <label for="gameID" class="form-label">Game ID</label>
    <input type="text" class="form-control" id="gameID" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="existingGamePassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="existingGamePassword">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    <div id="addInstance">
        <label for="inputPassword5" class="form-label">Password</label>
        <input
        type="password"
        id="inputPassword5"
        class="form-control"
        aria-describedby="passwordHelpBlock"
        />
        <div id="passwordHelpBlock" class="form-text">
            share this with whom ever you wish to do battle with alongside the game ID
        </div>
        <button type="submit" class="btn" @click="returnGameID()"> start new game</button>
    </div>
</template>
<style></style>
