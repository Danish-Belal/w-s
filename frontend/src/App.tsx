import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  
  const inputVal = useRef("");

  function handleSubmit(){
    if(!socket){
      console.log("No socket available");
      
      return "No socket available";
    }
    const message = inputVal.current?.value;
    console.log("Message in input box", message);
    

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
      <div className='chat-box'>
        <div className='msg-display'></div>
        <div className='input-msg'>
          <input className='input-text' type='text' placeholder='message...' ref={inputVal} />
          <button className='submit-button' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
