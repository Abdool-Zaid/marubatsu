import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
createApp(App).mount("#app");

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  updateDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJmo_in6gzgYIqAkWXbebYh9Oh9XDp8Do",
  authDomain: "test-402f3.firebaseapp.com",
  projectId: "test-402f3",
  storageBucket: "test-402f3.appspot.com",
  messagingSenderId: "634872735047",
  appId: "1:634872735047:web:45aecbe70a6327004b9862",
};
initializeApp(firebaseConfig);
const db = getFirestore();
const colref = collection(db, "gameInstance");

// create
const addGameInstance = document.querySelector("#addInstance");
let Newpassword = document.querySelector(".Newpassword");
let moveSet = [];
localStorage.setItem('MoveSet',JSON.stringify(moveSet))
addGameInstance.addEventListener("submit", async (e) => {
  e.preventDefault();




let startGame= document.querySelector('#initiateGame')
startGame.addEventListener("click", (e) => {
  e.preventDefault();
  let gameID = JSON.parse(localStorage.gameID);
  let gamePassword = JSON.parse(localStorage.gamePassword);
  const docuRef = doc(db, "gameInstance", gameID);
  console.log('new game')
  getDoc(docuRef).then((doc) => {
    if (doc.data().password == gamePassword) {
      localStorage.setItem("enteredGame", "true");
      let moveSet = doc.data().moveSet;
      console.log(moveSet);
    }
  });
  onSnapshot(docuRef, (doc) => {
    console.log('written')
    for (let i = 0; i < doc.data().moveSet.length; i++) {
      document.querySelector(
        `#${doc.data().moveSet[i].position}`
      ).innerHTML = `
    ${doc.data().moveSet[i].move}
    `;
  }
  });
})
  Newpassword = Newpassword.value;
  console.log(Newpassword);
  const docRef = await addDoc(collection(db, "gameInstance"), {
    moveSet: moveSet,
    password: Newpassword,
  });
  navigator.clipboard.writeText(docRef.id);
  localStorage.setItem("gameID", JSON.stringify(docRef.id));
  alert("The Game ID has been copied to your clipboard");


});
// read game

// const q= query(colref,where('id','==',gameID))
//   let allGames=[]
//   let gameInstance={}
//   onSnapshot(q, (snapshot)=>{
//       snapshot.docs.forEach((doc)=>{
// allGames.push({...doc.data(), id:doc.id})

// let currentGame = allGames.filter((game)=>{if(game.id==gameID){return game}});
// console.log(currentGame[0])

//             // gameInstance.moveSet= JSON.parse(localStorage.moveSet)
//           })
//       })

//     }
// update


let updateField= document.querySelectorAll('.definedPosition').forEach((field)=>{

  field.addEventListener("click", () => {
    let gameID = JSON.parse(localStorage.gameID);
    const docRef = doc(db, "gameInstance", gameID);
    updateDoc(docRef,{moveSet:JSON.parse(localStorage.MoveSet)})    
    })
  })


let checkGameState = () => {
  if (localStorage.setMove == "true") {
    localStorage.setItem("setMove", "false");
  }
  if (localStorage.initiateGame == "true") {
    
    localStorage.setItem("initiateGame", "false");
  }
  setTimeout(() => checkGameState(),1000)
};
checkGameState();

// delete
document.querySelector("#endInstance").addEventListener("click", (e) => {
  e.preventDefault();
  const docRef = doc(db, "gameInstance", JSON.parse(localStorage.gameID));
  deleteDoc(docRef).then(() => {
    alert(`deleted game no: ${JSON.parse(localStorage.gameID)}`);
    localStorage.clear();
  });
});

// const express = require("express");
// const app = express();
// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
// });

// server.listen(3000, () => {
//   console.log("listening on *:3000");
// });
