import React, { useState } from 'react'

const RandomColorGenTask = () => {
    const [color,setColor]=useState("#ffffff");

    const colorGen=()=>{
        let randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    }
  return ( 
    <div>
        <div style={{backgroundColor:color,width:"100px",height:"70px",textAlign:"center"}}>Random color</div>
        <button onClick={colorGen}>Change color</button>
    </div>
  )
}

export default RandomColorGenTask