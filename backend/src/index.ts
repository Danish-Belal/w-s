import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8080});

// Event Handler
wss.on("connection", function(socket){
     console.log("User connected");
     
     socket.on('message', (e)=>{
               socket.send(e.toString());
     })

})