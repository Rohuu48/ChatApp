const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
/*eslint-disable*/
// our localhost port
const port = 4001;

const app = express();

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server

const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later
io.on("connection", socket => {
  console.log("User connected");

  console.log("log input param : " + socket.handshake.query.username);

  socket.on("client:message", data => {
    console.log(`${data.username}: ${data.message}`);

    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit("server:message", data);
  });
  socket.on("client:typing", (name, status) => {
    console.log(`${name}: typing`);
    let datan = `${name}`;
    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit("server:typingStatus", datan, status);
  });
  socket.on("add_user", data => {
    let message = `${data} just Joined Chat`;
    console.log(`${data} joined chat`);
    socket.broadcast.emit("join_chat", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
