import React, {useState } from 'react'

const CharecterLimiterTask = () => {

    const [text,setText]=useState("");
    const [errMsg,setErrMsg]=useState("");

    const handleChange=(e)=>{
        setText(e.target.value)
        if(text.length>10){
            setErrMsg("Limit Reached!")
        }
    }
    
  return (
    <div style={{padding:"10px"}}>CharecterLimiterTask
        <div><textarea onChange={handleChange} value={text}/>
        <h3 style={{color:"red"}}>{text.length>10?errMsg:""}</h3></div>     
    </div>
  )
}

export default CharecterLimiterTask