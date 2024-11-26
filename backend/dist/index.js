"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hii");
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// Event Handler
wss.on("connection", function (socket) {
    console.log("User connected");
    socket.on('message', (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        else {
            socket.send('its not ping');
        }
    });
});
