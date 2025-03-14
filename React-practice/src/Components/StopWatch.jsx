import React, { useState } from 'react'

const StopWatch = () => {
    const [time,setTime]=useState(0);

    const timerStart=()=>{
        setInterval(() => {
           setTime((t)=>t+1) 
        }, 1000);
    }


    const minutes=Math.floor(time/60);
    const sec=time%60;
  return (
    <div>
        <div>{minutes}:{sec}</div>
        <button onClick={timerStart}>Start</button>
    </div>
  )
}

export default StopWatch