import React, { useEffect, useState } from 'react'

const CountDownTask = () => {
    const [running,setRunning]=useState(false);
    const [seconds,setSeconds]=useState(30);
    const [text,setText]=useState("");

    useEffect(()=>{
        let countDown;
        if(running && seconds>0){
            countDown=setInterval(() => {
                setSeconds((s)=>s-1)
            }, 1000);
        }
        else if(seconds===0){
            setRunning(false);
            setText("Time's up");
        }
        return ()=>clearInterval(countDown);
    },[running,seconds]);

  return (
    <div>Count Down 
        <h1>{seconds>0?seconds:text}</h1>
        <button onClick={()=>setRunning(true)}>Start</button>
        <button onClick={()=>setRunning(false)}>Pause</button>
        <button onClick={()=>setSeconds(30)}>Reset</button>
    </div>
  )
}

export default CountDownTask