import React, { useEffect, useState } from 'react'

const SimpleTimerTask = () => {
    const [timer,setTimer]=useState(0);
    const [running,setRunning]=useState(false);

    useEffect(()=>{
        let time;
        if(running){
            time=setInterval(() => {
               setTimer((sec)=>sec+1);
            }, 1000);
        }
        return()=>clearInterval(time);
    },[running])

    const minutes=Math.floor(timer/60);
    const displaySeconds=timer%60;
  return (
    <div>
        <h1>Time:{minutes}:{displaySeconds<10?`0${displaySeconds}`:displaySeconds}</h1>
        <button onClick={()=>setRunning(true)}>Start</button>
        <button onClick={()=>setRunning(false)}>Stop</button>
        <button onClick={()=>setTimer(0)}>Reset</button>
    </div>
  )
}

export default SimpleTimerTask