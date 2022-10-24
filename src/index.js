import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDJmo_in6gzgYIqAkWXbebYh9Oh9XDp8Do",
    authDomain: "test-402f3.firebaseapp.com",
    projectId: "test-402f3",
    storageBucket: "test-402f3.appspot.com",
    messagingSenderId: "634872735047",
    appId: "1:634872735047:web:45aecbe70a6327004b9862"
  };
  initializeApp(firebaseConfig)
  const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});