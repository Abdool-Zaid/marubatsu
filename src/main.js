import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
createApp(App).mount("#app");

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

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
getDocs(colref).then((snapshot) => {
    let gameInstance= []
    snapshot.docs.forEach((doc)=>{
        gameInstance.push({...doc.data(), id:doc.id})
    })
    console.table(gameInstance)
})
.catch(error=>{
    console.error(error.message)
})

const addGameInstance = document.querySelector('#addInstance')
let Newpassword= document.querySelector('.Newpassword')
let moveSet=[]
addGameInstance.addEventListener('submit',async  (e)=>{
    e.preventDefault()
    Newpassword=Newpassword.value
    const docRef = await addDoc(collection(db, "gameInstance"), {
        moveSet:moveSet,
           password:Newpassword,
      });
      navigator.clipboard.writeText(docRef.id);
alert('The Game ID has been copied to your clipboard')
})
.then(()=>{
    addGameInstance.reset()
})
const endGameInstance = document.querySelector('#endInstance')
addGameInstance.addEventListener('submit', (e)=>{
    e.preventDefault()
})

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
