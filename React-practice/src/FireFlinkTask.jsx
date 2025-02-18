import React, { useState } from 'react'

const FireFlinkTask = () => {

    const [text,setText]=useState("");
    const [errMsg,setErrMsg]=useState("");
    const [color,setColor]=useState(false);
   
   const handleChange=(e)=>{
    setText(e.target.value)
     if(text.length<3){
        setErrMsg("Too short")
        setColor(false)
        
    }else if(text.length>=10){
        setErrMsg("Too big")  ;
        setColor(false)
    }
    else{
        setErrMsg("Valid")
        setColor(true);
    }
   }

  const style={
    padding:"25px",
    color:color?"green":"red",
   }
    
  return (
    <div>
        <input placeholder='Enter Something' name={text} value={text} onChange={handleChange} style={{width:"200px",height:"60px",textAlign:"center",borderRadius:"25px"}}/>
        <div style={style}>{errMsg}</div>
    </div>
  )
}

export default FireFlinkTask