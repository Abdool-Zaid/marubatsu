import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
createApp(App).mount("#app");

import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc,doc } from "firebase/firestore";
let gameDuration=false
let curentState
let comparatorValue
let compareState= ()=>{
   comparatorValue=lengthDetector()
}
let lengthDetector=()=>{
  if (gameDuration!==curentState){
    curentState=gameDuration
    return gameDuration
  }
  else{
    compareState()
  }
}
let checkGameState= ()=>{
  localStorage.MoveSet? gameDuration= localStorage.MoveSet:curentState=true
  if (!curentState){
    compareState=gameDuration
    lengthDetector()  
  }else if (curentState){
  curentState=gameDuration
}else{

}


setTimeout(checkGameState(),500)
}
// checkGameState()
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


onSnapshot(colref, (snapshot)=>{
  let gameInstance= []
  snapshot.docs.forEach((doc)=>{
      gameInstance.push({...doc.data(), id:doc.id})
      console.table(gameInstance)
      // send moveset here
    })
})

const addGameInstance = document.querySelector('#addInstance')
let Newpassword= document.querySelector('.Newpassword')
let moveSet=[]
addGameInstance.addEventListener('submit',async  (e)=>{
    e.preventDefault()
    Newpassword=Newpassword.value
    console.log(Newpassword)
    const docRef = await addDoc(collection(db, "gameInstance"), {
        moveSet:moveSet,
           password:Newpassword,
      })
      navigator.clipboard.writeText(docRef.id);
      localStorage.setItem('gameID',JSON.stringify(docRef.id)  )
      alert('The Game ID has been copied to your clipboard')
})

document.querySelector('#endInstance').addEventListener("click", (e)=>{
        e.preventDefault()
    const docRef=doc(db, 'gameInstance',JSON.parse(localStorage.gameID) )
    deleteDoc(docRef)
.then(()=>{
    alert(`deleted game no: ${JSON.parse(localStorage.gameID)}`)
    localStorage.clear()
})
})
window.addEventListener('storage', () => {
  console.log('localstorage changed');
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
