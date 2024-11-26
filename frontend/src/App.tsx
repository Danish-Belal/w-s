import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  
  const inputVal = useRef();

  function handleSubmit(){
    if(!socket){
      return "No socket available";
    }
    const message = inputVal.current.value;

    if(message === "ping"){
      console.log("Gonna Pinged msg", message);
      console.log("SOCKET Inside ping", socket);
      
      socket.send(message)
    }else{
      console.log("Ni hua");
      
      socket.send(message)
    }

  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080');
    console.log(ws, "Connection Estiblished");
    
    setSocket(ws);

    ws.onmessage = (ev) =>{
      console.log("Massage", ev.data);   
      alert(ev.data)
    }

  },[])

  return (
    <>
    <div>
      <input type="text" ref={inputVal} placeholder='Message' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default App
