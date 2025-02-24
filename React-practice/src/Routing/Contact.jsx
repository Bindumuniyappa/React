import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const inputRef=useRef();
    const navigate=useNavigate();
    
    const handleClick=()=>{
        inputRef.current.focus();
    }

     const handleClickHome=()=>{
        navigate("/Home")
    }
  return (
    <div>Contact
         <button onClick={handleClickHome}>Back to Home</button>
        <input placeholder='wite something' ref={inputRef}/>
        <button onClick={handleClick}>Go</button>
    </div>
  )
}

export default Contact