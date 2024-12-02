import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setmessage] = useState(["Hello Hii there"]);
  
  const inputVal = useRef("");

  function handleSubmit(){
    if(!socket){
      console.log("No socket available");
      
      return "No socket available";
    }
    const message = inputVal.current?.value;
    console.log("Message in input box", message);
    socket.send(message);

  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080');
    console.log(ws, "Connection Estiblished");
    
    setSocket(ws);

    ws.onmessage = (ev) =>{
      setmessage( m=> [...m, ev.data]);
    }

    return () => {
      ws.close();
    };

  },[])

  return (
    <>
    <div>
    
      <div className='chat-box'>

      <div className='msg-display'>
        {message.map(message => <div className='m-8'> 
          <span className='text-msg'>            
            {message} 
          </span>
        </div>)}
      </div>
      
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
