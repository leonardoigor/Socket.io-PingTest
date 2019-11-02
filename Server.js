const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(3000, () => console.log("online"));
const io = require("socket.io").listen(server);

io.on("connect", socket => {
  setInterval(() => {
    socket.emit("pong");
  }, 1000);
});
