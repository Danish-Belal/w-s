console.log("Hii");
import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8080});

// Event Handler
wss.on("connection", function(socket){
     console.log("User connected");
     

     // setInterval(()=>{
     //      socket.send("Current price"+ Math.random());

     // },500);

     socket.on('message', (e)=>{
          
          if(e.toString() === 'ping'){
               socket.send('pong')
          }else{
               socket.send('Ni hua')
          }

          
     })

})