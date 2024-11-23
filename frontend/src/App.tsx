import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [socket, setSocket] = useState<WebSocket | null>(null);
  

  const inputVal = useRef();

  function handleSubmit(){
    console.log("Input ref value",inputVal.current.value);
    
    const message = inputVal.current?.value;

    if(message == 'ping'){
      console.log("GOnna Pinged msh");
      console.log("SOCKET INSDI E HANFLESUMB", socket);
      
      socket?.send('Pong')
    }else{
      console.log("Ni hua");
      
      socket?.send("Ni hua")
    }

  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080');
    console.log(ws, "Connection Estiblished");
    
    setSocket(ws);

  },[])

  return (
    <>
    <div>
      <input type="text" ref={inputVal} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default App
