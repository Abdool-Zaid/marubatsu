<script setup>

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
          class="form-control"
          id="existingGamePassword"
          v-model="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <form id="addInstance">
    <label for="inputPassword5" class="form-label">Password</label>
    <input
      type="password"
      id="inputPassword5"
      class="form-control Newpassword"
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
</style>
